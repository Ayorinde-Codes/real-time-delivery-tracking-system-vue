<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/create-order">Create Order</router-link>
      <router-link to="/track-order">Track Order</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

a {
  text-decoration: none;
  color: blue;
}
</style>
