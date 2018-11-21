<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="grey darken-3">
        
        <v-layout row wrap>
          <v-flex xs12 sm3>
            <v-container>
              <h2>Ratings</h2>
              <v-divider></v-divider>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3>
            <v-container>
              <h2>Austria Leading Company</h2>
              <v-divider></v-divider>
              <ul style="list-style: none;" class="pl-0 text-xs-center">
                <li class="pt-3">
                  <a href="https://www.leitbetrieb.com/at/leitbetrieb/computerschmiede-jenbach-eu-577.html" target="_blank">
                    <img src="@/assets/leading_company_austria_logo.jpg" style="width: 80%;" alt="">
                  </a>
                </li>
              </ul>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3>
            <v-container>
              <h2>Öffnungszeiten</h2>
              <v-divider class="mb-2 mt-1"></v-divider>
              <ul style="list-style: none;" class="pl-0">
                <li class="grey--text lighten-3" v-for="item in entry_time" :key="item">{{item}}</li>
              </ul>
            </v-container>
          </v-flex>
          <v-flex xs12 sm3>
            <v-container>
              <h2>Kontakt</h2>
              <v-divider class="mb-2 mt-1"></v-divider>
              <p class="grey--text lighten-3">
                Computerschmiede Jenbach <br>
                6200 Jenbach <br>
                Huberstraße 41 <br>
                Österreich <br><br>
                Tel.: <a href="tel:+4369911771000" style="text-decoration: none;" class="blue--text">+43 699 11 77 1000</a> <br>
                Mail: <a href="mailto:office@computerschmiede-jenbach.at" style="text-decoration: none;" class="blue--text">office@computerschmiede-jenbach.at</a>
              </p>
            </v-container>
          </v-flex>
        </v-layout>
      </v-card-title>

      <v-card-actions class="grey darken-4 justify-center">
        &copy;2018 - Computerschmiede Jenbach
      </v-card-actions>
    </v-card>
  </v-footer>
  <!-- <footer class="page-footer grey darken-4">
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <h5 class="white-text">Google Rating here</h5>
        </div>
        <div class="col s12 m3">
          <h5 class="white-text">Öffnungszeiten</h5>
          <ul>
            <li class="grey-text text-lighten-3">Mo: 9:00 - 12:00 / 13:00 - 18:30</li>
            <li class="grey-text text-lighten-3">Di: 9:00 - 12:00 / 13:00 - 18:30</li>
            <li class="grey-text text-lighten-3">Mi: 13:00 - 18:30</li>
            <li class="grey-text text-lighten-3">Do: 9:00 - 12:00 / 13:00 - 18:30</li>
            <li class="grey-text text-lighten-3">Fr: 9:00 - 12:00 / 13:00 - 18:30</li>
            <li class="grey-text text-lighten-3">Sa: 9:00 - 13:00</li>
          </ul>
        </div>
        <div class="col s12 m3">
          <h5 class="white-text">Kontakt</h5>
          <ul>
            <p class="grey-text text-lighten-3">
              Computerschmiede Jenbach <br>
              6200 Jenbach <br>
              Huberstraße 41 <br>
              Österreich <br><br>
              Tel.: +43 699 11 77 1000
            </p>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        &copy; 2018 Computerschmiede Jenbach
      </div>
    </div>
  </footer> -->
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      entry_time: [
        'Mo: 9:00 - 12:00 / 13:00 - 18:30',
        'Di: 9:00 - 12:00 / 13:00 - 18:30',
        'Mi: 13:00 - 18:30',
        'Do: 9:00 - 12:00 / 13:00 - 18:30',
        'Fr: 9:00 - 12:00 / 13:00 - 18:30',
        'Sa: 9:00 - 13:00'
      ]
    })
  }
</script>