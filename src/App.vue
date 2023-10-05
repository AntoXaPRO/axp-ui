<script setup lang="ts">
import { ref } from 'vue'
import { cFieldsSchema, Pagination } from 'axp-ts'
import { colors, icons } from '.'
import {
	UiBtn,
	UiIcon,
	UiIconVisibility,
	UiAlert,
	UiForm,
	UiFieldText,
	UiFieldNumber,
	UiFieldPassword,
	UiFieldPhone,
	UiFieldDate,
	UiFieldTextArea,
	UiFieldSelect,
	UiFieldSelectGender,
	UiFieldCheckbox,
	UiFieldFile,
	UiTable,
	UiCard,
	UiPickerDays,
	UiPagination
} from './components'

// Test fields.
const fieldTextValue = ref('Text field')
const fieldTextError = ref('Error message')
const fieldNumberValue = ref(new Date().getDay())

// Test phone number.
const testPhoneNumber = ref(996919353)
const testPhoneNumberError = ref('')
const testPhoneNumberSchema = cFieldsSchema.shape.phone

const testHandler = () => {
	try {
		testPhoneNumberError.value = ''
		testPhoneNumberSchema.parse(testPhoneNumber.value)
	} catch (e: any) {
		testPhoneNumberError.value = 'Number phone not valid'
	}
}

// Test checkbox.
const testCheckboxValue = ref(true)
const testCheckboxError = ref('Error checkbox')

// Days.
const days = ref([1, 3, 5])

// File.
const testFileValue = ref<FileList | undefined>()

// Pagination.
const pagination = ref(new Pagination({ page: 4, total: 93 }).toObject())
</script>

