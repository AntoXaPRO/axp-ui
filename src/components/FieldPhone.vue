<script lang="ts">
import type { TUiFieldInputProps, TUiFieldInputEmits } from './FieldInput.vue'

export type TUiFieldPhoneProps = TUiFieldInputProps<number>
export type TUiFieldPhoneEmits = TUiFieldInputEmits
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { getPhoneNumberFormat, getPhoneNumberValue } from 'axp-ts'

import UiFieldInput from './FieldInput.vue'

// Props.
const props = defineProps<TUiFieldPhoneProps>()

// Emits.
const emit = defineEmits<TUiFieldPhoneEmits>()

// Value string.
const valueStr = computed({
	get: () => {
		if (props.modelValue) {
			return getPhoneNumberFormat(props.modelValue)
		}
	},
	set: val => {
		emit('update:error')
		emit('update:model-value', getPhoneNumberValue(val))
	}
})
</script>

<template>
	<ui-field-input :="{ ...props, ...$attrs }" v-model="valueStr" />
</template>
