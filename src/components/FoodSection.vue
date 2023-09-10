<template>
    <h2 class="food__caption">Харчування</h2>
    <div class="food__container">
       <div class="food__article food__article--1">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
       <div class="food__article food__article--2">Lorem ipsum dolor, sit amet consectetur adipisicing dolor sit elit. Animi!</div>
       <div class="food__article food__article--3">Lorem ipsum dolor sit amet consectetur.</div>
       <div class="food__article food__article--4">Lorem ipsum dolor sit amet consectetur adipisicing.</div> 
    </div>
</template>

<style scoped>
.food__caption {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
}

.food__container {
  width: 1440px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 48px;
}
.food__article {
    display: flex;
    padding: 15px;
    width: 570px;
    height: 350px;
    gap: 30px;
    text-align: left;
    align-items: flex-end;
    border-radius: 30px 30px;
    color: rgb(235, 239, 243);
    text-shadow: rgb(7, 7, 7) 1px 0 10px;
    font-size: 18px;
    font-weight: 500;
    background-size: cover;
    background-repeat: no-repeat;
    margin:0 30px 30px 0;
}
    .food__article--1 {
        background-image: url(./public/assets/images/food1.jpg);
    }

    .food__article--2 {
        background-image: url(./../assets/images/food2.png);
    }

    .food__article--3 {
        background-image: url(./../assets/images/food3.jpg);
    }

    .food__article--4 {
        background-image: url(./../assets/images/food4.jpg);
    }


</style>