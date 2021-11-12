import { reactive } from "vue"

export default () => generalState

const generalState = reactive({
	tableData: [
		{
			itemCode: "ACC1",
			product: "Apple",
			package: "4 LB",
			availableUnits: 22,
			category: "Fruits",
			lastUpdated: "2016-05-01 08:21:24",
			qty: 156723,
		},
		{
			itemCode: "ACC1",
			product: "Pineapple",
			package: "7 CT",
			availableUnits: 123,
			category: "Fruits",
			lastUpdated: "2019-04-23 08:21:23",
			qty: 123243,
		},
		{
			itemCode: "ACC2",
			product: "Banana green",
			package: "8 CT",
			availableUnits: 2,
			category: "Fruits",
			lastUpdated: "2016-05-01 08:21:23",
			qty: 34534123,
		},
		{
			itemCode: "ACC2",
			product: "Banana green tip",
			package: "40 LB",
			availableUnits: 23,
			category: "Vegetables",
			lastUpdated: "2020-05-01 08:21:23",
			qty: 8143223,
		},
	],
	tableLabels: [
		{
			name: "Item code",
			propName: "itemCode",
			isSortable: false,
			isEditable: false,
		},
		{
			name: "Product",
			propName: "product",
			isSortable: true,
			isEditable: false,
		},
		{
			name: "Package",
			propName: "package",
			isSortable: true,
			isEditable: false,
		},
		{
			name: "Available units",
			propName: "availableUnits",
			isSortable: true,
			isEditable: false,
		},
		{
			name: "Category",
			propName: "category",
			isSortable: false,
			isEditable: false,
		},
		{
			name: "Last updated",
			propName: "lastUpdated",
			isSortable: true,
			isEditable: false,
		},
		{
			name: "Edit available quantity",
			propName: "qty",
			isSortable: false,
			isEditable: true,
		},
	],
})
