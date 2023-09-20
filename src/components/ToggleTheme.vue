<script lang="ts">
export type TUiThemeName = 'light' | 'dark'

export type TUiToggleThemeProps = {
	modelValue?: TUiThemeName
}

export type TUiToggleThemeEmits = {
	(e: 'update:modelValue', v: TUiThemeName): void
}
</script>

<script setup lang="ts">
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<TUiToggleThemeProps>()

// Emits.
const emit = defineEmits<TUiToggleThemeEmits>()

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
