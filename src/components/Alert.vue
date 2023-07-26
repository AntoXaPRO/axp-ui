<script setup lang="ts">
const props = defineProps<{
	color?: 'primary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
	value?: string
}>()
</script>

<template>
	<div class="ui-alert" :class="props.color">
		{{ props.value }}
		<slot v-if="$slots.default" name="default" />
	</div>
</template>
