<template>
  <div class="header">
    <h1>HSFL-Blog</h1>
    <p>Blog der Hochschule Flensburg</p>
  </div>

  <nav>
    <div class="weight">
      <router-link to="/">Startseite</router-link> |
      <router-link to="/profile">Mein Account</router-link> |
      <router-link to="/bibliothek">Bibliothek</router-link>
    </div>
    <div>
      <router-link to="/login">Login</router-link> |
      <router-link to="/logging">Log Out</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
/* ... dein vorhandener CSS-Stil ... */
</style>

<style>
#app {
 font-family: Avenir, Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}


nav {
 
 display: flex; 
 justify-content: space-between;
 align-items: center;
 padding: 15px;
 background-color: #bad0f5;
 text-align: left;
}
.weight {
  font-size: 20px;
}

nav a {
 font-weight: bold;
 color: #2c3e50;
}

nav a.router-link-exact-active {
 color: #bf654e;
}

.header h1 {
   font-size: 50px;
   margin-bottom: 5px; 
   margin-top: 8px;
 }
 .header {
   margin-top: 0;
   padding: 2px;
   text-align: center;
   background: white;
   color: black;
   
 }
 .header p {
 margin-top: 0;

}

</style>