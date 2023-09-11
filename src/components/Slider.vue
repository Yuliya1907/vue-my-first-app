<template>
  <div class="slider-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(image, index) in images"  :key="index">
            <div class="slide-image" :style="{ backgroundImage: `url(${image})` }"></div>   
        </div>  
      </div>
      <div class="swiper-pagination"></div>
      <!-- <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div> -->
    </div>
   
  </div>
</template>
  
  <script>
  import Swiper from 'swiper/bundle';

  import 'swiper/swiper-bundle.css';
  export default {
    data() {
      return {
        images: [
           'public/assets/images/food1.jpg',
           'public/assets/images/food2.png' ,
           'public/assets/images/food3.jpg' ,
           'public/assets/images/food4.jpg' ,
        ],
      };
    },
    mounted() {
    new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    swiper.on('slideChange', () => {
      const slides = document.querySelectorAll('.swiper-slide');

      slides.forEach((slide, index) => {
        if (index === swiper.activeIndex) {
          slide.classList.remove('swiper-slide-prev', 'swiper-slide-next');
          slide.classList.add('swiper-slide-active');
        } else if (index < swiper.activeIndex) {
          slide.classList.remove('swiper-slide-next', 'swiper-slide-active');
          slide.classList.add('swiper-slide-prev');
        } else {
          slide.classList.remove('swiper-slide-prev', 'swiper-slide-active');
          slide.classList.add('swiper-slide-next');
        }
      });
    });
  },
};


  </script>
  
  
  <style scoped>

  .slider-container {
    max-width: 920px;
    width: 100%;
    height: 550px;
    position: relative;
    margin: 0 auto;
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .slide-image {
  max-width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center; 
  background-repeat: no-repeat; 
}

 .swiper-slide-next .slide-image {
   visibility: hidden;
 }

 .swiper-slide-prev .slide-image {
  visibility: hidden;
 }
  
  .swiper-pagination {
    display: flex;
    flex-direction: row;
    align-items: flex-end; 
    justify-content: flex-end;
  }
  
  @media (max-width: 1440px) {
  .slider-container {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
}
  </style>
  
