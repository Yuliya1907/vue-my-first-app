import './assets/main.css'

import { createApp } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import App from './App.vue'



createApp(App).mount('#app')
App.use(Swiper);
App.use(SwiperSlide);
