<template>
  <div class="container">
    <h2>Events from {{ npo.name }}</h2>
    <div v-for="event in npo.events">
      <h3>Event: {{ event.name }}</h3>
      <h4>Cause: {{ npo.cause.title }}</h4>
      <router-link v-bind:to="`/events/${event.id}`">Additional Information about {{ event.name }}</router-link>
    </div>
    <router-link to="/npos">Back to all npos</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      npo: {},
      event: []
    };
  },
  created: function() {
    axios.get("/api/npos/" + this.$route.params.id).then(response => {
      this.npo = response.data;
    });
  },
  methods: {}
};
</script>
