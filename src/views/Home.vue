<template>
  <div class="home">
    <!-- carousel -->
    <div id="myCarousel" class="carousel slide full-screen-max" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img
            class="first-slide mx-auto d-block img-fluid"
            src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="slide"
          />
          <div class="carousel-caption pb-3">
            <h2 class="text-white">Service</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="third-slide mx-auto d-block img-fluid"
            src="https://www.alainsamson.net/images/banniere-conferences-leadership.jpg"
            alt="slide"
          />
          <div class="carousel-caption pb-3">
            <h2 class="text-white">Leadership</h2>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="third-slide mx-auto d-block img-fluid"
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_56523347.jpg?crop=0,432,7360,4048&wid=4000&hei=2200&scl=1.84"
            alt="slide"
          />
          <div class="carousel-caption pb-3">
            <h2 class="text-white">VolunTreery</h2>
          </div>
        </div>
      </div>
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="ion-ios-arrow-left text-white display-3" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="ion-ios-arrow-right text-white display-3" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- /carousel -->
    <div v-if="!isLoggedIn">
      <p>Extra info</p>
    </div>
    <div v-if="isLoggedIn">
      <div v-for="event_user in event_users">
        <p>Your events</p>
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
