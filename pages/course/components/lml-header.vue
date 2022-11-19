<template>
	<!-- 详情页面  头部信息 -->
	<view>
		<img :src="item.mainImage" alt="">
		<view class="lmlInfo">
			<view class="lmlpic">
				<text v-if="item.priceDiscount">￥{{item.priceDiscount}}</text>
				<text :class="{priceOriginal:item.priceDiscount}">￥{{item.priceOriginal}}</text>
				<text class="lmlPrice" v-if="item.priceDiscount">优惠价</text>
			</view>
			<h4 class="lmlTitle">
				{{item.title}}
			</h4>
			<view class="evaluate">
				<text class="iconfont icon-haoping2">{{item.goodRate}}好评</text>
				<text class="iconfont icon-touxiang2">{{item.studyTotal}}在学</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => ({
					"id": 10,
					"title": "Uniapp兼容多端在线教育项目实战",
					"studyTotal": 590, //在学人数
					"goodRate": '100%', //好评率
					"mainImage": "https://gd4.alicdn.com/imgextra/i4/3603079088/O1CN01dczOSM2H0LvTowhkl_!!3603079088.png",
					"isFree": 0, // 0 付费，1免费
					"priceOriginal": 614.51, //原价
					"priceDiscount": 281.91 // 优惠
				})
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	img {
		width: 100%;
	}

	.lmlInfo {
		width: 100%;
		padding: 20rpx;
		border: 20rpx solid $uni-color-grey;
		border-left: 0;
		border-right: 0;

		.lmlpic {
			color: $uni-text-color-red;
			font-weight: 900;
			font-size: 46rpx;

			text {
				margin-right: 10rpx;
			}

			.lmlPrice {
				font-size: 24rpx;
				color: $uni-text-color-red;
				border: 1px solid $uni-text-color-red;
				padding: 3rpx;
				border-radius: 10rpx;
				font-weight: normal;
			}

			.priceOriginal {
				color: #b9bbcb;
				font-size: 28rpx;
				font-weight: normal;
			}

		}

		.lmlTitle {
			margin: 10rpx 0;
		}

		.evaluate {

			margin: 10rpx;

			text {
				margin-right: 7px;
				font-size: 10px;
				color: #7d828f;
				background-color: #f8f9fb;
				padding: 7px;
		 	border-radius: 15px;
			}
		}
	}
</style>
