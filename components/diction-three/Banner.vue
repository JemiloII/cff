<template>
  <client-only>
    <!-- Start Main Banner Area -->
    <div class="home-slides-two">
      <carousel
        :autoplay=false
        :autoplayTimeout=1500
        :loop=false
        :centerMode=true
        :navigationEnabled=false
        :paginationEnabled=false
        :perPageCustom="[[0, 1], [768, 1], [1024, 1], [1200, 1]]"
      >
        <slide>
          <div class="banner-section header-bg2">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="container">
                  <img class="logo" src="~/assets/img/logo/cff-logo.jpg">
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

<style scoped>
  .d-table-cell {
    background: black;
    opacity: 0.75;
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 5rem;
    overflow: hidden;
  }

  .logo {
    display: flex;
    width: 475px;
    height: 475px;
  }

  @media screen and (max-width: 1200px) {
    .logo {
      width: 400px;
      height: 400px;
    }
  }

  @media screen and (min-width: 992px) {
    .banner-section {
      height: 700px;
    }
  }

  @media screen and (max-width: 768px) {
    .banner-section {
      padding: 0;
    }

    .logo {
      width: 400px;
      height: 400px;
    }
  }
</style>
