<template>
    <div class="header__container">
        <h1 class="logo">ТВІЙLIFE.</h1>
    <div>
      <ul role="menu">
        <li>
          <div class="dropdown">
            <div>Здоров'я</div>
              <div class="dropdown-content">
                <a href="#">Здоров'я</a>
                <a href="#">Здоров'я</a>
                <a href="#">Здоров'я</a>
              </div>
            </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Дім і побут</div>
              <div class="dropdown-content">
                <a href="#">Дім і побут</a>
                <a href="#">Дім і побут</a>
                <a href="#">Дім і побут</a>
              </div>
            </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Харчування</div>
              <div class="dropdown-content">
                <a href="#">Харчування</a>
                <a href="#">Харчування</a>
                <a href="#">Харчування</a>
              </div>
          </div>
        </li>
        <li>
          <div class="dropdown">
            <div>Спорт</div>
              <div class="dropdown-content">
                <a href="#">Спорт</a>
                <a href="#">Спорт</a>
                <a href="#">Спорт</a>
              </div>
          </div>
        </li>
    </ul>
    </div>
    </div>
    
    
</template>

<style scoped>
ul {
    width: 1440px;
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
</style>
