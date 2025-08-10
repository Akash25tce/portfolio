<template>
  <v-container>
    <h2>Events & Achievements</h2>
    <v-row>
      <v-col v-for="ev in events" :key="ev.id" cols="12" sm="6" md="4">
        <v-card class="event-card" elevation="2" hover>
          <v-img :src="ev.image" height="180px" alt="event image" />
          <v-card-title>{{ ev.title }}</v-card-title>
          <v-card-subtitle>{{ ev.date }}</v-card-subtitle>
          <v-card-text>{{ ev.description }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import eventData from '../data/events'
export default {
  name: 'Events',
  data() {
    return { events: eventData }
  }
}
</script>

<style scoped>
.event-card{transition:transform 0.18s ease;}
.event-card:hover{transform:translateY(-6px)}
</style>