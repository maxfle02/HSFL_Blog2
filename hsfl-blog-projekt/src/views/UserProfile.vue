<template>
  <div class="profile">
    <div class="profile-card">
      <h2 class="profile-title">Mein Profil</h2>
      <p class="username">Benutzername: {{ loggedInUsername }}</p>
      <button class="change-password-button" @click="openChangePasswordModal">Passwort ändern</button>
    </div>

    <div v-if="isChangePasswordModalOpen" class="modal">
      <div class="modal-content">
        <h2 class="modal-title">Passwort ändern</h2>
        <form @submit.prevent="handleChangePassword">
          <input type="password" v-model="currentPassword" placeholder="Aktuelles Passwort" />
          <input type="password" v-model="newPassword" placeholder="Neues Passwort" />
          <button type="submit">Ändern</button>
        </form>
        <button class="close-modal-button" @click="closeChangePasswordModal">Schließen</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedInUsername: localStorage.getItem('loggedInUsername'),
      isChangePasswordModalOpen: false,
      currentPassword: '',
      newPassword: ''
    };
  },
  methods: {
    openChangePasswordModal() {
      this.isChangePasswordModalOpen = true;
    },
    closeChangePasswordModal() {
      this.isChangePasswordModalOpen = false;
      this.currentPassword = '';
      this.newPassword = '';
    },
    handleChangePassword() {
      // Hier kannst du die Logik für das Ändern des Passworts implementieren
      // Zum Beispiel eine API-Anfrage an deinen Backend-Server
      // Bei erfolgreicher Änderung könntest du eine Benachrichtigung anzeigen
      // und das Modal schließen
      this.closeChangePasswordModal();
    }
  }
};
</script>

<style scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.profile-card {
  padding: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  max-width: 500px;
  width: 100%;
}

.profile-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333333;
}

.username {
  font-size: 20px;
  margin-bottom: 30px;
  color: #666666;
}

.change-password-button {
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.change-password-button:hover {
  background-color: #0056b3;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}

.modal-title {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333333;
}

.close-modal-button {
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #ccc;
  color: #333;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.close-modal-button:hover {
  background-color: #999;
}
</style>
