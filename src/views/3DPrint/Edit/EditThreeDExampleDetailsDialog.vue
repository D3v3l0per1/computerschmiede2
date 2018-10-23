<template>
  <v-dialog width="80%" persistent v-model="editDialog">
    <v-btn fab class="accent" slot="activator"><v-icon>edit</v-icon></v-btn>
    <v-card>
      <v-layout row wrap>
        <v-card-text>
          <v-flex xs12>
            <h1 class="font-weight-regular blue--text text--lighten-2">Beispiel bearbeiten</h1>
          </v-flex>
        </v-card-text>

        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        
        <v-card-text>
          <v-flex xs12>
            <v-text-field name="title" label="Titel" v-model="editedTitle" id="title" required></v-text-field>
             <v-textarea name="description" label="Beschreibung" v-model="editedDescription" id="description" required></v-textarea>
          </v-flex>
        </v-card-text>

        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        
        <v-card-actions>
          <v-flex xs12>
            <v-btn flat class="red--text darken-1" @click="editDialog = false">Schließen</v-btn>
            <v-btn flat class="blue--text darken-1" @click="onSaveChanges">Speichern</v-btn>
          </v-flex>
        </v-card-actions>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['threeDExample'],
  data () {
    return {
      editDialog: false,
      editedTitle: this.threeDExample.title,
      editedDescription: this.threeDExample.description
    }
  },
  methods: {
    onSaveChanges () {
      if (this.editedTitle.trim() === '' && this.editedDescription.trim() === '') {
        return
      }
      this.editDialog = false
      this.$store.dispatch('updateThreeDExampleData', {
        id: this.threeDExample.id,
        title: this.editedTitle,
        description: this.editedDescription
      })
    }
  }
}
</script>
