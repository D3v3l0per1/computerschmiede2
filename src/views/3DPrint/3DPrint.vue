<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 text-xs-center>
        <v-progress-circular
          :size="70"
          color="primary"
          indeterminate
          style="margin: 50% 0;"
          v-if="loading"
        ></v-progress-circular>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-else>
      <v-flex xs12 class="mt-5">
        <v-card tile>
          <v-card-title>
            <v-btn color="primary" flat fab dark to="/3d-druck">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <h1 class="font-weight-regular blue--text ml-3">{{ThreeDExample.title}}</h1>
          </v-card-title>

          <v-divider></v-divider>

          <v-window v-model="step">
            <v-window-item :value="1">
              <v-card flat>
                <v-card-text>
                  <iframe :src="'https://app.modelo.io/embedded/' + ThreeDExample.model_id + '?viewport=false&autoplay=true'" allowfullscreen width="100%" height="500px" frameborder="0"></iframe>
                </v-card-text>
              </v-card>
            </v-window-item>

            <v-window-item :value="2">
              <v-card flat>
                <img src="https://via.placeholder.com/1920x1080" style="width: 100%;" alt="">
              </v-card>
            </v-window-item>

            <v-window-item :value="3">
              <v-card flat>
                <img src="https://via.placeholder.com/1920x1080" style="width: 100%;" alt="">
              </v-card>
            </v-window-item>
          </v-window>
          
          <v-card-actions>
            <v-btn flat @click="step--" :disabled="step === 1">
              <v-icon>chevron_left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="step++" :disabled="step === 3">
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </v-card-actions>

          <v-divider></v-divider>

          <v-card-text>
            <p>
              <span class="font-italic grey--text">Geposted von sad_boi am {{ ThreeDExample.date | date }}</span> <br>
              Model erstellt von <a :href="ThreeDExample.author_link">{{ThreeDExample.author}}</a>
            </p>
            <p>{{ThreeDExample.description}}</p>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark class="blue lighten-2">Like it</v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'],
  data: () => ({
    step: 1
    // length: 3,
    // onboarding: 0
  }),
  computed: {
    ThreeDExample () {
      return this.$store.getters.loaded3DExample(this.id)
    },
    currentTitle () {
      switch (this.step) {
        case 1: return 'test 1'
        case 2: return 'test 2'
        default: return 'test 3'
      }
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  // methods: {
  //   next () {
  //     this.onboarding = this.onboarding + 1 === length ? 0 : this.onboarding + 1
  //   },
  //   prev () {
  //     this.onboarding = this.onboarding - 1 < 0 ? this.length -1 : this.onboarding -1
  //   }
  // },
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: '3D-Druck | %s'
  },
}
</script>
