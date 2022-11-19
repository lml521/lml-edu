import request from '@/utils/request.js'

// 获取轮播图 
const  getBanner=()=>{
	return request({
		url:"/article/api/advert/show/1",
	})
}

// 请求 分类区  getCategory
const getCategory=()=>{
	return request({
	url:"/article/api/category/label/list"
	})
}

// 请求 热门推荐 数据 course/api/course/search
const getCourseList =(data)=>{
	return request({
		url:"/course/api/course/search",
		method:"POST",
		data
	})
}

export default{
	getBanner,
	getCategory,
	getCourseList
}