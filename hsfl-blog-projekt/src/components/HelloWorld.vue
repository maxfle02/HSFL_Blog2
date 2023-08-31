<template>
  <div class="row">
    <div class="leftcolumn">
      <div class="card" v-for="post in blogPosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <h4>{{ post.autor }}, {{ formatDate(post.createdAt) }}</h4> <!-- Verwendung der formatDate-Methode -->
        <p>{{ post.inhalt }}</p>
        <div class="blog-actions">
          <button @click="likePost(post.id)"><i class="fas fa-thumbs-up"></i>Gefällt mir</button>
          <button @click="commentPost(post.id)"> <i class="fas fa-comment"></i>Kommentieren</button>
          <button @click="bookmarkPost(post.id)"><i class="fas fa-bookmark"></i>Speichern</button>
          <h4>Likes: {{ post.likes }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  mounted() {
    this.fetchBlogPosts();
  },
  methods: {
    async fetchBlogPosts() {
      try {
        const response = await axios.get('https://localhost:7123/blog');
        this.blogPosts = response.data;
      } catch (error) {
        console.error('Fehler beim Abrufen der Blog-Posts:', error);
      }
    },
    formatDate(dateTime) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateTime).toLocaleDateString(undefined, options);
    },
    async likePost(postId) {
      try {
        await axios.post(`https://localhost:7123/like/${postId}`);
        const updatedPost = this.blogPosts.find(post => post.id === postId);
        if (updatedPost) {
          updatedPost.likes += 1;
        }
      } catch (error) {
        console.error('Fehler beim Liken des Beitrags:', error);
      }
    },
  }
};
</script>




<style scoped>
h2 {
margin-top: 0px ;
margin-bottom: -18px;
text-decoration: underline;

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
  border: 1px solid #ff8000;
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
.blog-actions button i {
  margin-right: 5px;
  color: red;
}


</style>
