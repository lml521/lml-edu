<template>
	<!-- 热门推荐 -->
	<view class="box">
		<lmlList :name="name" :word="word">
		<swiper :style="{height:`${200*rows}rpx`}">
			<swiper-item v-for="(e,i) in column" :key="i">
				<view class="lml-swiper">
					<courseItem :item="item" v-for="(item,index) in courseData.slice(i*rows,(i+1)*rows)" 
					:key="item.id"></courseItem>
				</view>
			</swiper-item>
		</swiper>
			
		</lmlList>
	</view>
</template>

<script>
	import lmlList from '@/pages/lml-index/components/lml-list.vue'//标题 
	import courseItem from '@/components/courseItem/courseItem.vue'
	export default {
		components: {
			lmlList,
			courseItem
		},
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
				default: () =>[]
			},
			// 展示 轮播几列
			column: {
				type: Number,
				default: 2,
			},
			// 一列展示几个	
			rows: {
				type: Number,
				default: 5,
			}
		},
		
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	
</style>
