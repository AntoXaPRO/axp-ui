<script setup lang="ts">
import { computed } from 'vue'
import { getPhoneNumberFormat, getPhoneNumberValue } from 'axp-ts'

import UiField from './Field.vue'

// Props.
const props = defineProps<{ modelValue?: number }>()

// Emits.
const emit = defineEmits<{ (e: 'update:modelValue', v?: number): void }>()

// Value string.
const valueStr = computed({
	get: () => getPhoneNumberFormat(props.modelValue),
	set: val => emit('update:modelValue', getPhoneNumberValue(val))
})
</script>

<template>
	<ui-field v-model="valueStr" class="ui-field-phone" />
</template>
