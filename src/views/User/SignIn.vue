<template>
  <div>
    <div class="contact-header white--text">
      <h1 class="font-weight-light">Melden Sie sich an</h1>
    </div>
    <vue-particles color="#fff"
      :particleOpacity="0.9"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="0"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="1"
      :linesDistance="100"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      height="300px"
    >
    </vue-particles>

    <v-container>
      <v-layout row wrap v-if="error">
        <v-flex xs12 sm6 offset-sm3>
          <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-text>
              <v-container>
                <form @submit.prevent="onSignIn">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-text-field name="email" label="Mail" id="email" v-model="email" type="email" required></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field name="password" label="Passwort" id="password" v-model="password" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex xs12 text-xs-right>
                      <v-btn class="primary" type="submit" :disabled="loading" :loading="loading">Anmelden</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    loading () {
      return this.$store.getters.loading
    }
  },
  watch: {
    user (value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/')
      }
    }
  },
  methods: {
    onSignIn () {
      this.$store.dispatch('signUserIn', { email:this.email, password: this.password })
    },
    onDismissed () {
      this.$store.dispatch('clearError')
    }
  }
}
</script>


<style lang="scss" scoped>
  .contact-container {
    max-width: 700px;
    width: 100%;
    font-size: 1.5rem;
    background-color: rgba($color: #000000, $alpha: .5)
  }

  @media (max-width: 1725px) {
    .contact-container {
      font-size: 1rem;
    }
  }

  .contact-header {
    position: absolute;
    top: 220px;
    left: 2%;
  }

  .contact-header > h1 {
    font-size: 4rem;
  }

  #particles-js {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/wallpapper1.jpg?alt=media&token=b45467c5-f10e-4f43-be9b-961f54eb0f55');
    background-repeat: repeat-x;
    height: 300px;
    border-bottom: 2px solid #3498db;
  }

  @media (max-width: 425px) {
    #particles-js {
      height: 150px;
    }
    .contact-header {
      top: 80px;
    }
    .contact-header > h1 {
      font-size: 1.9rem;
    }
  }

  @media (max-width: 320px) {
    .contact-header > h1 {
      font-size: 1.7rem;
    }
  }
</style>