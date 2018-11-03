<template>
  <v-container class="mt-5">
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="display-2">Admin Panel</h1>
        <hr>
      </v-flex>
      <v-flex xs12 text-xs-center>
        <v-progress-circular
          :size="70"
          color="primary"
          indeterminate
          class="mt-5 mb-5"
          v-if="loading"></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 md4 class="pa-2" v-for="appliement in appliements" :key="appliement.id" v-if="!loading">
        <v-card dark>
          <v-card-title>
            <h2 class="font-weight-light">3D Druck Auftrag </h2>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>
              <strong>ID: </strong> {{ appliement.id }} <br>
              <strong>E-Mail:</strong> {{ appliement.email }} <br>
              <strong>Tel.: </strong> {{ appliement.phone }} <br>
              <strong>Farbe: </strong> weißes PLA, matt <br>
              <strong>Qualität: </strong> Fein <br>
              <strong>Datei: </strong> uzfwulb.stl 
            </p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat class="primary--text">Datei anschauen</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: 'Admin Panel | %s'
  },
  computed: {
    appliements () {
      return this.$store.getters.loadedApplied3DExample
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>
