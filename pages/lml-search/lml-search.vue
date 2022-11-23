<template>
	<!-- 搜索页面 -->
	<view>
		<!-- 热门推荐 历史记录 -->
		<lmlKeyWord @TagHandler="TagHandler" v-if="!searched"></lmlKeyWord>
		
		<tabBar  v-model.sync="tabIndex" v-if="searched"></tabBar>
		
		<block v-if="searched">
					<course-list ref="mescrollItem0" :i="0" 
					:index="tabIndex" :params="params" :content="content"></course-list>
					<article-list ref="mescrollItem1" :i="1" :index="tabIndex" :params="params" :content="content">
					</article-list>
					<question-list ref="mescrollItem2" :i="2" :index="tabIndex" :params="params" :content="content">
					</question-list>
				</block>

	</view>
</template>

<script>
	let history = 'history'
	import lmlKeyWord from '@/pages/lml-search/components/lml-keyword.vue'//热门推荐 历史记录
	import tabBar from '@/components/tabBar/tabBar.vue'
	export default {
		components: {
			lmlKeyWord,
			tabBar
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
				this.TagHandler()
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
			TagHandler(obj) {

				
				this.content = obj && obj.value ? obj.value : this.content
				this.searched = true
				this.storageHistory()
				// this.$nextTick(() => {
				// 	this.$util.throttle(() => {
				// 		this.$refs[`mescrollItem${this.tabIndex}`].search()
				// 	})
				// })
			},
			// 关键字保存本地 ++++++++++++++
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


			// storageHistory() {
			// 	const key = 'history_list'
			// 	uni.getStorage({
			// 		key, // 等价于 key: key,
			// 		success: (res) => { //注意箭头函数
			// 			// console.log('获取成功', res.data);
			// 			// 查询到原历史记录，当前输入的是否存在，不存在添加到第1个元素，存在
			// 			不添加
			// 			this.content && res.data.indexOf(this.content) < 0 &&
			// 				res.data.unshift(this.content)
			// 			// 保存到历史记录
			// 			uni.setStorageSync(key, res.data)
			// 		},
			// 		fail: (error) => { //注意箭头函数
			// 			// 没有历史数据。
			// 			// 当前有输入内容，直接保存，注意是数组
			// 			this.content && uni.setStorageSync(key, [this.content])
			// 		}
			// 	})
			// },










		}
	}
</script>

<style lang="scss">

</style>
