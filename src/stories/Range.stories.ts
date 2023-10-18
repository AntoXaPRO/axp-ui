import type { Meta, StoryObj } from '@storybook/vue3'
import { UiFieldRange } from '..'

// Meta.
const meta = {
	title: 'Example/Range',
	component: UiFieldRange,
	tags: ['autodocs'],
	argTypes: {
		label: { }
	}
} satisfies Meta<typeof UiFieldRange>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Range control (Not implemented!)'
	}
}
