<template>
	<!-- 微信 搜索框 -->
	<view class="lml-search">
		<input class="lml-input" type="text" placeholder="搜索你想要的内容" disabled>
	</view>
</template>

<script>
	export default {
		name: "search-input",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.lml-search {
		width: 100%;
		top: 30rpx;
		position: absolute;
		left: 0;
		z-index: 99;

		.lml-input {
			height: 70rpx;
			margin: 0 20rpx;
			line-height: 70rpx;
			border-radius: 30rpx;
			background-color: #f8f8f8;
			text-align: center;
		}
	}
</style>
