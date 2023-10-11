import type { Meta, StoryObj } from '@storybook/vue3'

import { UiBtn, colors, icons } from '..'

const iconNames = Object.keys(icons)

const meta = {
	title: 'Example/Button',
	component: UiBtn,
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		type: { control: 'select', options: ['button', 'submit'] },
		color: { control: 'select', options: colors },
		icon: { control: 'select', options: iconNames },
		disabled: { control: 'boolean' },
		onClick: { action: 'clicked' }
	},
	args: {}
} satisfies Meta<typeof UiBtn>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		label: 'Button',
	}
}

export const Accent: Story = {
	args: {
		label: 'Accent',
		color: 'accent'
	}
}
