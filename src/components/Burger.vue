<template>
    <div>
      <button @click="toggleMenu" class="burger-button">&#9776;</button>
      <ul v-if="isOpen" class="mobile-menu">
        <li><a class="menu__link menu__link--bold" href="#">
              Здоров'я<span class="arrow-down"></span>
            </a>
            <ul>
            <li><a class="menu__link" href="#">Здоров'я 1</a></li>
            <li><a class="menu__link" href="#">Здоров'я 2</a></li>
            <li><a class="menu__link" href="#">Здоров'я 3</a></li>
          </ul>
        </li>
        <li><a class="menu__link menu__link--bold"  href="#">
              Дім і побут<span class="arrow-down"></span>
            </a>
            <ul>
            <li><a class="menu__link" href="#">Дім і побут 1</a></li>
            <li><a class="menu__link" href="#">Дім і побут 2</a></li>
            <li><a class="menu__link" href="#">Дім і побут 3</a></li>
          </ul>
        </li>
        <li>
          <a class="menu__link menu__link--bold" href="#">
              Харчування<span class="arrow-down"></span>
          </a>
          <ul>
            <li><a class="menu__link" href="#">Харчування 1</a></li>
            <li><a class="menu__link" href="#">Харчування 2</a></li>
            <li><a class="menu__link" href="#">Харчування 3</a></li>
          </ul>
        </li>
        <li>
          <a class="menu__link menu__link--bold" href="#">
            Спорт<span class="arrow-down"></span>
          </a>
          <ul>
            <li><a class="menu__link" href="#">Спорт 1</a></li>
            <li><a class="menu__link" href="#">Спорт 2</a></li>
            <li><a class="menu__link" href="#">Спорт 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  
  <style scoped>
  
  .burger-button {
    margin-left: 12px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .mobile-menu {
    /* display: none; */
    list-style-type: none;
    padding: 0;
    width: 100%;
    height: 100vh;
  }
  
  .mobile-menu li {
    margin: 10px 0;
    color: black;
    font-weight: 500;
  }

  .menu__link {
    text-decoration: none;
    list-style-type: none;
    margin-left: 20px;
    color: black;
    font-size: 20px;
    
    background-color:rgb(206, 201, 201);
  }

  .menu__link--bold {
    font-weight: 500;
  }
  
  .menu__link:hover {
    text-decoration: underline;
  }
  .mobile-menu ul {
    margin-left: 20px;
    display: none;
    list-style-type: none;
  }
  
  .mobile-menu li:hover ul {
    display: block;
  }
  
  .mobile-menu li ul li {
    margin: 5px 0;
    font-weight: 200;
  }
  
  /* Відображення меню при активному бургер-меню */
  .mobile-menu:active {
    display: block;
  }

  .arrow-down::after {
    content: "\25BC"; /* Символ стрілки вниз */
    font-size: 12px;
    margin-left: 5px;
  }
  </style>