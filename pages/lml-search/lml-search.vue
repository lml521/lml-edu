<template>
	<!-- 搜索页面 -->
	<view>
		<!-- 热门推荐 历史记录 -->
		<lmlKeyWord @TagHandler="lmlTagHandler" v-if="!searched"></lmlKeyWord>
		
		<tabBar  v-model.sync="tabIndex" v-if="searched"></tabBar>
		
		<block v-if="searched">
					<courseList ref="mescrollItem0" :i="0" 
					:index="tabIndex" :params="params" :content="content"></courseList>
					<articleList ref="mescrollItem1" :i="1" :index="tabIndex" :params="params" :content="content">
					</articleList>
					<questionList ref="mescrollItem2" :i="2" :index="tabIndex" :params="params" :content="content">
					</questionList>
				</block>

	</view>
</template>

<script>
	let history = 'history'
	import lmlKeyWord from '@/pages/lml-search/components/lml-keyword.vue'//热门推荐 历史记录
	import tabBar from '@/components/tabBar/tabBar.vue'//tabBar
	import courseList from '@/pages/lml-search/components/course-list.vue'
	import articleList  from '@/pages/lml-search/components/article-list.vue'
	import questionList  from '@/pages/lml-search/components/question-list.vue'
	export default {
		components: {
			lmlKeyWord,
			tabBar,
			courseList,
			articleList,
			questionList
		},
		data() {
			return {
				content: "", //输入框内容
				searched: false,
				params: null,
				tabIndex:0,
			};
		},
		// 监听原生导航按钮事件
		onNavigationBarButtonTap(e) {
			// 取消按钮
			if (e.index === 0) {
				this.navBack()
			}
		},
		onLoad(option) {

			// #ifdef APP-PLUS
			let currentWebview = this.$mp.page.$getAppWebview()
			// #endif
			console.log(option, 5)
			// 获取其他页面跳转过来带的参数，
			if (option.params) {
				// 转换对象
				this.params = JSON.parse(option.params)
				console.log('params', this.params)
				// 有参数，则开始搜索
				this.lmlTagHandler()
			} else {
				// #ifdef APP-PLUS
				currentWebview.setTitleNViewSearchInputFocus(true)
				// #endif
			}

			// #ifdef MP
			// 页面加载即获取焦点，真机测试才有效 +++
			this.focus = true
			// #endif

		},
		// 实时获取搜索框的内容
		onNavigationBarSearchInputChanged(e) {
			this.content = e.text
		},
		methods: {
			lmlTagHandler(obj) {

				
				this.content = obj && obj.value ? obj.value : this.content
				this.searched = true
				this.storageHistory()
				
			},
			// 关键字保存
			storageHistory() {
				const key = 'historyList'
				uni.getStorage	({
					key,
					success: (res) => {
						console.log(res)
						let arr=JSON.parse(res.data)
						console.log(arr)
						console.log('获取成功', typeof arr);
						this.content && arr.indexOf(this.content) < 0 && arr.unshift(this.content)
						// 保存到历史记录
						console.log(this.content,arr)
						let arr3 =JSON.stringify(arr)
						console.log(arr3)
						// uni.setStorageSync(key, res.data)
						// #ifdef H5
						// localStorage.setItem(key, [ this.content ])
						localStorage.setItem(key,arr3)
						// #endif
					},
					fail: (error) => {
						console.log(error, 5)

						console.log(this.content)
						console.log(key)
						let arr =[this.content]
						console.log(arr)
						// #ifdef H5
						localStorage.setItem(key,JSON.stringify(arr))
						// #endif
						// uni.setStorageSync(key, [ this.content ])
					}
				})
			},

		}
	}
</script>

<style lang="scss">

</style>
