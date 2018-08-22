<template>
  <v-app>

    <Header />

    <router-view></router-view>

    <Footer />

  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      
    }
  }
}
</script>
