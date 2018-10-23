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
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: 'Über uns | %s'
  },
  data () {
    return {
      parallax_items: [
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_1.png?alt=media&token=8ba5577a-6d6d-4671-94a9-a7fa0348d5aa',
          class: 'offset-sm4 offset-md8',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-1-1.png?alt=media&token=876735db-f07f-4d1b-8a45-7b732700887f',
          title: 'Persönliche Beratung im Geschäft',
          text: 'Wir bieten persönliche, ehrliche und unabhängige Beratung rund um den Computer.'
        },
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_7.png?alt=media&token=3121fc16-5fd0-414b-a1cf-ab4f38cc3f68',
          class: '',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-2-1.png?alt=media&token=f061f5c3-d567-45bc-aab5-d76620781486',
          title: 'Computer Service & EDV Dienstleistungen',
          text: 'Wir bieten bei anfallenden Servicefällen Rat und Information, sowie Hilfestellung für weitere Lösungsansätze. Gewisse Reparaturen werden in der hauseigenen Werkstatt durchgeführt.'
        },
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_3.png?alt=media&token=1c896c0e-350a-45ff-a941-57990d86e03a',
          class: 'offset-sm4 offset-md8',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-4-1.png?alt=media&token=ec137379-ea10-421d-bae6-02eaf45cd439',
          title: 'Kompetentes Team mit langjähriger Erfahrung',
          text: 'Wir stehen mit über 17 Jahren Erfahrung, bei Fragen rund um Produkte sowie bei Computerproblemen behilflich zur Seite.'
        },
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_4.png?alt=media&token=e6ada9b1-ad6d-4011-8aa2-392c1af4b9fb',
          class: '',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-5-1.png?alt=media&token=21b50f74-4301-4a69-917c-72c8392a507b',
          title: 'Verwendung von qualitativ hochwertigen Markenprodukten',
          text: 'Bei der Auswahl von Hardware setzen wir auf qualitativ hochwertige Produkte.'
        },
        {
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_2.png?alt=media&token=b6ffbe8e-22fd-4d25-9d53-db66bf4de2a4',
          class: 'offset-sm4 offset-md8',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-6-1.png?alt=media&token=fc11f633-5beb-4a4a-8f80-e75dcb750944',
          title: 'Individuelle Lösungen und kostengünstige Varianten.',
          text: 'Wir beraten Sie gerne individuell über Ihr neues PC-System und können ein ihren Anforderungen entsprechendes Produkt empfehlen.'
        },
        {
          
          background: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Fparallax%2Fcomputerschmied_6.png?alt=media&token=bd4efb55-4dce-4925-88d0-75316e9e814b',
          class: '',
          icon: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2Ficons%2Ficon-computerschmiede-7-1.png?alt=media&token=0bc9fce7-8043-4f0e-9e00-172935c5e589',
          title: 'Wir sind für Sie da - auch nach dem Kauf',
          text: 'Nicht nur beim Kauf, sondern auch im Servicefall stehen wir unseren Kunden mit Rat und Tat zur Seite und unterstützen Sie gerne.'
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
    background-image: url('https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/about%2F07.png?alt=media&token=62d5a6fe-d819-4043-b07e-05d71381cc35');
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
