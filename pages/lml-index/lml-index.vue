<template>
	<!-- 首页 -->
	<view class="lml-index-box">
		<!-- 微信小程序 搜索框 -->
		<!-- #ifdef MP-WEIXIN -->
		<searchInput></searchInput>
		<!-- #endif -->
		
		
		 <!-- 轮播图 -->
		 <Swiper></Swiper>
		
	</view>
</template>

<script>
	import searchInput from '@/components/search-input/search-input.vue'//微信小程序 搜索框
	
	import Swiper from '@/components/swiper/swiper.vue'
	export default {
		components:{
			searchInput,
			Swiper
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
}
</style>
