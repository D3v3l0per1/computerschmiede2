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
                        <h1 class="mb-3 font-weight-light display-2">Stellen Sie Ihren PC oder Laptop zusammen</h1>
                        <v-divider></v-divider>
                      </v-flex>
                      <v-flex xs12>
                        <h2>Bereich</h2>
                        <v-divider class="mt-2 mb-2"></v-divider>
                      </v-flex>
                      <!-- <v-flex xs12 sm2>
                        <p class="custom-configurator-label">Gaming/Streaming</p>
                      </v-flex>
                      <v-flex xs12 sm8>
                        <v-slider v-model="sliderg" :max="maxg" :min="ming"></v-slider>
                      </v-flex>
                      <v-flex xs1 offset-xs1 style="width: 60px">
                        <v-text-field v-model="sliderg" class="mt-0" hide-details single-line type="number"></v-text-field>
                      </v-flex> -->
                      <v-flex xs10>
                        <v-slider v-model="slidero" label="Office/Hausgebrauch/Schule" :max="maxo" :min="mino"></v-slider>
                      </v-flex>
                      <v-flex xs1 offset-xs1 style="width: 60px">
                        <v-text-field v-model="slidero" class="mt-0" hide-details single-line type="number"></v-text-field>
                      </v-flex>
                      <v-flex xs10>
                        <v-slider v-model="sliders" label="3D/CAD" :max="maxs" :min="mins"></v-slider>
                      </v-flex>
                      <v-flex xs1 offset-xs1 style="width: 60px">
                        <v-text-field v-model="sliders" class="mt-0" hide-details single-line type="number"></v-text-field>
                      </v-flex>
                      <v-flex xs10>
                        <v-slider v-model="sliders" label="Design" :max="maxs" :min="mins"></v-slider>
                      </v-flex>
                      <v-flex xs1 offset-xs1 style="width: 60px">
                        <v-text-field v-model="sliders" class="mt-0" hide-details single-line type="number"></v-text-field>
                      </v-flex>
                      <v-flex xs10>
                        <v-slider v-model="sliders" label="Budget" :max="maxs" :min="mins"></v-slider>
                      </v-flex>
                      <v-flex xs1 offset-xs1 style="width: 60px">
                        <v-text-field v-model="sliders" class="mt-0" hide-details single-line type="number"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>

                <v-btn color="primary" @click="e1 = 2">Weiter</v-btn>

                <v-btn flat @click="e1 = 1">Abbrechen</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-5" color="blue lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 3">Weiter</v-btn>

                <v-btn flat @click="e1 = 1">Abbrechen</v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card class="mb-5" color="red lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 4">Weiter</v-btn>

                <v-btn flat @click="e1 = 1">Abbrechen</v-btn>
              </v-stepper-content>

              <v-stepper-content step="4">
                <v-card class="mb-5" color="red lighten-1" height="200px"></v-card>

                <v-btn color="primary" @click="e1 = 1">Weiter</v-btn>

                <v-btn flat @click="e1 = 1">Abbrechen</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>

        </v-flex>

        <v-flex xs12>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-layout row wrap class="mb-4">
                  <v-flex xs12 sm6>
                    <h2>CPU (Prozessor)</h2>
                    <v-divider class="mb-2 mt-1"></v-divider>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, velit illo quos nulla, quod laudantium voluptates in consequuntur architecto deleniti libero dignissimos provident a hic? Quod dolores enim exercitationem non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum hic laborum nulla omnis quasi blanditiis. Eos nemo qui est? Dolor sed in temporibus maiores. Voluptatum impedit facilis similique quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere omnis voluptatem quasi pariatur, consequuntur officia. Distinctio aliquid, omnis doloremque amet at, quaerat delectus, ab velit nemo rerum dolorem consequatur.</p>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <img src="@/assets/cpu.png" class="pl-5 mt-4" style="width: 100%;" alt="">
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mb-4">
                  <v-flex xs12 sm6>
                    <img src="@/assets/ram.png" class="pr-5 mt-4" style="width: 100%;" alt="">
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h2>RAM (Arbeitsspeicher)</h2>
                    <v-divider class="mb-2 mt-1"></v-divider>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, velit illo quos nulla, quod laudantium voluptates in consequuntur architecto deleniti libero dignissimos provident a hic? Quod dolores enim exercitationem non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum hic laborum nulla omnis quasi blanditiis. Eos nemo qui est? Dolor sed in temporibus maiores. Voluptatum impedit facilis similique quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere omnis voluptatem quasi pariatur, consequuntur officia. Distinctio aliquid, omnis doloremque amet at, quaerat delectus, ab velit nemo rerum dolorem consequatur.</p>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mb-4">
                  <v-flex xs12 sm6>
                    <h2>Mainboard</h2>
                    <v-divider class="mb-2 mt-1"></v-divider>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, velit illo quos nulla, quod laudantium voluptates in consequuntur architecto deleniti libero dignissimos provident a hic? Quod dolores enim exercitationem non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum hic laborum nulla omnis quasi blanditiis. Eos nemo qui est? Dolor sed in temporibus maiores. Voluptatum impedit facilis similique quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere omnis voluptatem quasi pariatur, consequuntur officia. Distinctio aliquid, omnis doloremque amet at, quaerat delectus, ab velit nemo rerum dolorem consequatur.</p>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <img src="@/assets/mainboard.png" class="pl-5 mt-4" style="width: 100%;" alt="">
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mb-4">
                  <v-flex xs12 sm6>
                    <img src="@/assets/case.png" class="pr-5 mt-4" style="width: 100%;" alt="">
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h2>Gehäuse</h2>
                    <v-divider class="mb-2 mt-1"></v-divider>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, velit illo quos nulla, quod laudantium voluptates in consequuntur architecto deleniti libero dignissimos provident a hic? Quod dolores enim exercitationem non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eum hic laborum nulla omnis quasi blanditiis. Eos nemo qui est? Dolor sed in temporibus maiores. Voluptatum impedit facilis similique quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facere omnis voluptatem quasi pariatur, consequuntur officia. Distinctio aliquid, omnis doloremque amet at, quaerat delectus, ab velit nemo rerum dolorem consequatur.</p>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>
//  v-for="part in partDescription" :key="part.title"
<script>
export default {
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: 'Computerschmiede PC | %s'
  },  
  data () {
    return {
      ming: 0,
      maxg: 10,
      sliderg: 0,
      mino: 0,
      maxo: 10,
      slidero: 0,
      mins: 0,
      maxs: 10,
      sliders: 0,
      e1: 1,
      stepperItems: [
        { step: '1', name: 'First Step' },
        { step: '2', name: 'Second Step' },
        { step: '3', name: 'Third Step' },
        { step: '4', name: 'Fourth Step' }
      ],
      partDescription: [
        { title: 'Mainboard', content: 'lorem ipsum dolor sit amet' },
        { title: 'Mainboard', content: 'lorem ipsum dolor sit amet' },
        { title: 'Mainboard', content: 'lorem ipsum dolor sit amet' },
        { title: 'Mainboard', content: 'lorem ipsum dolor sit amet' },
        { title: 'Mainboard', content: 'lorem ipsum dolor sit amet' },
        { title: 'Mainboard', content: 'lorem ipsum dolor sit amet' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .custom-configurator-label {
    font-size: 24px;
  }

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
