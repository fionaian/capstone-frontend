<template>
  <div class="container">
    <h2>{{ npo.name }}</h2>
    <router-link to="/npos">Back to all npos</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      npo: {}
    };
  },
  created: function() {
    axios.get("/npos/" + this.$route.params.id).then(response => {
      this.npo = response.data;
    });
  },
  methods: {}
};
</script>
