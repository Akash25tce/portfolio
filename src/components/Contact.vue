<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" class="text-center mb-10">
        <h2 class="text-white">Contact Me</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="contact-card" variant="outlined">
          <v-row>
            <v-col cols="12" md="6">
              <v-card-text>
                <h3 class="mb-4 text-white">Get in Touch</h3>
                <v-list density="compact" bg-color="transparent">
                  <v-list-item
                    prepend-icon="mdi-email"
                    title="Email"
                    subtitle="akash25aswinalr@gmail.com"
                    href="mailto:akash25aswinalr@gmail.com"
                    class="contact-list-item"
                  ></v-list-item>
                  <v-list-item
                    prepend-icon="mdi-linkedin"
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/akash-a-91b9752a8"
                    class="contact-list-item"
                  ></v-list-item>
                  <v-list-item
                    prepend-icon="mdi-github"
                    title="GitHub"
                    href="https://github.com/Akash25tce/"
                    class="contact-list-item"
                  ></v-list-item>
                </v-list>
              </v-card-text>
            </v-col>
            <v-divider vertical class="d-none d-md-block"></v-divider>
            <v-col cols="12" md="6">
              <v-card-text>
                <h3 class="mb-4 text-white">Send a Message</h3>
                <v-form ref="form" @submit.prevent="submit">
                  <v-text-field 
                    label="Your Name" 
                    v-model="form.name" 
                    required 
                    density="comfortable"
                    color="white"
                    class="custom-input-text" 
                  />
                  <v-text-field 
                    label="Email" 
                    v-model="form.email" 
                    required 
                    density="comfortable"
                    color="white"
                    class="custom-input-text" 
                  />
                  <v-textarea 
                    label="Message" 
                    v-model="form.message" 
                    rows="4" 
                    color="white"
                    class="custom-input-text"
                  />
                  <v-btn type="submit" color="white" block size="large">Send</v-btn>
                </v-form>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return { form: { name: '', email: '', message: '' } };
  },
  methods: {
    async submit() {
      // 1. Collect form data
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('email', this.form.email);
      formData.append('message', this.form.message);

      try {
        // 2. Send the data to your backend endpoint
        // NOTE: Replace 'https://your-backend-url.com/send-message' with your actual endpoint
        const response = await fetch('https://your-backend-url.com/send-message', {
          method: 'POST',
          body: formData
        });

        // 3. Handle the response from the server
        if (response.ok) {
          alert('Your message was sent successfully!');
          // Clear the form fields after successful submission
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        } else {
          alert('There was an error sending your message. Please try again later.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please check your network connection.');
      }
    }
  }
};
</script>

<style scoped>
/*
  Added a dark background for the v-card to make text stand out
*/
.contact-card {
  background-color: rgba(33, 33, 33, 0.9) !important;
  color: white !important;
}

/*
  Style for all the list items in the contact section
*/
.contact-list-item .v-list-item-title,
.contact-list-item .v-list-item-subtitle,
.contact-list-item .v-list-item__prepend .v-icon {
  color: white !important;
}

/*
  Style for the v-text-field and v-textarea components
*/
.custom-input-text .v-label {
    color: rgba(255, 255, 255, 0.7) !important;
}

.custom-input-text input,
.custom-input-text textarea {
  color: white !important;
}
</style>