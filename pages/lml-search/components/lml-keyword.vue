<template>
	<!-- 热门搜索 历史记录 -->
	<view class="lml-container">
		<view class="lmlTitle">
			热门搜索
		</view>
		<view class="lmlTag">
			<view class="" v-for="(item,index) in hotList" :key="index" @click="lmlTagHandler(item)">
				{{item}}
			</view>
		</view>
		<view class="lmlTitle space-between">
			<text>历史记录</text>
			<text @click="clearHistory">清空</text>
		</view>
		<view class="lmlTag">
			<view class="" v-for="(item,index) in historyList" :key="index" @click="lmlTagHandler(item)">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	let history = 'historyList'
	export default {
		data() {
			return {
				
				// 热门搜索数据
				hotList: ['Java', 'SpringBoot', 'SpringCloud', 'Python', 'Vue', 'React'],
				// 历史记录
				historyList:JSON.parse(localStorage.getItem(history))||[],
				
			};
		},
		onLoad() {
			console.log(this.historyList,666)
		},
		
		methods: {
			// 点击 进行 搜索 
			lmlTagHandler(item) {
				this.handleSetSearch(item)
				this.$emit("TagHandler", {
					value: item
				})

			
		},
		// 清空历史记录 
		clearHistory() {
			this.historyList = []
			localStorage.removeItem(history)
		     // uni.removeStorageSync(historyList)
		},



	}
	}
</script>

<style lang="scss">
	.lml-container {
		padding: 25rpx;

		.lmlTitle {
			font-size: 30rpx;
			color: #222222;

			text:last-child {
				color: #999;
			}
		}

		.lmlTag {
			display: flex;
			flex-wrap: wrap;
			margin: 20rpx 0 60rpx 0;

			view {
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
