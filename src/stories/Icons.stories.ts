import type { Meta, StoryObj } from '@storybook/vue3'
import { UiIcon, icons } from '..'

const iconList = Object.keys(icons)

// Meta.
const meta = {
	title: 'Example/Icons',
	component: UiIcon,
	tags: ['autodocs'],
	argTypes: {
		name: { options: iconList }
	}
} satisfies Meta<typeof UiIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { name: 'star' }
}

export const All: Story = {
	render: _ => ({
		components: { UiIcon },
		setup() {
			return { iconList }
		},
		template: `
			<div class="grid gap-4 grid-cols-4 sm:grid-cols-8 mb-8">
				<div v-for="item in iconList" class="">
					<div class="flex justify-center">
						<UiIcon :name="item" />
					</div>
					<div class="text-center">{{ item }}</div>
				</div>
			</div>
			<div class="grid gap-4 grid-cols-4 sm:grid-cols-8">
				<div v-for="item in iconList" class="">
					<div class="flex justify-center">
						<UiIcon :name="item" fill />
					</div>
					<div class="text-center">{{ item }}</div>
				</div>
			</div>
		`
	})
}
