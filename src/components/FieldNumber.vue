<script lang="ts">
import type { TUiFieldInputProps } from './FieldInput.vue'

export type TUiFieldNumberProps = TUiFieldInputProps<number>
</script>

<script setup lang="ts">
import UiFieldInput from './FieldInput.vue'

// Props.
const props = defineProps<TUiFieldNumberProps>()
</script>

<template>
	<ui-field-input :="{ ...props, ...$attrs }" type="number" />
</template>
