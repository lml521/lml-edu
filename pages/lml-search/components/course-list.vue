<template>
	<!-- 课程 -->
	<view v-show="i===index">
		<downBar @search="search" :params="params" ></downBar>


		<mescroll-body  class="box" :ref="'mescrollRef' + i" @init="mescrollInit" :down="downOption" @down="downCallback"
			:up="upOption" @up="upCallback">
			<view style="padding:0 30rpx;">
				<!-- 数据列表 -->
				<courseItem :item="item" v-for="(item, index) in courseList" :key="index"></courseItem>
			</view>

		</mescroll-body>
	</view>
</template>

<script>
	import downBar from '@/components/down-bar/down-bar.vue'
	import courseItem from '@/components/courseItem/courseItem.vue'
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import MescrollMoreItemMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mixins/mescroll-more-item.js";

	import indexApi from '@/api/index.js'

	export default {
		mixins: [MescrollMixin, MescrollMoreItemMixin],
		components: {
			downBar,
			courseItem
		},
		props: {
			i: {
				type: Number,
				default: 0
			},
			index: {
				type: Number,
				default: 0
			},
			params: {
				type: Object,
				default: () => {}
			},
			content: { //搜索框内容
				type: String,
				default: '',
			},
		},
		data() {
			return {
				downOption: {
					auto: false // 不自动加载 (mixin已处理第一个tab触发downCallback)
				},
				upOption: {
					auto: false, // 不自动加载
					// page: {
					// 	num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
					// 	size: 10 // 每页数据的数量
					// },
					noMoreSize: 4, //如果列表已无数据,可设置列表的总数量要大于半页才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看; 默认5
					empty: {
						icon: "",
						tip: "暂无相关数据~",
					}
				},
				courseList: [],
				// 用来保存搜索的参数
				searchData: {
					content: '', // 要查询的内容
					current: 1, // 分页的页码
					size: 10, // 分页的条数
					sort: null, // 排序
					isFree: null, // 0 付费 1免费 null 全部课程
					labelId: null, // 标签id
					categoryId: null // 类别id
				}
			};
		},
		mounted() {
			this.params && Object.keys(this.searchData).forEach(key => {
				this.searchData[key] = this.params[key] || null
			})
			console.log("search=>", this.searchData)
		},
		onLoad() {
			this.upCallback()
		},
		methods: {
			// 搜索
			search(data) {
				console.log('data', data)
				if (data) {
					Object.assign(this.searchData, data)
				}
			
				this.mescroll.resetUpScroll(true)
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			async upCallback(page) {
				console.log(page)
				this.searchData.content = this.content && this.content.trim() || ""
				this.searchData.current = page.num
				this.searchData.size = page.size
				const res = await indexApi.getCourseList(this.searchData)
				console.log(res, 'res')
				const list = res.records
				if (page.num === 1) {
					this.courseList = []
					this.mescroll.scrollTo(0, 0)
				}
				this.courseList = this.courseList.concat(list)
				this.mescroll.endBySize(list.length, res.total);
			},
		}
	}
</script>

<style lang="scss">

</style>
