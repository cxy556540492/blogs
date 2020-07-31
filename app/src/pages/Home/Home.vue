<template>
  <div>
    <div class="banner" ref="banner">

    </div>
  </div>
</template>

<script>

  export default {
    name: "Home",
    data() {
      return {
        bgImg: ['../../assets/images/bg1.jpg', '../../assets/images/bg2.jpg']
      }
    },
    methods:{

    },
    created() {

    },
    mounted() {

      // this.$refs.banner.style.background = 'url(/images/bg4.jpg) transparent no-repeat fixed center'
      // let timer1 = setInterval(
      //
      // )
    }
  }
</script>

<style scoped lang="scss">
  .banner {
    width: 100%;
    height: 100vh;
    //background: transparent url("/images/bg1.jpg") no-repeat fixed center;
  }

  .banner::after {
    content: "";
    /*background: transparent url("../../assets/images/bg1.jpg") no-repeat fixed center;*/
    background-size: cover;
    opacity: 0.7;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
</style>