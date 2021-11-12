import { computed, reactive } from "vue"
import { withState } from "./helpers/helper"

export default () =>
	withState({ getTableData, getPropsAndLabels }, generalState)

const generalState = reactive({
	tableData: [
		{
			itemCode: "ACC1",
			product: "Apple",
			package: "4 LB",
			availableUnits: 22,
			category: "Fruits",
			lastUpdates: "2016-05-01 08:21:24",
			qty: 156723,
		},
		{
			itemCode: "ACC1",
			product: "Pineapple",
			package: "7 CT",
			availableUnits: 123,
			category: "Fruits",
			lastUpdates: "2019-04-23 08:21:23",
			qty: 123243,
		},
		{
			itemCode: "ACC2",
			product: "Banana green",
			package: "8 CT",
			availableUnits: 2,
			category: "Fruits",
			lastUpdates: "2016-05-01 08:21:23",
			qty: 34534123,
		},
		{
			itemCode: "ACC2",
			product: "Banana green tip",
			package: "40 LB",
			availableUnits: 23,
			category: "Vegetables",
			lastUpdates: "2020-05-01 08:21:23",
			qty: 8143223,
		},
	],
	tableLabels: [
		{ name: "Item code", isSortable: false },
		{ name: "Product", isSortable: true },
		{ name: "Package", isSortable: true },
		{
			name: "Available units",
			isSortable: true,
		},
		{ name: "Category", isSortable: false },
		{ name: "Last updated", isSortable: true },
		{ name: "Edit available quntity", isSortable: false },
	],
})
const getTableData = computed(() => generalState.tableData)
const getPropsAndLabels = computed(() => {
	const propsAndLabels = []
	const props = Object.keys(getTableData.value[0])
	for (let i = 0; i < generalState.tableLabels.length; i++) {
		const label = generalState.tableLabels[i]
		const prop = props[i]
		propsAndLabels.push({
			prop,
			label,
		})
	}
	return propsAndLabels
})
