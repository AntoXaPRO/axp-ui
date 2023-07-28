<script setup lang="ts">
import { ref, watch } from 'vue'
import UiIcon from './Icon.vue'

const props = defineProps({
	open: { type: Boolean, default: false },
	close: { type: Boolean, default: false },
	title: { type: String }
})

const emit = defineEmits(['update:open'])

const dialogState = ref(props.open)

const closeDialog = () => {
	dialogState.value = false
	emit('update:open', false)
}

const clickWrapperHandler = (e: MouseEvent) => {
	if (e.target instanceof Element) {
		if (e.target.classList.contains('ui-dialog')) closeDialog()
	}
}

watch(
	() => props.open,
	val => (dialogState.value = val)
)
</script>

<template>
	<dialog class="ui-dialog" :open="dialogState" @click="clickWrapperHandler">
		<div class="ui-dialog-window">
			<div class="ui-dialog-window-header" v-if="props.title">
				<h4>{{ title }}</h4>
				<ui-icon name="close" @click="closeDialog" />
			</div>
			<div v-if="$slots.default" class="ui-dialog-window-content">
				<slot name="default" />
			</div>
		</div>
	</dialog>
</template>
