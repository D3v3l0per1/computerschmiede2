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
        <v-flex xs12 text-xs-center>

          <v-card class="mb-5">
            <v-card-text>
              <h1 class="font-weight-regular mt-5 mb-5">Der Computer Konfigurator ist in Arbeit ;)</h1>
            </v-card-text>
          </v-card>

          <!-- <v-stepper v-model="e1">
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
                        <h2>Bereiche zur Verwendung </h2>
                        <v-divider class="mt-2 mb-2"></v-divider>
                      </v-flex>

                      <v-flex xs12 v-for="slider in configSliders" :key="slider.id">
                        <v-layout row wrap>
                          <v-flex xs12 sm11>
                            <v-slider :v-model="slider.slider" :label="slider.title" thumb-label step="10" ticks></v-slider>
                          </v-flex>
                          <v-flex shrink style="width: 50px" class="ml-2 hidden-sm-and-down" text-xs-right>
                            <v-text-field :v-model="slider.slider" class="mt-0"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-flex>

                    </v-layout>
                  </v-card-text>
                </v-card>

                <v-btn color="primary" @click="e1 = 2">Weiter</v-btn>

                <v-btn flat @click="e1 = 1">Abbrechen</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card class="mb-5">
                  <v-container>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 class="pa-1">
                        <v-text-field label="Vorname" v-model="first_name"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 class="pa-1">
                        <v-text-field label="Nachname" v-model="last_name"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 class="pa-1">
                        <v-text-field label="E-Mail" v-model="email"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 class="pa-1">
                        <v-text-field label="Telefonnummer" v-model="phone_number"></v-text-field>
                      </v-flex>
                      <v-flex xs12>
                        <v-textarea label="Besondere Anmerkungen oder Wünsche?"></v-textarea>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card>

                <v-btn color="primary" @click="e1 = 3">Beratung anfordern</v-btn>

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
          </v-stepper> -->

        </v-flex>

        <v-flex xs12>
          <v-container>
            <v-layout row wrap>
              <v-flex xs12>
                <v-layout row wrap class="mb-4">
                  <v-flex xs12 sm6>
                    <v-card color="cyan darken-2" class="white--text">
                      <v-layout row wrap>
                        <v-flex xs5>
                          <v-img src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></v-img>
                        </v-flex>
                      </v-layout>                        
                    </v-card>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <h2>CPU (Prozessor)</h2>
                    <v-divider class="mb-2 mt-1"></v-divider>
                    <p></p>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <img src="https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fcpu.png?alt=media&token=1378182f-1ff8-40f7-bff4-aad5847462e3" class="pl-5 mt-4" style="width: 100%; max-width: 550px;" alt="">
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mb-4">
                  <v-flex xs12 sm6>
                    <img src="https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fram.png?alt=media&token=11709ed7-3bb2-4ea2-a412-7e83a5136cbb" class="pr-5 mt-4" style="width: 100%; max-width: 550px;" alt="">
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fmainboard.png?alt=media&token=1fc08363-5994-4f47-a3c8-f5f9cd7bf61f" class="pl-5 mt-4" style="width: 100%; max-width: 550px;" alt="">
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mb-4">
                  <v-flex xs12 sm6>
                    <img src="https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/cspc%2Fcase.png?alt=media&token=600412d0-d398-40c2-be9b-3be6581f78ed" class="pr-5 mt-4" style="width: 100%; max-width: 550px;" alt="">
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
      first_name: null,
      last_name: null,
      email: null,
      phone_number: null,
      sliderg: 0,
      slidero: 0,
      sliderc: 0,
      sliderd: 0,
      sliderb: 0,
      e1: 1,
      stepperItems: [
        // { step: '1', name: 'Schritt 1' },
        // { step: '2', name: 'Schritt 2' },
        // { step: '3', name: 'Schritt 3' }
        // { step: '4', name: 'Schritt 1' }
      ],
      configSliders: [
        { id: '1', title: 'Gaming', slider: 'sliderg' },
        { id: '2', title: 'Office/Schule', slider: 'slidero' },
        { id: '3', title: '3D/CAD', slider: 'sliderc' },
        { id: '4', title: 'Design', slider: 'sliderd' },
        { id: '5', title: 'Budget', slider: 'sliderb' }
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
  },
  methods: {
    sendMail () {
      
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
    background-image: url('https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/wallpapper1.jpg?alt=media&token=b45467c5-f10e-4f43-be9b-961f54eb0f55');
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
