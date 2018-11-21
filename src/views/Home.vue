<template>
  <div>

    <img class="main-header-logo" src="@/assets/logoWhite-1.png" alt="">
    <vue-particles color="#fff"
      :particleSize="0"
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
          <h1 class="font-weight-regular display-2">Unsere Leistungen</h1>
          <hr>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <!-- <div id="duration"> -->
              <v-flex xs12 text-xs-center text-sm-right>
                <v-btn class="primary" >Neun Teaser erstellen</v-btn>
              </v-flex>
              <v-flex xs12 sm4 v-for="item in our_service" :key="item.title" class="teaser" text-xs-center>
                <v-img :src="item.icon" class="teaser-img" style="margin-left: 43%;">
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
                  </v-layout>
                </v-img>
                <h5 class="teaser-headline">{{ item.title }}</h5>
                <p>{{ item.text }}</p>
              </v-flex>
            <!-- </div> -->
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- style="margin-left: -250px;" v-anime="{ translateX: 250, duration: 3000, loop: true }" :key="item.title" -->

    <v-parallax dark src="https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/parallax%2F04.jpg?alt=media&token=81a133ca-a3c3-4de3-9ff8-9c31b34d0a1a" height="300">
      <!-- <v-layout align-center column justify-center>
        <h1 class="display-1 mb-3">Preis Leistung Garantie! <span class="font-weight-light">unser Ziel sind Zufriedene Kunden!</span></h1>
        <v-btn flat outline class="white--text">Kontakt</v-btn>
      </v-layout> -->
    </v-parallax>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <h1 class="font-weight-regular display-2">Unser Sortiment</h1>
          <hr>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12 sm4 v-for="item in our_products" :key="item.title" :class="'teaser ' + item.teaserAnim" text-xs-center>
              <v-img :src="item.icon" class="teaser-img" style="margin-left: 43%;">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-2"></v-progress-circular>
                </v-layout>
              </v-img>
              <h5 class="teaser-headline">{{ item.title }}</h5>
              <p>{{ item.text }}</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax dark src="https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/parallax%2Fhome_bg_2.png?alt=media&token=b211dee8-22cb-4dac-83c2-43080dadf911">
      <v-layout align-center column justify-center>
        <h1 class="display-2 mb-3" style="background: rgba(0,0,0,.8); padding: 2px 10px; border: 2px solid white;"><span class="font-weight-regular">Fragen kost' nix</span></h1>
        <v-btn flat outline class="white--text" to="/kontakt">Kontakt</v-btn>
      </v-layout>
    </v-parallax>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card>

        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped>
  #particles-js {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/wallpapper1.jpg?alt=media&token=b45467c5-f10e-4f43-be9b-961f54eb0f55');
    background-repeat: repeat-x;
    height: 600px;
    border-bottom: 2px solid #3498db;
  }

  .main-header-logo {
    width: 30%;
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  @media (max-width: 1000px) {
    .main-header-logo {
      width: 50%;
    }
  }

  @media (max-width: 400px) {
    .main-header-logo {
      width: 80%;
    }
  }

  .teaser {
    margin-top: 20px;
  
    .teaser-img {
      width: 70px;
      // height: 64px;
    }

    .teaser-headline {
      font-size: 1.5em;
    }
  }

</style>

<script>
export default {
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: 'Home | %s'
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      // our_service: [
      //   { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fberatung.jpg?alt=media&token=741071d3-6c7b-438c-933e-2cbe9f292fdb', title: 'Beratung', teaserAnim: ' left', text: 'Hier ist der Laie gut aufgehoben und der Profi wird auf Augenhöhe verstanden. Zusammen finden wir die Lösung für Ihre individuellen Bedürfnisse! Ehrlich und Unabhängig!' },
      //   { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Freparatur.jpg?alt=media&token=feeb5fe7-2300-49bd-bcb7-e2886156b66c', title: 'Reparatur', teaserAnim: ' right', text: 'Meistens ist die Reparatur eines defekten Geräts sinnvoller und günstiger, als ein Neukauf. Miteinander gegen das vorzeitige Wegwerfen!' },
      //   { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fsonderzeug.jpg?alt=media&token=22aa2860-a906-416b-82fb-47063de83917', title: 'Anfertigungen', teaserAnim: ' right', text: 'Mit der Auswahl an optimal aufeinander abgestimmten, hochwertigen Komponenten bieten wir PC-Sonderfertigungen nach Ihren Vorstellungen an.' },
      //   { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fsoftwareberatung.jpg?alt=media&token=eafd5a36-fd46-4bb9-8492-25a7eaf3048a', title: 'Software-Service', teaserAnim: ' left', text: 'Computer wieder flott machen – Windows neu aufsetzen – Software entrümpeln – Festplatte bereinigen – Virenschutz und Datensicherung einrichten – Expressbestellungen – Sonderanfertigungen – Umbauten – Upgrades – und noch viel mehr!' },
      //   { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fservice.jpg?alt=media&token=db260170-6e9b-4cee-98bb-32721282a20a', title: 'Abholung und Lieferung', teaserAnim: ' right', text: 'Sie wollen Ihre Produkte geliefert bekommen oder wollen Ihr Gerät zum Service abholen lassen? Das lässt sich unkompliziert organisieren!' },
      //   { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fsuchen-1.jpg?alt=media&token=f935e0d2-88fa-4cf2-ae0e-6cf5d32487d3', title: 'Datenrettung', teaserAnim: ' right', text: 'Ihre Daten können bei uns zu über 95 % vollkommen gerettet werden. Wir analysieren Ihre Festplatten, Speicherkarten und USB-Sticks und retten Ihre Daten, wenn möglich selbst. In den schwierigsten Fällen stehen wir in Verbindung mit einem Datenrettungslabor.' }
      // ],
      our_products: [
        { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fbirne.png?alt=media&token=50aae886-7cb5-4604-8fb3-f8194a9da4c8', title: 'Batterien', text: 'Batterien, Netzteile, Ladegeräte, Ersatzakkus Kabel und Adapter für Strom, Bild, Ton, Daten, etc.' },
        { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fmonitore.png?alt=media&token=14b31fa4-3632-4e07-b8eb-535d4b598eb0', title: 'Computer', text: 'Computer – Standard-Systeme oder individuell konfiguriert! Laptops – selbst konfiguriert bzw. Markengeräte. Tablets, Monitore, Lautsprechersysteme,…' },
        { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Ffarben-1.png?alt=media&token=5a858986-fce5-474f-ac5b-e6f720eb4824', title: 'Farbe', text: 'Tinten/Laser/LED/Gel/3D-Drucker, Tintenpatronen, Tonerkartuschen, Laserdrucker-Ersatzteile, Kopierpapier und spezielle Papiere Druckservice (bis A4, max. 10.000 Blatt, ca. € 0,10/Seite, je nach Deckung)' },
        { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fgame.png?alt=media&token=a386078d-67e7-4c95-8be3-eb5171b39ffd', title: 'Gaming', text: 'Gaming-Equipment, wie z.B. spezielle Gaming-Mäuse und passende Mauspads, Tastaturen mit Sondertasten und Beleuchtung, Headsets mit erweiterten Eigenschaften. Controller und Joysticks, Gaming-Chairs,…' },
        { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2F959-Keyboard-1.png?alt=media&token=a309f5c7-df82-4c5c-b463-6e797f34fa09', title: 'Zubehör', text: 'Tastaturen, Mäuse, Webcams, Headsets, WLAN- und Bluetooth Adapter, USB-Hubs, Reinigungsmittel und vieles mehr …' },
        { icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2F19-SD-Card.png?alt=media&token=72f62f09-f383-469a-9aec-c96a7d2083b2', title: 'Speichermedien', text: 'USB Speicherkarte, Speicherplatten oder externe Festplatten.' }
      ]
    }
  },
  computed: {
    our_service () {
      return this.$store.getters.our_service
    }
  },
  mounted () {
    this.$anime()
  },
  methods: {
    // animate: function () {
    //   anime ({
    //     targets: '#duration .teaserAnim',
    //     duration: '1500',
    //     translateX: '250'
    //   })
    // }
  }
}
</script>

