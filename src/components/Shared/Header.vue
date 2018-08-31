<template>
  <header>
    <v-toolbar fixed>
      <v-toolbar-side-icon class="hidden-md-and-up white--text" @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-sm-and-down">
        <router-link to="/">
          <img src="@/assets/logoWhite-1.png" class="mt-2 ml-4 main-logo" alt="">
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="sideNav" fixed dark>
      <v-list>
        <v-list-tile class="custom-tile">
          <v-list-tile-content>
            <img src="@/assets/logoWhite-1.png" style="width: 100%;" alt="">
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider></v-divider>
      <v-list class="pa-1">
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>


// ueber-uns
// computerschmiede-pc
// 3d-druck
// kontakt

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        { title: 'Home', link: '/', icon: '' },
        { title: 'Über uns', link: '/ueber-uns', icon: '' },
        { title: 'Computerschmiede PC', link: '/computerschmiede-pc', icon: '' },
        { title: '3D Druck', link: '/under_const', icon: '' },
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
    background-color: rgba(0,0,0,.8);
  }

  .v-toolbar .v-toolbar__items .v-btn .v-btn__content {
    color: white;
    font-weight: 400;
  }

  .main-logo {
    width: 100%;
    max-width: 180px;
    max-height: 50px;
  }

  .custom-tile > .v-list__tile {
    height: 100px;
    padding: 0 16px;
  }
</style>
