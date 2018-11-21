<template>
  <v-dialog width="80%" persistent v-model="editDialog">
   
    <v-btn fab small depressed class="primary ediit" slot="activator"><v-icon>edit</v-icon></v-btn>
    
    <!-- Start Card Content -->
    <v-card>
      
      <v-layout row wrap>

        <!-- Start Headline -->
        <v-card-text>
          <v-flex xs12>
            <h1 class="font-weight-regular blue--text text--lighten-2">Block bearbeiten</h1>
          </v-flex>
        </v-card-text>
        <!-- End Headline -->

        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        
        <v-card-text>
          <v-layout row wrap>

            <!-- Start the Component Block  -->
              <v-flex xs12>
                <form @submit.prevent="onCreateBlock">
                  <v-card flat color="grey lighten-5" class="pa-3">
                    <v-layout row wrap>

                      <!-- Start Image Part -->
                      <v-flex xs12 sm4>
                        <v-img :src="imageUrl" style="width: 100%;" height="250px" contain>
                          <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
                          </v-layout>
                        </v-img>
                      </v-flex>
                      <!-- End Image Part -->

                      <!-- Start Content Part -->
                      <v-flex xs12 sm7 offset-sm1 text-xs-center text-sm-left>
                        <v-text-field name="title" label="Titel" v-model="editedTitle" id="title" required></v-text-field>
                        <v-divider class="mb-2 mt-1"></v-divider>
                        <v-textarea name="content" label="Beschreibung" v-model="editedContent" id="content" required></v-textarea>
                        
                        <!-- Image Upload Button -->
                        <v-btn raised class="blue lighten-2" dark @click="onPickFile">Bild Hochladen</v-btn>
                        <input type="file" style="display:none;" ref="fileInput" accept="image/*" @change="onFilePicked">
                      </v-flex>
                      
                      <!-- Create Button -->
                      <v-flex xs12 sm1 text-xs-center text-sm-right>
                        <v-btn class="primary" large type="submit">Erstellen</v-btn>
                      </v-flex>
                      <!-- End Content Part -->

                    </v-layout>
                  </v-card>
                </form>
              </v-flex>
              <!-- End the Component Block  -->

          </v-layout>
        </v-card-text>

        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        
        <v-card-actions>
          <v-flex xs12>
            <v-btn flat class="red--text darken-1" @click="editDialog = false">Schließen</v-btn>
          </v-flex>
        </v-card-actions>

      </v-layout>
      
    </v-card>
    <!-- End Card Content -->
  </v-dialog>
</template>

<script>
export default {
  props: ['block'],
  data () {
    return {
      editDialog: false,
      editedTitle: this.block.title,
      editedImage: '',
      editedContent: this.block.editedContent
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' && this.editedContent.trim() === '') {
        return
      }
      this.editDialog = false
      this.$store.dispatch('updateBlockData', {
        id: this.block.id,
        title: this.editedTitle,
        content: this.editedContent
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .ediit {
    position: absolute;
    bottom: 20px;
    right: 10px;
  }
</style>
