<template>
  <client-only>
    <!-- Start Testimonials Area -->
    <section class="testimonials-area ptb-60 jarallax" data-jarallax='{"speed": 0.3}'>
      <div class="container">
        <div class="testimonials-slides owl-carousel owl-theme">
          <carousel
            :autoplay=true
            :autoplayTimeout=5000
            :perPageCustom="[[0, 1], [768, 1], [1024, 1]]"
          >
            <slide v-for="item in items" :key="item.id">
              <div class="single-testimonials">
<!--                <div class="client-image" v-if="item.image">-->
<!--                  <img :src="item.image" :alt="item.name">-->
<!--                </div>-->

                <p>{{ item.feedback }}</p>

                <div class="client-info">
                  <h4>{{ item.name }}</h4>
                  <span>{{ item.position }}</span>
                  <span>{{ item.convention }}</span>
                </div>
              </div>
            </slide>
          </carousel>

        </div>
      </div>
    </section>
    <!-- End Testimonials Area -->
  </client-only>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            id: 1,
            name: 'Chris Ramencon',
            convention: 'Ramencon',
            position: 'Owner',
            feedback: '10 out of 10 amazing group very professional great fun. Love having cff at the con. Always has great energy and a room full of attendees.',
            image: null

          },
          {
            id: 2,
            name: 'Richard Nash',
            convention: 'Anime Magic',
            position: 'President of Anime Magic',
            feedback: 'Convention Foam Fighting has consistently provided our event each year with quality boffer programming that our attendees can\'t get enough of. We constantly get feedback that CFF is often one of our attendees favorite parts of our convention! Bruce and his team are always polite, professional, and inclusive of everyone. From a convention-runners standpoint they are always a pleasure to work with. They know what they are doing and are very self sufficient; we never have to chase them down for information and we never have to help them run their programming. They know exactly what they are doing and they consistently provide a fun & safe environment for people of all ages and backgrounds to experience foam boffer fighting. Having experienced and participated in CFF\'s programming myself, I can tell you that it is a ton of fun and a great addition to any event looking to add more interactive entertainment to their roster.',
            image: null,
          },
          {
            id: 3,
            name: 'Steve Hannon',
            convention: 'Host of Geek Out',
            position: 'Owner of Hannons Camp America',
            feedback: 'CFF has become family like to me after many years working together. Bruce and all his staff have always been friendly and courteous while hosting boffer games. They do an excellent job "recruiting" people of all ages, background and body types to join in all the fun that is Convention Foam Fighting. With the way they run it, free to play with plenty of fun loaner weapons to choose from, they create the perfect envirmonemnt to maximize their enjoyment, safety and knowledge of the game.',
            image: null
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .testimonials-area {
    background: none;
  }
</style>
