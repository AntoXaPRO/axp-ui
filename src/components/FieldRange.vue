<script lang="ts">
import type { TUiFieldWrapperProps } from './FieldWrapper.vue'

export type TUiFieldRangeProps = TUiFieldWrapperProps & {
	modelValue?: number,
	min?: number
	max?: number
	step?: number
}
</script>

<script setup lang="ts">
import UiFieldWrapper from './FieldWrapper.vue'

// Props.
const props = defineProps<TUiFieldRangeProps>()
</script>

<template>
	<UiFieldWrapper
		:label="props.label"
		:error="props.error"
		:disabled="props.disabled"
		:readonly="props.readonly"
		:description="props.description"
		class="ui-field-range"
	>
		<input
			type="range"
			:value="props.modelValue"
			:min="props.min"
			:max="props.max"
			:step="props.step"
			:disabled="props.disabled"
		/>
	</UiFieldWrapper>
</template>
