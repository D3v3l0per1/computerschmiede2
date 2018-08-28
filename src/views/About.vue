<template>
  <div>
    <div class="about-header white--text">
      <h1 class="font-weight-light">Wilkommen in der Schmiede</h1>
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
    
<!-- offset-sm4 offset-md8 -->

    <v-parallax v-for="item in parallax_items" :key="item.title" :src="item.background">
      <v-container>
        <v-layout text-xs-center row wrap justify-space-between class="custom-parallax">
          <v-flex xs10 sm8 md4 :class="item.class + ' custom-parallax-container mt-5 pt-5 pb-5'">
            <img :src="item.icon" style="max-width: 80px; width: 100%;">
            <h3 class="font-weight-regular grey--text text--lighten-2">{{ item.title }}</h3>
            <p class="headline pa-1">{{item.text}}</p>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      parallax_items: [
        {
          background: 'http://www.computerschmiede-jenbach.at/img/about_parallax/computerschmied_1.png',
          class: 'offset-sm4 offset-md8',
          icon: 'http://www.computerschmiede-jenbach.at/img/icons/icon-computerschmiede-1-1.png',
          title: 'Persönliche Beratung im Geschäft',
          text: 'Wir bieten persönliche, ehrliche und unabhängige Beratung rund um den Computer.'
        },
        {
          background: 'http://www.computerschmiede-jenbach.at/img/about_parallax/computerschmied_7.png',
          class: '',
          icon: 'http://www.computerschmiede-jenbach.at/img/icons/icon-computerschmiede-2-1.png',
          title: 'Computer Service & EDV Dienstleistungen',
          text: 'Wir bieten bei anfallenden Servicefällen Rat und Information, sowie Hilfestellung für weitere Lösungsansätze. Gewisse Reparaturen werden in der hauseigenen Werkstatt durchgeführt.'
        },
        {
          background: 'http://www.computerschmiede-jenbach.at/img/about_parallax/computerschmied_3.png',
          class: 'offset-sm4 offset-md8',
          icon: 'http://www.computerschmiede-jenbach.at/img/icons/icon-computerschmiede-4-1.png',
          title: 'Kompetentes Team mit langjähriger Erfahrungt',
          text: 'Wir stehen mit über 17 Jahren Erfahrung, bei Fragen rund um Produkte sowie bei Computerproblemen behilflich zur Seite.'
        },
        {
          background: 'http://www.computerschmiede-jenbach.at/img/about_parallax/computerschmied_4.png',
          class: '',
          icon: 'http://www.computerschmiede-jenbach.at/img/icons/icon-computerschmiede-5-1.png',
          title: 'Verwendung von qualitativ hochwertigen Markenprodukten',
          text: 'Bei der Auswahl von Hardware setzen wir auf qualitativ hochwertige Produkte.'
        },
        {
          background: 'http://www.computerschmiede-jenbach.at/img/about_parallax/computerschmied_2.png',
          class: 'offset-sm4 offset-md8',
          icon: 'http://www.computerschmiede-jenbach.at/img/icons/icon-computerschmiede-6-1.png',
          title: 'Individuelle Lösungen und kostengünstige Varianten.',
          text: 'Wir beraten sie gerne individuell über Ihr neues PC-System und können ein ihren Anforderungen entsprechendes Produkt empfehlen.'
        },
        {
          
          background: 'http://www.computerschmiede-jenbach.at/img/about_parallax/computerschmied_6.png',
          class: '',
          icon: 'http://www.computerschmiede-jenbach.at/img/icons/icon-computerschmiede-7-1.png',
          title: 'Wir sind für Sie da - auch nach dem Kauf',
          text: 'Nicht nur beim Kauf, sondern auch im Servicefall stehen wir unseren Kunden mit Rat und Tat zur Seite und unterstützen sie gerne.'
        }
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
  .about-header {
    position: absolute;
    top: 220px;
    left: 2%;
  }

  .about-header > h1 {
    font-size: 4rem;
  }

  .custom-parallax-container {
    // width: 100%;
    // max-width: 200px;
    background-color: rgba(0,0,0,.8)
  }

  #particles-js {
    background-image: url('http://www.computerschmiede-jenbach.at/img/07.png');
    background-repeat: repeat-x;
    height: 300px;
    border-bottom: 2px solid #d44040;
  }

  @media (max-width: 425px) {
    #particles-js {
      height: 150px;
    }
    .about-header {
      top: 80px;
    }
    .about-header > h1 {
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
    .about-header > h1 {
      font-size: 1.7rem;
    }
  }
</style>
