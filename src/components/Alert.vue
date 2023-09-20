<script lang="ts">
import type { TColor } from '../colors'

export type TUiAlertProps = {
	color?: TColor
	value?: string
	close?: boolean
}

export type TUiAlertEmits = {
	(e: 'close'): void
}
</script>

<script setup lang="ts">
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<TUiAlertProps>()

// Emit.
const emit = defineEmits<TUiAlertEmits>()
</script>

<template>
	<div class="ui-alert" :class="props.color">
		<div v-if="props.close" class="ui-alert-close">
			<ui-icon name="close" @click="emit('close')" />
		</div>
		<div v-if="props.value || $slots.default" class="ui-alert-content">
			{{ props.value }}
			<slot v-if="$slots.default" name="default" />
		</div>
	</div>
</template>
