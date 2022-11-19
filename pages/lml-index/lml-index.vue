<template>
	<!-- 首页 -->
	<view class="lml-index-box">
		<!-- 微信小程序 搜索框 -->
		<!-- #ifdef MP-WEIXIN -->
		<searchInput></searchInput>
		<!-- #endif -->

		<!-- 轮播图 -->
		<Swiper :bannerList="lmlBannerList"></Swiper>

		<!-- 下拉刷新 上拉加载 -->
		<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback" :down="downOption"
			:up="upOption">

			<!-- 分类区功能 -->
			<lmlNav :categoryList="lmlCategory"></lmlNav>

			<view class="lml-list">
				<!-- 热门推荐 -->
				<swiperCourse name="热门推荐" word="HOT" :courseData="lmlHotList"></swiperCourse>

				<!-- 近期上新 -->
				<scollCourse name="近期上新" word="NEW" :courseData="lmlNewList"></scollCourse>

				<!-- 免费精选 -->
				<swiperCourse name="免费精选" word="FREE" :courseData="lmlFreeList"></swiperCourse>
				<!-- 付费精品 -->
				<!-- {{lmlPayList}} -->
				<lmlCourse name="付费精品" word="FREE" :courseData="lmlPayList"></lmlCourse>

			</view>
		</mescroll-body>

	</view>
</template>

<script>
	import searchInput from '@/components/search-input/search-input.vue' //微信小程序 搜索框
	import Swiper from '@/components/swiper/swiper.vue' //轮播图

	import indexApi from '@/api/index.js' //封装api

	import lmlNav from '@/pages/lml-index/components/lml-Nav.vue' //分类区功能
	import swiperCourse from '@/pages/lml-index/components/swiper-course.vue' //热门推荐
	import scollCourse from "@/pages/lml-index/components/scoll-course.vue" //近期上新 
	import lmlCourse from '@/pages/lml-index/components/lml-course.vue'

	// 引入mescroll-mixins.js  
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js"

	export default {
		// 使用mixin
		mixins: [MescrollMixin],
		components: {
			searchInput, //微信小程序 搜索框
			Swiper, //轮播图
			lmlNav, //分类区功能
			swiperCourse, //热门推荐
			scollCourse, //近期上新 
			lmlCourse, //付费
		},
		data() {
			return {
				lmlBannerList: [], // 轮播图 数据
				lmlCategory: [], // 分类区 数据
				lmlHotList: [], //热门推荐
				lmlFreeList: [], //免费精选
				lmlNewList: [], //近期上新 
				lmlPayList: [], //付费
				downOption: {
					offset: 30
				},
				upOption: {
					textLoading: '正在查询下页数据中',
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1
						size: 10, // 每页数据的数量
					},
					textNoMore: '--已加载完所有数据--',
				},
			};
		},
		created() {
			this.getIndexList()
		},
		// 点击搜索框会触发的方法
			onNavigationBarSearchInputClicked() {
				this.navTo("/pages/lml-search/lml-search")
			},

		methods: {
			getIndexList() {
				this.lmlgetBanner() //获取轮播图
				this.lmlgetCategory() //分类区数据

				this.lmlgetHotList() // 获取 热门推荐 数据 
				this.lmlgetFreeList() //免费精选 数据 
				this.lmlgetNewList() // 请求近期上新 
				// this.lmlgetPayList()
			},

			// 请求轮播图 数据
			async lmlgetBanner() {
				this.lmlBannerList = await indexApi.getBanner()
			},


			// 请求 分类区数据
			async lmlgetCategory() {
				this.lmlCategory = await indexApi.getCategory()
			},

			// 获取 热门推荐 数据 
			async lmlgetHotList() {
				try {
					let res = await indexApi.getCourseList({
						sort: "hot",
						current: 1,
						size: 8
					})
					this.lmlHotList = res.records
				} catch (e) {
					console.log('获取 热门推荐 数据 => 错误', e)
				}
			},

			// 请求近期上新 
			async lmlgetNewList() {
				try {
					let res = await indexApi.getCourseList({
						current: 1,
						size: 10,
						sort: "new",
					})
					this.lmlNewList = res.records
				} catch (e) {
					console.log('获取 近期上新 数据 => 错误', e)
				}
			},


			// 请求 免费精选 
			async lmlgetFreeList(page) {
				try {
					let res = await indexApi.getCourseList({
						current: 1,
						isFree: 1,
						size: 8,
					})
					this.lmlFreeList = res.records
				} catch (e) {
					console.log('获取 免费精选 数据 => 错误', e)
				}
			},

			// 付费精品 
			async lmlgetPayList(page) {
				try {
					let res = await indexApi.getCourseList({
						current: 1,
						isFree: 1,
						size: 10,
					})
					this.lmlPayList = res.records
				} catch (e) {
					console.log('获取 付费精品 数据 => 错误', e)
				}
			},
			/*下拉刷新与上拉加载的回调*/
			async upCallback(page) {
				/** 判断 当前页是否是在第一页 
				 *	如果是在第一页则重新加载 付费数据
				 * 如果不是则 请求 数据合并之前数据 
				 * this.mescroll.endBySize(a,b) 当请求数据 的长度 与 数据库数据长度一样时
				 * 则停至 再次加载 
				 * */
				if (page.num === 1) {
					this.getIndexList()
					this.lmlPayList = []
				}
				let res = await indexApi.getCourseList({
					isFree: 1,
					current: page.num,
					size: page.size
				})
				let currentList = res.records
				this.lmlPayList = this.lmlPayList.concat(currentList)
				this.mescroll.endBySize(currentList.length, res.total)
			}
		}
	}
</script>

<style lang="scss">
	// 首页 大盒子 
	.lml-index-box {
		.lml-list {
			padding: 0 30rpx;
		}
	}
</style>
