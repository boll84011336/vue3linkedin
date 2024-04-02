<template>
	<div class="d-flex info first">
		<div class="photo">
			<img :src="person.img" :alt="person.name">
			<div class="greenDot"></div>
		</div>
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
				.greenDot {
					width: 9px;
					height: 9px;
					border-radius: 50%;
					position: absolute;
					left: calc(51% - 9px / 2 - 515.5px);
					top: 219px;
					background: linear-gradient(180deg, #02B033 0%, #08A534 100%);
				}
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
  