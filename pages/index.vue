<template>
  <div>
    <Banner/>
    <section class="news-area pt-60">
      <div class="container">
        <div class="section-title page-title">
          <h2><span class="dot"></span>About Us</h2>
        </div>
        <div class="blog-details">
          <div class="article-content">
            <p class="large-text">
              Convention Foam Fighting (CFF) is a free-to-participate physical combat event.
              Using foam "boffer" weapons, participants take part in a variety of games, from
              team battles to tournament-style competitions. Participants of all ages and
              experience levels are welcome to play (participants under the age of 18 will
              require consent from a legal guardian). CFF supplies all necessary equipment to
              the participants, and we welcome all experienced fighters to bring their own
              equipment to be reviewed and approved by our staff for safety.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!--<Facility />-->
    <!--<Category />-->
    <!--<LatestProducts />-->
    <!--<Offer />-->
    <News/>
    <Partner />
    <Subscribe/>
    <!--<InstagramPhotos/>-->
  </div>
</template>

<script>
  import Banner from '../components/diction-three/Banner';
  import Facility from '../components/diction-two/Facility';
  import Category from '../components/diction-three/Category';
  import LatestProducts from '../components/landing-one/LatestProducts';
  import Offer from '../components/diction-three/Offer';
  import News from '../components/diction-two/News';
  import Partner from '../components/common/Partner';
  import Subscribe from '../components/common/Subscribe';
  import InstagramPhotos from '../components/common/InstagramPhotos';

  export default {
    components: {
      Banner, Facility, Category, LatestProducts, Offer, News,
      Partner, Subscribe, InstagramPhotos
    }
  }
</script>

<style scoped>
  .large-text {
    font-size: large;
  }
</style>
