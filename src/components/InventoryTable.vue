<template>
	<el-input
		v-model="search"
		size="mini"
		placeholder="Type to search"
		class="inventory-table-search-input"
		:suffix-icon="searchIcon"
	/>
	<el-table
		:data="dataFiltered"
		:default-sort="{ prop: 'product', order: 'ascending' }"
		header-cell-class-name="table-header-row"
		style="width: 100%"
	>
		<el-table-column
			v-for="item in editableLabels"
			:key="item.propName"
			:prop="item.propName"
			:label="item.name"
			:sortable="item.isSortable"
			:sort-method="(a, b) => sort(a, b, item.propName)"
			:class-name="getClassName(item.propName)"
			label-class-name="table-lable"
		/>
		<el-table-column :prop="qty.propName" :label="qty.name">
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
<script>
import { computed, defineComponent, ref } from "vue"
import { sortHelper } from "@/helpers/sortHelper"

export default defineComponent({
	props: {
		data: {
			type: Array,
			required: true,
		},
		editableLabels: {
			type: Array,
			required: true,
		},
		qty: {
			type: Object,
			required: true,
		},
		searchIcon: {
			type: Object,
			required: true,
		},
	},
	setup(props) {
		const search = ref("")

		const dataFiltered = computed(() => {
			return props.data.filter(
				(obj) =>
					!search.value ||
					obj.product.toLowerCase().includes(search.value.toLowerCase()) ||
					obj.category.toLowerCase().includes(search.value.toLowerCase()) ||
					obj.itemCode.toLowerCase().includes(search.value.toLowerCase())
			)
		})

		const sort = (obj1, obj2, column) => {
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

		const getClassName = (prop) => {
			if (prop === "product") {
				return prop
			}
			return ""
		}

		return {
			search,
			editableLabels: props.editableLabels,
			qty: props.qty,
			searchIcon: props.searchIcon,
			dataFiltered,
			sort,
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
