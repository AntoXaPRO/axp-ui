<script setup lang="ts">
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<{
	dark?: boolean
}>()

// Emits.
const emit = defineEmits<{ (e: 'update:dark', v: boolean): void }>()
</script>

<template>
	<div class="ui-toggle-theme">
		<ui-icon
			:name="props.dark ? 'moon' : 'sun'"
			@click="emit('update:dark', !props.dark)"
			title="Переключить тему"
		/>
	</div>
</template>
