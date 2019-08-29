<template>
  <div class="container">
    <h1>Your Signed Up Events</h1>
    <div v-for="event in events">
      <h2>{{ event.name }}</h2>
      <h3>{{ event.npo_id }}</h3>
      <h3>{{ event.start_datetime }}</h3>
      <h3>{{ event.end_datetime }}</h3>
      <button v-on:click="destroyEvent(event)">Remove Event</button>
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
    axios.get("/api/event_users").then(response => {
      this.events = response.data;
      console.log(this.events);
    });
  },
  methods: {
    destroyEvent: function(event) {
      axios.delete("/api/event_users" + event.id).then(response => {
        this.$router.push("/event_users");
      });
    }
  }
};
</script>
