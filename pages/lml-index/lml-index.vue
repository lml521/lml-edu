<template>
	<!-- 首页 -->
	<view class="lml-index-box">
		<!-- 微信小程序 搜索框 -->
		<!-- #ifdef MP-WEIXIN -->
		<searchInput></searchInput>
		<!-- #endif -->
		 <!-- 轮播图 -->
		<!-- <view class="lml-swiper">
		 	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
		 		<swiper-item>
		 			<view class="swiper-item">1</view>
		 		</swiper-item>
		 		<swiper-item>
		 			<view class="swiper-item">2</view>
		 		</swiper-item>
		 	</swiper>
		 </view> -->
	</view>
</template>

<script>
	import searchInput from '@/components/search-input/search-input.vue';//微信小程序 搜索框
	export default {
		components:{
			searchInput,
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	// 首页 大盒子 
.lml-index-box{
	// 轮播图盒子 
	.lml-swiper{
		width: 100%;
		padding: 80rpx 30rpx 10rpx 30rpx;
		
	}
	
}
</style>
