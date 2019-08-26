<template>
  <div class="container">
    <h1>All NPOs</h1>
    <div v-for="npo in npos">
      <h2>{{ npo.name }}</h2>
      <h3>{{ npo.cause_id }}</h3>
      <router-link v-bind:to="`/npos/${npo.id}`">More details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      npos: []
    };
  },
  created: function() {
    axios.get("/npos").then(response => {
      this.npos = response.data;
      console.log(this.npos);
    });
  },
  methods: {}
};
</script>
