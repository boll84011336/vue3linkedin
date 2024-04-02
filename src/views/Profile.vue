<script>
// import { defineComponent } from '@vue/composition-api';
import { ref } from 'vue';

export default ({
  setup() {
    const visitors = ref([
      { img: require('@/assets/feed/Photo(1).png'), name: "Darlene Black", text: "HR-manager, 10 000 connec..." },
      { img: require('@/assets/feed/Photo(2).png'), name: "Theresa Steward", text: "iOS developer" },
      { img: require('@/assets/feed/Photo(3).png'), name: "Brandon Wilson", text: "Senior UX designer" },
      { img: require('@/assets/feed/Photo(4).png'), name: "Kyle Fisher", text: "Product designer at Com..." },
      { img: require('@/assets/feed/Photo(5).png'), name: "Audrey Alexander", text: "Team lead at Google" }
    ]);

    return {
      visitors
    };
  },
});
</script>

<template>
  <div class="home_page d-flex">
    <div class="left">
      <div class="profile_container">
        <div class="bg_icon_block">
          <div class="arrow_img">
            <img src="@/assets/profile/upload.png" alt="Arrow Icon" width="16" height="16"> <!-- 新增的小图标 -->
          </div>
          <div class="edit_btn">
            <img src="@/assets/profile/edit.png" alt="edit" class="edit" width="16" height="16">
            <span>EDIT PROFILE</span>
          </div>
          <div class="dot_btn">
            <img src="@/assets/profile/dot.png" alt="dot" width="24" height="24">
          </div>
          <div class="person_img">
            <img src="@/assets/profile/person.png" alt="">
          </div>
        </div>
        <div class="bgsize">
          <img src="@/assets/profile/bg.png" alt="bg">
        </div>

        <!-- 自我介紹 -->
        <div class="info">
          <div class="name_block d-flex">
            <div class="name">
              <span>Dmitry Kargaev</span>
              <img src="@/assets/profile/Logo.png" alt="">
            </div>
            <div class="send">
              <img src="@/assets/profile/arrow_send.png" alt="">
              <span>Saint Petersburg, Russian Federation</span>
            </div>
          </div>
          <!-- 描述 -->
          <div class="descript">
            <span> Freelance UX/UI designer, 80+ projects in web design, mobile apps (iOS & android)</span>
            <p> and creative projects. Open to offers.</p>
          </div>
          <!-- 按鈕 -->
          <div class="button_info">
            <button class="contact">CONTACT INFO</button>
            <button>1,043 connections</button>
          </div>
        </div>
      </div>

      <div class="button_others">
        <div class="buttons">
          <button class="bt1">PROFILE</button>
          <button class="">Activity & interests</button>
          <button class="">Articles (3)</button>
        </div>
      </div>

      <div class="block2">
        <div class="about">
          <h6>About</h6>
          <p>I'm more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative
            projects, such as landing pages or unusual corporate websites. </p>
          <a href="#" class="show_more">SEE MORE</a>
        </div>
      </div>

      <div class="block3">
        <div class="project">
          <div class="title">
            <span class="project_title">Project</span>
            <span class="project_total"> 3 of 12 </span>
          </div>
          <div class="content">
            <div class="cards">
              <div class="card">
                <img src="@/assets/project/card3.png" alt="">
                <div class="project_name">Zara redesign concept</div>
                <div class="project_script">UX/UI design, 15.07.2019</div>
              </div>
              <div class="card center">
                <img src="@/assets/project/card1.png" alt="">
                <div class="project_name">SCTHON event brand identity</div>
                <div class="project_script">Graphic design, 03.31.2019</div>
              </div>
              <div class="card">
                <img src="@/assets/project/card2.png" alt="">
                <div class="project_name">Drozd. Brand identity. 2016</div>
                <div class="project_script">Graphic design, 03.04.2016</div>
              </div>
            </div>
            <div class="show_all">
              <a href="#" class="show_more">SHOW ALL (12)</a>
            </div>
          </div>
        </div>
      </div>

      <div class="block4">
        <div class="skill">
          <h5 class="title">Skill & Endoresments</h5>
          <div class="cards">
            <div class="card">
              <div class="skill_name">
                <span class="name">User experience (UX)</span>
                <span class="num">6</span>
              </div>
              <div><img src="@/assets/skill/users1.png" alt=""></div>
            </div>
            <div class="card">
              <div class="skill_name">
                <span class="name">User interface (UI)</span>
                <span class="num">7</span>
              </div>
              <div><img src="@/assets/skill/users2.png" alt=""></div>
            </div>
            <div class="card">
              <div class="skill_name">
                <span class="name">Brand identity</span>
                <span class="num">5</span>
              </div>
              <div><img src="@/assets/skill/users3.png" alt=""></div>
            </div>
          </div>
        </div>
        <div class="show_more">
          <a href="#" class="show_more">SHOW ALL (17)</a>
        </div>
      </div>

      <!-- Experience -->
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
                Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative
                landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.
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
                New experience with Upwork system. Work in next areas: UX/UI design, graphic design, interaction design,
                UX research.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block6">
        <div class="education">
          <h5>Education</h5>
          <div class="details">
            <div class="edu_img">
              <img src="@/assets/experience/Group.png" alt="">
            </div>
            <div class="edu_detail">
              <div class="title_edu">Moscow State Linguistic University</div>
              <div class="script_edu">
                <span>
                  Bachelor's degree Field Of StudyComputer and Information Systems Security/Information Assurance
                </span>
              </div>
              <div class="date_edu">
                <span>2013 — 2017</span>
              </div>
              <div class="course_edu">
                Additional English classes and UX profile courses​.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右側區塊 -->
    <div class="right">
      <div class="num_board">
        <div class="num_board_title">
          <span class="left_title">Your Dashboard</span>
          <span class="right_title t-blue">Go to stats</span>
        </div>
        <div class="items">
          <div class="item d-flex flex-column">
            <span class="number t-blue">367</span>
            <span class="item_text"> view today</span>
          </div>
          <div class="item d-flex flex-column">
            <span class="number t-blue">15</span>
            <span class="item_text">posts views</span>
          </div>
          <div class="item d-flex flex-column">
            <span class="number t-blue">9</span>
            <span class="item_text">search appereances</span>
          </div>
        </div>
      </div>

      <div class="view_people">
        <div class="title d-flex justify-content-between">
          <span>VISITORS</span>
          <span class="t-blue">VIEW ALL</span>
        </div>

        <div class="people_info">
          <div class="people_item d-flex mt-4" v-for="(item) in visitors" :key="item.name">
            <div class="people_img"><img :src="item.img" :alt="item.name"></div>
            <div class="people_txt">
              <p class="p1">{{ item.name }}</p>
              <p class="p2">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="like_block">
        <div class="title">
          <p>YOU MAY LIKE THESE COURSES</p>
        </div>
        <div class="content">
          <div class="img_block"><img src="@/assets/feed/like1.png" alt=""></div>
          <div class="img_block"><img src="@/assets/feed/like2.png" alt=""></div>
          <div class="img_block"><img src="@/assets/feed/like3.png" alt=""></div>
        </div>
        <div class="see_more t-blue">
          <p>SEE ALL RECOMENDATIONS</p>
        </div>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
