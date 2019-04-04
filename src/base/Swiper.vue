<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="" style="max-height: 60%;max-width: 60%;"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  /* eslint-disable */
  export default {
    name: 'carouse',
    data() {
      return {
        swiperOption: {
          autoplay: true,
          speed: 400,
          loop: true,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    props: ['swiperSlides']//this.swiperSlides
  }
</script>
