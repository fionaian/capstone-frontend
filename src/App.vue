<template>
  <div id="app-vue">
    <div id="top" class="bg-white">
      <div class="header-content container py-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-5 py-3">
            <h1 class="display-2 pt-3 mb-5">
              <a href="#" class="link">
                <span class="text-typing line-1 wow fadeIn" data-wow-delay="1.2s">Hey,</span>
                <span class="text-typing line-2 wow fadeIn" data-wow-delay="1.4s">Look At</span>
                <span class="text-typing line-3 wow fadeIn text-highlight" data-wow-delay="1.6s">My Design.</span>
              </a>
            </h1>
          </div>
          <div class="col-xl-4 ml-xl-auto col-lg-4 ml-lg-auto col-md-5 ml-md-auto py-3">
            <blockquote class="blockquote">
              <h3 class="text-right pt-3">
                Wow, yeaahh man
                <br />
                you
                <em>are</em>
                really
                <br />
                a hipster nerd
              </h3>
              <br />
              <h6 class="text-right"><a href="#" class="text-muted link small">We made it easy</a></h6>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
    <!-- <header id="first" class="bg-image-jungle bg-fixed bg-cover">
      <div class="header-content container py-3">
        <div class="row vcenter">
          <div class="col-xl-5 col-lg-4 col-md-3"></div>
          <div class="col-xl-7 col-lg-8 col-md-9 bg-white wow fadeIn">
            <div class="p-4">
              <h1 class="pt-2">Global Progress</h1>
              <h6 class="wow fadeIn text-uppercase small text-bold wide-space">Highlight the new features</h6>
              <p class="lead pt-2 pr-2">
                This is a working responsive template and theme that demonstrates some of the
                <a href="#" class="link">new features</a>
                to explore.
              </p>
              <hr />
              <a href="#one" class="btn btn-primary btn-xl page-scroll mb-2">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </header> -->
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
            <a class="nav-link page-scroll" data-target="#one" href="/causes">Causes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#two" href="index.html#two">Flexbox</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#three" href="index.html#three">Content</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#blog" href="blog.html">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#five" href="index.html#five">Masonry</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-target="#last" href="index.html#last">More</a>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item dropdown dropdown-hover megamenu">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
              Pages &amp; Layouts
              <span class="caret"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right pt-1 pb-2">
              <div class="row mx-1">
                <div class="col-12">
                  <span class="close d-sm-none" data-toggle="dropdown">&#xD7;</span>
                </div>
                <ul class="col-6 list-unstyled small" role="menu">
                  <li class="text-uppercase text-muted text-wide pt-2 pb-1">Pages</li>
                  <li><a class="link" href="about.html">About</a></li>
                  <li><a class="link" href="app/index.html">Angular App</a></li>
                  <li><a class="link" href="blog.html">Blog / Articles</a></li>
                  <li><a class="link" href="blog-detail.html">Blog Post</a></li>
                  <li><a class="link" href="contact.html">Contact / Map</a></li>
                  <li><a class="link" href="clients.html">Clients / Testimonial</a></li>
                  <li><a class="link" href="demos.html">Demos</a></li>
                  <li><a class="link" href="error-404.html">Error 404</a></li>
                  <li><a class="link" href="faq.html">FAQ&apos;s</a></li>
                  <li><a class="link" href="features.html">Features</a></li>
                  <li><a class="link" href="login.html">Login / Register</a></li>
                  <li><a class="link" href="legal.html">Privacy Policy</a></li>
                  <li><a class="link" href="pricing.html">Pricing</a></li>
                  <li><a class="link" href="products.html">Products</a></li>
                  <li><a class="link" href="product-detail.html">Product Detail</a></li>
                  <li><a class="link" href="results.html">Search Results</a></li>
                  <li><a class="link" href="cart.html">Shopping Cart</a></li>
                  <li><a class="link" href="legal.html">Terms &amp; Conditions</a></li>
                  <li><a class="link" href="user-profile.html">User Profile</a></li>
                </ul>
                <ul class="col-6 list-unstyled small text-right" role="menu">
                  <li class="text-uppercase text-muted text-wide pt-2 pb-1">Specialized</li>
                  <li><a class="link" href="dashboard.html">Dashboard</a></li>
                  <li><a class="link" href="invoice.html">Invoice</a></li>
                  <li><a class="link" href="pg-medical.html">Medical / Dental</a></li>
                  <li><a class="link" href="portfolio.html">Portfolio</a></li>
                  <li><a class="link" href="pg-restaurant.html">Restaurant Menu</a></li>
                  <li class="text-uppercase text-muted text-wide pt-3 pb-1">Layouts</li>
                  <li><a class="link" href="index.html">Single page</a></li>
                  <li><a class="link" href="layout-video.html">Video background</a></li>
                  <li><a class="link" href="layout-image.html">Photo background</a></li>
                  <li><a class="link" href="layout-slider.html">Full-screen slider</a></li>
                  <li><a class="link" href="layout-2-col.html">2-column</a></li>
                  <li><a class="link" href="layout-3-col.html">3-column</a></li>
                  <li><a class="link" href="layout-full.html">Full width</a></li>
                  <li><a class="link" href="layout-sidebar.html">Sidebar nav</a></li>
                  <li><a class="link" href="layout-offcanvas.html">Off-canvas nav</a></li>
                  <li><a class="link" href="layout-grid.html">Grid / Gallery</a></li>
                  <li><a class="link" href="layout-masonry.html">Masonry</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover megamenu">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">
              Elements
              <span class="caret"></span>
            </a>
            <div class="dropdown-menu dropdown-menu-right pt-1 pb-2">
              <div class="row mx-1">
                <div class="col-12">
                  <span class="close d-sm-none" data-toggle="dropdown">&#xD7;</span>
                </div>
                <ul class="col-md-6 col-6 list-unstyled small" role="menu">
                  <li class="text-uppercase text-wide pt-2 pb-1">
                    <a class="link text-muted" href="elements.html">Elements</a>
                  </li>
                  <li><a class="link" href="elements.html#accordions">Accordion &amp; Collapsible</a></li>
                  <li><a class="link" href="elements.html#alerts">Alerts / Notifications</a></li>
                  <li><a class="link" href="elements.html#badges">Badges &amp; Tags</a></li>
                  <li><a class="link" href="elements.html#buttons">Buttons &amp; Colors</a></li>
                  <li><a class="link" href="elements.html#carousels">Carousel / Sliders</a></li>
                  <li><a class="link" href="elements.html#comments">Comments</a></li>
                  <li><a class="link" href="layout-grid.html">Gallery</a></li>
                  <li><a class="link" href="elements.html#jumbotron">Jumbotron</a></li>
                  <li><a class="link" href="elements.html#lists">Lists</a></li>
                  <li><a class="link" href="layout-masonry.html">Masonry</a></li>
                  <li><a class="link" href="elements.html#modals">Modal &amp; Overlay</a></li>
                  <li><a class="link" href="elements.html#progress">Progress</a></li>
                  <li><a class="link" href="elements.html#tables">Tables</a></li>
                  <li><a class="link" href="elements.html#tabs">Tabs</a></li>
                  <li><a class="link" href="elements.html#imageGrids">Thumbnails &amp; Images</a></li>
                </ul>
                <ul class="col-md-6 col-6 list-unstyled small text-right" role="menu">
                  <li class="text-uppercase text-wide pt-2 pb-1">
                    <a class="link text-muted" href="cards.html">Cards</a>
                  </li>
                  <li><a class="link" href="cards.html#card_feature">Image card</a></li>
                  <li><a class="link" href="cards.html#card_list">List card</a></li>
                  <li><a class="link" href="cards.html#card_contacts">Contacts card</a></li>
                  <li><a class="link" href="cards.html#card_thumbnails">Thumbnails card</a></li>
                  <li><a class="link" href="cards.html#card_product">Product card</a></li>
                  <li><a class="link" href="cards.html#card_profile">Profile card</a></li>
                  <li><a class="link" href="cards.html#card_stats">Stats card</a></li>
                  <li class="text-uppercase text-wide pt-3 pb-1">
                    <a class="link text-muted" href="elements.html#forms">Forms</a>
                  </li>
                  <li><a class="link" href="elements.html#formLogin">Login form</a></li>
                  <li><a class="link" href="elements.html#formRegister">Sign-up form</a></li>
                  <li><a class="link" href="elements.html#formChangePassword">Password change form</a></li>
                  <li><a class="link" href="elements.html#formResetPassword">Password reset form</a></li>
                  <li><a class="link" href="elements.html#formUserEdit">User info form</a></li>
                  <li><a class="link" href="elements.html#formContact">Contact form</a></li>
                  <li><a class="link" href="elements.html#formPayment">Payment form</a></li>
                </ul>
              </div>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" data-toggle="modal" title="A Bootstrap theme" href="#aboutModal">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- /navbar -->
    <router-view />

    <footer id="footer" class="pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <p class="display-2 mb-2">Okay, Boss.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6 col-md-3">
            <h6 class="text-uppercase">Information</h6>
            <ul class="list-unstyled">
              <li><a href="products.html">Products</a></li>
              <li><a href="faq.html">FAQ&apos;s</a></li>
              <li><a href="portfolio.html">Gallery</a></li>
              <li><a href="clients.html">Clients</a></li>
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
          <a href="http://themes.guide/">
            Made by Themes.guide in Little Rhody
            <i class="ion-location"></i>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>
