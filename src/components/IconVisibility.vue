<script setup lang="ts">
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<{
	modelValue?: boolean,
	color?: boolean,
	cursor?: boolean
}>()

// Emits.
const emit = defineEmits<{ (e: 'update:modelValue', v: boolean): void }>()
</script>

<template>
	<ui-icon
		v-if="props.modelValue"
		name="visibility"
		:class="{ 'text-success': props.color, 'cursor-pointer': props.cursor }"
		@click="emit('update:modelValue', false)"
	/>
	<ui-icon
		v-else
		name="visibility_off"
		:class="{ 'cursor-pointer': props.cursor }"
		@click="emit('update:modelValue', true)"
	/>
</template>
