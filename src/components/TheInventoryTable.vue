<template>
	<el-input
		v-model="search"
		size="mini"
		placeholder="Type to search"
		class="inventory-table-search-input"
		:suffix-icon="searchIcon"
	/>
	<el-table
		:data="inventoryTableData.filter((data) => dataFilter(data))"
		:default-sort="{ prop: 'product', order: 'ascending' }"
		header-cell-class-name="table-header-row"
		style="width: 100%"
	>
		<el-table-column
			v-for="item in inventoryPropsAndLabelsNotEditable"
			:key="item.prop"
			:prop="item.prop"
			:label="item.label.name"
			:sortable="item.label.isSortable"
			:sort-method="(a, b) => sort(a, b, item.prop)"
			:class-name="getClassName(item.prop)"
			label-class-name="table-lable"
		/>
		<el-table-column :prop="qty.prop" :label="qty.label.name">
			<template v-slot="scope">
				<el-input
					size="small"
					style="text-align: center"
					v-model="scope.row.qty"
				>
					<template v-slot:prefix>Qty</template>
				</el-input>
			</template>
		</el-table-column>
	</el-table>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue"
import useInventoryStore from "@/store/inventory"
import { sortHelper } from "@/helpers/sortHelper"
import { Search as searchIcon } from "@element-plus/icons"
import Inventory from "@/interfaces/Inventory"

export default defineComponent({
	setup() {
		const inventoryStore = useInventoryStore()
		const inventoryTableData = inventoryStore.getTableData.value
		const inventoryPropsAndLabels = inventoryStore.getPropsAndLabels.value
		const inventoryPropsAndLabelsNotEditable = computed(() => {
			return inventoryPropsAndLabels.slice(
				0,
				inventoryPropsAndLabels.length - 1
			)
		})
		const qty = computed(() => {
			return inventoryPropsAndLabels.slice(-1)[0]
		})
		const search = ref("")

		const dataFilter = (data: Inventory) => {
			return (
				!search.value ||
				data.product.toLowerCase().includes(search.value.toLowerCase()) ||
				data.category.toLowerCase().includes(search.value.toLowerCase()) ||
				data.itemCode.toLowerCase().includes(search.value.toLowerCase())
			)
		}

		const sort = (obj1: any, obj2: any, column: string) => {
			const a = obj1[column]
			const b = obj2[column]

			if (column === "availableUnits") {
				return sortHelper.sortNumbers(+a, +b)
			}

			if (column === "package") {
				return sortHelper.sortWeight(a, b)
			}

			return sortHelper.sortString(a, b)
		}

		const getClassName = (prop: string) => {
			if (prop === "product") {
				return prop
			}
			return ""
		}

		return {
			search,
			inventoryTableData,
			inventoryPropsAndLabelsNotEditable,
			qty,
			sort,
			dataFilter,
			searchIcon,
			getClassName,
		}
	},
})
</script>

<style lang="scss" scoped>
.inventory-table-search-input {
	max-width: 350px;
	margin: 10px;
}
.el-input--prefix::v-deep {
	span {
		background-color: rgb(240, 240, 240);
		left: 0;
		border-radius: 3px 0 0 3px;
		padding: 0 2px;
	}
}
</style>
<style lang="scss">
.product {
	color: green;
}
.table-lable {
	color: rgb(144, 147, 153);
}
.table-header-row {
	background-color: rgb(240, 240, 240) !important;
}
</style>
