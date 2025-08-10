<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <h2>About Me</h2>
        <p><strong>Professional Summary:</strong> A dedicated software developer with strong problem-solving skills and a passion for building efficient solutions. Committed to innovation, collaboration, and continuous learning.</p>

        <h3>Areas of Interest</h3>
        <ul>
          <li>Object Oriented Programming</li>
          <li>AR/VR Development</li>
          <li>Database Management</li>
        </ul>

        <h3>Technical Skills</h3>
        <ul>
          <li>Unity, Blender (Game & VR)</li>
          <li>Java, C, Python, C#</li>
          <li>MySQL</li>
          <li>Jenkins, AWS (EC2, S3)</li>
        </ul>
      </v-col>

      <v-col cols="12" md="6">
        <h3>Education</h3>
        <v-card outlined>
          <v-card-text>
            <strong>B.E. (CSE)</strong> — Thiagarajar College of Engineering, Anna University (2026) — CGPA: 8.27 (till 6th semester)
            <br/><br/>
            <strong>XII</strong> — P.H.N.U.S.P Pathirakaliamman Matric Hr Sec School — 96.5%
            <br/><br/>
            <strong>X</strong> — P.H.N.U.S.P Pathirakaliamman Matric Hr Sec School — State Board (2020) — 98.8%
          </v-card-text>
        </v-card>

        <h3>Personal Skills</h3>
        <ul>
          <li>Leadership and Teamwork</li>
          <li>Willingness to update</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default { name: 'About' }
</script>

<style scoped>
h2{margin-bottom:0.5rem}
</style>