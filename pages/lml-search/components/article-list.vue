<template>
	<!-- 文章 -->
	<view v-show="i===index">
		文章
	</view>
</template>

<script>
	export default {
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
