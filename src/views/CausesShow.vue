<template>
  <div class="container">
    <h2>{{ cause.title }}</h2>
    <div v-for="npo in cause.npos">
      <p>NPO: {{ npo.name }}</p>
      <a href="">link</a>
    </div>
    <router-link to="/causes">Back to all causes</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      cause: {}
    };
  },
  created: function() {
    axios.get("/causes/" + this.$route.params.id).then(response => {
      this.cause = response.data;
    });
  },
  methods: {}
};
</script>
