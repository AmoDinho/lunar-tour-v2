<template>
  <div id="app">
    <Nav />
    <Home />
  </div>
</template>

<script>
import Nav from "./components/navigation/Nav.vue";
import Home from "./pages/Home";
export default {
  name: "App",
  components: {
    Nav,
    Home
  }
};
</script>
