<!-- FIX DESTROY METHOD -->

<template>
  <section id="aboutheader" class="bg-image-jungle bg-fixed bg-cover">
    <div class="container pt-2">
      <div class="row">
        <div class="col-xl-7 col-lg-8 col-md-9 bg-white p-4 mx-1 wow fadeInUp hide">
          <div v-if="!isLoggedIn">
            <p>Extra info</p>
          </div>
          <div v-if="isLoggedIn">
            <center><h1>Your Signed Up Events</h1></center>
            <div v-for="event_user in event_users">
              <center>
                <h2>{{ event_user.event.name }}</h2>
                <h3>{{ event_user.event.npo_id }}</h3>
                <h3>{{ event_user.event.start_datetime }}</h3>
                <h3>{{ event_user.event.end_datetime }}</h3>
                <button v-on:click="destroyEvent(event_user)">Remove Event</button>
              </center>
            </div>
            <!-- <router-link v-bind:to="`/events/${event.id}`">More details about event</router-link> -->
          </div>
          <br />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      event_users: [],
      isLoggedIn: true
    };
  },
  created: function() {
    axios.get("/api/event_users").then(response => {
      this.event_users = response.data;
    });
  },
  methods: {
    destroyEvent: function(event_user) {
      axios.delete("/api/event_users/" + event_user.id).then(response => {
        console.log("You're no longer attending this event!", response.data);
        this.$router.push("/events");
      });
    }
  }
};
</script>
