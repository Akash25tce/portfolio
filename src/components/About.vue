<template>
  <v-container>
    <h2>About Me</h2>
    <v-row justify="center" class="mt-4">
      <v-col cols="12" md="10">
        <v-card class="pa-4 content-card">
          <h3>Professional Summary</h3>
          <p>A dedicated software developer with strong problem-solving skills and a passion for building efficient solutions. Committed to innovation, collaboration, and continuous learning.</p>
        </v-card>
      </v-col>

      <v-col cols="12" md="10">
        <v-card class="mt-6 pa-4 content-card">
          <v-row>
            <v-col cols="12" md="6">
              <h3>Technical Skills</h3>
              <div class="d-flex flex-wrap ga-2 mt-4">
                <v-chip color="#E0E0E0" variant="flat" class="chip-hover-effect">Unity</v-chip>
                <v-chip color="#E0E0E0" variant="flat" class="chip-hover-effect">Blender</v-chip>
                <v-chip color="#E0E0E0" variant="flat" class="chip-hover-effect">Java</v-chip>
                <v-chip color="#E0E0E0" variant="flat" class="chip-hover-effect">C#</v-chip>
                <v-chip color="#E0E0E0" variant="flat" class="chip-hover-effect">Python</v-chip>
                <v-chip color="#E0E0E0" variant="flat" class="chip-hover-effect">MySQL</v-chip>
                <v-chip color="#E0E0E0" variant="flat" class="chip-hover-effect">AWS-EC2</v-chip>
                <v-chip color="#E0E0E0" variant="flat" class="chip-hover-effect">AWS-S3</v-chip>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <h3>Areas of Interest</h3>
              <div class="d-flex flex-wrap ga-2 mt-4">
                <v-chip color="#673AB7" variant="flat" class="chip-hover-effect">OOP</v-chip>
                <v-chip color="#673AB7" variant="flat" class="chip-hover-effect">AR/VR Development</v-chip>
                <v-chip color="#673AB7" variant="flat" class="chip-hover-effect">Database Management</v-chip>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default { name: 'About' }
</script>

<style scoped>
.content-card {
  background-color: var(--background-light);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
p {
  color: var(--text-secondary);
  line-height: 1.7;
}

/* Styles for the hover effect on chips */
.chip-hover-effect {
  transition: transform 0.2s ease-in-out; /* Smooth transition for the transform property */
}

.chip-hover-effect:hover {
  transform: scale(1.05); /* Slightly scale up the chip on hover */
}
</style>