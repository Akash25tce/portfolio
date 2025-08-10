<template>
  <v-container>
    <h2>Events & Achievements</h2>
    <v-row>
      <v-col v-for="ev in events" :key="ev.id" cols="12" sm="6" md="4">
        <v-card class="event-card d-flex flex-column">
          <v-img :src="ev.image" height="200px" cover alt="event image" />
          <v-card-text class="d-flex flex-column" style="flex-grow: 1;">
            <h3 class="mb-2">{{ ev.title }}</h3>
            <v-card-subtitle class="pa-0 mb-3">{{ ev.date }}</v-card-subtitle>
            <p class="mb-0" style="flex-grow: 1;">{{ ev.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import eventData from '../data/events'
export default {
  name: 'Events',
  data() { return { events: eventData } }
}
</script>

<style scoped>
.event-card {
  background-color: var(--background-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}
.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 20px 0px rgba(34, 211, 238, 0.5); /* Cyan glow */
}
p {
  color: var(--text-secondary);
}
.v-card-subtitle {
  color: var(--text-secondary);
  opacity: 0.7;
}
</style>