<template>
  <form @submit.prevent="loginUser">
    <input v-model="email" placeholder="Email" type="email" required />
    <input v-model="password" placeholder="Password" type="password" required />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await api.post("/login", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
      } catch (error) {
        console.error(error);
        alert("Login failed. Please try again.");
      }
    },
  },
};
</script>
