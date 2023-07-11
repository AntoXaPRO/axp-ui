<script setup lang="ts">
import { computed } from 'vue'
import { cFieldsSchema, getDateCommonFormat } from 'axp-ts'

import UiField from './Field.vue'

const props = defineProps<{
	modelValue?: Date
}>()

const emit = defineEmits<{ (e: 'update:modelValue', v?: Date): void }>()

const valueStr = computed({
	get: () => {
		try {
			const value = cFieldsSchema.shape.date.parse(props.modelValue)
			const format = getDateCommonFormat(value)
			return format
		} catch (e) {}
	},
	set: (val) => {
		try {
			const value = cFieldsSchema.shape.date.parse(val)
			emit('update:modelValue', value)
		} catch (e) {}
	}
})
</script>

<template>
	<ui-field type="date" class="ui-field-date" v-model="valueStr" />
</template>
