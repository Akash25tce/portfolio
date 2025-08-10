<template>
  <v-app class="app-container">
    <Header @scrollToSection="scrollTo" />

    <main>
      <section id="hero">
        <Hero @scrollToAchievements="scrollTo('events')" />
      </section>

      <div class="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div>

      <section id="about" class="section">
        <About />
      </section>

      <section id="events" class="section">
        <Events />
      </section>

      <section id="gallery" class="section">
        <Gallery />
      </section>

      <section id="contact" class="section">
        <Contact />
      </section>
    </main>

    <footer class="footer">
      <v-container>
        <div class="text-center">© {{ new Date().getFullYear() }} Akash — Professional Portfolio</div>
      </v-container>
    </footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Events from './components/Events.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: { Header, Hero, About, Events, Gallery, Contact },
  methods: {
    scrollTo(sectionId) {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<style>
:root {
  --background-color: #0f172a; /* Deep Slate */
  --background-light: #1e293b; /* Lighter Slate for cards/dividers */
  --text-primary: #f8fafc;     /* Bright White for headings */
  --text-secondary: #cbd5e1; /* Light Gray for paragraphs */
  --accent-color: #22d3ee;     /* Bright Cyan */
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text-secondary);
  background-color: var(--background-color);
}

.app-container {
  background-color: var(--background-color) !important;
}

.section {
  padding: 5rem 1rem;
  position: relative;
  background-color: var(--background-color);
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3rem;
  text-align: center;
}

h3 {
  font-family: 'Poppins', sans-serif;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

/* --- Shape Divider --- */
.shape-divider {
  position: relative;
  background-color: var(--background-light); /* Match the next section's potential color */
  line-height: 0;
}
.shape-divider svg {
  position: relative;
  display: block;
  width: 100%;
  height: 80px;
}
.shape-divider .shape-fill {
  fill: var(--background-color); /* Fill with the main bg color */
}

/* --- Footer --- */
.footer {
  padding: 2rem 1rem;
  background-color: #020617;
  color: #94a3b8;
  text-align: center;
}
</style>