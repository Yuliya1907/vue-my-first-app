<template>
  <div class="container">
    <article v-for="article in articles" :key="article.id">
      <img class="article__image" :src="article.image" :alt="article.image">
      <h3 class="article__caption">{{ article.caption }}</h3>
      <p>{{ article.text }}</p>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        {
          id: 1,
          image: './../assets/images/kachelya.jpg',
          caption: 'Caption 1',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptas.',
        },
        {
          id: 2,
          image:  './../assets/images/man.jpg',
          caption: 'Caption 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 3,
          image: './../assets/images/women.jpg',
          caption: 'Caption 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 4,
          image: './../assets/images/family.jpg',
          caption: 'Caption 4',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 1,
          image: './../assets/images/kachelya.jpg',
          caption: 'Caption 1',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptas.',
        },
        {
          id: 2,
          image:  './../assets/images/man.jpg',
          caption: 'Caption 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 3,
          image: './../assets/images/women.jpg',
          caption: 'Caption 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
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
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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