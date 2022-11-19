import request from '@/utils/request.js'

const grtCategorylist =()=>{
	return request({
		url:"/article/api/category/label/list",
	})
}

export default {
	grtCategorylist
}