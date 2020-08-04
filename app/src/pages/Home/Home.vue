<template>
  <div>
    <div class="banner">
      <div class="bg" ref="bg"></div>
      <h2>CHEN</h2>
      <p>{{arr.join('')}}<span :class="boolean?'show':'hide'">_</span></p>
      <el-button type="primary" class="button" icon="el-icon-loading">进入我的博客</el-button>
      <div class="icon-down">
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="classification">
      <h2>博客分类</h2>
      <p>好好学习，天天向上</p>
      <el-row :gutter="20">
        <el-col :span="6" :xs='24' :md="12" :lg="6"><div class="grid-content sort">
          <div class="sort-img">
            <img src="/images/sort1.jpg" alt="">
          </div>
        </div></el-col>
        <el-col :span="6" :xs='24':md="12" :lg="6"><div class="grid-content sort">
          <div class="sort-img">
            <img src="/images/sort2.jpg" alt="">
          </div>
        </div></el-col>
        <el-col :span="6":xs='24' :md="12" :lg="6"><div class="grid-content sort">
          <div class="sort-img">
            <img src="/images/sort3.jpg" alt="">
          </div>
        </div></el-col>
        <el-col :span="6" :xs='24':md="12" :lg="6"><div class="grid-content sort">
          <div class="sort-img">
            <img src="/images/sort4.jpg" alt="">
          </div>
        </div></el-col>
      </el-row>
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
      count:0,
      arr:['欢','迎','光','临'],
      arr1:['欢','迎','光','临'],
      timer2:null,
      nextMessage:null,
      boolean:true,
      j:0,
      n:0
    }
  },
  methods: {
    changeSize(){
      if(this.j===0){
        this.arr.pop()
        if(this.arr.length===0){
          this.j = 1
        }
      }else{
        this.arr = this.arr1.slice(0,this.n++)
        if(this.n===5){
          this.n = 0;
          this.j = 0
        }
      }


    }
  },
  created() {

  },
  mounted() {
    this.timer1 = setInterval(()=>{
        this.$nextTick(function (){
        this.$refs.bg.style.background = 'url(' + this.bgImg[this.count] + ') transparent no-repeat fixed center'

        })
      this.count++;
      if(this.count==2){
        this.count = 0
      }
      this.changeSize()
    },1000)
    this.timer2 = setInterval(()=>{
      this.boolean = this.boolean==true?false:true
    },100)
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
    opacity: 0.9;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  h2 {
    font-size: 80px;
    color:#303133;
    position: absolute;
    top: 30vh;
    text-align: center;
    left: 0;
    right: 0;
  }
  p {
    font-size: 50px;
    color:#606266;
    position: absolute;
    top: 50vh;
    text-align: center;
    left: 0;
    right: 0;
    .show{
      opacity: 1;
    }
    .hide{
      opacity: 0;
    }
  }
  .button{
    position: absolute;
    top: 65vh;
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
      color:#409EFF;
      font-weight: 800;
    }
  }
}
.classification{
  padding-top: 50px;
  text-align: center;
  h2{
    line-height: 50px;
    font-size: 30px;
    color: #303133;
  }
  p{
    line-height: 50px;
    font-size: 20px;
    color:#909399;
    margin-bottom: 50px;
  }
  .sort-img{
    width: 300px;
    height: 180px;
    margin: auto;
    img{
      width: 100%;
      height: 100%;
    }
  }
}


</style>