<template>
  <v-dialog persistent width="80%" v-model="deleteDialog">
    <v-btn fab dark small depressed class="red custom-small-cta" slot="activator"><v-icon>clear</v-icon></v-btn>
    <v-card>
      <v-card-text>
        <h1>Lol</h1>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      deleteDialog: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .custom-small-cta {
    
  }
</style>
