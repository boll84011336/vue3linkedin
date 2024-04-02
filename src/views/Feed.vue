<script>
// import { defineComponent } from '@vue/composition-api';
import { ref } from 'vue';

export default({
  setup() {
    const visitors = ref([
      { img: require('@/assets/feed/Photo(1).png'), name:"Darlene Black", text:"HR-manager, 10 000 connec..." },
      { img: require('@/assets/feed/Photo(2).png'), name:"Theresa Steward", text:"iOS developer"  },
      { img: require('@/assets/feed/Photo(3).png'), name:"Brandon Wilson", text:"Senior UX designer"  },
      { img: require('@/assets/feed/Photo(4).png'), name:"Kyle Fisher", text:"Product designer at Com..."  },
      { img: require('@/assets/feed/Photo(5).png'), name:"Audrey Alexander", text:"Team lead at Google"  }
    ]);
    
    return {
      visitors
    };
  },
});
</script>

<template>
  <div class="feed d-flex">
    <div class="feed_container">
      <div class="add_post">
        <h6>New Post</h6>
        <hr>
        <div class="d-flex">
          <textarea placeholder="What's on your mind?" id="" cols="30" rows="10"></textarea>
          <div class="sendbtn"><a href="#"><img src="@/assets/sendbtn.png" alt="send"></a></div>
        </div>
      </div>

      <div class="sort">
        SORT BY: TRENDING
      </div>

      <div class="posts">
        <div class="post_div">
          <div class="post">
            <h6><span class="t-blue">Ted Bell, Annette Nguyen</span> and <span class="t-blue">Cody Hawkins</span> liked this</h6>
          </div>

          <div class="person d-flex">
            <div class="photo"><img src="@/assets/feed/person1.png" alt="person"></div>
            <div class="txt">
              <div class="title">Theresa Steward</div>
              <div class="desc">iOS developer</div>
            </div>
          </div>

          <div class="post_content">
            <div class="content">
              What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).
            </div>
            <div>
              <a href="#" class="show_more">READ MORE</a>
            </div>
          </div>

          <div class="share_block d-flex">
            <div class="like_message d-flex">
              <div class="like">
                <img src="@/assets/feed/like.png" alt="">
              </div>
              <div class="message">
                <img src="@/assets/feed/message.png" alt="">
              </div>
            </div>
            <div class="share">
              <img src="@/assets/feed/share.png" alt="">
            </div>
          </div>
        </div>

        <div class="post_div">
          <!-- 第二筆貼文 -->
          <div class="post">
            <h6><span class="t-blue"> Audrey Alexander</span> comment this <span class="t-blue"></span> liked this</h6>
          </div>
        
          <div class="person d-flex">
            <div class="photo"><img src="@/assets/feed/person2.png" alt="person"></div>
            <div class="txt">
              <div class="title">Kyle Fisher</div>
              <div class="desc">Product designer at Commandor Corp.</div>
            </div>
          </div>

          <div class="post_content">
            <div class="content">
              <p> How’s your day going, guys?</p>
              <img src="@/assets/feed/bigphoto.png" alt="">
            </div>
            <div>
              <a href="#" class="show_more">READ MORE</a>
            </div>
          </div>

          <div class="share_block d-flex">
            <div class="like_message d-flex">
              <div class="like">
                <img src="@/assets/feed/a2.png" alt="">
              </div>
              <div class="message">
                <img src="@/assets/feed/a1.png" alt="">
              </div>
            </div>
            <div class="share">
              <img src="@/assets/feed/share.png" alt="">
            </div>
          </div>
        </div>

        <!-- 第三筆貼文 -->
        <div class="post_div">
          <div class="post">
            <h6><span class="t-blue"> Audrey Alexander</span> comment this <span class="t-blue"></span> liked this</h6>
          </div>
        
          <div class="person d-flex">
            <div class="photo"><img src="@/assets/feed/Photo(5).png" alt="person"></div>
            <div class="txt">
              <div class="title">Audrey Alexander</div>
              <div class="desc">Team lead at Google</div>
            </div>
          </div>

          <div class="post_content">
            <div class="content">
              The bun runs along the road and meets a wolf. «Little bun, little bun, I want to eat you!» says the wolf. «I ran away from Grandfather, I ran away from Grandmother, I ran away from the hare. And I can run away from you, grey wolf!» says the bun and runs away.
            </div>
            <div>
              <a href="#" class="show_more">READ MORE</a>
            </div>
          </div>

          <div class="share_block d-flex">
            <div class="like_message d-flex">
              <div class="like">
                <img src="@/assets/feed/a3.png" alt="">
              </div>
              <div class="message">
                <img src="@/assets/feed/a4.png" alt="">
              </div>
            </div>
            <div class="share">
              <img src="@/assets/feed/share.png" alt="">
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
  .feed {
    background-color: rgb(245, 247, 250);
    padding: 40px;
    padding-left: 130px;
    width: 1440px;
    .feed_container {
      width: 850px;
      .add_post {
        margin-bottom: 33px;
        text-align: left;
        background-color: #fff;
        h6 {
          padding-top: 25px;
          padding-left: 30px;
          font-weight: 700;
        }
        textarea {
          width: 850px;
          height: 80px;
          border: none;
          padding-left: 30px;
          color:#181818;
          font-size: 26px;
        }
        .sendbtn {
          padding-top: 10px;
          padding-right: 30px;
        }
      }

      .sort {
        padding-top: 23px;
        padding-bottom: 23px;
        font-size: 13px;
        font-weight: 600;
      }
      
      .posts {
        text-align: left;
        background-color: rgb(245, 247, 250);
        .post_div {
          background-color: #fff;
          margin-bottom: 40px;
          .post {
            text-align: left;
            
            h6 {
              font-size: 12px;
              padding: 15px;
              padding-bottom: 30px;
              margin: 0;
            }
          }
        }
       
      }

      .person {
        width: 186px;
        margin-left: 30px;
        .photo {
         margin-right: 15px;
          img {
            width: 52px;
          }
        }

        .txt {
          .title {
            font-size: 14px;
            font-weight: 600;
          }

          .desc {
            font-size: 10px;
          }
        }
      }
      .post_content {
        margin-left: 30px;
        margin-top: 15px;
        margin-right: 30px;
        .content {
          font-size: 14px;
          font-family: Gotham Pro;
        }
        .show_more {
          text-decoration: none;
          color: #0275B1;
          display: block;
          font-size: 14px;
          font-weight: 600;
          margin-top: 15px;
          margin-bottom: 20px;
        }
      }

      .share_block {
        margin-left: 30px;
        padding-bottom: 18px;
        .like {
          margin-right: 60px;  
        }
        .share{
          margin-left: 596px;
          margin-right: 30px;
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
          .left_title {
          }
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
    
  }



</style>
