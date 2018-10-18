<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="mt-5">
        <h1 class="font-weight-light display-3 blue--text">Erstelle ein Beispiel</h1>
        <v-divider></v-divider>
      </v-flex>
      <v-flex xs12 class="mt-5">
        <form @submit.prevent="onCreateExample">
          <v-card>
            <v-card-title>
              <v-layout row>
                <v-flex xs1>
                  <v-btn color="primary" flat fab dark to="/3d-druck">
                    <v-icon>keyboard_arrow_left</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs11>
                  <h1 class="font-weight-regular blue--text ml-3">
                    <v-text-field name="title" label="Titel" v-model="title" id="title" required></v-text-field>
                  </h1>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <img :src="imageUrl" style="width: 100%:" alt="">
                    </v-flex>
                      <v-flex xs12>
                      <v-text-field name="imageUrl" label="Bild URL" v-model="imageUrl" id="imageUrl" required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-layout row wrap>
                    <v-flex xs12>
                      <iframe :src="'https://app.modelo.io/embedded/' + model_id + '?viewport=false&autoplay=true'" width="100%" height="500px" frameborder="0"></iframe>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field name="model_id" label="Model ID" v-model="model_id" id="model_id" required></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
                <v-flex xs12>
                  <p>Erstellt von: </p>
                </v-flex>
                <v-flex xs12 sm6 class="pa-2">
                  <v-text-field name="author" label="Author" v-model="author" id="author" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 class="pa-2">
                  <v-text-field name="author_link" label="Author Link" v-model="author_link" id="author_link" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-textarea name="description" label="Beschreibung" v-model="description" id="description" required></v-textarea>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark class="blue lighten-2" :disabled="!formIsValid" type="submit">Speichern</v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: 'Neues Beispiel | %s'
  },
  data () {
    return {
      title: '',
      imageUrl: '',
      model_id: '',
      author: '',
      author_link: '',
      description: '',
      date: new Date()
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.imageUrl !== '' && this.model_id !== '' && this.author !== '' && this.author_link !== '' && this.description !== ''
    }
  },
  methods: {
    onCreateExample () {
      if (!this.formIsValid) {
        return
      }
      const exmplData = {
        title: this.title,
        imageUrl: this.imageUrl,
        model_id: this.model_id,
        author: this.author,
        author_link: this.author_link,
        description: this.description,
        date: new Date().toISOString()
      }
      this.$store.dispatch('create3DExample', exmplData)
      this.$router.push('/3d-druck')
    }
  }
}
</script>
