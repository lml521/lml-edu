<template>
	<!-- 分类 -->
	<view class="lml-category">
		<scroll-view class="lml-left noScorll" scroll-y="true">
			<view class="lml-title column center">
				<view :class="{active : index === activeIndex}" @click.stop="lmlchangeActive(index)"
					v-for="(item,index) in categoryList">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<scroll-view class="lml-right noScorll" scroll-y="true">
			<view class="lml-item">
				<view v-for="(item,index) in listAll" @click="lmlhandelSearch(item)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import categoryApi from '@/api/category.js'
	export default {
		data() {
			return {
				categoryList: [], //分类数据 
				listAll: [], //子数据
				activeIndex: 0, //当前选中
			};
		},
		// 监听原生导航按钮事件
		onNavigationBarButtonTap(e) {
			// 取消按钮
			if (e.index === 0) {
				this.navTo("/pages/lml-search/lml-search")
			}
		},
		created() {
			this.lmlgrtCategorylist()
		},
		methods: {
			// 请求 分类数据 
			async lmlgrtCategorylist() {
				let res = await categoryApi.grtCategorylist()
				console.log(res)
				this.categoryList = res
				this.listAll = res[this.activeIndex].labelList
			},

			// 切换 
			lmlchangeActive(index) {
				this.activeIndex = index
				this.listAll = this.categoryList[index].labelList
			},

			// 点击每一项跳转  搜索 页面 
			lmlhandelSearch(item) {
				// console.log(item, this.value, 5)
				// if (this.value) {
				// 	this.handleSetSearch(item)
				// 	return
				// }

				this.navTo(
					`/pages/lml-search/lml-search?labelId=${item.id}&labelName=${item.name}&activeIndex=${this.activeIndex}`
					)
									this.handleSetSearch(item.name)
			},

			searchPageChangeLabel(item) {
				if (this.value.name !== item.name && this.value.name !== item.cname) {
					// 赋值给搜索面显示名称，如果有分类名就取分类名，没有就取标签名
					this.value.name = item.cname || item.name
					// 标签id
					this.value.id = item.id || null
					// 分类id (点击`不限`是分类id，)
					this.value.categoryId = item.categoryId || null
					// 解决父组件，搜索新数据
					this.$emit('searchByLabel', this.value)
				}
				this.value.active = false

			},
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.lml-category {
		width: 100%;
		height: 100%;
		display: flex;

		.lml-left {
			width: 200rpx;
			background-color: #F8F9FB;

			.lml-title {
				>view {
					color: #000;
					text-align: center;
					font-size: 30rpx;
					color: #888888;
					width: 200rpx;
					line-height: 40rpx;
					padding: 55rpx 30rpx;
					position: relative;

					&:before {
						position: absolute;
						content: '';
						width: 0rpx;
						height: 0rpx;
						border-right: 6rpx solid $uni-color-primary;
						border-radius: 30rpx;
						left: 0;
						top: 50%;
						transform: translateY(-50%);
						transition: .3s;
					}
				}

				.active {
					color: $uni-text-color-blue;
					font-size: 33rpx;
					font-weight: bold;

					&:before {
						height: 50rpx;
					}
				}
			}
		}

		.lml-right {
			background-color: #fff;
			padding-left: 15rpx;

			.lml-item {
				display: flex;
				flex-wrap: wrap;
				padding: 35rpx 0 0 10rpx;

				view {
					min-width: 160rpx;
					border: 1rpx solid #999;
					padding: 0 5rpx;
					margin: 15rpx 5rpx;
					border-radius: 30rpx;
					font-size: 25rpx;
					line-height: 60rpx;
					text-align: center;
				}
			}

		}

	}
</style>
