// 详情页面 
import request from '@/utils/request.js'

// 获取详情
const  gitCourseList=(id)=>{
	return request({
		url:`/course/api/course/${id}`,
	})
}

export default{
	gitCourseList,
	
}