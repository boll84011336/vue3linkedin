<template>
  <div>
    <div class="block5">
      <div class="experience">
        <h5>Experience</h5>
        <div class="details one_st">
          <div class="exp_img">
            <img src="@/assets/experience/1.png" alt="">
          </div>
          <div class="exp_job_detail">
            <div class="title_job">Freelance UX/UI designer</div>
            <div class="type_job">
              <span>Self Employed</span>
              <span>Around the world</span>
            </div>
            <div class="date_job">
              <span>Jun 2016 — Present</span>
              <span>3 yrs 3 mos</span>
            </div>
            <div class="script_job">
              Work with clients and web studios as freelancer.  Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.
            </div>
          </div>
        </div>
        <!-- 第二塊 -->
        <div class="details">
            <div class="exp_img">
              <img src="@/assets/experience/2.png" alt="">
            </div>
            <div class="exp_job_detail">
              <div class="title_job">UX/UI designer</div>
              <div class="type_job">
                <span>Upwork</span>
                <span>International</span>
              </div>
              <div class="date_job">
                <span>Jun 2019 — Present</span>
                <span>3 mos</span>
              </div>
              <div class="script_job">
                New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design, UX research.
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const feature = ref();

    return {
      
    };
  },
};
</script>

<style lang="scss" scoped>

  .block5 {
    width: 850px;
    background-color: #fff;
    padding: 30px;
    text-align: left;
    .experience {
      h5 {
        margin-bottom: 25px;
        font-size: 20px;
        font-weight: 600;
      }
      .details {
        display: flex;
        .exp_img {
          width: 54px;
          height: 54px;
          margin-right: 16px;
        }
        .exp_job_detail {
          font-size: 14px;
          .title_job {
            font-weight: 600;
            margin-bottom: 10px;
          }
          .type_job {
            margin-bottom: 5px;
          }
          .type_job span:nth-child(2) {
            color:grey;
            margin-left: 10px;
          }
          .date_job{
            margin-bottom: 10px;
          }
          .date_job span:first-child {
            color:grey;
          }
          .date_job span:nth-child(2) {
            color:#0275B1;
            margin-left: 10px;
          }
          .script_job {
            font-size: 12px;
          }
        }
      }
      .one_st {
        margin-bottom: 25px;
      }
    }
  }
</style>
