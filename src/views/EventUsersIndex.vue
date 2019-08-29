<template>
  <div class="container">
    <h1>Your Signed Up Events</h1>
    <div v-for="event_user in event_users">
      <h2>{{ event_user.event.name }}</h2>
      <h3>{{ event_user.event.npo_id }}</h3>
      <h3>{{ event_user.event.start_datetime }}</h3>
      <h3>{{ event_user.event.end_datetime }}</h3>
      <!-- <router-link v-bind:to="`/events/${event.id}`">More details about event</router-link> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      event_users: []
    };
  },
  created: function() {
    axios.get("/api/event_users").then(response => {
      this.event_users = response.data;
    });
  },
  methods: {}
};
</script>
