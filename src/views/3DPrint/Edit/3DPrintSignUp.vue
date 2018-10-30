<template>
  <v-dialog persistent v-model="signUpDialog">
    <v-btn class="accent" large slot="activator">Jetzt hochladen</v-btn>
    <v-card>
      <form @submit.prevent="onSignUpAndUploadFile">
        <v-layout row wrap>
          <v-card-text>
            <v-flex xs12>
              <h1 class="font-weight-thin blue--text text--lighten-2">3D Druckauftrag übermitteln </h1>
            </v-flex>
          </v-card-text>

          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm6 class="pa-2">
                <v-text-field name="email" id="email" v-model="email" label="E-Mail Adresse" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 class="pa-2">
                <v-text-field name="phone" id="phone" v-model="phone" label="Telefonnummer *" required></v-text-field>
              </v-flex>
              <v-flex xs12 class="pr-3 pl-3">
                <h3 class="headline">Farben & Materialien</h3>
                <v-slider v-model="colors" :tick-labels="ticksLabelsColors" :max="2" step="1" ticks="always" tick-size="2"></v-slider>
                <v-text-field name="alternate_color" id="alternate_color" v-model="alternate_color" label="Ihr Wunsch:"></v-text-field>
              </v-flex>
              <v-flex xs12 class="pr-3 pl-3">
                <h3 class="headline">Druckqualität</h3>
                <v-slider v-model="quality" :tick-labels="ticksLabelsQuality" :max="2" step="1" ticks="always" tick-size="2"></v-slider>
              </v-flex>
              <v-flex xs12 class="pr-3 pl-3">
                <v-btn color="accent" block>Datei hochladen</v-btn>
              </v-flex>
              <v-flex xs12>
                <small>* Telefonnummer optional für schnellere Reaktionszeit angeben </small>
              </v-flex>
            </v-layout>
          </v-card-text>

          <v-flex xs12>
            <v-divider></v-divider>
          </v-flex>
          
          <v-card-actions>
            <v-btn flat class="red--text darken-1" @click="signUpDialog = false">Schließen</v-btn>
            <v-btn flat class="blue--text darken-1" :disabled="!formIsValid"  type="submit">Absenden</v-btn>
          </v-card-actions>
        </v-layout>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      signUpDialog: false,
      ticksLabelsColors: [
        'weißes PLA, matt',
        'schwarzes PLA, matt',
        'andere'
      ],
      ticksLabelsQuality: [
        'Fein',
        'Standard',
        'Entwurf'
      ],
      email: '',
      phone: '',
      color: '',
      print_quality: '',
      file: ''
    }
  },
  computed: {
    formIsValid () {
      return this.email !== '' && this.phone !== '' 
    }
  },
  methods: {
    onSignUpAndUploadFile () {
      if (!this.formIsValid) {
        return
      }
      const applyExmpl = {
        email: this.email,
        phone: this.phone,
        color: this.color,
        print_quality: this.print_quality,
        file: this.file
      }
      console.log(applyExmpl)
      this.$store.dispatch('createApplie3DExample', applyExmpl)
      // this.signUpDialog = false
    }
  }
}
</script>

<style lang="scss">

  .v-dialog {
    width: 20%;
  }

  @media only screen and (max-width: 2000px) {
    .v-dialog {
      width: 50%;
    }
  }

  @media only screen and (max-width: 476px) {
    .v-dialog {
      width: 100%;
    }
  }
  
</style>