.t-blue {
  color: #0275B1;
}

.home_page {
  background-color: rgb(245, 247, 250);
  padding: 40px;
  padding-left: 130px;
  width: 1440px;
}

.profile_container {
  width: 850px;
  background-color: #fff;
  position: relative;
}

.bgsize {
  margin-bottom: 30px;
}

.bg_icon_block {
  position: relative;

  .arrow_img {
    position: absolute;
    top: 20px;
    left: 30px;
    width: 36px;
    height: 36px;
    background-color: #fff;
  }

  .edit_btn {
    position: absolute;
    top: 20px;
    right: 76px;
    width: 132px;
    height: 36px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

    img {
      margin-right: 8px;
    }

    span {
      font-size: small;
    }
  }

  .dot_btn {
    position: absolute;
    top: 20px;
    right: 30px;
    width: 36px;
    height: 36px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .person_img {
    position: absolute;
    top: 160px;
    left: 30px;
  }
}

.info {
  .name_block {
    margin-left: 220px;

    .name {
      span {
        font-weight: 800;
        font-size: 16px;
      }

      img {
        margin-left: 8px;
        width: 16px;
        margin-right: 189px;
      }
    }

    .send {
      img {
        margin-right: 8px;
        width: 16px;
      }

      span {
        font-size: 14px;
      }
    }
  }

  .descript {
    text-align: left;

    span {
      margin-left: 220px;
      display: inline-block;
      margin-top: 8px;
    }

    p {
      margin-left: 220px;
    }
  }
}

.button_info {
  text-align: left;
  margin-left: 220px;

  button {
    width: 170px;
    height: 32px;
    border: 1px solid;
    border-radius: 4px;
    background-color: #fff;
    color: #0275B1;
    font-size: 14px;
    font-weight: 600;
    font-family: 'PingFang TC', 'Heiti TC', '微軟正黑體', 'sans-serif';
    margin-bottom: 35px;
  }

  button:active {
    background-color: #0275B1;
    color: #fff
  }

  .contact {
    margin-right: 35px;
  }

}

.button_others {
  padding-top: 21px;
  padding-bottom: 30px;
  width: 850px;
  display: flex;
  justify-content: start;

  .buttons {
    button {
      width: 240px;
      height: 40px;
      border: 1px solid #E7E7E7;
      border-radius: 6px;
      background-color: #fff;
      color: #0275B1;
      font-size: 14px;
      font-weight: 600;
      font-family: 'PingFang TC', 'Heiti TC', '微軟正黑體', 'sans-serif';
    }

    button:active {
      background-color: #0275B1;
      color: #fff
    }

    .bt1 {
      background-color: #0275B1;
      color: #fff
    }
  }
}

.block2 {
  width: 850px;
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;

  .about {
    text-align: left;

    h6 {
      font-size: 20px;
      font-weight: 800;
    }

    p {
      margin: 0;
      margin-top: 15px;
      width: 750px;
      font-family: "unset";
      font-size: 20px;
    }

    .show_more {
      text-decoration: none;
      color: #0275B1;
      display: block;
      margin-top: 20px;
      font-size: 14px;
      font-weight: 600;
    }
  }
}

.block3 {
  width: 850px;
  background-color: #fff;
  padding: 30px;
  margin-top: 20px;
  border-radius: 4px;

  .project {
    text-align: left;

    .title {
      .project_title {
        font-size: 20px;
        font-weight: 700;
        width: 75px;
      }

      .project_total {
        font-size: 24px;
        margin-left: 15px;
        color: #747474;
        font-family: cursive;
      }
    }

    .content {
      .cards {
        margin-top: 25px;
        display: flex;
        margin-bottom: 25px;

        .card {
          width: 250px;
          border: 0;

          img {
            width: 100%;
          }

          .project_name {
            margin-top: 15px;
            margin-bottom: 5px;
            font-weight: 700;
          }

          .project_script {
            font-size: 13px;
          }
        }

        .center {
          margin-left: 20px;
          margin-right: 20px;
        }
      }

      .show_more {
        text-decoration: none;
        color: #0275B1;
        display: block;
        margin-top: 20px;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
}

.block4 {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 850px;
  padding: 30px;
  background-color: #fff;
  text-align: left;

  .skill {
    .title {
      font-weight: 700;
      font-size: 20px;
      margin-bottom: 24px;
    }

    .cards {
      display: flex;

      .card {
        width: 250px;
        padding: 20px;
        border-color: #F4F4F4;

        .skill_name {
          margin-bottom: 5px;

          .name {
            font-size: 14px;
            font-weight: 600;
          }

          .num {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 14px;
            font-weight: 700;
            color: #0275B1;
          }
        }

      }
    }
  }

  .show_more {
    text-decoration: none;
    color: #0275B1;
    display: block;
    margin-top: 25px;
    font-size: 14px;
    font-weight: 600;
  }
}

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
          color: grey;
          margin-left: 10px;
        }

        .date_job {
          margin-bottom: 10px;
        }

        .date_job span:first-child {
          color: grey;
        }

        .date_job span:nth-child(2) {
          color: #0275B1;
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

.block6 {
  margin-top: 20px;
  width: 850px;
  background-color: #fff;
  padding: 30px;
  text-align: left;

  .education {
    h5 {
      margin-bottom: 25px;
    }

    .details {
      display: flex;

      .edu_img {
        width: 54px;
        height: 54px;
        margin-right: 16px;
      }

      .edu_detail {
        font-size: 13px;

        .title_edu {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .script_edu {
          margin-bottom: 5px;
        }

        .date_edu {
          color: gray;
          margin-bottom: 10px;
        }

        .course_edu {}
      }

    }
  }

}

.right {
  width: 290px;
  background-color: rgb(245, 247, 250);
  margin-left: 40px;
  text-align: left;

  .num_board {
    margin-bottom: 20px;
    background-color: #fff;
    height: 360px;
    padding: 20px 30px 0px 30px;

    .num_board_title {
      font-family: Gotham Pro;
      font-size: 16px;
      font-weight: 600;

      .left_title {}

      .right_title {
        padding-left: 27px;
      }
    }

    .items {
      .item {
        height: 71px;
        margin-bottom: 20px;

        .number {
          font-size: 52px;
        }

        .item_text {
          font-size: 14px;
          font-family: Gotham Pro;
          font-weight: 600;
        }
      }
    }
  }

  .view_people {
    margin-bottom: 20px;
    background-color: #fff;
    padding: 25px 32px 28px 30px;
    text-align: left;

    .title {
      font-size: 12px;
      font-family: Gotham Pro;
      font-weight: 600;
    }

    .people_info {
      .people_item {
        margin-bottom: 15px;

        .people_img {
          width: 52px;
          margin-right: 15px;
        }

        .people_txt {
          p {
            margin: 0;
          }

          .p1 {
            font-weight: 700;
            font-size: 14px;
          }

          .p2 {
            font-size: 10px;
          }
        }
      }
    }
  }

  .like_block {
    background-color: #fff;
    padding: 25px 32px 28px 30px;
    text-align: left;

    .title {
      font-size: 12px;
      margin-bottom: 40px;
      font-weight: 600;
    }

    .content {
      font-size: 14px;
      font-weight: 700;

      .img_block {
        margin-bottom: 20px;
      }
    }

    .see_more {
      font-weight: 700;
    }
  }

}
</style>
