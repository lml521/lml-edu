// 详情页面 
import request from '@/utils/request.js'

// 获取详情
const  gitCourseList=(id)=>{
	return request({
		url:`/course/api/course/${id}`,
	})
}
// 获取章节 数据 
const gitSectionList=(id)=>{
	return request({
		url:`/course/api/chapter/section/list/${id}`
	})
}

export default{
	gitCourseList,
	gitSectionList
	
}