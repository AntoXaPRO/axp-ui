<script setup lang="ts">
const props = defineProps<{
	type?: string,
	value?: string
}>()
</script>

<template>
	<div class="ui-alert" :class="props.type">
		<span v-if="props.value">{{props.value}}</span>
		<slot v-if="$slots.default" name="default" />
	</div>
</template>
