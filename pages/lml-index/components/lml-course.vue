<template>
	<listList :name="name" :word="word">
		<courseItem :item="item" v-for="(item,index) in courseData" 
		:key="index"></courseItem>
	</listList>
</template>

<script>
import listList from "@/pages/lml-index/components/lml-list.vue"
import courseItem from "@/components/courseItem/courseItem.vue"

export default {
	props : {
		name : {
			type : String,
			default : ""
		},
		word : {
			type : String,
			default : ""
		},
		courseData : {
			type : Array,
			default : () => []
		}
	},
	components : {
		listList,
		courseItem
	}
}
</script>

<style>
</style>