<template>
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
							<the-inventory-table />
						</div>
					</el-col>
				</el-row>
			</div>
		</el-col>
	</el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TheInventoryTable from "@/components/TheInventoryTable.vue"

export default defineComponent({
	components: { TheInventoryTable },
})
</script>

<style lang="scss" scoped>
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
</style>
