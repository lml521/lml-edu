<template>
	<!-- 搜索 页面  综合排序   全部分类 组件-->
	<view class="lml-downBar row sticky-box">
		<view  class="one" @click="lmlHandleSort(item)" v-for="(item,index) in downBarList" :key="index">
			<view class="center" :class="{ active: item.active || (item.id || item.id === 0) }">
				<text>{{ item.name }}</text>
				<text class="iconfont icon-up" v-if="item.active"></text>
				<text class="iconfont icon-down1" v-if="!item.active"></text>
			</view>
		 <view class="lmlIitemList" v-show="item.active">
			<lmlCategory @searchByLabel="searchByLabel" class="lmlCategory" v-if="item.isCategory" :value="item">
				</lmlCategory> 
				<view v-else :class="{ active: e.name === item.name }" @click="lmlHandleChangeSort(item, e)" class="lmlName"
					v-for="(e, i) in item.list" :key="i">{{ e.name }}</view>
			</view> 
			<view v-if="item.active" class="lmlCover"></view>
		</view>
	</view>
</template>

<script>
	import lmlCategory from '@/pages/lml-category/lml-category.vue'
	export default {
		name: "down-bar",
		components: {
			lmlCategory
		},
		props: {
			params: {
				type: Object,
				default: () => {}
			},
			downBars: {
				type: Array,
				default: () => [{
						type: 'sort',
						name: '综合排序',
						active: false,
						list: [{
								id: null,
								name: '综合排序'
							},
							{
								id: 'new',
								name: '最新排序'
							},
							{
								id: 'hot',
								name: '热门排序'
							}
						]
					},
					{
						type: 'label',
						name: '全部分类',
						active: false,
						isCategory: true
					}
				]
			},
			
			},
			data() {
				return {
					downBarList: null
				};
			},
			created() {
				this.downBarList = this.downBars
			},
			// watch: {
			// 	params: {
			// 		handler(newVal, oldVal) {
			// 			if (newVal) {
			// 				const obj = this.downBars[this.downBars.length - 1]
			// 				obj.name = newVal.labelName
			// 				obj.id = newVal.labelId
			// 				obj.activeIndex = newVal.activeIndex
			// 			}

			// 		},
			// 		immediate: true,
			// 		deep: true
			// 	}
			// },
			
			methods: {
				
				lmlHandleSort(item) {
					this.downBarList.forEach(i => {
						i.active = (item.type === i.type) ? !item.active : false
					})
				},
				lmlHandleChangeSort(item, m) {
					if (item.name === m.name) {
						return
					}
					item.name = m.name
					item.id = m.id
					this.$emit("search", {
						[item.type]: item.id
					})
				},
				searchByLabel(label) {
					this.$emit("search", {
						labelId: label.id,
						categoryId: label.categoryId
					})
				}
			}
		}
</script>

<style lang="scss">
	.lml-downBar {
			background-color: #FFFFFF;
			font-size: 30rpx;
			line-height: 80rpx;
			z-index: 100;
		
			.lmlIitemList {
				background-color: #fff;
				position: absolute;
				left: 0;
				right: 0;
				z-index: 100;
		
				.lmlName {
					// padding-left: 108rpx;
					padding-left: 45rpx;
				}
		
				.lmlCategory {
					height: 580rpx;
				}
			}
		
			.active {
				color: $uni-text-color-blue;
			}
		}
		
		.sticky-box {
			position: -webkit-sticky;
			position: sticky;
			/* 其他浏览器 */
			top: var(--window-top);
		}
		
		.lmlCover {
			z-index: 99;
			position: fixed;
			left: 0;
			right: 0;
			// top : 170rpx;
			width: 100%;
			height: 100%;
			background-color: black;
			opacity: 0.2 !important;
		}
</style>
