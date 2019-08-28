<template>
  <div class="container">
    <h2>{{ event.name }}</h2>
    <button v-on:click="createEvent(event)">Sign Up for Event</button>
    <br />
    <router-link to="/events">Back to all events</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      event: {}
    };
  },
  created: function() {
    axios.get("/api/events/" + this.$route.params.id).then(response => {
      this.event = response.data;
    });
  },
  methods: {}
};
</script>
