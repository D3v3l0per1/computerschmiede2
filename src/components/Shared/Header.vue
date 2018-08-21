<template>
  <header>
    <v-toolbar fixed>
      <v-toolbar-side-icon v-model="sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">
          <img src="@/assets/logoWhite-1.png" class="mt-2 logo" alt="">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { title: 'Home', link: '/', icon: '' },
        { title: 'Über uns', link: '/ueber-uns', icon: '' },
        { title: 'Computerschmiede PC', link: '/computerschmiede-pc', icon: '' },
        { title: '3D Druck', link: '/3d-druck', icon: '' },
        { title: 'Kontakt', link: '/kontakt', icon: '' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .application .theme--light.v-toolbar, .theme--light .v-toolbar {
    background-color: transparent;
  }
  .v-toolbar .v-toolbar__content {
    height: 80px;
    background-color: rgba(0,0,0,.6);
  }

  .v-toolbar .v-toolbar__items .v-btn .v-btn__content {
    color: white;
    font-weight: 400;
  }

  .logo {
    width: 100%;
    max-height: 50px;
  }
</style>
