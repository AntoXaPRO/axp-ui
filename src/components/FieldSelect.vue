<script lang="ts">
import type { TUiFiledWrapperProps } from './FieldWrapper.vue'

export type TUiFieldSelectProps = TUiFiledWrapperProps & {
	modelValue?: string | string[] | number | number[]
	options?: { text: string; value: string | number }[]
	multiple?: boolean
}

export type TUiFieldSelectEmits = {
	(e: 'input', v: Event): void
	(e: 'update:model-value', v?: string | string[] | number | number[]): void
	(e: 'update:error', v?: string): void
}
</script>

<script setup lang="ts">
import UiFieldWrapper from './FieldWrapper.vue'

// Props.
const props = defineProps<TUiFieldSelectProps>()

// Emits.
const emit = defineEmits<TUiFieldSelectEmits>()

// Handlers.
const inputHandler = (val: Event) => {
	emit('input', val)
	emit('update:error')

	if (val.target instanceof HTMLSelectElement) {
		emit('update:model-value', val.target.value)
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
		class="ui-field-select"
	>
		<select
			:value="props.modelValue"
			:multiple="props.multiple"
			:disabled="props.disabled || props.readonly"
			@input="inputHandler"
		>
			<option v-for="item in props.options" :value="item.value">
				{{ item.text }}
			</option>
		</select>
	</ui-field-wrapper>
</template>
