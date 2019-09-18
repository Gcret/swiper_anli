<template>
	<div class="heads">
			<van-swipe :autoplay="3000" indicator-color="white">
			  <van-swipe-item v-for="img in data">
			  	<img class="tu" :src="img.imageUrl"/>
			  </van-swipe-item>
			</van-swipe>	
	</div>
</template>

<script>
	import axios from 'axios';
	export default{
		name:'Home',
		data(){
			return{
				data:[]
			}
		},
		mounted(){
			axios.get('http://net-music.penkuoer.com/banner').then(data=>{
				this.data=data.data.banners
			})
			
		},
	}
</script>

<style scoped="">
	.tu{
		width:100vw;
		height:200px;
	}
</style>