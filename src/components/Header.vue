<template>
  <v-app-bar app color="white" elevate-on-scroll flat>
    <v-container>
      <v-row align="center" justify="space-between" no-gutters>
        <v-col cols="auto">
          <div class="brand" role="banner">
            <img src="/src/assets/profile-placeholder.jpg" alt="profile" width="48" height="48" style="border-radius:8px;object-fit:cover;" />
            <span class="name">Akash A</span>
            <small class="title">Upcoming Software Developer</small>
          </div>
        </v-col>

        <v-col cols="auto">
          <nav aria-label="Primary">
            <v-btn text @click="$emit('scrollToSection','about')">About</v-btn>
            <v-btn text @click="$emit('scrollToSection','events')">Events</v-btn>
            <v-btn text @click="$emit('scrollToSection','gallery')">Gallery</v-btn>
            <v-btn text @click="$emit('scrollToSection','contact')">Contact</v-btn>
          </nav>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.brand{display:flex;gap:0.75rem;align-items:center}
.name{font-weight:600;margin-left:0.25rem}
.title{display:block;color:#666;font-size:0.8rem}
</style>