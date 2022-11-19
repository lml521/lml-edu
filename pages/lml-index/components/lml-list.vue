<template>
	<view class="lml-box">
			<!-- 标题 -->
			<view class="lmlTitle row space-between center">
				<view class="center">
					<text class="lmlName">{{name}}</text>
					<text class="lmlWord" >{{word}}</text>
				</view>
				<view class="lmlAll">
					<text>全部</text>
					<text class="iconfont icon-right"></text>
				</view>
			</view>
			<!-- 列表 -->
			<slot></slot>
		</view>
</template>

<script>
	export default {
		props:{
			name:{
				type:String,
				default:"热门推荐"
			},
			word:{
				type:String,
				default:"HOT"
			},
		}
	}
</script>

<style lang="scss">
	.lml-box{
		margin-top: 60rpx;
		.lmlTitle {
			margin-bottom: 10rpx;
			
			.lmlName{
				font-size: 38rpx;
				font-weight: 500;
				color: #303133;
				margin-right:10rpx;
			}
			
			.lmlWord{
				background-image: linear-gradient(to right,  $uni-color-orange, $uni-text-color-red);
				font-size: 20rpx;
				color: #fff;
				padding: 0 10rpx;
				border-radius: 30rpx 30rpx 30rpx 0;
			}
			
			.lmlAll{
				font-size:28rpx;
				font-weight: normal;
				color : $uni-text-color-grey;
				.iconfont{
					font-size: 25rpx;
				}
			}
		}
	}
</style>