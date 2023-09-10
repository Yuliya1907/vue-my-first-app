<template>
    <div class="footer">
    <div class="container">
        <h1 class="logo">ТВІЙLIFE.</h1>
        <div>
          <p>CONTACTS</p>
          <p>E-mail: example@gmail.com</p>
          <p>Phone: +380999555333</p>
          <p>Address: 58000, Chernivtsi, Central sq.</p>
        </div>
        <div>
            <p >SUSCRIBE FOR RECENT NEWS</p>
            <form class="subscription" action="post">
              <input class="input" type="email" placeholder="Enter your email">
              <button type="submit" class="btn">SUBSCRIBE</button>
            </form>
            
        </div>
        <div>
          <p>RIGHTS</p>
          <p>Terms</p>
          <p>Privacy</p>
          <p>Security</p>
        </div>
        
    </div>
    <h3>2023</h3>
</div>
</template>

<style scoped>
.footer {
  width: 100%;
  padding: 20px;
  background-color: rgb(206, 201, 201);
  display: flex;
  flex-direction: column;
}
.container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.logo {
    font-weight: 700;
    font-size: 50px;
    margin-right: 20px;
    letter-spacing: -4px;
}

h3 {
    font-weight: 700;
}

.btn {
  width: 200px;
  height: 30px;
  background-color: rgb(211, 235, 166);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px gray solid;
}

.subscription {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.input {
    margin-top: 5px;
    height: 30px;
    border-radius: 5px;
}

h3 {
    margin: 10px auto;
}
</style>