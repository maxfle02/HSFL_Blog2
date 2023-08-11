<template>
  <div class="home">
    
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


