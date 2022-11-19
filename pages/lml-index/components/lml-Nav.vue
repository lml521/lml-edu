<template>
	<!-- 分类区功能 -->
	<view class="lmlNav">
		<view class="" v-for="(item,index) in categoryList.slice(0,7)" :key="index">
			{{item.name}}
		</view>
		<view>全部分类</view>
	</view>
</template>

<script>
	export default {
		props: {
			categoryList: {
				type: Array,
				default: () => [{
						id: 1,
						name: 'Java',
					},
					{
						id: 2,
						name: '前端',
					},
					{
						id: 3,
						name: 'Python',
					},
					{
						id: 4,
						name: 'UI设计',
					},
					{
						id: 5,
						name: '运维',
					},
					{
						id: 6,
						name: '人工智能',
					},
					{
						id: 7,
						name: '实战课程',
					}
				]
			}

		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.lmlNav {

		display: flex;
		// 换行，
		flex-wrap: wrap;
		// 两侧的间隔相等
		justify-content: space-around;
		padding: 20rpx 30rpx 0 30rpx;

		>view {
			width: 160rpx;
			height: 70rpx;
			background-color: $uni-color-grey;
			line-height: 70rpx;
			text-align: center;
			font-size: 26rpx;
			margin-top: 15rpx;
			// 文字超出宽度隐藏
			overflow: hidden;
			border-radius: 20rpx;
		}
	}
</style>
