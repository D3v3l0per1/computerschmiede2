<template>
  <v-layout row wrap>
    <v-flex xs12>
      
      <div class="clearfix blue lighten-2" style="height: 400px;"></div>
    </v-flex>

    <v-flex xs12>
      <v-container>
        <v-layout row wrap>

          <v-flex xs12>
            <v-responsive>

              <h3 class="display-3">Wilkommen auf der 3D Druck Seite</h3>

              <span class="subheading">Sie haben die Möglichkeit hier Ihre 3D Datei hochzuladen, die Sie ausdrucken wollen und wir senen Ihnen einen Kostenvoranschlag und ob es möglich ist Sie zu drucken :)</span>

              <v-divider class="my-3"></v-divider>

              <v-flex xs12 sm8 offset-sm2 text-xs-center class="mt-4 mb-5">
                <!-- <v-btn dark class="blue lighten-2" large block>Uploaden</v-btn> -->
                <template>
                  <app-register-on-3d-example></app-register-on-3d-example>
                </template>
              </v-flex>

            </v-responsive>
          </v-flex>

          <v-flex xs12>
            <h1 class="font-weight-regular">Beispiele</h1>
            <hr class="mb-3">
          </v-flex>

          <v-flex xs12 text-xs-right>
            <v-btn dark class="blue lighten-2" to="/3d-druck/neu" v-if="userIsAuthenticated">Neues Beispiel</v-btn>
          </v-flex>

          <v-flex xs12 class="text-xs-center">
            <v-progress-circular
              :size="70"
              color="primary"
              indeterminate
              v-if="loading"></v-progress-circular>
          </v-flex>

          <v-flex v-if="!loading" xs12 sm6 md4 v-for="item in threeDExamples" :key="item.title" class="pa-2">
            <v-card>
              <v-card-title>
                <v-flex xs12>
                  <h2 class="font-weight-regular">{{item.title}}</h2>
                </v-flex>
              </v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-layout row wrap>
                  <v-flex xs12>
                    <img :src="item.imageUrl" style="width: 100%;" alt="">
                    <p><span class="grey--text font-italic">Gepostet am {{item.date | date}}</span><br>
                      {{item.title}}<span> by </span> <a :href="item.author_link" target="_blank">{{item.author}}</a></p>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="blue lighten-2" dark :to="'/3d-druck/' + item.id">Mehr</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: '3D Druck | %s'
  },
  computed: {
    threeDExamples () {
      return this.$store.getters.featured3DExamples
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
