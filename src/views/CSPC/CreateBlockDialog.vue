<template>
  <v-dialog width="80%" persistent v-model="createDialog">
   
    <v-btn class="primary" slot="activator">Weitern Block erstellen</v-btn>
    
    <!-- Start Card Content -->
    <v-card>
      
      <v-layout row wrap>

        <v-card-text>
          <v-flex xs12>
            <h1 class="font-weight-regular blue--text text--lighten-2">Block erstellen</h1>
          </v-flex>
        </v-card-text>

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
                        <v-text-field name="title" label="Titel" v-model="title" id="title" required></v-text-field>
                        <v-divider class="mb-2 mt-1"></v-divider>
                        <v-textarea name="content" label="Beschreibung" v-model="content" id="content" required></v-textarea>
                        
                        <!-- Image Upload Button -->
                        <v-btn raised class="blue lighten-2" dark @click="onPickFile">Bild Hochladen</v-btn>
                        <input type="file" style="display:none;" ref="fileInput" accept="image/*" @change="onFilePicked">
                      </v-flex>
                      
                      <!-- Create Button -->
                      <v-flex xs12 text-xs-center text-sm-right>
                        <v-btn class="primary" large :disabled="!formIsValid" type="submit">Erstellen</v-btn>
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
            <v-btn flat class="red--text darken-1" @click="createDialog = false">Schließen</v-btn>
          </v-flex>
        </v-card-actions>

      </v-layout>
      
    </v-card>
    <!-- End Card Content -->
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      createDialog: false,
      title: '',
      imageUrl: '',
      image: null,
      content: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.imageUrl !== '' && this.content !== ''
    }
  },
  methods: {
    onCreateBlock () {
      if (!this.formIsValid) {
        console.log('Form Invalid')
        return 
      }
      if (!this.image) {
        console.log('Form Invalid')
        return
      }
      const block = {
        title: this.title,
        imageUrl: this.imageUrl,
        content: this.content,
        image: this.image
      }
      this.$store.dispatch('createBlocks', block)
      this.createDialog = false
      // this.$router.push('/cspc/blocks')
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Bitte ein gültiges Bild wählen')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>
