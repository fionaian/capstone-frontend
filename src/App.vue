<template>
  <div id="app-vue">
    <div id="top" class="bg-white">
      <div class="header-content container py-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-5 py-3">
            <h1 class="display-2 pt-3 mb-5">
              <a href="#" class="link">
                <span class="text-typing line-1 wow fadeIn text-highlight" data-wow-delay="1.2s">VolunTreery:</span>
                <span class="text-typing line-2 wow fadeIn" data-wow-delay="1.4s">Chicago</span>
                <span class="text-typing line-3 wow fadeIn text-highlight" data-wow-delay="1.6s">Cares.</span>
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
    <!-- navbar -->
    <nav id="topNav" class="navbar navbar-default mb-3 navbar-expand-lg fixed-top" data-toggle="affix">
      <!-- this toggler only displays on offcanvas layout -->
      <a
        href="#"
        class="navbar-toggler-anim toggler-offcanvas my-auto collapsed border-0 mr-2"
        data-toggle="collapse"
        data-target="#offcanvasNavbar"
      >
        <span></span>
        <span></span>
        <span></span>
      </a>
      <!-- text brand or logo image goes here -->
      <a class="navbar-brand page-scroll text-uppercase wide-space link" href="/">
        VolunTreery
      </a>
      <button
        class="navbar-toggler collapsed border-0"
        type="button"
        data-toggle="collapse"
        data-target="#collapsingNavbar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="collapse navbar-collapse border-0" id="collapsingNavbar">
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#five" href="/about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#one" href="/causes">Causes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#two" href="/npos">NPOs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#three" href="/events">Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#blog" href="/eventusers">Your Events</a>
          </li>
          <li class="nav-item" v-if="!jwt">
            <a class="nav-link page-scroll" title="Signup for VolunTreery" href="/signup">
              Signup
            </a>
          </li>
          <li class="nav-item" v-if="!jwt">
            <a class="nav-link page-scroll" title="Login to VolunTreery" href="/login">
              Login
            </a>
          </li>
          <li class="nav-item" v-if="jwt">
            <a class="nav-link page-scroll" title="Logout of VolunTreery" href="/logout">
              Logout
            </a>
          </li>
          <li class="nav-item" v-if="jwt">
            <a class="nav-link page-scroll" href="javascript:void(0)">Welcome {{ username }}!</a>
          </li>
        </ul>
        <!-- </ul> -->
      </div>
    </nav>
    <!-- /navbar -->
    <router-view v-on:changeJwt="setJwt()" />

    <footer id="footer" class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="display-2 mb-2">Collab w/ us!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-md-3">
            <h6 class="text-uppercase">Information</h6>
            <ul class="list-unstyled">
              <!-- <li><a href="products.html">Affiliates</a></li> -->
              <li><a href="faq.html">FAQ&apos;s</a></li>
              <li><a href="portfolio.html">Photos from Events</a></li>
              <li><a href="clients.html">Affiliates</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 column">
            <h6 class="text-uppercase">About</h6>
            <ul class="list-unstyled">
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="about.html">Our Mission</a></li>
              <li><a href="legal.html">Privacy Policy</a></li>
              <li><a href="legal.html">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div class="col-12 col-md-3 column">
            <h6 class="text-uppercase">Stay Posted</h6>
            <form>
              <div class="form-group">
                <input type="text" class="form-control" title="Enter your email. No spam, we promise!" placeholder="" />
              </div>
              <div class="form-group">
                <button
                  class="btn btn-primary text-uppercase small"
                  data-toggle="modal"
                  data-target="#alertModal"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div class="col-12 col-lg-2 ml-lg-auto col-md-3 ml-md-0 text-right">
            <h6 class="text-uppercase">Jobs</h6>
            <p>
              <em><a href="#">We&apos;re looking for great talent. Browse the job openings.</a></em>
            </p>
          </div>
          <div class="col-12 text-md-right text-center">
            <br />
            <ul class="list-inline">
              <li class="list-inline-item">
                <a rel="nofollow" href="http://twitter.com/ThemesGuide" title="Twitter">
                  <i class="ion-social-twitter-outline"></i>
                </a>
                &#xA0;
              </li>
              <li class="list-inline-item">
                <a rel="nofollow" href="#" title=""><i class="ion-social-instagram-outline"></i></a>
                &#xA0;
              </li>
              <li class="list-inline-item">
                <a rel="nofollow" href="#" title="Facebook"><i class="ion-social-facebook-outline"></i></a>
                &#xA0;
              </li>
              <li class="list-inline-item">
                <a rel="nofollow" href="#" title="Dribbble"><i class="ion-social-dribbble-outline"></i></a>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <hr class="light" />
        <div class="text-center text-normal">
          <a href="https://github.com/fionaian/capstone-frontend">
            Fiona Ian's Actualize Coding Bootcamp Capstone, v. 1.0
            <i class="ion-location"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      jwt: null,
      username: ""
    };
  },
  created: function() {
    this.setJwt();
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.getItem("jwt");
      this.username = localStorage.getItem("username");
    }
  }
};
</script>

<style></style>
