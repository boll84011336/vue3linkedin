<script>
import { ref } from 'vue';

export default {
  setup() {
    const photos = ref([
      { img: require('@/assets/network/link.png'), text:"CONNECTIONS", num:1038 },
      { img: require('@/assets/network/disc.png'), text:"INVITATIONS", num:2 },
      { img: require('@/assets/network/archive.png'), text:"TEAMMATES" },
      { img: require('@/assets/network/users.png'), text:"GROUP", num:6 },
      { img: require('@/assets/network/layers.png'), text:"PAGES", num:28 },
      { img: require('@/assets/network/hash.png'), text:"HASHTAGS", num:8 }
    ]);
    
    return {
      photos
    };
  },
};
</script>

<template>
  <div class="network d-flex">
    <div class="left">
      <div class="photos">

        <div class="d-flex photo" v-for="(photo, index) in photos" :key="index">
          <div><img :src="photo.img" :alt="photo.text"></div>
          <span class="text">{{ photo.text }}</span>
          <span class="num">{{ photo.num }}</span>
        </div>
      </div>
    </div>

    <div class="right">
      <div class="button_others">
        <div class="buttons">
          <button class="bt1">Received</button>
          <button class="">sent</button>
        </div>
      </div>

      <!-- 聯絡人區塊 -->
      <div class="line-with-text d-flex align-items-center">
        <hr class="line">
        <div class="text">YOU HAVE<span class="t-blue ps-2">2 NEW CONNECTIONS</span></div>
        <hr class="line">
      </div>

      <div class="accept">
        <div class="new_connection d-flex align-items-center">
          <div class="personal d-flex">
            <div class="photo_block">
              <img src="@/assets/network/use1.png" alt="user1">
            </div>
            <div class="detail">
              <p class="title">Brandon Wilson</p>
              <p class="job">Senior UX designer</p>
              <p class="num t-blue">623 connections</p>
            </div>
          </div>

          <div class="invite_text">
            <span>Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?</span>
          </div>

          <div class="invite">
            <button class="btn_accept">ACCEPT</button>
            <button class="btn_decline">DECLINE</button>
          </div>
        </div>

        <!-- 第二個 -->
        <div class="new_connection d-flex align-items-center">
          <div class="personal d-flex">
            <div class="photo_block">
              <img src="@/assets/network/use2.png" alt="user1">
            </div>
            <div class="detail">
              <p class="title">Brandon Wilson</p>
              <p class="job">Senior UX designer</p>
              <p class="num t-blue">623 connections</p>
            </div>
          </div>

          <div class="invite_text">
            <span></span>
          </div>

          <div class="invite">
            <button class="btn_accept">ACCEPT</button>
            <button class="btn_decline">DECLINE</button>
          </div>
        </div>
      </div>

      <!-- ERCENT區塊 -->
      <div class="line-with-text d-flex align-items-center">
        <hr class="line">
        <div class="text">recent connections</div>
        <hr class="line">
      </div>
      
      <div class="recent_block">
        <div class="row-block">
          <div class="recent_person d-flex">
            <div class="recent_img"><img src="@/assets/network/re1.png" alt=""></div>
            <div class="recent_detail">
              <div class="title">Audrey Alexander</div>
              <div class="content">Team lead at Google</div>
              <div class="times">Yesterday, 14:30</div>
            </div>
          </div>

          <!-- 72 -->
          <div class="recent_person d-flex">
            <div class="recent_img"><img src="@/assets/network/re2.png" alt=""></div>
            <div class="recent_detail">
              <div class="title">Kyle Fisher</div>
              <div class="content">Product designer at Commandor Corp</div>
              <div class="times">Yesterday, 12:03</div>
            </div>
          </div>

        </div>
      </div>

      <div class="recent_block mt-3">
        <div class="row-block">
          <div class="recent_person d-flex">
            <div class="recent_img"><img src="@/assets/network/re3.png" alt=""></div>
            <div class="recent_detail">
              <div class="title">Darlene Black</div>
              <div class="content">HR-manager, 10 000 connections</div>
              <div class="times">26 aug, monday</div>
            </div>
          </div>

          <!-- 72 -->
          <div class="recent_person d-flex">
            <div class="recent_img"><img src="@/assets/network/re4.png" alt=""></div>
            <div class="recent_detail">
              <div class="title">Eduardo Russell</div>
              <div class="content">Full stack developer at Yandex</div>
              <div class="times">25 aug, sunday</div>
            </div>
          </div>

        </div>
      </div>

      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .t-blue {
    color: #0275B1;
  }
  .network {
    background-color: rgb(245, 247, 250);
    padding: 40px 130px;
    width: 1440px;
    .left {
      width: 290px;
      height: 306px;
      background-color: #fff;
      .photos {
        padding: 17px 30px;
        font-weight: 800;
        .photo {
          height: 33px;
          margin-bottom: 17px;
          img {
            width: 16px;
          }
          .text {
            font-size: 12px;
            padding-left: 9px;
          }
          .num {
            font-size: 12px;
           
            color:saddlebrown;
            margin-left: auto;
          }
        }
      }
    }

    .right {
      width: 851px;
      padding-left: 40px;
      .button_others {
        padding-bottom: 30px;
        width: 850px;
        display: flex;
        justify-content: start;
        .buttons {
          button {
            width:240px;
            height: 40px;
            border: 1px solid #E7E7E7;
            border-radius: 6px;
            background-color: #fff;
            color:#0275B1;
            font-size: 14px;
            font-weight: 600;
            font-family:'PingFang TC', 'Heiti TC', '微軟正黑體', 'sans-serif';
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
      .text {
        font-size: 13px;
      }
      .line {
        flex-grow: 1;
        border-top: 1px solid gray;
      }

      .accept {
        width: 850px;
        padding-top: 29px;
        .new_connection {
          height: 95px;
          background-color: #fff;
          margin-bottom: 10px;
          padding-left: 20px;
          .personal {
            width: 181px;
            .photo_block {
              width: 52px;
              margin-right: 15px;
            }
            .detail {
              p {
                margin: 0;
              }
              .title {
                font-size: 14px;
                font-weight: 700;
              }
              .job {
                font-size: 12px;
              }
              .num {
                font-size: 12px;
              }
            }
          }
          .invite_text {
            width: 300px;
            margin-left: 67px;
            margin-right: 44px;
            color:gray;
            font-size: 14px;
          }

          .invite {
            button {
              width: 91px;
              background-color: #0077B5;
              color:#fff;
              padding: 10px 20px;
              font-size: 12px;
              border: 1px solid #0077B5;
              border-radius: 4px;
            }
            .btn_accept {
              margin-right: 15px;
            }
            .btn_decline {
              background-color: #fff;
              color:#0077B5;
            }
          }

          
         
        }
      }
      
      .recent_block {
        width: 850px;
        .row-block {
          display: flex;
          .recent_person {
            text-align: left;
            padding: 20px 15px 10px 30px;
            width: 420px;
            margin-right: 10px;
            background-color: #fff;
            .recent_img {
              width: 52px;
            }
            .recent_detail {
              margin-left: 15px;
              position: relative;
              .title {
                font-size: 14px;
                font-weight: 700;
              }
              .content {
                font-size: 12px;
              }
            }
            .times {
              font-size: 12px;
              color:gray;
              position: absolute;
              bottom:-10px;
            }
          
          }
        }
      

      }


    }
  }
</style>
  
