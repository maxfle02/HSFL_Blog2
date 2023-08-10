<template>
  <div class="home">
    <button @click="createNewPost">New Post</button> <!-- Neuer Button -->
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    createNewPost() {
      // Code, um einen neuen Beitrag zu erstellen oder zur Beitragserstellungsseite zu navigieren
      console.log('New Post Button was clicked!');
      alert('Klappt')
    }
  }
}
</script>
<style>
.home button {
  position: absolute;
  top: 200px;
  left: 10px;
  padding: 10px 15px;
  background-color: #42b983; /* Farbe des Links */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.home button:hover {
  background-color: #357a65; /* Dunklere Farbe beim Überfahren */
}

</style>
