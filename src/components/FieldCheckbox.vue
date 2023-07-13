<script setup lang="ts">
import UiField from './Field.vue'
import { computed } from 'vue'

// Props.
const props = defineProps<{
	modelValue?: boolean
}>()

// Emits.
const emit = defineEmits<{ (e: 'update:modelValue', v?: boolean): void }>()

// Value.
const value = computed(() => props.modelValue)

// Handlers.
const updateHandler = () => emit('update:modelValue', !props.modelValue)
</script>

<template>
	<ui-field
		type="checkbox"
		class="ui-field-checkbox"
		:checked="value"
		@input="updateHandler"
	/>
</template>
