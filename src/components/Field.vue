<script setup lang="ts">
const props = defineProps<{
	modelValue?: any
	label?: string
	type?: 'text' | 'number' | 'date' | 'password' | 'checkbox'
	error?: string
	readonly?: boolean
	disabled?: boolean
	placeholder?: string
	tag?: 'input' | 'textarea' | 'select'
	checked?: boolean
	options?: { text: string, value: any }[]
	multiple?: boolean
}>()

// Emits.
const emit = defineEmits<{
	(e: 'input', v: any): void
	(e: 'update:modelValue', v: any): void
	(e: 'update:error'): void
}>()

// Handlers.
const inputHandler = (val: any) => {
	emit('input', val)
	emit('update:error')

	if (val?.target?.value) {
		let value: any = val.target.value

		try {
			switch (props.type) {
				case 'number':
					value = Number(value)
					break
				case 'date':
					value = new Date(value)
					break
				case 'text':
				case 'password':
				case 'checkbox':
					value = String(value)
					break
			}
		} catch (ex) {}

		emit('update:modelValue', value)
	} else {
		emit('update:modelValue', undefined)
	}
}
</script>

<template>
	<div
		:class="{ 'ui-field': true, error: props.error, disabled: props.disabled }"
	>
		<div v-if="props.label" class="label">{{ props.label }}</div>
		<input
			v-if="!tag || tag === 'input'"	
			class="input"
			:type="props.type"
			:value="props.modelValue"
			:readonly="props.readonly"
			:disabled="props.disabled"
			:checked="checked"
			:placeholder="props.placeholder"
			@input="inputHandler"
		/>
		<textarea
			v-if="tag === 'textarea'"
			class="input"
			:value="props.modelValue"
			:readonly="props.readonly"
			:disabled="props.disabled"
			:placeholder="props.placeholder"
			@input="inputHandler"
		/>
		<select
			v-if="tag === 'select'"
			class="input"
			:value="props.modelValue"
			:readonly="props.readonly"
			:disabled="props.disabled"
			:placeholder="props.placeholder"
			:multiple="props.multiple"
			@input="inputHandler"
		>
			<option v-for="item in props.options" :value="item.value">
				{{ item.text }}
			</option>
		</select>
		<div v-if="props.error" class="message">{{ props.error }}</div>
	</div>
</template>
