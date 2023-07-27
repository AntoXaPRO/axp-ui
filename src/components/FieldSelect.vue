<script setup lang="ts">
import { computed } from 'vue'
import UiField from './Field.vue'

const props = defineProps<{
	modelValue?: string | number,
	options: { text: string, value: any }[]
}>()

const emit = defineEmits<{ (e: 'update:modelValue', v?: any): void }>()

const displayValue = computed({
	get: () => props.modelValue,
	set: (val) => emit('update:modelValue', val)
})
</script>

<template>
	<ui-field
		tag="select"
		class="ui-field-select"
		:options="props.options"
		v-model="displayValue"
	/>
</template>
