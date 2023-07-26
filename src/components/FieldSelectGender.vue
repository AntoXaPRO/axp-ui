<script setup lang="ts">
import { GenderEnum } from 'axp-ts'
import UiFieldSelect from './FieldSelect.vue'

const options: any[] = [
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
	<p>Select gender</p>
	<ui-field-select :options="options" class="ui-field-select-gender" />
</template>
