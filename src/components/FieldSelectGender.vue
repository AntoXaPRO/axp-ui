<script setup lang="ts">
import { GenderEnum, TGender } from 'axp-ts'
import UiFieldSelect from './FieldSelect.vue'

const options: { text: string, value: TGender }[] = [
	{
		text: 'Мужской',
		value: GenderEnum.man
	},
	{
		text: 'Женский',
		value: GenderEnum.woman
	}
]
</script>

<template>
	<ui-field-select :options="options" />
</template>
