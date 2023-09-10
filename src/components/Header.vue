<!-- <script setup>
import Burger from './Burger.vue' -->
<!-- </script> -->


<template>
    <div class="header__container">
        <h1 class="logo">ТВІЙLIFE.</h1>
        <!-- <Burger /> -->

   git 
    </div>
    
    
</template>

<style scoped>
.header__container {
  width: 100%;
}
ul {
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: rgb(206, 201, 201);
    margin-bottom: 50px;
}

li {
    font-size: 24px;
    color: black;
    list-style: none;
    margin-right: 20px;
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
  font-size: 18px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
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
