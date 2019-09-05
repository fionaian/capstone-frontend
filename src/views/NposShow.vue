<template>
  <section id="aboutheader" class="bg-image-jungle bg-fixed bg-cover">
    <div class="container pt-2">
      <div class="row">
        <div class="col-xl-7 col-lg-8 col-md-9 bg-white p-4 mx-1 wow fadeInUp hide">
          <div class="pt-2 pb-2">
            <h2>Events from {{ npo.name }}</h2>
            <div v-for="event in npo.events">
              <h3>Event: {{ event.name }}</h3>
              <h4>Cause: {{ npo.cause.title }}</h4>
              <router-link v-bind:to="`/events/${event.id}`">Additional Information about {{ event.name }}</router-link>
              <br />
              <twitter :key="componentKey" style="width: 50%">
                <a class="twitter-timeline" :href="twitterUrl">Tweets by {{ npo.name }}</a>
              </twitter>
            </div>
            <router-link to="/npos"><i>Back to all npos</i></router-link>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-3"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { twitter } from "vue-twitter";
export default {
  components: {
    twitter
  },
  data: function() {
    return {
      componentKey: 0,
      npo: {},
      event: [],
      twitterUrl: ""
    };
  },
  created: function() {
    axios.get("/api/npos/" + this.$route.params.id).then(response => {
      this.npo = response.data;
      // setCurrentProfile: function(profile) {
      // this.currentProfile = profile;
      // this.twitterUrl = "https://twitter.com/" + this.currentProfile.twitter_handle + "?ref_src=twsrc%5Etfw";
      // this.twitterUrl = "https://twitter.com/twitterdev";
      this.twitterUrl = this.npo.twitter_url;
      // this.twitterUrl = "https://twitter.com/twitterdev?ref_src=twsrc%5Etfw";
      this.componentKey += 1;
    });
  },
  methods: {}
};
</script>
