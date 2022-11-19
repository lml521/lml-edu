<template>
	<!-- tabbar -->
	<view class="lml-tabBar" @touchmove.stop.prevent="()=>{}">
		<view class="lml-view center">
			<view class="lml-item" v-for="(item,index) in list" :class="{current : index === value}"
			@click="lmlChangeValue(index)">
				{{item.name}}

			</view>

		</view>

	</view>
</template>

<script>
	export default {
		name: "tabBar",
		props: {
			value: {
				type: Number,
				default: 0
			},
			list: {
				type: Array,
				default: () => [{
					id: '1',
					name: '课程'
				}, {
					id: '2',
					name: '文章'
				}, {
					id: '3',
					name: '问答'
				}]
			}
		},
		data() {
			return {

			};
		},
		methods:{
			lmlChangeValue(index){
				this.$emit("input",index)
			}
		}
	}
</script>

<style lang="scss">
	.lml-tabBar {
		width: 100%;
		height: 80rpx;
		background-color: #fff;
		border-bottom: 1px solid #efeff4;

		.lml-view {
			width: 100%;
			text-align: center;

			.lml-item {
				flex: 1;
				font-size: 30rpx;
				line-height: 80rpx;
				position: relative;

				&::after {
					display: block;
					content: "";
					width: 0;
					height: 0;
					position: absolute;
					border-bottom: 6rpx solid $uni-text-color-blue;
					left: 50%;
					bottom: 6rpx;
					border-radius: 20rpx;
					transform: translateX(-50%);
					transition: .3s;
				}
			}

			.current {
				color: $uni-text-color-blue;

				&::after {
					width: 60rpx;
				}
			}
		}

	}
</style>
