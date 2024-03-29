<script>
import { ref } from 'vue';
import Company from '../components/Company.vue';


export default {
	components: {
    Company
	},
  setup() {
    const feature = ref();

    return {
      
    };
  },
};
</script>

<template>
  <div class="jobs">
    <div class="search_job">
      <div class="search_title">
				<p>Your dream job is here</p>
			</div>
			<div class="search_input d-flex">
				<div><input type="text" name="" id="" placeholder="Search Jobs"></div>
				<div class="search_img"><a href="#"><img src="@/assets/jobs/search.png" alt="search"></a></div>				
			</div>
    </div>

    <!-- Job list -->
		<Company />	
  </div>
</template>


<style lang="scss" scoped>
  .jobs {
    width: 1440px;
    background-color: rgb(245, 247, 250);
    padding: 40px;
    padding-left: 130px;
    .search_job {
			width: 850px;
			height: 135px;
			padding-top: 25px;
			padding-left: 30px;
			background-color: #fff;
			.search_title {
				border-bottom: 1px solid #f4f4f4;
				font-size: 12px;
				text-align: left;
				font-weight: 600;
				font-family: Gotham Pro;
			}
			.search_input {
				margin-top: 21px;
				justify-content: space-between;
				input {
					border: none;
					width: 730px
				}
				input:focus-visible {
					outline: none;
				}
				.search_img {
					width:32px;
					margin-right: 30px;
				}
			}
    }
  }

  

</style>
