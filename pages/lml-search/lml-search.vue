<template>
	<!-- 搜索页面 -->
	<view>
		<!-- 热门推荐 历史记录 -->
		<lmlKeyWord ></lmlKeyWord>
		
	</view>
</template>

<script>
	import lmlKeyWord from '@/pages/lml-search/components/lml-keyword.vue'
	export default {
		components:{
			lmlKeyWord
		},
		data() {
			return {
				
			};
		},
		// 监听原生导航按钮事件
		onNavigationBarButtonTap(e) {
			// 取消按钮
			if (e.index === 0) {
				this.navBack()
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">

</style>
