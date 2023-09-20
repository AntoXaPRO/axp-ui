<script lang="ts">
import type { TUiFieldInputProps, TUiFieldInputEmits } from './FieldInput.vue'

export type TUiFieldDateProps = TUiFieldInputProps<Date>
export type TUiFieldDateEmits = TUiFieldInputEmits
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { cFieldsSchema, getDateCommonFormat } from 'axp-ts'
import UiFieldInput from './FieldInput.vue'

// Props.
const props = defineProps<TUiFieldDateProps>()

// Emits.
const emit = defineEmits<TUiFieldDateEmits>()

// Etc.
const valueStr = computed({
	get: () => {
		try {
			const value = cFieldsSchema.shape.date.parse(props.modelValue)
			return getDateCommonFormat(value)
		} catch (e) { }
	},
	set: val => {
		emit('update:error')
		try {
			const value = cFieldsSchema.shape.date.parse(val)
			emit('update:model-value', value)
		} catch (e) { }
	}
})
</script>

<template>
	<ui-field-input :="{ ...props, ...$attrs }" v-model="valueStr" type="date" />
</template>
