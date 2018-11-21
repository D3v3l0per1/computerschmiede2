<template>
  <div>
    
    <!-- Start Basic Header -->
    <app-particles-base-header headline="Der Schmiede PC"></app-particles-base-header>
    <!-- End Basic Header -->

    <v-container>
      <v-layout row wrap>

        <!-- Start PC Configurator -->
        <v-flex xs12 text-xs-center>

          <v-card class="mb-5">
            <v-card-text>
              <h1 class="font-weight-regular mt-5 mb-5">Der Computer Konfigurator ist in Arbeit ;)</h1>
            </v-card-text>
          </v-card>

        </v-flex>
        <!-- End PC Configurator -->

        <v-flex xs12>
          <v-container>
            
            <!-- Start Preloader Section -->
            <v-layout v-if="loading" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
            </v-layout>
            <!-- End Preloader Section -->

            <v-layout row wrap class="mb-4" v-else>
              
              <!-- Start Create Button Dialog Component -->
              <v-flex xs12 text-xs-center text-sm-right v-if="userIsAuthenticated">
                <app-create-cspc-block-dialog></app-create-cspc-block-dialog>
              </v-flex>
              <!-- End Create Button Dialog Component -->

              <!-- Start the Component Block  -->
              <v-flex xs12 v-for="item in blocks" :key="item.title">
                <v-card flat color="grey lighten-5" class="pa-3">
                  <v-layout row wrap>

                    <!-- Start Image Part -->
                    <v-flex xs12 sm4>
                      <v-img :src="item.imageUrl" height="200px" contain>
                        <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                          <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
                        </v-layout>
                      </v-img>
                    </v-flex>
                    <!-- End Image Part -->

                    <!-- Start Content Part -->
                    <v-flex xs12 sm7 offset-sm1>
                      <h2>{{ item.title }}</h2>
                      <v-divider class="mb-2 mt-1"></v-divider>
                      <p>{{ item.content }}</p>
                    </v-flex>
                    <!-- End Content Part -->

                    <!-- Start Edit Button -->
                    <v-flex xs12 text-xs-right>
                      <v-btn class="custom-tool-cta red" dark fab small depressed><v-icon>clear</v-icon></v-btn>
                      <!-- <app-edit-block-dialog :block="block"></app-edit-block-dialog> -->
                    </v-flex>
                    <!-- End Edit Button -->
                
                  </v-layout>
                </v-card>
              </v-flex>
              <!-- End the Component Block  -->

            </v-layout>

          </v-container>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script>

export default {
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: 'Computerschmiede PC | %s'
  },
  computed: {
    // block () {
    //   this.$store.getters.loadedBlock
    // },
    blocks () {
      return this.$store.getters.loadedBlocks
    },
    loading () {
      return this.$store.getters.loading
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
  }
}
</script>

<style lang="scss" scoped>
  .custom-tool-cta {
    position: absolute;
    bottom: 5px;
    right: 10px;
  }
</style>
