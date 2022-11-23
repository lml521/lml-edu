<template>
	<!-- 课程 -->
	<view v-show="i===index">
		<downBar></downBar>
	</view>
</template>

<script>
	import downBar from '@/components/down-bar/down-bar.vue'

	
	export default {
		components:{
		downBar
	},
		props: {
			i: {
				type: Number,
				default: 0
			},
			index: {
				type: Number,
				default: 0
			},
			params: {
				type: Object,
				default: () => {}
			},
			content: { //搜索框内容
				type: String,
				default: '',
			},
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>
