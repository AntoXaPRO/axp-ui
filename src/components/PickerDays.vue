<script setup lang="ts">
import UiFieldCheckbox from './FieldCheckbox.vue'

// Props.
const props = defineProps<{
	modelValue?: number[]
	label?: string
	error?: string
	readonly?: boolean
	disabled?: boolean
}>()

// Emits.
const emit = defineEmits<{ (e: 'update:modelValue', v: number[]): void }>()

// Init data.
const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

// Handlers.
const inputHandler = (index: number) => {
	const number = index + 1
	let result: number[] = props.modelValue || []
	if (result.includes(number)) {
		result = result.filter(e => e !== number)
	} else {
		result.push(number)
	}
	emit('update:modelValue', result.sort())
}
</script>

<template>
	<div class="ui-picker-days">
		<div v-if="props.label" class="label mb-2">
			<span>{{props.label}}:</span>
		</div>
		<div class="flex items-center">
			<ui-field-checkbox
				v-for="(item, index) in days"
				class="mr-4"
				:modelValue="props.modelValue?.includes(index + 1)"
				:label="item"
				:disabled="props.disabled"
				:readonly="props.readonly"
				@input="inputHandler(index)"
			/>
		</div>
		<div v-if="error" class="mt-2 text-error">{{ error }}</div>
	</div>
</template>
