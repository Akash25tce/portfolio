<template>
  <v-container>
    <h2>Contact</h2>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-text>
            <p><strong>Email:</strong> <a href="mailto:akash25aswinalr@gmail.com">akash25aswinalr@gmail.com</a></p>
            <p><strong>LinkedIn:</strong> <a href="#">(placeholder)</a></p>
            <p><strong>GitHub:</strong> <a href="#">(placeholder)</a></p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <h3>Send a Message</h3>
        <!-- Simple contact form: implement your backend or use email service later -->
        <v-form ref="form" @submit.prevent="submit">
          <v-text-field label="Your name" v-model="form.name" required />
          <v-text-field label="Email" v-model="form.email" required />
          <v-textarea label="Message" v-model="form.message" rows="4" />
          <v-btn type="submit">Send</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return { form: { name: '', email: '', message: '' } }
  },
  methods: {
    submit() {
      // Replace with your preferred contact integration (EmailJS, Netlify forms, AWS Lambda + SES etc.)
      alert('Thanks! This form is a placeholder. Integrate your backend to send messages.')
    }
  }
}
</script>

<style scoped>
</style>