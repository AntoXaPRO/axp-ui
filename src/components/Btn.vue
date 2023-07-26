<script setup lang="ts">
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<{
	label?: string
	type?: 'button' | 'submit'
	color?: string
	icon?: any
}>()
</script>

<template>
	<button class="ui-btn" :class="props.color" :type="props.type">
		<ui-icon v-if="props.icon" :name="props.icon" />
		<div v-if="props.label" class="label">{{ props.label }}</div>
		<slot v-if="$slots.default" name="default" />
	</button>
</template>
