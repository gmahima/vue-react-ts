<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ExampleReactComponentInVue />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import ExampleReactComponent from "./components/Example.react";
import { ReactInVue } from "vuera-ts";
const ExampleReactComponentInVue = ReactInVue(ExampleReactComponent);
export default Vue.extend({
  name: "App",
  components: {
    // HelloWorld,
    ExampleReactComponentInVue,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
