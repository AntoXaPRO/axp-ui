<script lang="ts">
import type { TNotificationItem, IFormModel } from 'axp-ts'

export type TUiFormProps<T = any> = {
	modelValue?: IFormModel<T>
	title?: string
	noTitle?: boolean
	messages?: TNotificationItem[]
	noActions?: boolean
	disabled?: boolean
	load?: boolean
	showAll?: boolean
	fn?: (obj?: T) => Promise<T>
}

export type TUiFormEmits<T = any> = {
	(e: 'submit', v?: IFormModel<T>): void
	(e: 'failedValid', v?: IFormModel<T>): void
	(e: 'update:load', v: boolean): void
	(e: 'fnCompleted', v?: any): void
}

</script>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import UiBtn from './Btn.vue'
import UiAlert from './Alert.vue'

import { colors } from '../colors'

// Props.
const props = defineProps<TUiFormProps>()

// Emits.
const emit = defineEmits<TUiFormEmits>()

// Controls.
const ctrls = computed(() => {
	if (props.modelValue) {
		if (props.showAll) {
			return props.modelValue.ctrls
		} else {
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

const messages = ref<TNotificationItem[]>(props.messages || [])
watch(
	() => props.messages,
	val => (messages.value = val || [])
)

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

// Etc.
const getColorMessage = (item: TNotificationItem) => {
	return colors.find(e => e === item.code) ?? 'error'
}
</script>

<template>
	<form @submit.prevent="submitHandler" class="ui-form">
		<div v-if="title" class="ui-form-header">
			<h3 class="ui-form-title">{{ title }}</h3>
		</div>
		<div v-if="messages.length" class="ui-form-messages">
			<ui-alert
				v-for="item in messages"
				:value="item.text"
				:color="getColorMessage(item)"
			/>
		</div>
		<div class="ui-form-body">
			<slot v-if="$slots.pre" name="pre" />
			<slot v-if="$slots.default" name="default" />
			<template v-else>
				<component
					v-if="props.modelValue"
					v-for="ctrl in ctrls"
					:is="ctrl.component"
					:label="ctrl.label"
					v-model="props.modelValue.obj[ctrl.key]"
					v-model:error="props.modelValue._errors[ctrl.key]"
					:readonly="ctrl.readonly"
					:disabled="load || props.load || props.disabled || ctrl.disabled"
					:description="ctrl.description"
					:class="'ui-field-key-' + ctrl.key"
				/>
			</template>
			<slot v-if="$slots.post" name="post" />
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
