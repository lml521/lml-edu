<template>
	<!-- 轮播图 -->
	<view class="lml-swiper">
		<view class="lml-bgc"
		:style="{'background-image':`linear-gradient( ${lmlBannerBackg || '#345dc2'} 50%, #F8F9FB)`}"></view>
			<swiper  
			:indicator-dots="true" 
			:autoplay="true" 
			:current="index" 
			circular 
			indicator-color="rgba(255,255,255,.5)"
			indicator-active-color="#fff"
			:interval="3000"
			:duration="1000"
				@change="lmlChangeSwiper">
				<swiper-item class="swiper-item"   v-for="(item,index) in bannerList" :key="index">
					<img :src="item.imageUrl" alt="" @click="navTo(`${item.advertUrl}`)">
				</swiper-item>

			</swiper>
		
	</view>
</template>

<script>
	export default {
		name: "swiper",

		props: {
			// 轮播图展示当前 下标 
			index: {
				type: Number,
				default: 0
			},
			// 轮播图展示的数据 
			bannerList: {
				type: Array,
				default: () => {
					return [{
							id: 1,
							imageUrl: "/static/images/banner1.jpg",
							background: "#45328c",
							advertUrl: '/pages/course/course-details'
						},
						{
							id: 2,
							imageUrl: "/static/images/banner2.jpg",
							background: "#006C00",
							advertUrl: '/pages/course/course-details'
						},
						{
							id: 3,
							imageUrl: "/static/images/banner3.jpg",
							background: "#0072B7",
							advertUrl: '/pages/course/course-details'
						}
					]
				}
			}
		},
		data() {
			return {
			lmlBannerBackg:"",
			current:0,
			};
		},
		
		methods:{
			lmlChangeSwiper(e){
				this.current=e.detail.current
				this.lmlBannerBackg=this.bannerList[this.current].background
				
			}
		}
	}
</script>

<style lang="scss">
	.lml-swiper {
		position: relative;
		padding-top: 120rpx !important;

		.lml-bgc {
			position: absolute;
			width: 100%;
			top: 0;
			height: 470rpx;
			/* #ifdef APP-PLUS */
			height: calc(var(--status-bar-height) + 470rpx);
			/* #endif */
			transition: 0.5s;
		}


		swiper {
			width: 100%;
			height: 350rpx;

			.swiper-item {
				width: 100%;
				height: 100%;
				padding:0 20rpx;
				img {
					width: 100%;
					height: 100%;
					border-radius: 15rpx;
				}
			}

		}
	}
</style>
