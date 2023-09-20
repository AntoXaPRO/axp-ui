<script lang="ts">
export type TUiIconVisibilityProps = {
	modelValue?: boolean,
	color?: boolean,
	cursor?: boolean
}

export type TUiIconVisibilityEmits = {
	(e: 'update:modelValue', v: boolean): void
}
</script>

<script setup lang="ts">
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<TUiIconVisibilityProps>()

// Emits.
const emit = defineEmits<TUiIconVisibilityEmits>()
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
