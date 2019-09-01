<template>
  <div class="container">
    <h1>All Causes</h1>
    <div v-for="cause in causes">
      <h2>{{ cause.title }}</h2>
      <router-link v-bind:to="`/causes/${cause.id}`">More details</router-link>
    </div>

    <section class="bg-alt">
      <div class="container py-5">
        <div class="mt-2 wow fadeIn">
          <div class="card-deck">
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="blog-detail.html">
                  <img class="img-fluid" src="assets/images/mercantile_500_0002.png" alt="Card image" />
                </a>
              </div>
              <div class="card-body">
                <h6>Bring It</h6>
                <p class="card-text">It&apos;s ok if there&apos;s more.</p>
              </div>
            </div>
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="blog-detail.html">
                  <img class="img-fluid" src="assets/images/mercantile_500_0003.png" alt="Card image" />
                </a>
              </div>
              <div class="card-body">
                <h6>Elegance</h6>
                <p class="card-text">Some clever wordage.</p>
              </div>
            </div>
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="blog-detail.html">
                  <img class="img-fluid" src="assets/images/mercantile_500_0006.png" alt="Card image" />
                </a>
              </div>
              <div class="card-body">
                <h6>Design It</h6>
                <p class="card-text">More clever wordage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      causes: []
    };
  },
  created: function() {
    axios.get("/api/causes").then(response => {
      this.causes = response.data;
    });
  },
  methods: {}
};
</script>
