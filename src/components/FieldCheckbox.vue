<script lang="ts">
import type { TUiFieldWrapperProps } from './FieldWrapper.vue'

export type TUiFieldCheckboxProps = TUiFieldWrapperProps & {
	modelValue?: boolean
}

export type TUiFieldCheckboxEmits = {
	(e: 'input', v: Event): void
	(e: 'update:model-value', v?: boolean): void
	(e: 'update:error', v?: string): void
}
</script>

<script setup lang="ts">
import UiFieldWrapper from './FieldWrapper.vue'

// Props.
const props = defineProps<TUiFieldCheckboxProps>()

// Emits.
const emit = defineEmits<TUiFieldCheckboxEmits>()

// Handlers.
const inputHandler = (val: Event) => {
	emit('input', val)
	emit('update:error')

	if (val.target instanceof HTMLInputElement) {
		emit('update:model-value', !props.modelValue)
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
		class="ui-field-checkbox"
	>
		<input
			type="checkbox"
			:checked="props.modelValue"
			:disabled="props.disabled || props.readonly"
			@input="inputHandler"
		/>
	</ui-field-wrapper>
</template>
