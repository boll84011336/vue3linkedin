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
  <div class="network">
    <div class="left">
      <div class="photos">

        <div class="d-flex photo" v-for="(photo, index) in photos" :key="index">
          <div><img :src="photo.img" :alt="photo.text"></div>
          <span class="text">{{ photo.text }}</span>
          <span class="num">{{ photo.num }}</span>
        </div>
      </div>
    </div>

    <div class="right"></div>
  </div>
</template>

<style lang="scss" scoped>
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
  }
</style>
  
