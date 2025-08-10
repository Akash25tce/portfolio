<template>
  <v-container>
    <h2>Gallery</h2>
    <v-row id="gallery">
      <v-col
        v-for="(img, idx) in images"
        :key="idx"
        cols="6"
        sm="4"
        md="3"
      >
        <a
          :href="img.src"
          :data-pswp-width="img.width"
          :data-pswp-height="img.height"
          target="_blank"
          rel="noreferrer"
        >
          <figure class="gallery-item">
            <img :src="img.src" :alt="img.alt" />
          </figure>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import eventData from '../data/events.js'; // Make sure this file exists!

export default {
  name: 'Gallery',
  data() {
    // Build image array with proper dimensions for PhotoSwipe
    const images = eventData.map(e => ({
      src: e.image,
      alt: e.title,
      width: 1600,  // Adjust to your actual image width
      height: 900   // Adjust to your actual image height
    }));
    return { images, lightbox: null };
  },
  mounted() {
    // Initialize PhotoSwipe Lightbox
    this.lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('photoswipe')
    });
    this.lightbox.init();
  },
  beforeUnmount() {
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  }
};
</script>

<style scoped>
.gallery-item {
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
}
.gallery-item img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
}
</style>
