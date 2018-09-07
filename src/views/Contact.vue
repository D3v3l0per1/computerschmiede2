<template>
  <div>
    
    <div class="contact-header white--text">
      <h1 class="font-weight-light">Treten Sie mit uns in Kontakt</h1>
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

    <v-layout row wrap>
      <v-flex xs12 sm6>
        <v-parallax dark src="http://computerschmiede-jenbach.at/img/contact.jpg" height="800">
          <v-layout align-center column justify-center>
            <v-container text-xs-center class="ma-5 contact-container">
              <h1 class="mb-2">Computerschmiede Jenbach</h1>
              <p>
                <strong>Adresse:</strong> Huberstraße 41, 6200 Jenbach <br>
                <strong>Tel.:</strong> +43 699 11 77 1000 <br> 
                <strong>Email:</strong> office@computerschmiede-jenbach.at <br><br> 
              </p>
              <h1 class="mb-2">Öffnungszeiten</h1>
              <p>
                Mo: 9:00 - 12:00 / 13:00 - 18:30 <br>
                Di: 9:00 - 12:00 / 13:00 - 18:30 <br>
                Mi: 13:00 - 18:30 <br>
                Do: 9:00 - 12:00 / 13:00 - 18:30 <br>
                Fr: 9:00 - 12:00 / 13:00 - 18:30 <br>
                Sa: 9:00 - 13:00 <br>

              </p>
            </v-container>
          </v-layout>
        </v-parallax>
      </v-flex>
      <v-flex xs12 sm6>
        <google-maps name="test"></google-maps>
      </v-flex>
    </v-layout>

  </div>
</template>

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
    background-image: url('http://www.computerschmiede-jenbach.at/img/wallpapper1.jpg');
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

<script>
export default {
  metaInfo: {
    title: 'Computerschmiede Jenbach',
    titleTemplate: 'Kontakt | %s'
  },  
}
</script>
