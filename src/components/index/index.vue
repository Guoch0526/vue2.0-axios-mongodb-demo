<template>
  <div>
    <!-- 新房 -->
    <div class="new_hourse">
      <div class="new_top">
        <img src="../../../static/img/newHouse.jpg">
      </div>
      <el-row :gutter="70">
        <el-col :span="8" style="padding: 0px;" v-for="(item,index) in newHourse" track-by="index">
          <router-link v-bind='{to:"/newHouse/"+indexUrl}'>
            <div class="grid-content bg-purple">
              <img :src="item.img" height="200" width="300" alt="">
              <div class="detail">
                <p>{{item.title}}</p>
                <span>{{item.price}}</span>
              </div>
            </div>
          </router-link>
        </el-col>

      </el-row>
    </div>

    <!-- 二手房 -->
    <div class="old_hourse">
      <div class="old_top">
        <img src="../../../static/img/erHouse.jpg">
      </div>
      <el-row :gutter="30">
        <el-col :span="6" style="padding: 0px;" v-for="(item,index) in oldHourse" track-by="index">
          <router-link v-bind='{to:"/ershou/"+indexUrl}'>
            <div class="grid-content bg-purple">
              <img :src="item.img" height="160" width="225" alt="">

              <div class="old_bottom">
                <p>{{item.detail}}</p>
              </div>
            </div>
          </router-link>
        </el-col>

      </el-row>
    </div>

    <!-- 楼盘资讯 -->
    <div class="news_home clearfix">
      <h2>楼盘资讯</h2>
      <router-link v-bind='{to:"/newsHome/"+indexUrl}'>
        <div class="news_home_list clearfix" v-for="item in newsHome">
          <div class="left clearfix">
            <img :src="item.img" alt="">
          </div>
          <div class="right clearfix">
            <h3>{{item.title}}</h3>
            <p>{{item.description}}</p>
            <span>类型：热点   作者：深中惠   2017-04-05</span>
          </div>
        </div>
      </router-link>
      <el-button><router-link v-bind='{to:"/newsHome/"+indexUrl}'>更多楼讯</router-link></el-button>
    </div>

    <!-- 推荐渠道 -->
    <div class="recommend_way">
      <el-row :gutter="20">
        <el-col :span="6" style="padding-top: 50px; padding-bottom: 50px;">
          <div class="grid-content bg-purple">
            <img src="../../../static/img/ershoufang.jpg" alt="">
            <h3>找二手房</h3>
            <span>真实二手房源，深中惠承诺真实在售所见即真</span>
          </div>
        </el-col>
        <el-col :span="6" style="padding-top: 50px; padding-bottom: 50px;">
          <div class="grid-content bg-purple">
            <img src="../../../static/img/ditufang.jpg" alt="">
            <h3>地图找房</h3>
            <span>为您精准定位，位置周边配套设施一览无余</span>
          </div>
        </el-col>
        <el-col :span="6" style="padding-top: 50px; padding-bottom: 50px;">
          <div class="grid-content bg-purple">
            <img src="../../../static/img/ditiefang.jpg" alt="">
            <h3>找地铁房</h3>
            <span>房源紧邻地铁站，交通出行更方便说走就走</span>
          </div>
        </el-col>
        <el-col :span="6" style="padding-top: 50px; padding-bottom: 50px;">
          <div class="grid-content bg-purple">
            <img src="../../../static/img/chuzufang.jpg" alt="">
            <h3>找出租房</h3>
            <span>海量出租房源，质优好房专业服务全新呈现</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <toTop></toTop>
  </div>
</template>

<script>
import toTop from '../toTop/toTop.vue';
export default {
  name: 'index',
  props: {
    newHourse : {
      type: Array
    },
    oldHourse : {
      type: Array
    },
    newsHome : {
      type: Array
    },
    indexUrl : {
      type: String
    }
  },
  components: {
      toTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  border: 0 none;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
li[data-v-102604ab] {
  display: block;
}
.selectCity {
  width: 80px;
  position: absolute;
  top: 15px;
  right: 150px;
}
.el-menu {
  background-color: #62ab00;
  padding: 0 150px;
}

.el-menu-item {
  color: #fff;
  font-size: 20px;
  position: relative;
}
.el-menu-item.is-active {
  color: #fff;
  border-bottom: 0 none;
  background-color: #528e01;
}
.el-menu--horizontal>.el-menu-item:hover {
  border-bottom: 0 none;
  background-color: #528e01;
}
.el-menu--horizontal .el-menu-item {
  border-bottom: 0 none;
}


/* 新房推荐 */
.new_hourse,
.old_hourse,
.recommend_way {
  padding: 0 150px;
  text-align: left;
}
.new_top {
  margin: 50px 0 30px 20px;
}
.old_top img {
  margin-top: 20px;
  margin-left: 20px;
}

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.bg-purple {
  position: relative;
}
.bg-purple .detail {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  color: #fff;
}
.bg-purple .detail p {
  font-size: 26px;
  font-weight: 700;
}
.bg-purple .detail span {
  color: yellow;
  font-size: 20px;
  font-weight: 500;
}

/* 二手房 */
.old_hourse {
  background-color: #f2f2f3;
}
.old_bottom {
  width: 228px;
  height: 50px;
  margin-top: -5px;
  margin-left: 15px;
  background-color: #fff;
}

.grid-content.bg-purple {
  margin: 0 0 20px 10px;
}

/* 楼盘资讯 */
.news_home {
  text-align: left;
  margin: 0 150px 30px;
  height: 100%;
}
.news_home h2 {
  margin: 40px 0 20px;
}
.news_home .news_home_list {
  float: left;
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  padding: 10px;
}
.news_home .news_home_list:hover {
  background-color: #f2f2f3;
}
.news_home .news_home_list .left {
  flex: 1;
  margin-right: 20px;
}
.news_home .news_home_list .right h3 {
  margin-bottom: 10px;
}
.news_home .news_home_list .right span {
  display: block;
  padding-top: 50px;
  font-size: 14px;
  color: #666;
}
.el-button--default {
  margin-top: 20px;
  float: right;
}
/* 推荐渠道 */
.recommend_way  {
  background-color: #f2f2f3;

}
.recommend_way .grid-content {
  padding: 0 20px;
}
.recommend_way .grid-content img {
  margin-bottom: 20px;
  width: 30%;
}
.recommend_way .grid-content span {
  font-size: 14px;
  color: #666;
}

/* 底部 */
.footer {
  height: 200px;
  line-height: 200px;
  margin-top: -20px;
  background-image: url(../../../static/img/footer.jpg);
  background-position:center;
  background-size:cover;
}
.footer p {
  font-size: 13px;
  color: #ccc;
}
</style>
