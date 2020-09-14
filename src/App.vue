<template>
  <div id="app">
    <Contacts />
  </div>
</template>

<script>
import Contacts from './components/Contacts.vue'

export default {
  name: 'App',
  components: {
    Contacts
  }
}
</script>

<style>
  html,
  body {
    background: #E5E5E5;
  }
  @font-face {
    font-family: "IBM Plex Sans";
    src: local("IBM Plex Sans"),
    url(./fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf) format("truetype");
  }
</style>
