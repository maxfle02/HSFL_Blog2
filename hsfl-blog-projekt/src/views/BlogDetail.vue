<template>
    <div v-if="blog">
      <h1>{{ blog.title }}</h1>
      <p>{{ blog.content }}</p>
    </div>
  </template>
  <script>
  export default {
    props: ['id'],
    data() {
      return {
        blog: null // Dies wird später durch einen tatsächlichen Blog-Eintrag ersetzt
      };
    },
    created() {
      // Hier sollten Sie die Logik haben, um den Blog-Eintrag basierend auf `this.id` zu erhalten
      // Für jetzt als einfaches Beispiel:
      this.blog = this.getBlogById(this.id);
        // ... andere Daten
      }
    }
  
  </script>
  
  