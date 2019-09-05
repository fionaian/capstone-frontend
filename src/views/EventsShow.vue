<template>
  <section id="aboutheader" class="bg-image-jungle bg-fixed bg-cover">
    <div class="container pt-2">
      <div class="row">
        <div class="col-xl-7 col-lg-8 col-md-9 bg-white p-4 mx-1 wow fadeInUp hide">
          <div class="pt-2 pb-2">
            <h2>{{ event.name }}</h2>
            <h3>{{ event.start_datetime }}</h3>
            <h3>{{ event.end_datetime }}</h3>
            <ul>
              <li class="text-danger" v-for="error in errors">{{ error }}</li>
            </ul>
            <button v-on:click="createEventUser(event)">Sign Up for Event</button>
            <br />
            <router-link to="/events"><i>Back to all events</i></router-link>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-3"></div>
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
      event: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/events/" + this.$route.params.id).then(response => {
      this.event = response.data;
    });
  },
  methods: {
    createEventUser: function(event) {
      var params = {
        event_id: event.id
      };
      axios
        .post("api/event_users", params)
        .then(response => {
          console.log("You signed up!", response.data);
          this.$router.push("/eventusers");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
