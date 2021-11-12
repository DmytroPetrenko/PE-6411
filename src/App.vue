<template>
	<el-main>
		<el-row>
			<el-col :span="24">
				<div class="grid-content">
					<h3 class="header-text">Inventory</h3>
				</div>
			</el-col>
		</el-row>
		<el-row>
			<el-col>
				<div class="grid-content bg-silver">
					<el-row>
						<el-col>
							<div class="grid-content bg-white mt-10 ml-5">
								<inventory-table
									:data="inventoryTableData"
									:editableLabels="editableLabels"
									:qty="qty"
									:search-icon="searchIcon"
								/>
							</div>
						</el-col>
					</el-row>
				</div>
			</el-col>
		</el-row>
	</el-main>
</template>

<script>
import { computed, defineComponent } from "vue"
import InventoryTable from "@/components/InventoryTable.vue"
import useInventoryStore from "@/store/inventory"
import { Search as searchIcon } from "@element-plus/icons"

export default defineComponent({
	components: { InventoryTable },
	setup() {
		const inventoryStore = useInventoryStore()
		const inventoryTableData = inventoryStore.tableData
		const inventoryPropsAndLabels = inventoryStore.tableLabels

		const editableLabels = computed(() =>
			inventoryPropsAndLabels.filter((label) => !label.isEditable)
		)

		const qty = inventoryPropsAndLabels[inventoryPropsAndLabels.length - 1]

		return { inventoryTableData, searchIcon, editableLabels, qty }
	},
})
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 60px;

	.mt-10 {
		margin-top: 10px;
	}
	.ml-5 {
		margin-left: 5px;
	}

	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
		.el-col {
			border-radius: 4px;
			.grid-content {
				min-height: 36px;
			}
			.bg-silver {
				background: silver;
			}
			.bg-white {
				background: white;
			}
		}
	}
}
</style>
