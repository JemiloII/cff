<template>
  <client-only>
    <!-- Start Partner Area -->
    <div class="partner-area">
      <div class="container">
        <div class="partner-slides owl-carousel owl-theme">
          <carousel
            :loop=true
            :autoplay=true
            :autoplayTimeout=2000
            :paginationEnabled=false
            :speed=1000
            :adjustable-height=false
          >
            <slide>
              <div class="partner-item">
                <a href="https://www.animemagic.org/" target="_blank">
                  <img src="~/assets/img/conventions/anime-magic.png" alt="Anime Magic">
                </a>
              </div>
            </slide>
            <slide>
              <div class="partner-item">
                <a href="https://www.facebook.com/qcnerdfest" target="_blank">
                  <img src="~/assets/img/conventions/nerd-fest.png" alt="Nerd Fest">
                </a>
              </div>
            </slide>
            <slide>
              <div class="partner-item">
                <a href="http://www.ramencon.com/" target="_blank">
                  <img src="~/assets/img/conventions/ramen-con.png" alt="Ramencon">
                </a>
              </div>
            </slide>
            <slide>
              <div class="partner-item">
                <a href="https://www.yeticon.org/" target="_blank">
                  <img src="~/assets/img/conventions/yeticon.png" alt="Yeticon">
                </a>
              </div>
            </slide>
            <slide>
              <div class="partner-item">
                <a href="https://awa-con.com/" target="_blank">
                  <img src="~/assets/img/conventions/awa-con.png" alt="Anime Weekend Atlanta">
                </a>
              </div>
            </slide>
            <slide>
              <div class="partner-item">
                <a href="https://chicagosteampunkexpo.com/" target="_blank">
                  <img src="~/assets/img/conventions/chicago-steam-punk-expo.png" alt="Chicago Steam Punk Expo">
                </a>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </div>
    <!-- End Partner Area -->
  </client-only>
</template>
