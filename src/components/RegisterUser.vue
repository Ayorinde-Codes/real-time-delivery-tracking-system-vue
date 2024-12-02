<template>
  <form @submit.prevent="registerUser">
    <input v-model="name" placeholder="Name" required />
    <input v-model="email" placeholder="Email" type="email" required />
    <input v-model="password" placeholder="Password" type="password" required />
    <button type="submit">Register</button>
  </form>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await api.post("/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });
        alert(response.data.message);
      } catch (error) {
        console.error(error);
        alert("Failed to register user");
      }
    },
  },
};
</script>
