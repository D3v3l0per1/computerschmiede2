<template>
  <div>
    <img class="header-logo" src="@/assets/logoWhite-1.png" alt="">
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
    
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #particles-js {
    background-image: url('http://computerschmiede-jenbach.at/wp-content/uploads/2017/03/04.jpg');
    background-repeat: repeat-x;
    height: 600px;
    border-bottom: 2px solid #3498db;
  }

  .header-logo {
    width: 30%;
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate(-50%, -50%)
    
  }

</style>

<script>
export default {
  
}
</script>