<template>
	<div class="layout">
		<header class="header">
			<div class="container">
				<h1 class="page-title">AXP-UI My helper ui lib</h1>
			</div>
		</header>
		<main class="main">
			<div class="container">
				<div class="components">
					<h2 class="title">Components UI:</h2>

					<div class="item btns">
						<div class="item-title">Buttons</div>
						<div class="item-content flex">
							<ui-btn
								v-for="item in colors"
								class="mr-2 mb-2"
								:color="item"
								:label="item"
							/>
							<ui-btn label="Disabled" class="mr-2 mb-2" disabled />
							<ui-btn label="Icon" icon="edit" />
						</div>
					</div>

					<div class="item fields">
						<div class="item-title">Input fields</div>
						<div class="item-content">
							<ui-field-text
								label="Text"
								v-model="fieldTextValue"
								:description="'Description field: ' + fieldTextValue"
							/>
							<ui-field-text label="Placeholder" placeholder="Search..." />
							<ui-field-text
								model-value="Disabled text field"
								disabled
							/>
							<ui-field-text label="Error" v-model:error="fieldTextError" />

							<ui-field-number
								label="Номер"
								v-model="fieldNumberValue"
								:description="'Value field: ' + fieldNumberValue"
								v-model:error="fieldTextError"
							/>

							<ui-field-password label="Пароль" v-model:error="fieldTextError" />

							<ui-field-phone
								label="Телефон"
								v-model="testPhoneNumber"
								v-model:error="testPhoneNumberError"
								:description="'Value phone number ' + testPhoneNumber"
							/>
							<ui-btn
								label="Valid phone"
								color="primary"
								@click="testHandler"
								class="mb-4"
							/>

							<ui-field-date
								label="Дата"
								:modelValue="new Date()"
								v-model:error="fieldTextError"
							/>

							<ui-field-text-area
								label="Текстовая область"
								v-model="fieldTextValue"
								:description="'Text area value: ' + fieldTextValue"
							/>
						</div>
					</div>

					<div class="item fields">
						<div class="item-title">Выподающие списки</div>
						<div class="item-content">
							<ui-field-select-gender label="Выбор пола" />
							<ui-field-select
								label="Заблокирован"
								:modelValue="1"
								:options="[
									{ text: 'Выбор 1', value: 1 },
									{ text: 'Выбор 2', value: 2 }
								]"
								disabled
							/>
						</div>
					</div>

					<div class="item checkbox">
						<div class="item-title">Чекбоксы</div>
						<div class="item-content">
							<ui-field-checkbox
								label="Выбрать 1"
								v-model="testCheckboxValue"
								:description="'Value checkbox: ' + testCheckboxValue"
							/>
							<ui-field-checkbox
								label="Выбрать 2"
								:modelValue="true"
								v-model:error="testCheckboxError"
							/>
							<ui-field-checkbox label="Выбрать 3" disabled />
						</div>
					</div>

					<div class="item icons">
						<div class="item-title">Иконки</div>
						<div class="item-content">
							<div class="grid grid-cols-4 lg:grid-cols-8 gap-4">
								<div
									class="flex flex-col items-center"
									v-for="item of Object.keys(icons)"
								>
									<ui-icon :name="item" class="mb-2" />
									<div class="mb-4">{{ item }}</div>
								</div>
							</div>
						</div>
					</div>

					<div class="item alerts">
						<div class="item-title">Уведомления</div>
						<div class="item-content">
							<ui-alert
								v-for="item in colors"
								:color="item"
								:value="'Текстовое уведомление - ' + item"
								close
							/>
						</div>
					</div>

					<div class="item tables">
						<div class="item-title">Таблицы</div>
						<div class="item-content">
							<ui-table>
								<thead>
									<th class="w-0"></th>
									<th class="w-0">Видимость</th>
									<th>Название столбца</th>
								</thead>
								<tbody>
									<tr>
										<td>
											<ui-btn icon="edit" />
										</td>
										<td>
											<ui-icon-visibility
												class="m-auto"
												:modelValue="false"
												color
											/>
										</td>
										<td>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Quis delectus magnam hic! Corporis blanditiis sequi quae
											autem quaerat soluta cupiditate ipsa ducimus quidem ipsum
											dicta, reiciendis excepturi vero tempora in.
										</td>
									</tr>
									<tr>
										<td>
											<ui-btn icon="edit" />
										</td>
										<td>
											<ui-icon-visibility
												class="m-auto"
												:modelValue="true"
												color
											/>
										</td>
										<td>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Recusandae asperiores pariatur quasi ad a sunt minus quia
											omnis! Doloremque sapiente repellat, ea voluptatibus
											dolor inventore itaque quidem temporibus a asperiores.
										</td>
									</tr>
									<tr>
										<td>
											<ui-btn icon="edit" />
										</td>
										<td>
											<ui-icon-visibility
												class="m-auto"
												:modelValue="false"
												color
											/>
										</td>
										<td>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Rem facere ratione commodi odit accusantium iusto, harum
											asperiores explicabo veniam ipsam placeat recusandae quod
											quisquam! Pariatur est veniam possimus. Mollitia, culpa.
										</td>
									</tr>
									<tr>
										<td>
											<ui-btn icon="edit" />
										</td>
										<td>
											<ui-icon-visibility
												class="m-auto"
												:modelValue="true"
												color
											/>
										</td>
										<td>
											Lorem ipsum dolor sit, amet consectetur adipisicing elit.
											Necessitatibus esse autem natus, cum consequuntur
											aspernatur rerum aliquam voluptatum laboriosam harum
											fuga, deserunt ad corporis ipsum quod nulla atque.
											Laborum, beatae.
										</td>
									</tr>
								</tbody>
							</ui-table>
						</div>
					</div>

					<div class="item pagination">
						<div class="item-title">Pagination</div>
						<div class="item-content">
							<UiPagination v-model="pagination" />
						</div>
					</div>

					<div class="item complex">
						<div class="item-title">Complex elements</div>
						<div class="item-content">
							<div class="grid grid-cols-2 gap-4">
								<ui-card title="Карточка">
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Similique incidunt sunt fugiat, ratione eveniet consequatur
										soluta cum sit voluptatem expedita adipisci qui,
										dignissimos quae? Sed, atque omnis! Dolor, iure molestias!
									</p>
									<ui-picker-days v-model="days" />
									<code class="block mt-4">Дни недели: {{ days }}</code>
									<template v-slot:actions>
										<ui-btn label="Отмена" />
										<ui-btn label="Кнопка" color="accent" />
									</template>
								</ui-card>
								<ui-card title="Картачка с формой">
									<ui-form>
										<ui-field-text label="Текстовое поле" />
										<ui-field-date label="Дата" />
										<ui-field-file
											v-model="testFileValue"
											:description="'Count files: ' + testFileValue?.length"
											multiple
										/>
									</ui-form>
								</ui-card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<style lang="sass">
@import './style/tailwind.sass'
@import './style/common.sass'
@import './style/theme.sass'

.header
	@apply py-8 border-b
	.page-title
		@apply text-primary

.main
	@apply py-4
	.components
		.title
			@apply mb-6
		.item
			@apply mb-8
			&-title
				@apply text-lg font-bold mb-4
				@apply text-primary
			&.fields
				.ui-field:not(:last-child)
					@apply mb-4
</style>
