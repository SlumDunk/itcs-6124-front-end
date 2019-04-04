<template>
  <div>
    <MHeader :back="true">homepage</MHeader>
    <div class="content" style="text-align: -webkit-center">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <Swiper :swiperSlides="sliders" style="width:80%; height: 100%;"></Swiper>
      </template>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import MHeader from '../base/MHeader.vue';
  import Swiper from '../base/Swiper.vue';
  import Loading from '../base/Loading.vue';
  import {getSliders} from "../api";

  export default {
    name: "Home",
    data() {
      return {
        sliders: [],
        loading: true
      }
    },
    components: {
      MHeader,
      Loading,
      Swiper
    },
    created() {
      this.getSlider();
    },
    methods: {
      async getSlider() {
        //给data起别名 对象中的属性名字必须和得到的结果名字一致
        this.sliders = await getSliders();
        console.log(this.sliders);
        this.loading = false;
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap; // 默认换行
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img {
          width: 100%;
        }
      }
    }
  }
</style>
