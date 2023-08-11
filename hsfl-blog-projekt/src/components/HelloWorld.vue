<template>
  <div class="row">
    <div class="leftcolumn">
      <div class="card">
        <h2>Borussia Dortmund wird Deutscher Meister</h2>
        <h5>VencedorParis, May 27, 2023</h5>
        <p>Super Spiel gegen Mainz 05</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <div class="blog-actions">
            <button @click="likePost">Gefällt mir</button>
            <button @click="commentPost">Kommentieren</button>
            <button @click="bookmarkPost">Speichern</button>
          </div>
      </div>
      
      <div class="card">
        <h2>Thomas Tuchel entlassen</h2>
        <h5>Brazzo69, May 27, 2024</h5>
        <p>Danke für alles Thomas</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <div class="blog-actions">
            <button @click="likePost">Gefällt mir</button>
            <button @click="commentPost">Kommentieren</button>
            <button @click="bookmarkPost">Speichern</button>
          </div>
      </div>
    
    </div>
  </div>
</template>

<script>
export default {
name: 'HelloWorld',
props: {
  msg: String

},
    methods: {
        likePost() {
       
            console.log("Beitrag geliked!");
            alert('Post wurde geliket')
        },
        commentPost() {
        
            console.log("Kommentier-Option ausgewählt!");
            alert('Post wird kommentiert')
        },
        bookmarkPost() {
       
            console.log("Beitrag gebookmarked!");
            alert('Beitrag gebookmarked!')
        }
    }
}
</script>


<style scoped>
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
.card {
  
  text-align: left;
  margin: 50px;
  margin-left: 30px;
  margin-right: 350px;
  border: 1px solid #000;
  border-radius: 30px;
  padding: 20px;  

}

button {
  border-radius: 2px;

  border-color: #000;
  border-color: orange;
  padding: 6px;
  border-left: #000;
  border-right: #000;
  border-bottom: #000;
 
  
}
.blog-actions {
    display: flex;
   

    gap: 10px;
    border-radius: 55px;
}


</style>
