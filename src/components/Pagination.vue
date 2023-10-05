<script lang="ts">
import type { TPagination } from 'axp-ts'

export type TUiPaginationPage = {
	value: number
	active?: boolean
}

export type TUiPaginationProps = {
	modelValue?: TPagination
	length?: number
}

export type TUiPaginationEmits = {
	(e: 'update:model-value', v: TPagination): void
}
</script>

<script setup lang="ts">
import UiBtn from './Btn.vue'
import { computed } from 'vue'
import { Pagination } from 'axp-ts'

// Props.
const props = withDefaults(defineProps<TUiPaginationProps>(), {
	// @ts-ignore
	modelValue: new Pagination().toObject(),
	length: 3
})

// Emits.
const emit = defineEmits<TUiPaginationEmits>()

// Data.
const page = computed(() => props.modelValue.page || 1)
const pages = computed(() => {
	let pages: TUiPaginationPage[] = []

	const length = props.length

	// Pre pages.
	for (let i = 1; i < length; i++) {
		const value = page.value - i
		if (value < 1) break
		pages.push({ value })
	}

	pages = pages.reverse()

	// Curren page.
	pages.push({ value: page.value, active: true })

	// Next pages.
	for (let i = 1; i <= length; i++) {
		const value = page.value + i
		if (value > (props.modelValue.pages || 0)) break
		pages.push({ value })
	}
	// for(page in props.modelValue)
	return pages
})

// Handlers.
const updateHandler = (page: number) => {
	const pagination = new Pagination({ ...props.modelValue, page })
	emit('update:model-value', pagination.toObject())
}

// Etc.
const isShowFirst = computed(() => page.value - props.length > 0)
const isShowLast = computed(
	() =>
		props.modelValue.pages &&
		page.value + props.length < props.modelValue.pages
)
</script>

<template>
	<div v-if="props.modelValue.pages" class="ui-pagination">
		<div class="pages">
			<div v-if="isShowFirst" class="pages-first">
				<UiBtn
					label="1"
					class="page-item"
					@click="updateHandler(1)"
				/>
				<span class="page-separator">...</span>
			</div>
			<div class="pages-numbers">
				<UiBtn
					v-for="item in pages"
					:label="item.value.toString()"
					:class="{ 'page-item': true, active: item.active }"
					:disabled="item.active"
					@click="updateHandler(item.value)"
				/>
			</div>
			<div v-if="isShowLast" class="pages-last">
				<span class="page-separator">...</span>
				<UiBtn
					:label="props.modelValue.pages.toString()"
					@click="updateHandler(props.modelValue.pages)"
					class="page-item"
				/>
			</div>
		</div>
	</div>
</template>
