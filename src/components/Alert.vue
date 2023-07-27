<script setup lang="ts">
import type { TColor } from '../colors'

// Props.
const props = defineProps<{
	color?: TColor
	value?: string
	close?: boolean
}>()

const emit = defineEmits<{ (e: 'close'): void }>()
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
