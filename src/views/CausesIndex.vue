<template>
  <div class="container">
    <center><h1>Social Causes</h1></center>

    <section class="bg-alt">
      <div class="container py-5">
        <div class="mt-2 wow fadeIn">
          <div class="card-deck">
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="/causes/1">
                  <img
                    class="img-fluid"
                    src="https://icon-library.net/images/education-icon/education-icon-23.jpg"
                    alt="Card image"
                  />
                </a>
              </div>
              <div class="card-body">
                <h6>Education</h6>
                <p class="card-text">Teach and mentor.</p>
              </div>
            </div>
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="/causes/2">
                  <img
                    class="img-fluid"
                    src="https://marketplace.canva.com/MADHh7rHHyg/1/thumbnail_large/canva-woman-with-mobile-social-media-icons-MADHh7rHHyg.png"
                    alt="Card image"
                  />
                </a>
              </div>
              <div class="card-body">
                <h6>Media</h6>
                <p class="card-text">Tap your creative side.</p>
              </div>
            </div>
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="/causes/3">
                  <img
                    class="img-fluid"
                    src="https://dghscp.co.uk/wp-content/uploads/2018/10/Population-icon.png"
                    alt="Card image"
                  />
                </a>
              </div>
              <div class="card-body">
                <h6>Social Services</h6>
                <p class="card-text">Care for all.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-alt">
      <div class="container py-5">
        <div class="mt-2 wow fadeIn">
          <div class="card-deck">
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="/causes/4">
                  <img
                    class="img-fluid"
                    src="https://cdn2.iconfinder.com/data/icons/travel-caramel-vol-3/256/THEATRE-512.png"
                    alt="Card image"
                  />
                </a>
              </div>
              <div class="card-body">
                <h6>Performing Arts</h6>
                <p class="card-text">Express Yourself.</p>
              </div>
            </div>
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="/causes/5">
                  <img
                    class="img-fluid"
                    src="http://pluspng.com/img-png/pet-care-png-emergency-pet-care-buckwalter-veterinary-clinic-bluffton-sc-650.png"
                    alt="Card image"
                  />
                </a>
              </div>
              <div class="card-body">
                <h6>Animal Care</h6>
                <p class="card-text">Helping animals, one paw at a time.</p>
              </div>
            </div>
            <!-- card -->
            <div class="card card-default text-center">
              <div class="card-img-top card-zoom">
                <a href="/causes/6">
                  <img
                    class="img-fluid"
                    src="https://images.assetsdelivery.com/compings_v2/vgarts/vgarts1506/vgarts150601440.jpg"
                    alt="Card image"
                  />
                </a>
              </div>
              <div class="card-body">
                <h6>Human Rights</h6>
                <p class="card-text">Stand up for all.</p>
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
