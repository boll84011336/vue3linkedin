<template>
  <div>
    <div class="block5">
      <div class="company">
        <div class="details one_st">
          <div class="exp_img">
            <img :src="company.img" :alt="company.companyName">
          </div>
          <div class="exp_job_detail">
            <div class="title_job">{{ company.title }}</div>
            <div class="type_job">
              <span>{{ company.companyName}}</span>
              <span>{{ company.Location}}</span>
            </div>
            <div class="script_job">
              {{ company.descript }}
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
  props: {
    company: Object, //接收父層來的資料
  },
};
</script>

<style lang="scss" scoped>

  .block5 {
    width: 850px;
    text-align: left;
    .company {
      .details {
        display: flex;
        padding: 30px;
        background-color: #fff;
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
