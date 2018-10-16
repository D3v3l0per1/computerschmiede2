<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div style="height: 400px;" class="blue lighten-2 clearfix"></div>
    </v-flex>
    <v-flex xs12>
      <v-container>
        <h1 class="font-weight-regular">Projekte</h1>
        <hr class="mb-3">
        <v-layout row wrap>

          <v-flex xs12 sm6 md4 v-for="item in threeDItems" :key="item.title" class="pa-2">
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
                    <div class='modelo-wrapper'>
                      <iframe :src="item.model" style="width:100%;height:100%;" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen ></iframe>
                      <p>{{item.title}}<span> by </span> <a :href="item.author_link" target="_blank">{{item.author}}</a></p> 
                    </div>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-footer>
                <v-flex xs12 text-xs-right>
                  <v-dialog v-model="dialog" width="80%">

                    <v-btn class="blue lighten-2" dark slot="activator">View More</v-btn>

                    <v-card>
                      <v-card-title class="headline grey lighten-2" primary-title>AT ST Star Wars</v-card-title>
                      <v-card-text>
                        <v-layout row wrap>
                          <v-flex xs12>
                            <div class='modelo-wrapper'>
                              <iframe src="https://app.modelo.io/embedded/rLn0H8IuPS?viewport=false&autoplay=true" style="width:100%;height:500px;" frameborder="0" mozallowfullscreen webkitallowfullscreen allowfullscreen ></iframe>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptates placeat amet explicabo quaerat nulla nesciunt error aspernatur similique accusamus ipsum laboriosam rerum, necessitatibus consectetur itaque esse facere sapiente fugiat!</p>
                          </v-flex>
                        </v-layout>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn flat class="red--text" @click="dialog = false">Schließen</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-flex>
              </v-card-footer>
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
  data () {
    return {
      dialog: false,
      threeDItems: [
        { title: 'AT ST Star Wars', author: 'jackbenimble', author_link: 'https://www.thingiverse.com/jackbenimble', model: 'https://app.modelo.io/embedded/rLn0H8IuPS?viewport=false&autoplay=true' },
        { title: 'AT ST Star Wars', author: 'jackbenimble', author_link: 'https://www.thingiverse.com/jackbenimble', model: 'https://app.modelo.io/embedded/rLn0H8IuPS?viewport=false&autoplay=true' },
        { title: 'AT ST Star Wars', author: 'jackbenimble', author_link: 'https://www.thingiverse.com/jackbenimble', model: 'https://app.modelo.io/embedded/rLn0H8IuPS?viewport=false&autoplay=true' },
        { title: 'AT ST Star Wars', author: 'jackbenimble', author_link: 'https://www.thingiverse.com/jackbenimble', model: 'https://app.modelo.io/embedded/rLn0H8IuPS?viewport=false&autoplay=true' },
      ]
    }
  }
}
</script>