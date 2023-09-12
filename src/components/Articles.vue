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
          image: 'assets/images/kachelya.jpg',
          caption: 'Caption 1',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptas.',
        },
        {
          id: 2,
          image:  'assets/images/man.jpg',
          caption: 'Caption 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 3,
          image: 'assets/images/women.jpg',
          caption: 'Caption 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 4,
          image: 'assets/images/family.jpg',
          caption: 'Caption 4',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 1,
          image: 'assets/images/kachelya.jpg',
          caption: 'Caption 1',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptas.',
        },
        {
          id: 2,
          image:  'assets/images/man.jpg',
          caption: 'Caption 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 3,
          image: 'assets/images/women.jpg',
          caption: 'Caption 3',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, minus!',
        },
        {
          id: 4,
          image: 'assets/images/family.jpg',
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
  flex-direction: column;
  margin: 0 auto;
}

article {
  max-width: 360px; 
  height: 300px;
  margin-bottom: 30px;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  article {
    width: calc(50% - 20px);
    height: auto;
  }
}

@media (min-width: 1440px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  article {
    width: calc(25% - 20px); 
    /* height: auto; */
    margin-right: 20px;
  }
}


.article__caption {
  font-weight: 700;
}

.article__image {
  width: 90%;
  height: 70%;
  margin-bottom: 15px;
  transition: transform 0.3s;
}

.article__image:hover {
  transform: scale(1.05);
}


</style>