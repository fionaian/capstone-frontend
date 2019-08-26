<template>
  <div class="container">
    <h1>All Causes</h1>
    <div v-for="cause in causes">
      <h2>{{ cause.title }}</h2>
      <router-link v-bind:to="`/causes/${cause.id}`">More details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      causes: []
    };
  },
  created: function() {
    axios.get("/api/causes").then(response => {
      this.causes = response.data;
    });
  },
  methods: {}
};
</script>
