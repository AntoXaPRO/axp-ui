<script setup lang="ts">
import type { PropType } from 'vue'
import { computed } from 'vue'
import UiField from './Field.vue'

const props = defineProps<{
	modelValue?: string | number,
	options: { value: string, text: string }[]
}>()

const emit = defineEmits<{ (e: 'update:modelValue', v?: any): void }>()

const displayValue = computed({
	get: () => props.modelValue,
	set: (val) => emit('update:modelValue', val)
})
</script>

<template>
	<ui-field tag="select" class="ui-field-select" v-model="displayValue">
		<option v-for="opt in props.options" :value="opt.value">
			{{opt.text}}
		</option>
	</ui-field>
</template>
