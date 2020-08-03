<template>
  <div>
    <div class="banner">
      <div class="bg" ref="bg"></div>
      <h2>CHEN</h2>
      <p>欢迎光临</p>
      <el-button type="primary" class="button" icon="el-icon-loading">进入我的博客</el-button>
      <div class="icon-down">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>
    <p>啦啦啦</p>









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
        this.$refs.bg.style.background = 'url(' + this.bgImg[this.count] + ') transparent no-repeat fixed center'

        })
      this.count++
      if(this.count==2){
        this.count = 0
      }
    },1000)

  }
}
</script>

<style scoped lang="scss">
.banner {
  width: 100%;
  height: 100vh;
  position: relative;
  .bg {
    content: "";
    background: transparent url("/images/bg1.jpg") no-repeat fixed center;
    background-size: cover;
    opacity: 0.8;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  h2 {
    font-size: 80px;
    color:blueviolet;
    position: absolute;
    top: 40vh;
    text-align: center;
    left: 0;
    right: 0;
  }
  p {
    font-size: 50px;
    color:peachpuff;
    position: absolute;
    top: 50vh;
    text-align: center;
    left: 0;
    right: 0;
  }
  .button{
    position: absolute;
    top: 60vh;
    left: 0;
    right: 0;
    margin: auto;
  }
  .icon-down{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 80vh;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    .el-icon-arrow-down{
      font-size: 80px;
      color:purple;
      font-weight: 800;
    }
  }
}


</style>