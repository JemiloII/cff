<template>
  <client-only>
    <!-- Start Main Banner Area -->
    <div class="home-slides-two">
      <carousel
        :autoplay=true
        :autoplayTimeout=5000
        :loop=true
        :centerMode=true
        :navigationEnabled=true
        :paginationEnabled=false
        :perPageCustom="[[0, 1], [768, 1], [1024, 1], [1200, 1]]"
      >
        <slide>
          <div class="banner-section header-bg2">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                </div>
              </div>
            </div>
          </div>
        </slide>

        <slide>
          <div class="banner-section header-bg1">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
    <!-- End Main Banner Area -->
  </client-only>
</template>
