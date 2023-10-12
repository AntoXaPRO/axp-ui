import type { TQuery, TFindFilter } from 'axp-ts'

import { ref, watch, toRaw } from 'vue'
import { Pagination, FindFilter } from 'axp-ts'

export type TUseFindFilterParams<T extends TQuery> = {
	query: T
	saveName?: string
}

const setQuery = <T extends TQuery>(name: string, query: T) => {
	try {
		localStorage.setItem('query_' + name, JSON.stringify(query))
	} catch (e) {}
}

const getQuery = <T extends TQuery>(name: string): T | undefined => {
	try {
		const saveQueryStr = localStorage.getItem('query_' + name)
		if (saveQueryStr) return JSON.parse(saveQueryStr)
	} catch (e) {}
}

export const useFindFilter = <T extends TQuery>(
	params: TUseFindFilterParams<T>
) => {
	// Check save query.
	if (params.saveName) {
		const saveQuery = getQuery<T>(params.saveName)
		if (saveQuery) {
			params.query = saveQuery
		} else {
			setQuery(params.saveName, params.query)
		}
	}

	// Init data.
	const filter = ref(new FindFilter<T>(params.query).toObject())
	const pagination = ref(new Pagination(params.query).toObject())

	// Hooks.
	let refreshHooks: (() => void | Promise<void>)[] = []
	const refresh = (fn: () => void | Promise<void>) => refreshHooks.push(fn)
	const runRefreshHooks = async () => {
		// Save query.
		if (params.saveName) {
			const query = FindFilter.getQuery(filter.value as TFindFilter<T>)
			setQuery(params.saveName, query)
		}
		// Run.
		for (const fn of refreshHooks) {
			await fn()
		}
	}

	// Watch filter obj.
	watch(
		() => filter.value.obj,
		async _ => {
			pagination.value.page = 1
			if (filter.value.pagination?.page === 1) {
				await runRefreshHooks()
			}
		},
		{ deep: true }
	)

	// Watch pagination.
	watch(
		pagination,
		async val => {
			if (filter.value.pagination) {
				const { page, limit } = toRaw(val)
				if (limit !== filter.value.pagination.limit) {
					filter.value.pagination = { page: 1, limit }
					await runRefreshHooks()
				} else {
					if (page !== filter.value.pagination.page) {
						filter.value.pagination.page = page
						await runRefreshHooks()
					}
				}
			}

		},
		{ deep: true }
	)

	// Result.
	return { filter, pagination, refresh }
}
