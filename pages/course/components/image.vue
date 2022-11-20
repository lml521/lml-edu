<template>
	<view class="">
		<img :src="item" alt="" v-for="(item,index) in detailUrls" :key="index">
	</view>
</template>

<script>
	export default {
		props:{
			detailUrls:{
				type:Array,
				default :()=>{
					return [
						"https://img.alicdn.com/imgextra/i2/3603079088/O1CN01V8VO2y2H0M5Bx33L3_!!3603079088.jpg"
					]
				}
			}
			
		}
	}
</script>

<style lang="scss">
	img{
		width: 100%;
	}
</style>