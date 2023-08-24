<script lang="ts">
export type TTheme = 'light' | 'dark'
</script>

<script setup lang="ts">
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<{
	modelValue?: TTheme
}>()

// Emits.
const emit = defineEmits<{ (e: 'update:modelValue', v: TTheme): void }>()

// Handlers.
const clickHandler = ({}: PointerEvent) =>
	emit('update:modelValue', props.modelValue === 'dark' ? 'light' : 'dark')
</script>

<template>
	<div class="ui-toggle-theme">
		<ui-icon
			title="Переключить тему"
			:name="props.modelValue === 'dark' ? 'moon' : 'sun'"
			@click="clickHandler"
		/>
	</div>
</template>
