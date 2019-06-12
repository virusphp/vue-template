<template>
  <v-app
    id="app"
  >
    <app-navbar></app-navbar>
    <router-view/>
    <!-- Div Content -->
  </v-app>
</template>

<script>
import AppNavbar from './components/master/AppNavbar'
export default {
  name: 'App',
  components: {AppNavbar},
}
</script>
