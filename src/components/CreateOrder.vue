<template>
  <div>
    <h1>Create Order</h1>
    <form @submit.prevent="createOrder">
      <label for="customerId">Customer ID:</label>
      <input type="number" v-model="customerId" id="customerId" required />

      <button type="submit">Create Order</button>
    </form>

    <p v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      customerId: "",
      message: "",
    };
  },
  methods: {
    async createOrder() {
      try {
        const response = await api.post("/orders", {
          customer_id: this.customerId,
        });
        this.message = response.data.message;
      } catch (error) {
        console.error(error);
        this.message = "Failed to create order. Please try again.";
      }
    },
  },
};
</script>
