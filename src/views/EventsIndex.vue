<template>
  <div class="container">
    <h1>All Events</h1>
    <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" />
    <div v-for="event in events">
      <h2>{{ event.name }}</h2>
      <h3>{{ event.npo_id }}</h3>
      <h3>{{ event.start_datetime }}</h3>
      <h3>{{ event.end_datetime }}</h3>
      <router-link v-bind:to="`/events/${event.id}`">More details about event</router-link>
    </div>
  </div>
</template>

<style lang="scss">
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
</style>

<script>
import axios from "axios";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarPlugins: [dayGridPlugin],
      events: [{}]
    };
  },
  created: function() {
    axios.get("/api/all_events").then(response => {
      this.events = response.data;
      console.log(this.events);
    });
  },
  methods: {}
};
</script>
