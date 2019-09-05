<template>
  <div class="container">
    <h2>{{ cause.title }}</h2>
    <div v-for="npo in cause.npos">
      <p>NPO: {{ npo.name }}</p>
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
    axios.get("/api/causes/" + this.$route.params.id).then(response => {
      this.cause = response.data;
    });
    axios.get("/api/events/" + this.$route.params.id).then(response => {
      this.event = response.data;
    });
  },
  methods: {}
};
</script>
