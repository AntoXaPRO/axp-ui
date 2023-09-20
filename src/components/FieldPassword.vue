<script lang="ts">
import type { TUiFieldInputProps } from './FieldInput.vue'

export type TFieldPasswordProps = TUiFieldInputProps<string>
</script>

<script setup lang="ts">
import UiFieldInput from './FieldInput.vue'

// Props.
const props = defineProps<TFieldPasswordProps>()
</script>

<template>
	<ui-field-input :="{ ...props, ...$attrs }" type="password" />
</template>
