<template>
  <div id="app">
  <div class="header">
    <h1>HSFL-Blog</h1>
    <p>Blog der Hochschule Flensburg</p>
  </div>
  <div class="topnav">
    <a href="#">Startseite</a>
    <a href="#">Profil</a>
    <a href="#">Gespeicherte</a>
    <a href="#" style="float:right">Log out</a>
      </div>
      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h2>Borussia Dortmund wird Deutscher Meister im Erbsenzählen</h2>
            <h5>VencedorParis, May 27, 2023</h5>
            <p>Super Spiel gegen Mainz 05</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div class="card">
            <h2>Thomas Tuchel entlassen</h2>
            <h5>Brazzo69, May 27, 2024</h5>
            <p>Kuriose Szene. Thomas Tuchel darf früher von der Hochzeit seiner Tochter gehen und ist bei der Triple-Feier nun dabei</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
      </div>
      
      <div class="footer">
        <h3>Sergey Hellwig & Max Flemming</h3>
      </div>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      posts: [
        { title: 'Borussia Dortmund wird Deutscher Meister im Erbsenzählen', author: 'VencedorParis', date: 'May 27, 2023', content: 'Super Spiel gegen Mainz 05' },
        { title: 'Thomas Tuchel entlassen', author: 'Brazzo69', date: 'May 27, 2024', content: 'Kuriose Szene. Thomas Tuchel darf früher von der Hochzeit seiner Tochter gehen und ist bei der Triple-Feier nun dabei' }
      ]
    };
  }
}
</script>



<style scoped>
  
  * {
      box-sizing: border-box;
  }
  body {
    font-family: Arial;
    padding: 10px;
    background: #f1f1f1;
  }

  .header h1 {
    font-size: 70px; 
}


.header {
    padding: 10px;
    text-align: center;
    background: white;
    color: black;
  }

  .topnav {
    overflow: hidden;
    background-color: #6545f7;
  }

  .topnav a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  .leftcolumn {   
    float: left;
    width: 100%;
  }

  .row::after {
    content: "";
    display: table;
    clear: both;
  }

  .card {
    background-color: white;
    padding: 20px;
    margin-top: 20px;
  }
  .rightcolumn {
    float: left;
    width: 25%;
    background-color: #f1f1f1;
    padding-left: 20px;
  }

  .footer {
    padding: 20px;
    text-align: center;
    background: #ddd;
    margin-top: 20px;
  }

  .topnav a:hover {
    background-color: #ddd;
    color: black;
  }

</style>
