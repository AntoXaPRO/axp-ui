<script lang="ts">
import type { TColor } from '../colors'
import type { TIcon } from '../icons'

export type TUiBtnProps = {
	label?: string
	type?: 'button' | 'submit'
	color?: TColor
	icon?: TIcon
	to?: string
	disabled?: boolean
}

export type TUiBtnEmits = {
	(e: 'click', v: PointerEvent): void
}
</script>

<script setup lang="ts">
import UiIcon from './Icon.vue'
import { computed } from 'vue'

// Props.
const props = defineProps<TUiBtnProps>()

// Emits.
const emit = defineEmits<TUiBtnEmits>()

// Handlers.
const clickHandler = (e: PointerEvent) => emit('click', e)

// Computed.
const cssClass = computed(() => {
	let obj: any = {
		'ui-btn': true,
		'ui-btn-icon': props.icon
	}

	if (props.color) obj[props.color] = true
	return obj
})
</script>

<template>
	<component
		:is="props.to ? 'router-link' : 'button'"
		:to="props.to"
		:type="props.type"
		@click="clickHandler"
		:class="cssClass"
		:disabled="props.disabled"
	>
		<ui-icon v-if="props.icon" :name="props.icon" />
		<div v-if="props.label" class="label">{{ props.label }}</div>
		<slot v-if="$slots.default" name="default" />
	</component>
</template>
