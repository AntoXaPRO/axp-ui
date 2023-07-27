<script setup lang="ts">
import type { TUiIcon } from '../icons'

import { computed } from 'vue'
import { icons } from '../icons'

// Props.
const props = defineProps<{
	name: TUiIcon
	fill?: boolean
}>()

const iconName = computed(() => {
	// @ts-ignore
	return icons[props.name]
})
</script>

<template>
	<span class="ui-icon">
		<svg
			viewBox="0 0 24 24"
			:fill="fill ? 'currentColor' : 'none'"
			stroke="currentColor"
			stroke-width="1.2"
			v-html="iconName"
		/>
	</span>
</template>
