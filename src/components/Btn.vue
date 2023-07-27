<script setup lang="ts">
import type { TColor } from '../colors'
import type { TUiIcon } from '../icons'

import UiIcon from './Icon.vue'

// Props.
const props = defineProps<{
	label?: string
	type?: 'button' | 'submit'
	color?: TColor
	icon?: TUiIcon
	to?: string
}>()
</script>

<template>
	<component
		class="ui-btn"
		:is="props.to ? 'router-link' : 'button'"
		:to="props.to"
		:class="props.color"
		:type="props.type"
	>
		<ui-icon v-if="props.icon" :name="props.icon" />
		<div v-if="props.label" class="label">{{ props.label }}</div>
		<slot v-if="$slots.default" name="default" />
	</component>
</template>
