<template>
  <div class="container">
    <center><h1>All Events</h1></center>
    <!--  <div v-for="event in events">
      <h2>{{ event.name }}</h2>
      <h3>{{ event.npo_id }}</h3>
      <h3>{{ event.start_datetime }}</h3>
      <h3>{{ event.end_datetime }}</h3>
      <router-link v-bind:to="`/events/${event.id}`">More details about event</router-link>
    </div> -->

    <div class="my-4">
      <!--slider-->
      <div class="container mt-2 px-0">
        <!--cards carousel slider-->
        <div class="carousel slide w-100 mb-5" data-ride="carousel" data-interval="10000" id="postsCarousel">
          <div class="carousel-inner pb-2">
            <!-- three (3) sildes per carousel item -->
            <div class="carousel-item active flex-column flex-sm-row align-items-stretch">
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/1">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="https://blog.chicagoideas.com/wp-content/uploads/2015/03/1925.jpg"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">Open Books</h6>
                    <h2>
                      <a href="/events/1">Organize Books</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/2">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="https://res.cloudinary.com/peerspace-inc/image/upload/q_80,c_crop,g_custom/w_2048/an397wndbgxr3pxkcjbq.jpg"
                        alt="Carousel 2"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">South Side Weekly</h6>
                    <h2>
                      <a href="/events/2">Record Interviews for Podcast</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/3">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="https://33realty.com/wp-content/uploads/2018/12/lakeview-pantry.jpeg"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">Lakeview Pantry</h6>
                    <h2>
                      <a href="/events/3">Pack Food with Lakeview Pantry</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item flex-column flex-sm-row align-items-stretch">
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/4">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="http://hickoryhillsil.org/wp-content/uploads/2017/07/GREATERCHICAGOFOODEPO-650x400.jpg"
                        alt="Carousel 4"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">Greater Chicago Food Depository</h6>
                    <h2>
                      <a href="/events/4">Pack Food with Greater Chicago Food Depository</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/5">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="https://gw-prod.imgix.net/nonprofit/2581/banner-2017-03-02-19-26-16.jpg?w=520&h=340&fit=crop&dpr=2&auto=compress&bri=-14"
                        alt="Carousel 5"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">Collaboraction</h6>
                    <h2>
                      <a href="/events/5">Merchandise/Ticket Sales</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/6">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="https://www.homeseniors.org/hubfs/Website%20.png"
                        alt="Carousel 6"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">H.O.M.E.</h6>
                    <h2>
                      <a href="/events/6">Painting Senior Citizens' Homes</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item flex-column flex-sm-row align-items-stretch">
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/7">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="http://www.pawschicago.org/fileadmin/_processed_/csm_Adoption_Center_Lobby_2_c052865335.jpg"
                        alt="Carousel 4"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">PAWS Chicago</h6>
                    <h2>
                      <a href="/events/7">Foster Animal Care Workshop</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/8">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="https://images.squarespace-cdn.com/content/v1/554ba89de4b0ff0eff6bebf3/1556566488905-IW2YCJ0KW47QKJ6S2NRX/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UcTSrQkGwCGRqSxozz07hWZrYGYYH8sg4qn8Lpf9k1pYMHPsat2_S1jaQY3SwdyaXg/Website.png?format=2500w"
                        alt="Carousel 5"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">Chicago HOPES for Kids</h6>
                    <h2>
                      <a href="/events/8">Litearcy Skills Workshop</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-default h-100">
                  <div class="card-img-top card-img-top-200 card-zoom">
                    <a href="/events/9">
                      <img
                        class="img-fluid mx-auto d-block"
                        src="https://secure2.convio.net/icirr/images/content/pagebuilder/picforCM.jpg"
                        alt="Carousel 6"
                      />
                    </a>
                  </div>
                  <div class="card-body pt-2 pl-1">
                    <h6 class="small text-wide text-truncate pb-1">ICIRR</h6>
                    <h2>
                      <a href="/events/9">Citizenship Workshop</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 text-md-right text-center lead">
                <a class="prev pr-3" data-target="#postsCarousel" data-slide="prev" href="#" title="Newer">
                  <i class="fa fa-chevron-left ion-ios-arrow-left"></i>
                </a>
                <a class="next pl-3" data-target="#postsCarousel" data-slide="next" href="#" title="Older">
                  <i class="fa fa-chevron-right ion-ios-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--/multi cards carousel slider-->
      </div>
    </div>
    <FullCalendar defaultView="dayGridMonth" :plugins="calendarPlugins" />
    <br />
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
