<template>
    <div>
      <button @click="toggleMenu" class="burger-button">&#9776;</button>
      <ul v-if="isOpen" class="mobile-menu">
        <li>
          <div class="dropdown">
            <div>Здоров'я <span class="arrow-down"></span></div>
              <div class="dropdown-content">
                <a href="#">Здоров'я</a>
                <a href="#">Здоров'я</a>
                <a href="#">Здоров'я</a>
              </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Дім і побут <span class="arrow-down"></span></div>
              <div class="dropdown-content">
                <a href="#">Дім і побут</a>
                <a href="#">Дім і побут</a>
                <a href="#">Дім і побут</a>
              </div>
            </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Харчування <span class="arrow-down"></span></div>
              <div class="dropdown-content">
                <a href="#">Харчування</a>
                <a href="#">Харчування</a>
                <a href="#">Харчування</a>
            </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Спорт <span class="arrow-down"></span></div>
              <div class="dropdown-content">
                <a href="#">Спорт</a>
                <a href="#">Спорт</a>
                <a href="#">Спорт</a>
              </div>
          </div>
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
  /* Стилі для бургер-меню */
  .burger-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .mobile-menu {
    display: none;
    list-style-type: none;
    padding: 0;
  }
  
  .mobile-menu li {
    margin: 10px 0;
  }
  
  /* Відображення меню при активному бургер-меню */
  .mobile-menu:active {
    display: block;
  }
  </style>