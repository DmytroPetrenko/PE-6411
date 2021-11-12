<template>
	<!-- don`t use router because just one page needed -->
	<el-main>
		<the-inventory />
	</el-main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TheInventory from "@/components/TheInventory.vue"

export default defineComponent({
	components: { TheInventory },
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
}
</style>
