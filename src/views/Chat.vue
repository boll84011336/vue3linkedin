<script>
import { ref } from 'vue';
import ChatPerson from '@/components/ChatPerson.vue';

export default {
  components: { ChatPerson },
  setup() {
    const personMessageList = ref([
      {
        img: require('@/assets/chats/1.png'), name: "Darlene Black", message: "Hey, how is your project?",
        dotStyle: {
          background: "linear-gradient(180deg, #02B033 0%, #08A534 100%)",
          top: "217px"
        }
      },
      {
        img: require('@/assets/chats/2.png'), name: "Theresa Steward", message: "Hi, Dmitry! I have a work for you. We",
        dotStyle: {
          background: "#FFFFFF",
          border: "1.5px solid #02B033",
          top: "304px"
        }
      },

      { img: require('@/assets/chats/3.png'), name: "Brandon Wilson", message: "I am Russian and I am learning Engl" },
      {
        img: require('@/assets/chats/4.png'), name: "Kyle Fisher", message: "So, It’s up to you!",
        dotStyle: {
          background: "linear-gradient(180deg, #02B033 0%, #08A534 100%)",
          top: "390px"
        }
      },
      {
        img: require('@/assets/chats/5.png'), name: "Audrey Alexander", message: "When you got it?",
        dotStyle: {
          background: "#FFFFFF",
          border: "1.5px solid #02B033",
          top: "564px"
        }
      },
      { img: require('@/assets/chats/6.png'), name: "Design Conference", message: "Can you guys help me with it?" }
    ]);

    return {
      personMessageList
    };
  },
};
</script>

<template>
  <div class="chats d-flex">
    <div class="left">
      <!-- -->
      <h5>Chats</h5>

      <chat-person v-for="item in personMessageList" :key="item.name" :person="item" />
    </div>

    <div class="right">
      <div class="block1 d-flex justify-content-between">
        <div>
          <h6>Chat with<span class="txt-blue"> Kyle Fisher</span><span class="gray">last online: 4 hours ago</span></h6>
        </div>
        <div class="share">Shared media (12)</div>
      </div>
      <div class="message_box">
        <div class="message_left mt-2 pt-4">
          <img src="@/assets/chats/ms1.png" alt="">
        </div>
        <div class="message_right mt-2">
          <img src="@/assets/chats/ms2.png" alt="">
        </div>
        <div class="message_left mt-2">
          <img src="@/assets/chats/ms3.png" alt="">
        </div>
        <div class="message_right mt-2">
          <img src="@/assets/chats/ms4.png" alt="">
        </div>
      </div>

      <div class="input_message d-flex justify-content-between mt-5">
        <div>
          <input type="text" placeholder="Write your message">
        </div>
        <div class="send_btn">
          <a href="#"><img src="@/assets/sendbtn.png" alt="send"></a>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.chats {
  background-color: rgb(245, 247, 250);
  padding: 40px;
  padding-left: 130px;
  width: 1440px;

  .left {
    width: 290px;
    height: 560px;
    background-color: #fff;
    text-align: left;

    h5 {
      padding-top: 25px;
      padding-left: 30px;
      font-size: 12px;
      font-weight: 600;
      font-family: Gotham Pro;
    }
  }

  .right {
    margin-left: 40px;
    width: 850px;
    background-color: #fff;
    padding: 25px 30px 20px 28px;

    h6,
    .share {
      font-weight: 600;
    }

    .txt-blue {
      color: #0275B1;
    }

    .gray {
      font-weight: normal;
      margin-left: 15px;
      color: rgb(219, 219, 219)
    }

    .input_message {
      input {
        width: 750px;
        height: 53px;
        border: none;
        border-top: 1px solid rgb(219, 219, 219);
      }

      input:focus-visible {
        outline: none;
      }

      .send_btn {
        display: flex;
        align-items: center;

      }
    }

    .message_box {
      .message_left {
        text-align: left;
      }

      .message_right {
        text-align: right;
      }
    }

  }
}
</style>
