<script>
// import { defineComponent } from '@vue/composition-api';

export default({
  setup() {
    

    return {
      
    };
  },
});
</script>

<template>
  <div class="feed">
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
        margin-bottom: 20px;
        text-align: left;
        background-color: #fff;
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
    
  }



</style>
