<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">Benutzername:</label>
        <input v-model="username" id="username" class="form-input" placeholder="Benutzername" />
      </div>
      <div class="form-group">
        <label for="password">Passwort:</label>
        <input type="password" v-model="password" id="password" class="form-input" placeholder="Passwort" />
      </div>
      <button type="submit" class="submit-button">Anmelden</button>
    </form>
    <div v-if="loginStatus !== null" class="login-status">
      {{ loginStatusMessage }}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      const loginData = {
        username: this.username,
        password: this.password
      };

      axios.get('https://localhost:7123/api/blog/users')
        .then(response => {
          const users = response.data;
          const user = users.find(u => u.benutzernamen === loginData.username && u.passwort === loginData.password);
          
          if (user) {
            localStorage.setItem('loggedInUsername', user.benutzernamen); // Speichere den Benutzernamen im Local Storage
            console.log('Anmeldung erfolgreich', user);
          } else {
            console.error('Anmeldung fehlgeschlagen: Benutzer nicht gefunden oder falsches Passwort');
          }
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Benutzerdaten', error);
        });
    }
  }
};
</script>



<style scoped>
.login {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
}

.login h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>

