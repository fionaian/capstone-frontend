<template>
  <div class="container">
    <h1>All Events</h1>
    <div v-for="event in events">
      <h2>{{ event.name }}</h2>
      <h3>{{ event.npo_id }}</h3>
      <h3>{{ event.start_datetime }}</h3>
      <h3>{{ event.end_datetime }}</h3>
      <router-link v-bind:to="`/events/${event.id}`">More details about event</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      events: []
    };
  },
  created: function() {
    axios.get("/api/events").then(response => {
      this.events = response.data;
      console.log(this.events);
    });
  },
  methods: {}
};
</script>
