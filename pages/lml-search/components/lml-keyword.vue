<template>
	<!-- 热门搜索 历史记录 -->
	<view class="lml-container">
		<view class="lmlTitle">
			热门搜索
		</view>
		<view class="lmlTag">
			<view class="" v-for="(item,index) in hotList" :key="index">
				{{item}}
			</view>
		</view>
		<view class="lmlTitle space-between">
			<text>历史记录</text>
			<text>清空</text>
		</view>
		<view class="lmlTag">
			<view class="" v-for="(item,index) in historyList" :key="index">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 热门搜索数据
							hotList : ['Java', 'SpringBoot', 'SpringCloud', 'Python', 'Vue', 'React'],
							// 历史记录
							// historyList : wx.getStorageSync(HISTORY_KEY)
							historyList:[12,3]
			};
		}
	}
</script>

<style lang="scss">
.lml-container{
	padding: 25rpx;
	
	.lmlTitle{
		font-size: 30rpx;
		color: #222222;
		
		text:last-child{
			color : #999;
		}
	}
	
	.lmlTag{
		display: flex;
		 flex-wrap: wrap;
		 margin: 20rpx 0 60rpx 0;
		view{
			font-size: 28rpx;
			color: #999;
			border: 1rpx solid #999;
			border-radius: 8rpx;
			padding: 6rpx 15rpx;
			margin: 10rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
}
</style>
