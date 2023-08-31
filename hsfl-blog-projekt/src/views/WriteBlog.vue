<template>
  <div class="write-blog">
    <h2>Blog verfassen</h2>
    <form @submit.prevent="submitPost">
      <textarea class="title-input" v-model="blogtitle" placeholder="Schreiben Sie hier ihren Titel rein"></textarea>
      <textarea v-model="blogContent" placeholder="Schreiben Sie hier Ihren Blogbeitrag..."></textarea>
      <button type="submit">Absenden</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      blogtitle: '',
      blogContent: ''
    };
  },
  methods: {
    async submitPost() {
      // Erstelle ein BlogPostViewModel-Objekt für die Anfrage
      const postData = {
        Title: this.blogtitle,
        Inhalt: this.blogContent
      };
      
      try {
        // Sende die Daten an den Server
        await axios.post('https://localhost:7123/blog', postData);

        // Zurücksetzen der Eingabefelder nach erfolgreichem Post
        this.blogtitle = '';
        this.blogContent = '';
        
        // Aktualisieren der Benutzeroberfläche oder Weiterleitung
        // je nach Anforderungen
      } catch (error) {
        console.error('Fehler beim Posten des Blogbeitrags:', error);
        // Hier kannst du auf einen Fehler reagieren, z.B. Fehlermeldung anzeigen
      }
    }
  }
}
</script>

  
  <style scoped>
  .write-blog {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
  .title-input {
  width: 100%;
  height: 20px;
  line-height: 18px;
  padding: 10px;
  margin: 10px 0;
  font-size: 20px;
  font-weight: bold;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
 
  textarea {
    width: 100%;
    padding: 10px;
    height: 200px;
    margin: 10px 0;
    min-height: 5px;
    resize: vertical; /* Erlaubt das vertikale Anpassen des Textbereichs */
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  

  button {
    padding: 10px 15px;
    background-color: rgb(238, 117, 3);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  </style>
  