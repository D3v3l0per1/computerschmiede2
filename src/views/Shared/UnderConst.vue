<template>
  <div>
    <div class="heading">
      <img class="header-logo" src="@/assets/logoWhite-1.png" alt="">
      <p class="font-weight-light">Diese Seite ist in Arbeit :)</p>
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
      height="500px"
    >
    </vue-particles>
  </div>
</template>

<style lang="scss">
  #particles-js {
    background-image: url('http://www.computerschmiede-jenbach.at/img/wallpapper1.jpg');
    background-repeat: repeat-x;
    // height: 100vh;
    border-bottom: 2px solid #3498db;
  }

  .heading {
    max-width: 600px;
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .heading > p {
    text-align: center;
    color: white;
    font-size: 2rem;
  }

  .heading > .header-logo {
    width: 100%;
    padding-bottom: 5px;
    // border-bottom: 1px solid #ccc;
  }

  @media (max-width: 1000px) {
    .heading {
      width: 80%;
    }
  }

  @media (max-width: 400px) {
    .heading {
      width: 80%;
    }
  }
</style>
