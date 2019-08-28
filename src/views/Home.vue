<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-if="!isLoggedIn">
      <p>Extra info</p>
    </div>
    <div v-if="isLoggedIn">
      <p>Your events</p>
      <div v-for="event_user in event_users">
        <p>{{ event_user.event.name }}</p>
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
      event_users: [],
      isLoggedIn: true
    };
  },
  created: function() {
    axios.get("/api/event_users").then(response => {
      this.event_users = response.data;
      console.log("data: ", this.event_users);
    });
  },
  methods: {}
};
</script>
