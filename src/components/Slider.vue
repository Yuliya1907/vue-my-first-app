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
           './../assets/images/food1.jpg',
           './../assets/images/food2.png' ,
           './../assets/images/food3.jpg' ,
           './../assets/images/food4.jpg' ,
        ],
      };
    },
    mounted() {
    // Ініціалізуйте Swiper після того, як компонент буде вставлений у DOM
    new Swiper('.swiper-container', {
      slidesPerView: 1, // Кількість відображуваних слайдів одночасно
      spaceBetween: 20, // Відстань між слайдами
      pagination: {
        el: '.swiper-pagination', // Селектор для дотів
        clickable: true, // Зробити доти клікабельними
      },
    });
  },
};


  </script>
  
  
  <style scoped>
  /* Стилі для вашого слайдера тут */
  
  /* Задайте розміри слайдера */
  .slider-container {
    width: 870px;
    height: 550px;
    position: relative;
  
    /* Додайте інші стилі за вашими потребами, наприклад, фон, рамку і так далі */
  }

  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .slide-image {
  width: 100%;
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
  
 
  </style>
  
