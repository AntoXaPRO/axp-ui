<script lang="ts">
import type { TUiFiledWrapperProps } from './FieldWrapper.vue'

export type TUiFieldInputProps<T extends string | number | Date> =
	TUiFiledWrapperProps & {
		type?: 'text' | 'number' | 'password' | 'date' | 'checkbox'
		modelValue?: T
		placeholder?: string
	}

export type TUiFieldInputEmits = {
	(e: 'input', v: Event): void
	(e: 'update:model-value', v?: string | number | Date): void
	(e: 'update:error', v?: string): void
}
</script>

<script setup lang="ts">
import UiFieldWrapper from './FieldWrapper.vue'

// Props.
const props = defineProps<TUiFieldInputProps<any>>()

// Emits.
const emit = defineEmits<TUiFieldInputEmits>()

// Handlers.
const inputHandler = (val: Event) => {
	emit('input', val)
	emit('update:error')

	if (val.target instanceof HTMLInputElement) {
		const { value } = val.target
		switch (props.type) {
			case 'number':
				emit('update:model-value', Number(value))
				break
			default:
				emit('update:model-value', String(value))
		}
	} else {
		emit('update:model-value', undefined)
	}
}
</script>

<template>
	<ui-field-wrapper
		:label="props.label"
		:error="props.error"
		:disabled="props.disabled"
		:readonly="props.readonly"
		:description="props.description"
	>
		<input
			:type="props.type"
			:value="props.modelValue"
			:placeholder="props.placeholder"
			:disabled="props.disabled"
			:readonly="props.readonly"
			@input="inputHandler"
		/>
	</ui-field-wrapper>
</template>
