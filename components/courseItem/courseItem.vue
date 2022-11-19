<template>
	<!-- 每一个小盒子 -->
	<view @click="navTo(`/pages/course/course-details?id=${item.id}`)" class="lml-course-item"
		:class="{column : isColumn}">
		<view class="lmlLeft">
			<image class="lmlCover" :src="item.mainImage">
			</image>
			<view class="lmlTime">
				{{item.totalTime}}
			</view>
		</view>
		<view class="lmlRight column">
			<view class="lmlTitle text-ellipsis">{{item.title}}</view>
			<view class="lmlInfo">
				<view class="lmlNickname iconfont  icon-laoshi2">{{item.nickName}}</view>
				<view class="lmlCount">
					<view v-if="item.isFree === 1" class="lmlMney iconfont icon-moneybag">免费</view>
					<view v-else class="lmlMney iconfont icon-moneybag">
						{{item.priceDiscount || item.priceOriginal}}
					</view>

					<view class="iconfont icon-video">{{item.studyTotal}} 人在学</text></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isColumn: {
				type: Boolean,
				default: false,
			},
			item: {
				type: Object,
				default: () => {
					return {
						id: 1,
						mainImage: 'http://10.idqqimg.com/qqcourse_logo_ng/ajNVdqHZLLAWb3qFGBhykjmcTvz9CWmwib2Qj7c3Vxjia4y5fgSoNdrMYIdH11Dl1OCraibA7u0mts/600',
						totalTime: '00:59:08',
						title: 'SpringBoot项目实战教程SpringCloud OAuth2 Vue分布式微服务架构',
						nickName: '梦老师1', // 课程老师
						isFree: 0, //是否免费：0收费，1免费
						priceOriginal: 999, // 原价
						priceDiscount: 699.9, // 优惠价
						studyTotal: 899
					}
				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.lml-course-item {
		display: flex;
		padding: 20rpx 0;
		width: 100%;
		border-bottom: 1rpx solid #F1F1F1;

		.lmlLeft {
			width: 290rpx;
			height: 160rpx;
			position: relative;
			margin-right: 20rpx;
			overflow: hidden;

			.lmlCover {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}

			.lmlTime {
				position: absolute;
				right: 5rpx;
				bottom: 5rpx;
				color: #fff;
				background-color: rgba(51, 51, 51, 0.4);
				border-radius: 20rpx;
				font-size: 22rpx;
				padding: 0 6px;
			}
		}


		.lmlRight {
			height: 160rpx;
			padding-top: 5rpx;
			padding-left: 5rpx;
			justify-content: space-between;
			overflow: hidden;

			.lmlTitle {
				max-width: 365rpx;
				height: 70rpx;
				line-height: 35rpx;
				font-size: 28rpx;
				font-weight: bold;
			}

			.lmlInfo {

				.lmlNickname {
					font-size: 23rpx;
					color: #999;
				}

				.lmlCount {
					display: flex;
					align-items: center;


					.iconfont {
						font-size: 23rpx;
						color: #222222;
					}

					.lmlMney {
						font-size: 28rpx;
						color: $uni-color-orange;
						padding-right: 30rpx;
						width: 130rpx;
					}
				}
			}
		}
	}
</style>
