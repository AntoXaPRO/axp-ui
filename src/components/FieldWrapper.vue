<script lang="ts">
export type TUiFiledWrapperProps = {
	label?: string
	error?: string
	disabled?: boolean
	readonly?: boolean
	description?: string
}
</script>

<script setup lang="ts">
// Props.
const props = defineProps<TUiFiledWrapperProps>()
</script>

<template>
	<div
		:class="{
			'ui-field': true,
			error: props.error,
			disabled: props.disabled,
			readonly: props.readonly
		}"
	>
		<div class="ui-field-wrap">
			<div v-if="props.label" class="label">{{ props.label }}</div>
			<div class="input">
				<slot />
			</div>
		</div>
		<div v-if="props.description" class="description">
			{{ props.description }}
		</div>
		<div v-if="props.error" class="message">{{ props.error }}</div>
	</div>
</template>
