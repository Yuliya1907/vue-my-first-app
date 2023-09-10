<script setup>
import Header from './components/Header.vue' 
import ArticleCard from './components/Articles.vue' 
import FoodSection from './components/FoodSection.vue' 
import Slider from './components/Slider.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  

  <main>
    <header>
 
 <Header />
</header>
    <div class="article__container"> 
      <Slider />
      <div class="slider__articles">
        <article v-for="article in articles" :key="article.id">
        <img class="article__image" :src="article.image" :alt="article.image">
        <h3 class="article__caption">{{ article.caption }}</h3>
        <p>{{ article.text }}</p>
    </article>
      </div>
    </div>
    <div class="article__container"> 
      <ArticleCard /> 
    </div>
    <FoodSection />
    <div class="article__container"> 
      <ArticleCard /> 
    </div>
    
    <footer>
    <Footer />
  </footer>
  </main>
  
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
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!Doloribus, minus!',
        },
        {
          id: 4,
          image: './../assets/images/family.jpg',
          caption: 'Caption 4',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
      ],
    };
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.article__container {
  width: 1440px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.slider__articles {
  margin-left: 30px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.container {
 
}

article {
  width: 300px;
  margin-bottom: 30px;

}
.article__caption {
  font-weight: 700;
}

.article__image {
  width: 90%;
  height: 70%;
}
</style>
