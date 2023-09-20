<script lang="ts">
import type { TUiIcon } from '../icons'

export type TUiIconProps = {
	name: TUiIcon
	fill?: boolean
}
</script>

<script setup lang="ts">
import { computed } from 'vue'
import { icons } from '../icons'

// Props.
const props = defineProps<TUiIconProps>()

// Etc.
const icon = computed(() => icons[props.name])
</script>

<template>
	<span class="ui-icon">
		<svg
			viewBox="0 0 24 24"
			:fill="fill ? 'currentColor' : 'none'"
			stroke="currentColor"
			stroke-width="1.2"
			v-html="icon"
		/>
	</span>
</template>
