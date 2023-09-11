<script setup>
import Burger from './Burger.vue'
</script>


<template>
    <div class="header__container">
        <h1 class="logo">ТВІЙLIFE.</h1>

    <div class="nav__container">
      <nav v-if="isLargeScreen">
      <ul role="menu">
        <li>
          <div class="dropdown">
            <div>Здоров'я <span class="arrow-down"></span></div>
              <div class="dropdown-content">
                <a href="#">Здоров'я 1</a>
                <a href="#">Здоров'я 2</a>
                <a href="#">Здоров'я 3</a>
              </div>
            </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Дім і побут <span class="arrow-down"></span></div>
              <div class="dropdown-content">
                <a href="#">Дім і побут 1</a>
                <a href="#">Дім і побут 2</a>
                <a href="#">Дім і побут 3</a>
              </div>
            </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Харчування <span class="arrow-down"></span></div>
              <div class="dropdown-content">
                <a href="#">Харчування 1</a>
                <a href="#">Харчування 2</a>
                <a href="#">Харчування 3</a>
              </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Спорт <span class="arrow-down"></span></div>
              <div class="dropdown-content">
                <a href="#">Спорт 1</a>
                <a href="#">Спорт 2</a>
                <a href="#">Спорт 3</a>
              </div>
          </div>
        </li>
    </ul>
  </nav>
  <div v-else>
      <Burger />
    </div>
    
    </div>
    
    </div>
    
    
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  computed: {
    isLargeScreen() {
      return window.innerWidth > 550;
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isOpen = false; // Закриваємо бургер-меню при зміні розміру вікна
    }
  }
};
</script>


<style scoped>
.header__container {
  width: 100%;
}

.nav__container {
    width: 100%;
    display:flex;
    justify-content: space-around;
    background-color: rgb(206, 201, 201);
    margin-bottom: 50px;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

li {
    font-size: 24px;
    color: black;
    list-style: none;
    margin-right: 20px;
}

@media (max-width: 768px) {
      li {
        font-size: 18px;
      }
    }

.logo {
    font-weight: 700;
    font-size: 50px;
    text-align: center;
    letter-spacing: -4px;

}

.nav__arrov {
    background-image: url(./../assets/images/arrowDown/png);
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  font-size: 16px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 10px 10px;
  z-index: 2;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
    background-color: #fff;
    text-decoration: underline;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.arrow-down::after {
  content: "\25BC"; /* Символ стрілки вниз */
  font-size: 12px;
  margin-left: 5px;
}
</style>
