<template>
  <!--   <div class="container">
    <h2>{{ cause.title }}</h2>
    <div v-for="npo in cause.npos">
      <p>NPO: {{ npo.name }}</p>
      <router-link v-bind:to="`/events/${event.id}`">{{ npo.name }}</router-link>
    </div>
    <router-link to="/causes">Back to all causes</router-link>
  </div> -->

  <section id="aboutheader" class="bg-image-jungle bg-fixed bg-cover">
    <div class="container pt-2">
      <div class="row">
        <div class="col-xl-7 col-lg-8 col-md-9 bg-white p-4 mx-1 wow fadeInUp hide">
          <div class="pt-2 pb-2">
            <b>
              <h2>{{ cause.title }}</h2>
            </b>
            <div v-for="npo in cause.npos">
              <b>
                <p>NPO: {{ npo.name }}</p>
              </b>
              <router-link v-bind:to="`/npos/${npo.id}`">{{ npo.name }}</router-link>
              <br />
              <br />
            </div>
            <router-link to="/causes"><i>Back to all causes</i></router-link>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-3"></div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      cause: {},
      event: []
    };
  },
  created: function() {
    axios.get("/api/causes/" + this.$route.params.id).then(response => {
      this.cause = response.data;
    });
    axios.get("/api/events/" + this.$route.params.id).then(response => {
      this.event = response.data;
    });
  },
  methods: {}
};
</script>
