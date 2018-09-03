<template>
  <div>

    <img class="main-header-logo" src="@/assets/logoWhite-1.png" alt="">
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
          <h1 class="font-weight-regular display-2">Unsere Leistungen</h1>
          <hr>
        </v-flex>
        <v-flex xs12>
          <v-layout row wrap>
            <v-flex xs12 sm4 v-for="item in our_service" :key="item.title" class="teaser" text-xs-center>
              <img :src="item.icon" class="teaser-img" alt="">
              <h5 class="teaser-headline">{{ item.title }}</h5>
              <p>{{ item.text }}</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <vue-particles color="#fff"
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
    </vue-particles> -->

    <v-parallax dark src="http://computerschmiede-jenbach.at/img/04.jpg" height="300">
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
            <v-flex xs12 sm4 v-for="item in our_products" :key="item.title" class="teaser" text-xs-center>
              <img :src="item.icon" class="teaser-img" alt="">
              <h5 class="teaser-headline">{{ item.title }}</h5>
              <p>{{ item.text }}</p>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

    <v-parallax dark src="http://computerschmiede-jenbach.at/img/04.jpg">
      <v-layout align-center column justify-center>
        <h1 class="display-1 mb-3">Preis Leistung Garantie! <span class="font-weight-light">unser Ziel sind Zufriedene Kunden!</span></h1>
        <v-btn flat outline class="white--text">Kontakt</v-btn>
      </v-layout>
    </v-parallax>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #particles-js {
    background-image: url('http://www.computerschmiede-jenbach.at/img/wallpapper1.jpg');
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
      height: 64px;
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
      our_service: [
        { icon: 'http://computerschmiede-jenbach.at/img/icons/beratung.jpg', title: 'Beratung', text: 'Hier ist der Laie gut aufgehoben und der Profi wird auf Augenhöhe verstanden. Zusammen finden wir die Lösung für Ihre individuellen Bedürfnisse! Ehrlich und Unabhängig!' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/reparatur.jpg', title: 'Reparatur', text: 'Meistens ist die Reparatur eines defekten Geräts sinnvoller und günstiger, als ein Neukauf. Miteinander gegen das vorzeitige Wegwerfen!' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/sonderzeug.jpg', title: 'Anfertigungen', text: 'Mit der Auswahl an optimal aufeinander abgestimmten, hochwertigen Komponenten bieten wir PC-Sonderfertigungen nach Ihren Vorstellungen an.' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/softwareberatung.jpg', title: 'Software-Service', text: 'Computer wieder flott machen – Windows neu aufsetzen – Software entrümpeln – Festplatte bereinigen – Virenschutz und Datensicherung einrichten – Expressbestellungen – Sonderanfertigungen – Umbauten – Upgrades – und noch viel mehr!' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/service.jpg', title: 'Abholung und Lieferung', text: 'Sie wollen Ihre Produkte geliefert bekommen oder wollen Ihr Gerät zum Service abholen lassen? Das lässt sich unkompliziert organisieren!' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/suchen-1.jpg', title: 'Datenrettung', text: 'Ihre Daten können bei uns zu über 95 % vollkommen gerettet werden. Wir analysieren Ihre Festplatten, Speicherkarten und USB-Sticks und retten Ihre Daten, wenn möglich selbst. In den schwierigsten Fällen stehen wir in Verbindung mit einem Datenrettungslabor.' }
      ],
      our_products: [
        { icon: 'http://computerschmiede-jenbach.at/img/icons/birne.png', title: 'Batterien', text: 'Batterien, Netzteile, Ladegeräte, Ersatzakkus Kabel und Adapter für Strom, Bild, Ton, Daten, etc.' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/monitore.png', title: 'Computer', text: 'Computer – Standard-Systeme oder individuell konfiguriert! Laptops – selbst konfiguriert bzw. Markengeräte. Tablets, Monitore, Lautsprechersysteme,…' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/farben-1.png', title: 'Farbe', text: 'Tinten/Laser/LED/Gel/3D-Drucker, Tintenpatronen, Tonerkartuschen, Laserdrucker-Ersatzteile, Kopierpapier und spezielle Papiere Druckservice (bis A4, max. 10.000 Blatt, ca. € 0,10/Seite, je nach Deckung)' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/game.png', title: 'Gaming', text: 'Gaming-Equipment, wie z.B. spezielle Gaming-Mäuse und passende Mauspads, Tastaturen mit Sondertasten und Beleuchtung, Headsets mit erweiterten Eigenschaften. Controller und Joysticks, Gaming-Chairs,…' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/959-Keyboard-1.png', title: 'Zubehör', text: 'Tastaturen, Mäuse, Webcams, Headsets, WLAN- und Bluetooth Adapter, USB-Hubs, Reinigungsmittel und vieles mehr …' },
        { icon: 'http://computerschmiede-jenbach.at/img/icons/19-SD-Card.png', title: 'Speichermedien', text: 'USB Speicherkarte, Speicherplatten oder externe Festplatten.' }
      ]
    }
  }
}
</script>

