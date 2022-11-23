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
						<!-- 详情 -->
						<Img :detailUrls="lmlcourseList.detailUrls" v-if="i==0"></Img>
						<!-- 章节 -->
						<Section  v-if="i==1" :sectionList="lmlSectionList" ></Section>
						<!-- 评论 -->
						<comment v-if="i==2" :commentList="lmlcommentList"></comment>
						
						<!-- 套餐 -->
						<courseGroup v-else-if="index === 3" :groupList="lmlgroupList"></courseGroup>
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
	import Img from '@/pages/course/components/image.vue'//详情 图片
	import Section from "@/pages/course/components/section.vue"//章节
	
	import comment from '@/pages/course/components/comment.vue'//评论
	import courseGroup from '@/pages/course/components/courseGroup.vue'
	import tabList from '@/config/details-tab.js'//tabBar 数据
	import detailsApi from '@/api/details.js'//详情页api
	export default {
		components: {
			lmlHeader,
			tabBar,
			Img,
			Section,
			comment,
			courseGroup
		},
		data() {
			return {
				courseId: null, // id
				lmlcourseList: {}, //详情页 信息
				lmlSectionList:[],//
				lmlcommentList:[],
				lmlgroupList:[],
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
			this.gitSectionList()
			this.gitcommentList()
			this.gitgroupList()
		},
		onReady() {
		
				const view = uni.createSelectorQuery().in(this).select('.lmlDetails')
				console.log("view=>", view)
				view.fields({
					rect: true
				}, (data) => {
					console.log("data=>", data)
					this.detailTop = data.top
				}).exec();
		
		
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
			// 获取章节 数据 
			async gitSectionList() {
				this.lmlSectionList = await detailsApi.gitSectionList(this.courseId)
				console.log(this.lmlSectionList)
			},
			// 获取评论 数据
			async gitcommentList() {
				this.lmlcommentList = await detailsApi.gitcommentList(this.courseId)
				console.log(this.lmlcommentList)
			},
			// 获取 套餐 数据  /course/api/group/list/null
			async gitgroupList() {
				this.lmlgroupList = await detailsApi.gitgroupList(this.courseId)
				console.log(this.lmlgroupList)
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
	padding-bottom: 120rpx;
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
