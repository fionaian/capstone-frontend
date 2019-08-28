<template>
  <div class="container">
    <h1>All NPOs</h1>
    <div v-for="npo in npos">
      <h2>{{ npo.name }}</h2>
      <h3>{{ npo.cause_id }}</h3>
      <div v-for="cause in causes">
        <p>{{ cause.title }}</p>
      </div>
      <router-link v-bind:to="`/npos/${npo.id}`">More details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      npos: [],
      causes: []
    };
  },
  created: function() {
    axios.get("/api/npos").then(response => {
      this.npos = response.data;
      console.log(this.npos);
    });
  },
  methods: {}
};
</script>
