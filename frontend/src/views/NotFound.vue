<template>
  <div class="not-found">
    <h1 class="glow-hover">404 - Page Not Found</h1>
    <p class="glow-hover">Sorry, the page you are looking for does not exist.</p>
    <router-link to="/">
      <button class="glow-button">Back</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  font-size: 18px;
}

.glow-hover {
  transition: text-shadow 0.3s ease-in-out;
}

.glow-hover:hover {
  text-shadow: 0 0 10px rgba(255, 77, 77, 0.8);
}

h1 {
  color: #ff4d4d;
}

p {
  color: #ffffff;
}

.glow-button {
  border: 1px solid black;
  padding: 10px 20px;
  font-size: 1em;
  background-color: #1a1a1a;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.glow-button:hover {
  border-color: #ff4d4d;
  background-color: #ff4d4d;
  color: white;
  box-shadow: 0 0 10px rgba(255, 77, 77, 0.8);
}
</style>