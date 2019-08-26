<template>
  <div class="container">
    <h2>{{ event.name }}</h2>
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
    axios.get("/events/" + this.$route.params.id).then(response => {
      this.event = response.data;
    });
  },
  methods: {}
};
</script>
