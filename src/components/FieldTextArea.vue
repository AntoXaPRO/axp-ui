<script lang="ts">
import type { TUiFiledWrapperProps } from './FieldWrapper.vue'

export type TUiFieldTextAreaProps = TUiFiledWrapperProps & {
	modelValue?: string
}

export type TUiFieldTextAreaEmits = {
	(e: 'input', v: Event): void
	(e: 'update:model-value', v?: string | number | Date): void
	(e: 'update:error', v?: string): void
}
</script>

<script setup lang="ts">
import UiFieldWrapper from './FieldWrapper.vue'

// Props.
const props = defineProps<TUiFieldTextAreaProps>()

// Emits.
const emit = defineEmits<TUiFieldTextAreaEmits>()

// Handlers.
const inputHandler = (val: Event) => {
	emit('input', val)
	emit('update:error')

	if (val.target instanceof HTMLTextAreaElement) {
		emit('update:model-value', val.target.value)
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
		class="ui-field-textarea"
	>
		<textarea
			:value="props.modelValue"
			:disabled="props.disabled || props.readonly"
			@input="inputHandler"
		/>
	</ui-field-wrapper>
</template>
