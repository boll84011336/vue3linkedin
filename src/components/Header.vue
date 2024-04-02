<template>
  <header class="d-flex">
    <router-link class="logo" to="/">
      <img alt="logoImg" src="../assets/logo.png" />
    </router-link>

    <nav class="d-flex p-0">
      <div class="nav_item" v-for="link in headerLink" :key="link.url">
        <router-link class="navitem__text" :to=link.url>
          <img :alt=link.title :src=link.img />
          <span>{{ link.title }}</span>
        </router-link>
      </div>
      <!-- <div class="nav_item">
        <a class="navitem__text" href="/network">
          <img src="../assets/users.png" alt="">NETWORK
        </a>
      </div>
      <div class="nav_item">
        <a class="navitem__text" href="/jobs">
          <img src="../assets/briefcase.png" alt="">JOBS
        </a>
      </div>
      <div class="nav_item">
        <a class="navitem__text" href="##">
          <img src="../assets/message-square.png" alt="">CHAT
        </a>
      </div>
      <div class="nav_item">
        <a class="navitem__text" href="##">
          <img src="../assets/bell.png" alt="">NOTICES
        </a>
      </div> -->

      <div class="search">
        <div class="w-100 d-flex align-items-center">
          <img src="../assets/search.png" alt="search" />
          <input type="text" class="w-100" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </div>
    </nav>

    <div class="person">
      <div class="d-flex">
        <div class="personImg">
          <img src="@/assets/rectangle.png" alt="" />
        </div>
        <!-- 左右並排 -->
        <div class="d-flex flex-column intro">
          <div class="">
            <p class="mb-0 text-start fw-bold">D. Kargaev</p>
          </div>
          <div class="d-flex watchNum">
            <p class="view_quantity mb-0">367 views today</p>
            <p class="statistics ms-3 mb-0">+32</p>
          </div>
        </div>
      </div>
    </div>

    <div class="more">
      <div class="">
        <a href="#" class="d-flex flex-column align-items-center">
          <img src="@/assets/more.png" alt="" />OTHER
        </a>
      </div>
    </div>

    <!-- Your header content goes here -->
  </header>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "Header",
  setup() {
    const headerLink = ref([
      { img: require('@/assets/rss.png'), title: "FEED", url: "/feed" },
      { img: require('@/assets/users.png'), title: "NETWORK", url: "/network" },
      { img: require('@/assets/briefcase.png'), title: "JOBS", url: "/jobs" },
      { img: require('@/assets/message-square.png'), title: "CHAT", url: "/chat" },
      // { img: require('@/assets/bell.png'), title:"NOTICES", url: "/notices" },
    ])
    return {
      headerLink
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  color: #181818;
}

header {
  height: 80px;

  .logo {
    height: 80px;
    width: 130px;
    border-right: 1px solid #F4F4F4;
    margin-right: 13px;

    img {
      margin: 17px 38px;
      width: 46px;
      height: 46px;
    }
  }

  nav {
    .nav_item {
      width: 90px;
      height: 80px;
      padding: 17px 33px;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        font-size: medium;

        img {
          margin-bottom: 5px;
        }
      }
    }

    .search {
      width: 367px;
      display: flex;
      border-right: 1px solid #f4f4f4;
      padding-right: 20px;

      div {
        img {
          width: 24px;
          height: 24px;
          margin-right: 10px;
        }

        input {
          height: 30px;
          padding-left: 10px;
          border: none;
        }

      }
    }
  }

  .person {
    width: 330px;
    margin-left: 30px;
    margin-left: 30px;
    padding-top: 17px;
    border-right: 1px solid #f4f4f4;

    div {
      .personImg {
        margin-right: 15px;
      }

      .intro {
        .watchNum {
          .view_quantity {
            color: #747474;
          }

          .statistics {
            color: #02b033;
          }
        }
      }
    }
  }

  .more {
    width: 90px;
    height: 80px;
    padding: 17px 33px;
    border-right: 1px solid #f4f4f4;

    div {
      a {
        text-decoration: none;
        font-size: medium;
        font-weight: bold;

        img {
          width: 24px;
          height: 24px;
          margin-bottom: 5px;
        }
      }
    }

  }
}

.nav_item:nth-child(5) {
  margin-right: 20px;
  border-right: 1px solid #f4f4f4;
}

::placeholder {
  color: #CECECE;
}


/* Your component's styles go here */
</style>
