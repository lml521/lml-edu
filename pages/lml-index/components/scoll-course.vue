<template>
	<!-- 近期上新 -->
	<view>
		<lmlList :name="name" :word="word">
			<scroll-view class="lml-scroll noScorll" scroll-x="true">
				<view class="lml-scroll" v-for="(item,index) in courseData" :key="index">
					<courseItem :isColumn="true" :item="item"></courseItem>
				</view>
			</scroll-view>
		</lmlList>

	</view>
</template>

<script>
	import lmlList from '@/pages/lml-index/components/lml-list.vue' // 大盒子
	import courseItem from '@/components/courseItem/courseItem.vue' //小盒子

	export default {
		props: {
			name: {
				type: String,
				default: ""
			},
			word: {
				type: String,
				default: ""
			},
			courseData: {
				type: Array,
				default: () => []
			},
		},
		components: {
			lmlList,
			courseItem
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.lml-scroll {
		white-space: nowrap;
		height: 380rpx;

		.lml-scroll {
			display: inline-flex;
			width: 310rpx;
			background-color: #fff;
			padding: 0 10rpx;
			margin-right: 20rpx;
			border-radius: 20rpx;
			box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
		}
	}
</style>
