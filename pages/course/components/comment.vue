<template>
	<!-- 评论 -->
	<view class="comment-box">
		<view class="img" v-if="!commentList || commentList.length<=0" >
			<img src="/static/images/loading.gif" alt="">
			<view>展无数据</view>
		</view>
		<view class="item" v-for="(item,index) in commentList" :key="index">
			<view class="item-header">
				<view class="user-img">
					<img v-if="item.userImage" :src="item.userImage" alt="">
					<img v-else src="/static/tab/my.png" alt="">
				</view>
				<view class="userInfo">
					<h3>{{item.nickName}}</h3>
					<view class="time">
						{{item.createDate}}
					</view>

				</view>
				<i class="iconfont icon-haoping2 red" :class="{grey:item.isGood==0}"></i>
			</view>
			<view class="peview">
				{{item.content}}
			</view>

			<view class="lecturer" v-if="item.children">
				讲师回复：{{item.children.content}}

			</view>

		</view>

	</view>
</template>

<script>
	export default {

		props: {
			commentList: {
				type: Array,
				default: () => [{
						"id": "1",
						"parentId": "-1",
						"nickName": "萧强",
						"userImage": null,
						"isGood": 1, // 1好评，0差评
						"content": "很认可梦学谷，这套课程项目与企业开发流程功能一样",
						"createDate": Date.now(), //wx小程序不支持new Date()
						"children": null
					},
					{
						"id": "2",
						"parentId": "-1",
						"nickName": "江秀英",
						"userImage": "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
						"isGood": 0, // 1好评，0差评
						"content": "但非约事京或改各史习反候至百。",
						"createDate": "2008-03-12 09:08:06",
						"children": {
							"id": "3",
							"parentId": "2",
							"nickName": "李涛",
							"userImage": null,
							"content": "感谢你一直以来的支持！梦学谷-陪你学习，伴你梦想！",
							"createDate": "2008-03-12 09:08:06",
						}
					}
				]
			}
		},


		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.comment-box {
		.item {
			margin-top: 19px;
			border-bottom: .5px solid #efeff4;

			.item-header {
				position: relative;
				display: -webkit-box;
				display: -webkit-flex;
				display: flex;
				-webkit-box-align: center;
				-webkit-align-items: center;
				align-items: center;

				.user-img {
					margin: 20rpx;
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
					overflow: hidden;

					img {
						width: 100%;
						height: 100%;
					}
				}

				.userInfo {
					.time {
						font-size: 36rpx;
						color: #666;
					}
				}

				.iconfont {
					position: absolute;
					right: 30rpx;
				}

				.red {
					color: red;
				}


			}

			.peview {
				padding: 0 30rpx 10rpx 30rpx;
			}
			.lecturer{
				margin: 10rpx 30rpx;
				background-color: #f8f9fb;
				color: #a8acb5;
				padding: 10rpx;
			}
		}
	}
.img{
	text-align: center;
	margin-top: 200rpx;
}
	.grey {
		color: grey !important;
	}
</style>
