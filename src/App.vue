<template>
  <v-app>

    <!-- <div class="preloader">
      <div class="reloader__status">
        <div class="preloader__status-text">I'm {{ loaded }} % done!</div>
        <div class="preloader__status-loader">
          <div loader :style="loadStyle" class="preloader__status-bar"></div>
        </div>
      </div>
    </div> -->

    <div class="frontpage">
      <Header />

      <router-view></router-view>

      <Footer />

      <!-- <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <v-btn
        slot="activator"
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon>account_circle</v-icon>
        <v-icon>close</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>delete</v-icon>
      </v-btn>
    </v-speed-dial> -->
    </div>

  </v-app>
</template>

<script>

// import JQuery from 'jquery'
// let $ = JQuery

export default {
  name: 'App',
  data () {
    return {
      direction: 'top',
    fab: false,
    hover: false,
    tabs: null,
    top: true,
    right: false,
    bottom: true,
    left: false,
    transition: 'slide-y-reverse-transition',
      // loaded: 0,
      // loading: null,
      // loadStyle: {
      //   width: '0%'
      // },
      // statusElem: $('[status]'),
      // loader: $('[loader]'),
      // body: $('[body]')
    }
  },
  computed: {
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    activeFab () {
      switch (this.tabs) {
        case 'one': return { 'class': 'purple', icon: 'account_circle' }
        case 'two': return { 'class': 'red', icon: 'edit' }
        case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },
  ready () {
    // this.preloader = $(this.$el)
    this.removeScrolling()
    this.startLoading()
  },
  watch: {
    loaded () {
      this.loadStyle.width = `${this.loaded}`
    },
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  },
  methods: {
    removeScrolling () {
      this.body.css('overflow', 'hidden')
      console.log('Removed Scrolling')
    }
  }
}
</script>
