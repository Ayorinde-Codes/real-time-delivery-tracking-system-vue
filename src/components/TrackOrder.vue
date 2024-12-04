<template>
  <div>
    <h1>Track Order</h1>
    <input v-model="orderId" placeholder="Enter Order ID" required />
    <button @click="trackOrder">Track</button>

    <ul v-if="locations.length">
      <li v-for="(location, index) in locations" :key="index">
        Latitude: {{ location.latitude }}, Longitude: {{ location.longitude }}
      </li>
    </ul>
  </div>
</template>

<script>
import api from "../services/api";

export default {
  data() {
    return {
      orderId: "",
      locations: [],
    };
  },
  methods: {
    async trackOrder() {
      try {
        const response = await api.get(`/track/${this.orderId}`);
        this.locations = response.data.locations;
      } catch (error) {
        console.error(error);
        alert("Failed to track order. Please try again.");
      }
    },
  },
};
</script>
