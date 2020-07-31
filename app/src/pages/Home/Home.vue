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
      bgImg: ['/images/bg1.jpg', '/images/bg4.jpg'],
      timer1:null,
      count:0
    }
  },
  methods: {

  },
  created() {

  },
  mounted() {
    this.timer1 = setInterval(()=>{
        this.$nextTick(function (){
        this.$refs.banner.style.background = 'url(' + this.bgImg[this.count] + ') transparent no-repeat fixed center'
      })
      this.count++
      if(this.count==2){
        this.count = 0
      }
    },5000)

  }
}
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100vh;
  background: transparent url("/images/bg1.jpg") no-repeat fixed center;
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