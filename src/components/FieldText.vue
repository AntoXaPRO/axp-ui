<script lang="ts">
import type { TUiFieldInputProps } from './FieldInput.vue'

export type TUiFieldText = TUiFieldInputProps<string>
</script>

<script setup lang="ts">
import UiFieldInput from './FieldInput.vue'

// Props.
const props = defineProps<TUiFieldText>()
</script>

<template>
	<ui-field-input :="{ ...props, ...$attrs }" type="text" />
</template>
