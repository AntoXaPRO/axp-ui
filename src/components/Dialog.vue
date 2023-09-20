<script lang="ts">
export type TUiDialogProps = {
	title?: string
	open?: boolean
	close?: boolean
}

export type TUiDialogEmits = {
	(e: 'update:open', v: boolean): void
}
</script>

<script setup lang="ts">
import { ref, watch } from 'vue'
import UiIcon from './Icon.vue'

// Props.
const props = defineProps<TUiDialogProps>()

// Emits.
const emit = defineEmits<TUiDialogEmits>()

// Init data.
const dialogState = ref(props.open)

// Methods.
const closeDialog = () => {
	dialogState.value = false
	emit('update:open', false)
}

// Handlers.
const clickWrapperHandler = (e: MouseEvent) => {
	if (e.target instanceof Element) {
		if (e.target.classList.contains('ui-dialog')) closeDialog()
	}
}

// Etc.
watch(() => props.open, val => (dialogState.value = val))
</script>

<template>
	<dialog class="ui-dialog" :open="dialogState" @click="clickWrapperHandler">
		<div class="ui-dialog-window">
			<div class="ui-dialog-window-header" v-if="props.title">
				<h4>{{ title }}</h4>
				<ui-icon name="close" @click="closeDialog" class="ui-icon-close" />
			</div>
			<div v-if="$slots.default" class="ui-dialog-window-content">
				<slot name="default" />
			</div>
		</div>
	</dialog>
</template>
