<template>
	<div class="d-flex info first">
		<div class="photo"><img :src="person.img" :alt="person.name"></div>
		<div class="script">
				<p class="f-14">{{ person.name }}</p>
				<p class="f-12">{{ person.message }}</p>
		</div>
	</div>
</template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      person: Object, //接收父層來的資料
    },
  };
  </script>
  
  <style lang="scss" scoped>
		.info {
			padding-left: 30px;
			height:87px;
			.photo {
				width: 52px;
				margin-right: 15px;
			} 
			.script {
				p {
					margin: 0;
				}
				.f-14 {
					font-size: 14px;
					font-weight: 700;
				}
				.f-12 {
					font-size: 12px;
					color: grey;
				}
			}
		}
		.first {
			height: 87px;
			padding-top: 10px;
		}
 
  </style>
  