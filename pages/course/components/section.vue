<template>
	<!-- 章节 -->
	<view class="lmlSection">
		<view class="lmlList" v-for="(item,index) in sectionList">
			<view class="lmlTitle">
			第{{index+1}}章	{{item.name }}
			</view>
			<view class="lmlItem" v-for="(ele,i) in item.sectionList" :key="i">
				<text class="iconfont icon-roundrightfill"></text><text>{{index+1}}-{{i+1}}</text>
				<text class="lmlName">{{ele.name}}</text>
				<text class="lmlSee" v-if="ele.isFree==1">试看</text>
				
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			sectionList: {
				type: Array,
				default: () => {
					return [{
						id: 10,
						name: "效教度",
						sectionList: [{
							id: 1,
							isFree: 0,
							name: "质方至位其都学日",
							videoUrl: "http://admin.mengxuegu.com/video/hls/git.m3u8",
						}, {
							id: 2,
							isFree: 1,
							name: "厂问其格生他商委转必易新商",
							videoUrl: "http://baobab.kaiyanapp.com/api/v1/playUrl?vid=164016&resourceType=video&editionType=low&source=aliyun&playUrlType=url_oss",

						}]
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
.lmlSection{
	.lmlList{
		padding: 0 30rpx;
		.lmlTitle{
			font-weight: 900;
			font-size: 36rpx;
			margin: 10rpx;
			padding: 30rpx 0;
		}
		.lmlItem{
			padding: 20rpx 0;
			border: 1px solid #f5f5f8;
			text{
				margin-right: 20rpx;
			}
			
			.lmlSee{
				float: right;
				font-size: 26rpx;
				color: #1b88ff;
			}
		}
	}
	
}
</style>
