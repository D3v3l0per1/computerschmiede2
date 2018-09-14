<template>
  <v-navigation-drawer v-model="sideNav" permanent height="100vh" dark>
    <v-list>
      <v-list-tile class="custom-tile">
        <v-list-tile-content>
          <img src="@/assets/logoWhite-1.png" style="width: 100%;" alt="">
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    <v-list class="pa-1">
      <v-list-tile>
        <v-layout row wrap>
          <v-flex xs12>
            <v-list-tile-content class="title font-weight-thin mb-4">Seiten</v-list-tile-content>
          </v-flex>
          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
        </v-layout>
      </v-list-tile>
      <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
        <v-list-tile-content>{{item.title}}</v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: true,
        menuItems: [
          { title: 'Home', link: '/', icon: '' }
        ]
      }
    }
  }
</script>
