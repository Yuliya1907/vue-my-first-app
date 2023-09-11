<script setup>
   import Slider from './Slider.vue'
</script>

<template>
   <div class="container"> 
      <Slider />
      <div class="slider__articles">
        <article v-for="article in articles" :key="article.id">
          <img class="article__image" :src="article.image" :alt="article.image">
          <h3 class="article__caption">{{ article.caption }}</h3>
          <p>{{ article.text }}</p>
        </article>
      </div>
    </div> 
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 4,
          image: './../assets/images/family.jpg',
          caption: 'Caption 4',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
        {
          id: 4,
          image: './../assets/images/family.jpg',
          caption: 'Caption 4',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    gap: 40px;
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        gap: 30px;
    }
}

.slider__articles {
  gap: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 0 auto;
}


article {
  width: 360px;
  height: 300px;
}

@media (min-width: 768px) {
    article {
        width: 300px;
    }
    .slider__articles {
        gap: 0;
    }
}
.article__caption {
  font-weight: 700;
}

.article__image {
  width: 90%;
  height: 60%;
  margin-bottom: 15px;
  transition: transform 0.3s;
}

.article__image:hover {
  transform: scale(1.05);
}
</style>