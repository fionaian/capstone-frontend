<template>
  <div class="container">
    <h2>Social Cause: Education</h2>
    <h3>Affiliated NPOs</h3>
    <br />
    <h2>Open Books Chicago</h2>
    <h2>Chicago HOPES for Kids</h2>
    <div v-for="npo in cause.npos">
      <p>Affiliated NPOs</p>
      <router-link v-bind:to="`/events/${event.id}`">{{ npo.name }}</router-link>
    </div>
    <router-link to="/causes">Back to all causes</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      cause: {},
      event: []
    };
  },
  created: function() {
    axios.get("/api/causes/1" + this.$route.params.id).then(response => {
      this.cause = response.data;
    });
    axios.get("/api/events/" + this.$route.params.id).then(response => {
      this.event = response.data;
    });
  },
  methods: {}
};
</script>
