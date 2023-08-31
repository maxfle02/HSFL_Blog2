<template>
    <div class="write-blog">
      <h2>Blog verfassen</h2>
      <textarea class="title-input" v-model="blogtitle" placeholder="Schreiben Sie hier ihren Titel rein"></textarea>
      <textarea v-model="blogContent" placeholder="Schreiben Sie hier Ihren Blogbeitrag..."></textarea>
      <button @click="submitPost">Absenden</button>
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
      try {
  const response = await axios.post('https://localhost:7123/api/blog', {
    title: this.blogtitle,
    content: this.blogContent
  });


        console.log(response.data);
        alert('Blog-Eintrag erfolgreich hinzugefügt');

        this.blogtitle = '';
        this.blogContent = '';
      } catch (error) {
        console.error('Fehler beim Hinzufügen des Blog-Eintrags:', error);
        alert('Fehler beim Hinzufügen des Blog-Eintrags');
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
  