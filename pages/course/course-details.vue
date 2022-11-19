<template>
	<!-- 详情 -->
	<view>
		<!-- 头部内容 -->
		<lmlHeader :item="lmlcourseList"></lmlHeader>
		
		<tabBar :list="tabList" v-model.sync="index"></tabBar>
	</view>
</template>

<script>
	import lmlHeader from '@/pages/course/components/lml-header.vue' //详情头部
	import tabBar from '@/components/tabBar/tabBar.vue'//tabBar
	import tabList from '@/config/details-tab.js'
	import detailsApi from '@/api/details.js'
	export default {
		components: {
			lmlHeader,
			tabBar
		},
		data() {
			return {
				courseId: null,// id
				lmlcourseList:{},//详情页 信息
				tabList,
				index:0,
			};
		},

		// 获取 传递过来的 id 
		onLoad(options) {
			console.log(options.id)
			this.getCourseId(options.id)
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
				this.lmlcourseList= await detailsApi.gitCourseList(this.courseId)
				console.log(this.lmlcourseList)
			}


		}
	}
</script>

<style lang="scss">

</style>
