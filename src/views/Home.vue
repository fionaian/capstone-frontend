<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-if="!isLoggedIn">
      <p>Extra info</p>
    </div>
    <div v-if="isLoggedIn">
      <p>Your events</p>
      <div v-for="event in events">
        <p>{{ event.name }}</p>
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to VolunTreery!",
      events: [],
      isLoggedIn: true
    };
  },
  created: function() {
    axios.get("/api/events").then(response => {
      this.events = response.data;
      console.log("data: ", this.events);
    });
  },
  methods: {}
};
</script>
