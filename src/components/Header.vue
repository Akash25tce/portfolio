<template>
  <div>
    <v-app-bar app elevate-on-scroll class="header-dark">
      <v-container class="d-flex align-center">
       <v-avatar class="mr-3" size="80">
  <v-img :src="profilePic" alt="Akash profile photo" cover></v-img>
</v-avatar>
        <v-toolbar-title class="font-weight-bold text-h5 brand-name">
          Akash Alagarsamy
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <div class="d-none d-md-block">
          <v-btn text class="mx-1" color="blue" @click="$emit('scrollToSection', 'about')">About</v-btn>
          <v-btn text class="mx-1" color="blue" @click="$emit('scrollToSection', 'events')">Achievements</v-btn>
          <v-btn text class="mx-1" color="blue" @click="$emit('scrollToSection', 'contact')">Contact</v-btn>
        </div>

        <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary location="right" class="mobile-drawer">
      <v-list>
        <v-list-item @click="handleMobileNav('about')"><v-list-item-title>About</v-list-item-title></v-list-item>
        <v-list-item @click="handleMobileNav('events')"><v-list-item-title>Achievements</v-list-item-title></v-list-item>
        <v-list-item @click="handleMobileNav('contact')"><v-list-item-title>Contact</v-list-item-title></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import profilePic from '../assets/profile-placeholder.jpg';

const drawer = ref(false);
const emit = defineEmits(['scrollToSection']);

const handleMobileNav = (sectionId) => {
  emit('scrollToSection', sectionId);
  drawer.value = false;
};
</script>

<style scoped>
.header-dark {
  background-color: rgba(134, 138, 147, 0.2) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(132, 24, 24, 0.1);
}
.brand-name {
  color: #fff;
}
.mobile-drawer {
  background-color: #63d61cff;
}
</style>