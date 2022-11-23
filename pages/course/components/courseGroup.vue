<template>
	<!-- 套餐 -->
	<view class="group">
		<view class="group-item" v-for="(item,index) in groupList" :key="index">
			<view class="title">
				{{item.title}}
				</view>
				<view class="itemList" v-for="(ele,i) in item.list">
					<courseItem :item="ele" ></courseItem> 
				</view>
				<view class="pic">
					<text v-if="item.groupPrice">￥{{item.groupPrice}}</text>
					<text :class="{s:item.groupPrice}" >￥{{item.totalPrice}}</text>
					<text class="purchase">购买套餐</text>
					
				</view>
			</view>
	</view>
</template>

<script>
	// '@/components/course-item/course-item.vue'
	import courseItem from "@/components/courseItem/courseItem.vue"
	export default {
		components:{
			courseItem
		},
		props: {
			groupList: {
				type: Array,
				default: () => {
					return [{
						groupPrice: 326.96,
						id: 1,
						title: "色算道车电半共动——组合套餐",
						totalPrice: 554.53,
						list: [{
								commTotal: 300,
								id: 10,
								isFree: 0,
								mainImage: "/static/images/banner2.jpg",
								nickName: "梦老师",
								priceDiscount: 407.72,
								priceOriginal: 683.86,
								studyTotal: 696,
								title: "直接研们论下复毛被间切民。",
								totalTime: "04:13:33",
								userId: 28,
								userImage: "http://dummyimage.com/88x31",
							},

							{
								commTotal: 127,
								id: 11,
								isFree: 0,
								mainImage: "/static/images/banner1.jpg",
								nickName: "梦老师",
								priceDiscount: 178.27,
								priceOriginal: 574.44,
								studyTotal: 316,
								title: "应安次究以江地都老走头确装个适。",
								totalTime: "06:58:09",
								userId: 21,
								userImage: "http://dummyimage.com/250x250",
							},
							{
								commTotal: 248,
								id: 12,
								isFree: 0,
								mainImage: "/static/images/banner3.jpg",
								nickName: "梦老师",
								priceDiscount: 353.44,
								priceOriginal: 594.78,
								studyTotal: 372,
								title: "教对易四意何联老造习不圆真使。",
								totalTime: "17:39:56",
								userId: 14,
								userImage: "http://dummyimage.com/240x400",
							}
						],
					}]


				}
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.group{
		padding-bottom: 120rpx;
	}
	.group-item{
	margin: 18px 15px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 0 10px 0  #ccc;
    padding: 0 10px;
	.title{
		padding: 20rpx 0 10rpx 0;
	}
	.pic{
		border-top: 1px solid #ccc;
		padding: 10rpx 0;
		font-size: 40rpx;
		color: #fa1e18;
		font-weight: 900;
		text{
			margin-right: 10rpx;
		}
		.s{
			color: #a0a0a0;
			font-size: 28rpx;
			text-decoration:line-through;
		}
		.purchase{
			
			position: absolute;
			font-size: 36rpx;
			right: 80rpx;
		}
	}
	}
   
</style>
