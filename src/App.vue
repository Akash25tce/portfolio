<template>
  <v-app>
    <Header @scrollToSection="scrollTo" />

    <main>
      <section id="hero" class="hero">
        <Hero @scrollToAchievements="scrollTo('events')" />
      </section>

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
      <div class="container">© { new Date().getFullYear() } Akash A — Built with Vue + Vuetify</div>
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
:root{--container:1200px}
body{font-family:Inter, Roboto, system-ui, -apple-system; margin:0}
.hero{padding:2.5rem 1rem; text-align:center}
.section{padding:2rem 1rem; max-width:var(--container); margin:0 auto}
.footer{padding:1rem; text-align:center; border-top:1px solid rgba(0,0,0,0.06)}
</style>