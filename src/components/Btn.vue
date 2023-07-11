<script setup lang="ts">
import { computed } from 'vue'
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<{
	label?: string
	type?: 'button' | 'submit'
	color?: string
	icon?: any
}>()

// Etc.
const cssClass = computed(() => {
	let res = ''
	if (props.color) res = props.color
	return res
})
</script>

<template>
	<button class="ui-btn" :class="cssClass" :type="props.type">
		<ui-icon v-if="props.icon" :name="props.icon" />
		<div v-if="props.label" class="label">{{ props.label }}</div>
		<slot name="default" />
	</button>
</template>
