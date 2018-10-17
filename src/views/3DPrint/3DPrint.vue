<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 class="mt-5">
        <v-card>
          <v-card-title>
            <v-btn color="primary" flat fab dark to="/3d-druck">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <h1 class="font-weight-regular ml-3">AT ST Star Wars</h1>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <iframe src="https://app.modelo.io/embedded/rLn0H8IuPS?viewport=false&autoplay=true" width="100%" height="800px" frameborder="0"></iframe>
            <p>Erstellt von <a href="#!">jackbenimble</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur autem vel nam hic, nemo necessitatibus eligendi dicta. Repellendus eaque blanditiis ex neque. Veritatis provident nobis, eius facere nemo error sequi!</p>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark class="blue lighten-2">Like it</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
