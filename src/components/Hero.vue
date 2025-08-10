<template>
  <v-container class="hero-inner">
    <v-row>
      <v-col cols="12">
        <h1>Turning Ideas into Code</h1>
        <p class="lead">Passionate about VR, Game Development & Problem Solving.</p>
        <v-btn large @click="$emit('scrollToAchievements')">View Achievements</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>
h1{font-size:1.6rem;margin:0}
.lead{color:#444;margin:0.5rem 0 1rem}
</style>