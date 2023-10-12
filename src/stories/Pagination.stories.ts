import type { Meta, StoryObj } from '@storybook/vue3'
import { UiPagination, useFindFilter } from '..'

// Init data.
const { pagination } = useFindFilter({
	query: { page: 2, q: 'test' }
})
pagination.value.total = 100
pagination.value.pages = 10


// Meta.
const meta = {
	title: 'Example/Pagination',
	component: UiPagination,
	tags: ['autodocs']
} satisfies Meta<typeof UiPagination>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		modelValue: pagination.value
	},
	render: _ => ({
		components: { UiPagination },
		setup() {
			return { pagination }
		},
		template: `<UiPagination v-model="pagination" />`
	})
}
