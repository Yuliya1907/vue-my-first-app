<script setup>
import Header from './components/Header.vue' 
import ArticleCard from './components/ArticleCard.vue' 
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
</style>
