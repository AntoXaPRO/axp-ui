<script lang="ts">
import type { TUiFiledWrapperProps } from './FieldWrapper.vue'

type TModelValue = FileList

export type TUiFieldFileProps = TUiFiledWrapperProps & {
	modelValue?: TModelValue
	multiple?: boolean
	accept?: string
}

export type TUiFieldFileEmits = {
	(e: 'input', v?: Event): void
	(e: 'update:model-value', v?: TModelValue): void
	(e: 'update:error', v?: string): void
}
</script>

<script setup lang="ts">
import UiFieldWrapper from './FieldWrapper.vue'

// Props.
const props = defineProps<TUiFieldFileProps>()

// Emits.
const emit = defineEmits<TUiFieldFileEmits>()

// Handlers.
const inputHandler = (e: Event) => {
	emit('input', e)
	emit('update:error')

	if (e.target instanceof HTMLInputElement && e.target.files) {
		emit('update:model-value', e.target.files)
	} else {
		emit('update:model-value')
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
			type="file"
			:multiple="props.multiple"
			:disabled="props.disabled || props.readonly"
			:accept="props.accept"
			@input="inputHandler"
		/>
	</ui-field-wrapper>
</template>
