<template>
  <div>
    <div class="page-title-area">
      <div class="container">
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>Gallery</li>
        </ul>
      </div>
    </div>

    <section class="gallery-area pt-4 pb-60">
      <div class="container">
        <div class="section-title page-title mb-4 border-0">
          <h2><span class="dot"></span> Gallery</h2>
        </div>

        <div class="row m-0">
          <div class="col-lg-4 col-md-6 p-0" v-for="({ image, tag, title }) in gallery">
            <div class="single-gallery-item">
              <img :src="`/images/gallery/${image}`" :alt="title">

              <div class="gallery-content">
                <span>{{ tag }}</span>
                <h3>{{ title }}</h3>
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
        gallery: [
          { image: 'cff-01.jpg', tag: 'Boffer', title: 'Blue Team Fighter' },
          { image: 'cff-02.jpg', tag: 'Boffer', title: 'Blue Team Advances' },
          { image: 'cff-03.jpg', tag: 'Boffer', title: 'Red Team Ready' },
          { image: 'cff-04.jpg', tag: 'Boffer', title: 'Military Cosplayers' },
          { image: 'cff-05.jpg', tag: 'Boffer', title: 'Viking Cosplayer' },
          { image: 'cff-06.jpg', tag: 'Boffer', title: 'Blue Team Sword and Shield Fighter' },
          { image: 'cff-07.jpg', tag: 'Boffer', title: 'Rallying the Fighters' },
          { image: 'cff-08.jpg', tag: 'Boffer', title: 'Own Your Own Gear' },
          { image: 'cff-09.jpg', tag: 'Boffer', title: 'Female Champion' },
          { image: 'cff-10.jpg', tag: 'Boffer', title: 'Red Team Sword and Shield Fighter' },
          { image: 'cff-11.jpg', tag: 'Boffer', title: 'Red Team Fighter' },
          { image: 'cff-12.jpg', tag: 'Boffer', title: 'Red Team Shield and Bat Fighter' }
        ]
      };
    }
  }
</script>
