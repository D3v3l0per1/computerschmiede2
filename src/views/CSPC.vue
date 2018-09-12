<template>
  <div>
    <div class="header white--text">
      <h1 class="font-weight-light">Der Schmiede PC</h1>
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
      <v-layout row wrap>
        <v-flex xs12>

          <v-stepper v-model="e1">
            <v-stepper-header>
                <v-stepper-step v-for="stepper in stepperItems" :key="stepper.name" :complete="e1 > stepper.step" :step="stepper.step">{{stepper.name}}</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card class="mb-5">
                  <v-card-text>
                    <v-layout row wrap>
                      <v-flex xs12 class="text-xs-center mb-4">
                        <h1>Stellen Sie Ihren PC zusammen</h1>
                        <v-divider></v-divider>
                      </v-flex>
                      <v-flex xs10>
                        <v-slider v-model="sliderg" label="Gaming" :max="maxg" :min="ming"></v-slider>
                      </v-flex>
                      <v-flex xs1 offset-xs1 style="width: 60px">
                        <v-text-field v-model="sliderg" class="mt-0" hide-details single-line type="number"></v-text-field>
                      </v-flex>
                      <v-flex xs10>
                        <v-slider v-model="slidero" label="Office" :max="maxo" :min="mino"></v-slider>
                      </v-flex>
                      <v-flex xs1 offset-xs1 style="width: 60px">
                        <v-text-field v-model="slidero" class="mt-0" hide-details single-line type="number"></v-text-field>
                      </v-flex>
                      <v-flex xs10>
                        <v-slider v-model="sliders" label="Streaming" :max="maxs" :min="mins"></v-slider>
                      </v-flex>
                      <v-flex xs1 offset-xs1 style="width: 60px">
                        <v-text-field v-model="sliders" class="mt-0" hide-details single-line type="number"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>

                <v-btn color="primary" @click="e1 = 2">Weiter</v-btn>

                <v-btn flat>Abbrechen</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-5" color="blue lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 3">Weiter</v-btn>

                <v-btn flat>Abbrechen</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-5" color="red lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 1">Weiter</v-btn>

                <v-btn flat>Abbrechen</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>

        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      ming: 0,
      maxg: 100,
      sliderg: 0,
      mino: 0,
      maxo: 100,
      slidero: 0,
      mins: 0,
      maxs: 100,
      sliders: 0,
      e1: 1,
      stepperItems: [
        { step: '1', name: 'First Step' },
        { step: '2', name: 'Second Step' },
        { step: '3', name: 'Third Step' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: absolute;
    top: 220px;
    left: 2%;
  }

  .header > h1 {
    font-size: 4rem;
  }

  .custom-parallax-container {
    // width: 100%;
    // max-width: 200px;
    background-color: rgba(0,0,0,.8)
  }

  #particles-js {
    background-image: url('http://www.computerschmiede-jenbach.at/img/wallpapper1.jpg');
    background-repeat: repeat-x;
    height: 300px;
    border-bottom: 2px solid #3498db;
  }

  @media (max-width: 425px) {
    #particles-js {
      height: 150px;
    }
    .header {
      top: 80px;
    }
    .header > h1 {
      font-size: 1.9rem;
    }
    .custom-parallax {
      text-align: center;
      background-color: rgba(0,0,0,.35);
    }
    .custom-parallax-container {
      width: 100%;
      background-color: rgba(0,0,0,.0);
      margin-left: 20px;
    }
  }

  @media (max-width: 320px) {
    .header > h1 {
      font-size: 1.7rem;
    }
  }
</style>
