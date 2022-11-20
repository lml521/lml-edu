<template>
	<!-- 详情 -->
	<view>
		<!-- 头部内容 -->
		<lmlHeader :item="lmlcourseList"></lmlHeader>

		<view class="lmlDetails" :style="{height : pageHeight + 'px'}">
			<tabBar :list="tabList" v-model.sync="index"></tabBar>
			<swiper :indicator-dots="true" 	circular :current="index" @change="lmlChangeIndex">
				<swiper-item v-for="(ele,i) in 4" :key="i">
					<scroll-view scroll-y="true">
						<Img :detailUrls="lmlcourseList.detailUrls" v-if="i==0"></Img>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		<view class="lmlBtn">
			<button>立即购买</button>
			
		</view>

	</view>
</template>

<script>
	import lmlHeader from '@/pages/course/components/lml-header.vue' //详情头部
	import tabBar from '@/components/tabBar/tabBar.vue' //tabBar 组件
	import Img from '@/pages/course/components/image.vue'
	import tabList from '@/config/details-tab.js'//tabBar 数据
	import detailsApi from '@/api/details.js'//详情页api
	export default {
		components: {
			lmlHeader,
			tabBar,
			Img
		},
		data() {
			return {
				courseId: null, // id
				lmlcourseList: {}, //详情页 信息
				tabList,
				index: 0,
				pageHeight: 300,
			};
		},

		// 获取 传递过来的 id 
		onLoad(options) {
			this.getCourseId(options.id)
			this.getPageHeight()
		},
		created() {
			this.gitCourseList()
		},
		methods: {
			// 设置 ID
			getCourseId(id) {
				this.courseId = id
			},
			// 获取 详情数据 
			async gitCourseList() {
				this.lmlcourseList = await detailsApi.gitCourseList(this.courseId)
				console.log(this.lmlcourseList)
			},
			// 修改 轮播 Index
			lmlChangeIndex(e) {
				this.index = e.detail.current
			},



			getPageHeight() {
				// 获取系统信息
				const res = uni.getSystemInfoSync()
				// 获取平台
				const system = res.platform
				// 获取状态栏的高度
				const statusBarHeight = res.statusBarHeight
				// 获取状态栏 + 导航栏的高度
				this.pageHeight = res.windowHeight

				// 判断是安卓还是ios
				if (system === 'android') {
					this.statusNavHeight = statusBarHeight + 48
				} else if (system === 'ios') {
					this.statusNavHeight = statusBarHeight + 44
				}

				this.pageHeight = res.windowHeight - this.statusNavHeight
			}


		}
	}
</script>

<style lang="scss">
	.lmlDetails {

		overflow: hidden;

		swiper,
		swiper-item,
		scroll-view {
			height: 100%;
		}

		.lmlInfo {
			padding-bottom: 180rpx;
		}
	}
	.lmlBtn{
		width: 100%;
		height: 110rpx;
		background-color: #fff;
		position: fixed;
		left: 0;
		bottom: -0;
		button{
			width: 90%;
			margin-top: 10rpx;
			background-color: #345dc2;
			color: #fff;
			text-align: center;
			border-radius: 50rpx;
		
			
		}
	}
</style>
