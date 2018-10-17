<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div style="height: 400px;" class="blue lighten-2 clearfix"></div>
    </v-flex>
    <v-flex xs12>
      <v-container>
        <h1 class="font-weight-regular">Beispiele</h1>
        <hr class="mb-3">
        <v-layout row wrap>

          <v-flex xs12 sm6 md4 v-for="item in threeDExamples" :key="item.title" class="pa-2">
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
                    <img src="https://via.placeholder.com/1920x800" style="width: 100%;" alt="">
                    <p>{{item.title}}<span> by </span> <a :href="item.author_link" target="_blank">{{item.author}}</a></p> 
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="blue lighten-2" dark to="/3d-druck/1">View More</v-btn>
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
      return this.$store.getters.loaded3DExamples
    }
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>