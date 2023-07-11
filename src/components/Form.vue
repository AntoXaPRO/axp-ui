<script setup lang="ts">
import type { Ref } from 'vue'
import type { TNotificationItem, BaseFormModel } from 'axp-ts'
import { ref, computed, watch } from 'vue'

import UiBtn from './Btn.vue'

// Props.
const props = defineProps<{
	modelValue: BaseFormModel<any>
	title?: string
	noTitle?: boolean
	messages?: TNotificationItem[]
	noActions?: boolean
	disabled?: boolean
	load?: boolean
	showAll?: boolean
	fn?: (obj?: any) => Promise<any>
}>()

// Emits.
const emit = defineEmits<{
	(e: 'submit', v?: BaseFormModel<any>): void
	(e: 'failedValid', v?: BaseFormModel<any>): void
	(e: 'update:load', v: boolean): void
	(e: 'fnCompleted', v?: any): void
}>()

// Controls.
const ctrls = computed(() => {
	if (props.modelValue) {
		if (props.showAll) {
			return props.modelValue.ctrls
		} else {
			// @ts-ignore
			return props.modelValue.ctrls.filter(e => !e.hidden)
		}
	}
	return []
})

// Content.
const title = computed(() => {
	if (!props.noTitle) return props.title || props.modelValue?.title
})

// Init data.
const load = ref(false)
watch(load, val => emit('update:load', val))

const messages: Ref<TNotificationItem[]> = ref(props.messages || [])
watch(() => props.messages, (val) => messages.value = val || [])

// Handlers.
const submitHandler = async () => {
	if (props.modelValue) {
		if (props.modelValue.isValid()) {
			emit('submit', props.modelValue)

			if (props.fn) {
				load.value = true
				messages.value = []

				try {
					const dR = await props.fn(props.modelValue.obj)
					emit('fnCompleted', dR)

					if (dR?.errors && Array.isArray(dR.errors)) {
						for (const err of dR.errors) {
							if (err.code && err.text)
								if (
									props.modelValue &&
									// @ts-ignore
									props.modelValue.ctrls.find(e => e.key === err.code)
								) {
									props.modelValue.setValidError(err.code, err.text)
								} else {
									messages.value.push({ code: 'error', text: err.text })
								}
						}
					}
				} catch (ex: any) {
					messages.value.push({ code: 'error', text: ex.message })
				}

				load.value = false
			}
		} else {
			emit('failedValid', props.modelValue)
		}
	} else {
		emit('submit')
	}
}
</script>

<template>
	<form @submit.prevent="submitHandler" class="ui-form">
		<div v-if="title" class="ui-form-header">
			<h3 class="ui-form-title">{{ title }}</h3>
		</div>
		<div v-if="messages.length" class="ui-form-messages">
			<div v-for="message in messages" :class="'text-' + message.code">
				{{ message.text }}
			</div>
		</div>
		<div class="ui-form-body">
			<component
				v-if="props.modelValue"
				v-for="ctrl in ctrls"
				:is="ctrl.component"
				:label="ctrl.label"
				v-model="props.modelValue.obj[ctrl.key]"
				v-model:error="props.modelValue._errors[ctrl.key]"
				:readonly="ctrl.readonly"
				:disabled="load || props.load || props.disabled || ctrl.disabled"
				:class="'ui-field-' + ctrl.key"
			/>
			<slot v-if="$slots.default" name="default" />
		</div>
		<div v-if="!props.noActions" class="ui-form-actions">
			<slot v-if="$slots.actions" name="actions" />
			<ui-btn
				v-else
				label="Отправить"
				type="submit"
				color="primary"
				:disabled="load || props.disabled"
			/>
		</div>
	</form>
</template>
