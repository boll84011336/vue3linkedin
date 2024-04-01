<script>
import { ref } from 'vue';
import Company from '../components/Company.vue';


export default {
	components: {
    Company
	},
  setup() {
		const companyList = ref([
			{ 
				img: require('@/assets/experience/2.png'), 
				title: "UX/UI designer", 
				companyName: "Upwork",
				Location: "Remote only",
				descript: "On Upwork you'll find a range of top freelancers and agencies, from developers and development agencies to designers and creative agencies, copywriters",
			},
			{ 
				img: require('@/assets/jobs/fb.png'),
			  title:"Product designer", 
			 	companyName: "Facebook",
				Location: "CA, USA",
				descript: "Founded in 2004, Facebook's mission is to give people the power to build community and bring the world closer together. People use our products to stay",
			},
			{ 
				img: require('@/assets/jobs/google.png'), 
				title:"Part-time UX designer", 
				companyName: "Google",
				Location: "International",
				descript: "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking."
			},
			{ 
				img: require('@/assets/jobs/linkined.png'), 
			  title:"Web designer",
				companyName: "LinkedIn",
				Location: "International",
				descript: "LinkedIn, the world's largest professional network. The mission of LinkedIn is simple: connect the world's professional.",
			}
		]);

		const newJobList = ref([
			{ 
				img: require('@/assets/jobs/ig.png'), 
			  title:"UI designer",
				companyName: "Instagram",
				Location: "CA, USA",
				descript: "Instagram is a photo and video-sharing social networking service owned by Facebook, Inc. ",
			},
			{ 
				img: require('@/assets/jobs/pi.png'), 
			  title:"Product designer",
				companyName: "Periscope",
				Location: "Remote only",
				descript: "eriscope is a live video streaming app for Android and iOS developed by Kayvon Beykpour and Joe Bernstein and acquired by Twitter before launch in 2015. ",
			}
		]);

    return {
      companyList,
			newJobList
    };
  },
};
</script>

<template>
  <div class="jobs">
    <div class="search_job mb-4">
      <div class="search_title">
				<p>Your dream job is here</p>
			</div>
			<div class="search_input d-flex">
				<div><input type="text" name="" id="" placeholder="Search Jobs"></div>
				<div class="search_img"><a href="#"><img src="@/assets/jobs/search.png" alt="search"></a></div>				
			</div>
    </div>

		<!-- 工作區塊 -->
		<div class="line-with-text d-flex align-items-center">
			<hr class="line">
			<div class="text"><span class="t-blue ps-2">JOBS FOR YOU</span></div>
			<hr class="line">
		</div>

    <!-- Job list -->
		<Company class="mt-4" v-for="item in companyList" :key="item.title" :company="item"/>
		
		<!-- 新工作區塊 -->
		<div class="line-with-text d-flex align-items-center">
			<hr class="line">
			<div class="text"><span class="t-blue ps-2">New Jobs</span></div>
			<hr class="line">
		</div>

		<!-- New Job list -->
		<Company class="mt-4" v-for="item in newJobList" :key="item.title" :company="item"/>

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
		.text {
			font-weight: 600;
			font-family: Gotham Pro;
		}
		.line {
			width: 360px;
			border-top: 1px solid gray;
		} 
  }

  

</style>
