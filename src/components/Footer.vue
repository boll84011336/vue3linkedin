<template>
  <footer class="d-flex">
    <!-- Footer content goes here -->
    <div class="logo">
      <img alt="logo" src="@/assets/logo.png" />
    </div>
    <nav class="d-flex">
      <!-- 上下兩塊 -->
      <div class="nav_title_block">
        <h6>Navigation</h6>
        <div class="nav_title_content d-flex">
          <div class="nav_body">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Portfolio</p>
          </div>
          <div class="nav_body middle">
            <p>Talent Solutions</p>
            <p>Marketing Solutions</p>
            <p>Sales Solutions</p>
            <p>Safery Center</p>
          </div>
          <div class="nav_body">
            <p>Community Guidelines</p>
            <p>Privacy & Terms </p>
            <p>Mobile App</p>
          </div>
        </div>
        <!-- <h6></h6>
        <h6></h6>
        <h6 class="fast_access_title">Fast access</h6>
        <h6 class="language_title">Language</h6> -->
      </div>

      <div class="block2">
        <h6 class="fast_access_title">Fast access</h6>
        <div class="fast_access_body one d-flex">
          <div class="questions">
            <a class="">Questions?</a>
            <img src="../assets/help.png" alt="Questions">
          </div>
        </div>
        <div class="fast_access_body mt-3">
          <div class="settings">
            <a class="">Settings?</a>
            <img src="../assets/settings.png" alt="Settings">
          </div>
        </div>
      </div>

      <div class="block3">
        <h6 class="language_title">Language</h6>
        <div class="language_options">
          <select name="" id="">
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="jp">日本語</option>
          </select>
        </div>
      </div>

      

      <!-- <div>
        <div class="Navigation d-flex">

          <div class="fast_access">
            <div class="nav_body">
              <div class="questions">
                <a class="me-4">Questions?</a>
                <img src="../assets/bell.png" alt="Questions">
              </div>
            </div>
            <div class="nav_body mt-3">
              <div class="settings">
                <a class="me-4">Settings?</a>
                <img src="../assets/bell.png" alt="Settings">
              </div>
            </div>
          </div>

          <div class="language">
            <div class="nav_body">
              <select name="" id="">
                <option value="en">English</option>
                <option value="zh">中文</option>
                <option value="jp">日本語</option>
              </select>
            </div>
          </div>
        </div>
        
        
      </div> -->
    </nav>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  // Component logic goes here
};
</script>

<style lang="scss" scoped>
  footer {
    background-color: #fff;
    height: 215px;
    padding: 30px 130px;
  }
  
  .logo {
    margin-right: 69px;
  }

  nav {
    text-align: left;
    padding: 0px
  }

  .nav_title_block {
    width: 485px;
    h6 {
      font-weight: 700;
      margin-bottom: 30px;
    }
  }

  .nav_body {
    width: 135px;
    font-size: 13px;
    p {
      margin-bottom: 10px;
    }
  }

  .middle {
    margin-left: 35px;
    margin-right: 45px;
  }

  .block2 {
    width: 170px;
    margin-left: 65px;
    margin-right: 60px;
  }
  
  .fast_access_title, .language_title {
    margin-bottom: 23px;
    font-weight: 700;
  }

  .fast_access_body {
    width: 170px;
    height: 32px;
    border: 1px solid #0275B1;
    border-radius: 4px;
    .questions {
      a {
        text-decoration: none;
        padding: 11px 43px 10px 15px;
      }
      img {
        width: 16px;
      }
    }
    .settings {
      a {
        text-decoration: none;
        padding: 11px 58px 10px 15px;
        color:#0275B1;
      }
      img {
        width: 16px;
      }
    }
   
  }

  .one {
    background-color: #0275B1;
    a {
      color:#fff;
    }
  } 
 
  .block3 {
    width: 270px;
  }

  .language_options {
    select {
      width: 270px;
      height: 32px;
      border: 1px solid #F0F0F0;
    }
  }
  


/* Component styles go here */
</style>