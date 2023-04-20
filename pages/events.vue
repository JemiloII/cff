<template>
  <div>
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>Events</li>
        </ul>
      </div>
    </div>

    <section class="news-area pt-4 pb-5">
      <div class="container">
        <div class="section-title page-title">
          <h2><span class="dot"></span>Events</h2>
        </div>
        <div class="blog-details">
          <div class="article-content">
            <div class="events container" v-for="({ name, link, date, location, image }) in events">
              <div class="info">
                <a :href="link" target="_blank" class="name">{{ name }}</a>
                <div class="date">{{ date }}</div>
                <a :href="`https://www.google.com/maps/place/${location}`" target="_blank" class="location">{{ location }}</a>
              </div>
              <div class="logo">
                <img :src="`/events/${image}`" :alt="name">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        events: [
          { name: "Ohayocon", link: "https://ohayocon.org/", date: "January 19-22", location: "Columbus, Ohio", image: "ohayocon.png" },
          { name: "KamiKon", link: "https://www.kamicon.net/", date: "February 10-12", location: "Birmingham, Alabama", image: "kamikon.png" },
          { name: "Chicago Steampunk Expo", link: "https://chicagosteampunkexpo.com/", date: "April 14-16", location: "Schaumburg, Illinois", image: "chicagosteampunkexpo.png" },
          { name: "Momocon", link: "https://www.momocon.com/", date: "May 25-28", location: "Atlanta, Georgia", image: "momocon.png" },
          { name: "Geek Out", link: "http://www.geekout-hca.com/", date: "June 8-11", location: "College Corner, Ohio", image: "geekout.png" },
          { name: "Yeticon", link: "https://www.yeticon.org/", date: "June 16-19", location: "Ontario, Canada", image: "yeticon.png" },
          { name: "Dokidokon", link: "https://www.dokidokon.org/", date: "July 28-30", location: "Kalamazoo, Michigan", image: "dokidokon.png" },
          { name: "Matsuricon", link: "https://matsuricon.org/", date: "August 11-13", location: "Columbus, Ohio", image: "matsuricon.png" },
          { name: "Anime Magic", link: "https://www.animemagic.org/", date: "August 18-20", location: "Rosemont, Illinois", image: "animemagic.png" },
          { name: "Kokorokon", link: "https://www.kokorokon.com/", date: "August 25-27", location: "Collinsville, Illinois", image: "kokorokon.png" },
          { name: "Ramencon", link: "https://www.ramencon.com/", date: "September 29 - October 1", location: "South Bend, Indiana", image: "ramencon.png" },
          { name: "Chattanooga Comic Con", link: "https://www.chattanoogacomiccon.com/", date: "October 21-22", location: "Chattanooga, Tennessee", image: "chattanoogacomiccon.png" },
        ]
      };
    }
  }
</script>

<style scoped>
  .events {
    display: flex;
    flex-direction: row;
    font-size: 20px;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: #0a0a0a 1px solid;
  }

  .events > div, .events > a {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 50%;
    height: 200px;
    align-content: center;
  }

  .events > div > img {
    display: flex;
    flex: 1;
    width: 100%;
    max-height: 200px;
    height: auto;
    object-fit: scale-down;
  }

  .logo {
    display: flex;
    flex-direction: column;
  }
</style>
