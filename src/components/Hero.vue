<template>
  <div class="hero-container">
    <!-- Background Image -->
    <div 
      class="hero-background"
      :style="{ backgroundImage: `url(${profilePic})` }"
    ></div>

    <!-- Overlay -->
    <div class="overlay"></div>

    <!-- Content -->
    <div class="hero-content d-flex align-center justify-center text-center">
      <v-container>
        <h1 class="hero-title">Akash</h1>
        <p class="hero-lead">Final year in Thiagarjar College of Enginnering </p>
        <p class="hero-lead">Software Developer | VR Enthusiast | Problem Solver</p>
        <v-btn
          size="large"
          class="mt-6 hero-button"
          @click="$emit('scrollToAchievements')"
        >
          Explore My Work
          <v-icon right dark>mdi-arrow-down</v-icon>
        </v-btn>
      </v-container>
    </div>
  </div>
</template>

<script setup>
import profilePic from '../assets/bg.jpg'; // Updated profile pic
</script>

<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

/* Fullscreen background image */
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  filter: brightness(0.6); /* Darkens image slightly */
  z-index: 0;
}

/* Overlay to make text readable */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4); /* Dark tint */
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  height: 100%;
  flex-direction: column;
  color: white;
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: 700;
}

.hero-lead {
  font-size: 1.5rem;
  opacity: 0.9;
}

.hero-button {
  background: linear-gradient(45deg, var(--accent-color), #007bff);
  color: white;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-weight: bold;
}
</style>
