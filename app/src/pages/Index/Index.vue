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
      <el-row>
        <el-col :span="6" :sm='12' :xs='24' :md="12" :lg="6"><div class="grid-content sort">
          <div class="sort-img">
            <img src="/images/sort1.jpg" alt="">
          </div>
          <div class="sort-down">
            <h2>股市世界</h2>
            <p>本栏讲诉博主的投资股市的艰辛历程以及对股市的见解，人生就像股市那样，在高峰的时候要懂得减仓，在低谷的时候要懂得加仓</p>
            <el-button type="primary" class="button" icon="el-icon-shopping-cart-full">马上进入</el-button>
          </div>    
        </div></el-col>
        <el-col :span="6" :sm='12' :xs='24' :md="12" :lg="6"><div class="grid-content sort">
          <div class="sort-img">
            <img src="/images/sort2.jpg" alt="">
          </div>
          <div class="sort-down">
            <h2>web前端之路</h2>
            <p>一切的一切都有命运的安排，既然选择了这条道路，那么，就一直的，勇敢的走下去，不要回头，前端开发之路点击马上进入</p>
            <el-button type="primary" class="button" icon="el-icon-unlock">马上进入</el-button>
          </div>    
        </div></el-col>
        <el-col :span="6" :sm='12' :xs='24' :md="12" :lg="6"><div class="grid-content sort">
          <div class="sort-img">
            <img src="/images/sort3.jpg" alt="">
          </div>
          <div class="sort-down">
            <h2>深圳之行</h2>
            <p>毕业了就来到的城市，遇见了许多有趣的人，增长了许多的知识，人生就是一场旅行，失去或者得到，我们一直都在，深漂之旅的点点滴滴</p>
            <el-button type="primary" class="button" icon="el-icon-bicycle">马上进入</el-button>
          </div>    
        </div></el-col>
        <el-col :span="6" :sm='12' :xs='24' :md="12" :lg="6"><div class="grid-content sort">
          <div class="sort-img">
            <img src="/images/sort4.jpg" alt="">
          </div>
          <div class="sort-down">
            <h2>游戏人生</h2>
            <p>人生如戏，戏如人生，一场游戏一场梦，打的不是游戏，是寂寞，越是寂寞，就越是向前走，点击进入，马上了解博主的游戏人生</p>
            <el-button type="primary" class="button" icon="el-icon-coordinate">马上进入</el-button>
          </div>    
        </div></el-col>
      </el-row>
    </div>
    <div class="about">
      <ul>
        <li>
          <el-button type="info" class="bg-change" >关于我</el-button>
          <el-button type="info" class="bg-change">友情链接</el-button>
        </li>
      </ul>
    </div>
    <div class="personal">
      <h2>CRJ个人博客</h2>
      <p>人生苦短，即使行乐，开心了就笑，难过了就哭，得不到就努力去得到，失去了就让它失去</p>
    </div>
    <div class="footer">
      <el-row>
        <el-col :span="8" :xs="24"><div class="grid-content list">
          <h3>CRJ个人博客</h3>
          <p>终有一天，我会变得很强</p>
          <el-button type="primary" icon="el-icon-search">点击马上了解我</el-button>
          <p>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
            <i class="el-icon-star-off"></i>
          </p>
        </div></el-col>
        <el-col :span="8" :xs="24"><div class="grid-content list">
          <h2>相关链接</h2>
          <ul>
            <li><i class="el-icon-edit"></i>博文</li>
            <li><i class="el-icon-chat-line-round"></i>留言</li>
            <li><i class="el-icon-document"></i>资源</li>
            <li><i class="el-icon-edit-outline"></i>日记</li>
            <li><i class="el-icon-thumb"></i>归档</li>
          </ul>
        </div></el-col>
        <el-col :span="8" :xs="24"><div class="grid-content list">
          <h3>联系我</h3>
          <p><i class="el-icon-phone"></i>QQ：491625842</p>
          <p><i class="el-icon-thumb"></i>微信：18076476744</p>
          <p><i class="el-icon-user"></i>邮箱：491625842@qq.com</p>
        </div></el-col>
      </el-row>
    </div>
    <div class="copyright">Copyright © 2019-2020 ZQ个人博客 All Rights Reserved V.5.1.3 粤ICP备1231100号</div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      bgImg: ['/images/time.jpg','/images/time2.jpg','/images/time10.jpg'],
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
    console.log(1111)
    this.timer1 = setInterval(()=>{
        this.$nextTick(function (){
        this.$refs.bg.style.background = 'url(' + this.bgImg[this.count] + ') transparent no-repeat fixed center'

        })
      this.count++;
      if(this.count==3){
        this.count = 0
      }
      this.changeSize()
    },1000)
    this.timer2 = setInterval(()=>{
      this.boolean = this.boolean==true?false:true
    },100)
  },
  mounted() {
    
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
    background: transparent url("/images/time.jpg") no-repeat fixed center;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  h2 {
    font-size: 50px;
    color:#303133;
    position: absolute;
    top: 48vh;
    text-align: center;
    left: 0;
    right: 0;
  }
  p {
    font-size: 30px;
    color:#606266;
    position: absolute;
    top: 55vh;
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
  .sort{
    margin:20px;
    .sort-img{
      width: 100%;
      height: 200px;
      margin: auto;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .sort-down{
      background-color: #EBEEF5;
      padding-bottom: 10px;;
      height: 150px;
      p{
        font-size: 12px;
        line-height: 14px;
        margin-bottom: 10px;
      }
    }
  }
}
.about{
  margin-top: 100px;
  height: 270px;
  width: 100%;
  background:transparent url("/images/bg5.jpg") no-repeat fixed center;
  position: relative;
  ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    margin:auto;
    width: 300px;
    height: 100px;
    button{
      margin:25px;
      background:transparent;
      border-color: #EBEEF5;
      transition: 1s;
    }
    button:hover{
      background: green;
    }
  }
}
.personal{
  margin:100px 0;
  text-align: center;
  h2{
    font-size: 30px;
    margin-bottom: 30px;
  }
  p{
    font-size: 16px;
    line-height: 50px;
  }
}
.footer{
  color:white;
  padding: 50px 50px;
  background-color: #303133;
  .list{
    line-height: 50px;
    i{
    margin-right: 10px;
  }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 50%;

      }
    }
  }
}
.copyright{
  line-height: 50px;
  background-color: black;
  font-size: 12px;
  color:blanchedalmond;
  text-align: center;
}

</style>