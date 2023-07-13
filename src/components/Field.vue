<script setup lang="ts">
const props = defineProps<{
	modelValue?: any
	label?: string
	type?: 'text' | 'number' | 'date' | 'password' | 'checkbox'
	error?: string
	readonly?: boolean
	disabled?: boolean
	checked?: boolean
	tag?: 'input' | 'textarea' | 'select'
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
			:type="props.type"
			:value="props.modelValue"
			:reatonly="props.readonly"
			:disabled="props.disabled"
			:checked="checked"
			@input="inputHandler"
			class="input"
		/>
		<textarea
			v-if="tag === 'textarea'"
			:value="props.modelValue"
			:reatonly="props.readonly"
			:disabled="props.disabled"
			@input="inputHandler"
			class="input"
		/>
		<select
			v-if="tag === 'select'"
			:value="props.modelValue"
			:reatonly="props.readonly"
			:disabled="props.disabled"
			@input="inputHandler"
			class="input"
		>
			<slot />
		</select>
		<div v-if="props.error" class="message">{{ props.error }}</div>
	</div>
</template>
