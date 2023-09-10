import './assets/main.css'

import { createApp } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

// // Додайте іконки до бібліотеки FontAwesome
// library.add(fas);

// // Реєструйте компонент FontAwesomeIcon глобально, якщо ви бажаєте використовувати його глобально
// Vue.component('font-awesome-icon', FontAwesomeIcon);


createApp(App).mount('#app')
App.use(Swiper);
App.use(SwiperSlide);
