<template>
  <client-only>
    <!-- Start Instagram Area -->
    <div class="instagram-area">
      <div class="instagram-slides owl-carousel owl-theme">
        <carousel
          :loop=true
          :autoplay=true
          :autoplayTimeout=5000
          :perPageCustom="[[0, 2], [768, 6], [1200, 9]]"
          :paginationEnabled=false
        >
          <slide v-for="photo in photos" :key="photo.id">
            <div class="instagram-box">
              <img :src="photo.photo" alt="image">

              <div class="icon">
                <i class="fab fa-instagram"></i>
              </div>

              <a :href="photo.url" :title="photo.title" :alt="photo.alt" target="_blank"></a>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
    <!-- End Instagram Area -->
  </client-only>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        account: 'conventionfoamfighting',
        photos: []
      }
    },
    methods: {
      filterPhotos(mediaArray) {
        console.log('mediaArray:', mediaArray);
        const photos = [];

        let i = 0;
        for (let media of mediaArray) {
          const node = media.node;
          const edges = node.edge_media_to_caption.edges;
          i += 1;

          if (node.thumbnail_src && node.shortcode && node.accessibility_caption) {
            photos.push({
              id: i,
              photo: node.thumbnail_src,
              title: node.accessibility_caption,
              alt: (edges[0] || edges).node.text,
              url: `https://www.instagram.com/p/${node.shortcode}/`
            });
          }
        }

        return photos;
      },
      getMediaArray(payload) {
        // Only returns the 12 most recent posts
        return payload.graphql.user.edge_owner_to_timeline_media.edges;
      },
      async getPhotos() {
        let photos = [];

        try {
          const payload = await this.requestApi();
          const mediaArray = this.getMediaArray(payload);

          photos = this.filterPhotos(mediaArray);
        } catch (error) {
          console.error('Unable to retrieve photos. Reason:', error);
        }

        return photos;
      },
      async requestApi() {
        const payload = await axios.get( `https://www.instagram.com/${this.account}/?__a=1`);
        if (payload.graphql) {
          console.log('Using Instagram');
          return payload;
        }

        console.log('Using Cache');
        return await this.$content('instagram').fetch();
      }
    },
    async mounted() {
      this.photos = await this.getPhotos();
    }
  }
</script>
