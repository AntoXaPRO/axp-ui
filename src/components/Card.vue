<script lang="ts">
export type TUiCardProps = {
	title?: string
}
</script>

<script setup lang="ts">
const props = defineProps<TUiCardProps>()
</script>

<template>
	<div class="ui-card">
		<div v-if="props.title" class="ui-card-head">
			<h3 class="ui-card-title">{{ props.title }}</h3>
		</div>
		<div v-if="$slots.default" class="ui-card-body">
			<slot name="default" />
		</div>
		<div v-if="$slots.actions" class="ui-card-actions">
			<slot name="actions" />
		</div>
	</div>
</template>
