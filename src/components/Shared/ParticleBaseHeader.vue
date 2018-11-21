<template>
  <div>
    <!-- Start Headline Text -->
    <div class="header white--text">
      <h1 class="font-weight-light">{{ headline }}</h1>
    </div>
    <!-- End Headline Text -->

    <vue-particles :particleSize="0" :lineOpacity="1"></vue-particles>

  </div>
</template>

<script>
export default {
  props: ['headline']
}
</script>

<style lang="scss" scoped>
  // Basic Header Styling
  .header {
    position: absolute;
    top: 220px;
    left: 2%;
  }

  .header > h1 {
    font-size: 4rem;
  }

  // Styling Particles with Wallpapper
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
  }

  @media (max-width: 320px) {
    .header > h1 {
      font-size: 1.7rem;
    }
  }
</style>
