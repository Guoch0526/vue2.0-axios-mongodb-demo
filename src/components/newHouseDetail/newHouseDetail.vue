<template>
  <div id="nhDetail">
    <!-- 标题 -->
    <h1 class="title">{{targetObj.lpTitle}}</h1>
    <!-- 轮播列表 -->
    <div class="carouselList">
      <!-- 左侧轮播图 -->
      <el-carousel trigger="click" height="338px" style="width:450px">
        <el-carousel-item v-for="item in targetObj.carouselList.imgList">
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>

      <!-- 右侧轮播详情 -->
      <div class="lbDetail">
        <p><span class="lbLeft">参考价格</span>住宅<b class="ckPrice">{{targetObj.carouselList.ckPrice}}</b>元/m²</p>
        <p><span class="lbLeft">优惠折扣</span>{{targetObj.carouselList.discount}}</p>
        <p><span class="lbLeft">楼盘户型</span>{{targetObj.carouselList.lpType}}</p>
        <p><span class="lbLeft">楼盘地址</span>{{targetObj.carouselList.lpAddress}}</p>
        <p><span class="lbLeft">最新开盘</span>{{targetObj.carouselList.latestOpening}}</p>
        <p><span class="lbLeft">交房时间</span>{{targetObj.carouselList.launchTime}}</p>
        <p><span class="lbLeft">建筑类型</span>{{targetObj.carouselList.buildingType}}</p>
        <p><span class="lbLeft">用户点评</span>{{targetObj.carouselList.userComment}}</p>
        <p><span class="lbLeft">产权年限</span>{{targetObj.carouselList.propertyYears}}</p>
      </div>
    </div>
    <!-- 楼盘资讯-->
    <div class="houseInfo">
      <div class="houseInfo-left">
        <h2>动态资讯</h2>
        <div class="info">
          <h3 class="infoTitle">{{targetObj.houseInfo.infoTitle}}<span class="infoTime">{{targetObj.houseInfo.infoTime}}</span></h3>
          <p class="infoDes">{{targetObj.houseInfo.infoDes}}</p>
          <h3 class="infoTitle">{{targetObj.houseInfo.infoTitles}}<span class="infoTime">{{targetObj.houseInfo.infoTimes}}</span></h3>
        </div>
      </div>
      <div class="houseInfo-right">
        <h2>楼盘问答</h2>
        <ul class="infoQA">
          <li v-for="item in targetObj.houseInfo.infoQA">{{item}}</li>
        </ul>
      </div>
    </div>
    <!-- 楼盘户型-->
    <div class="houseType">
      <h2>楼盘户型</h2>
      <ul>
        <li v-for="item in targetObj.houseType">
          <img class="typeImg" :src="item.typeImg" alt=""/>
          <p class="typeTitle" v-html="item.typeTitle"></p>
          <span class="typeDes">{{item.typeDes}}</span>
        </li>
      </ul>
    </div>
    <!-- 用户点评-->
    <div class="userComments">
      <div class="comment">
        <h2>用户评论</h2>
        <ul class="commentList">
          <li v-for="item in targetObj.userComments.comment">
            <div class="left">
              <img class="headImg" :src="item.headImg" alt=""/>
            </div>
            <div class="right">
              <p class="nickName">
                {{item.nickName}}
              </p>
              <p class="content">{{item.content}}</p>
              <p class="commentTime">
                {{item.commentTime}}
                <span class="upNumber">支持：{{item.upNumber}}</span>
                <span class="downNumber">反对：{{item.downNumber}}</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="superMan">
        <h2>点评达人</h2>
        <ul class="superManList">
          <li v-for="item in targetObj.userComments.superMan">
            <div class="left">
              <img class="headImg" :src="item.headImg" alt=""/>
            </div>
            <div class="right">
              <p class="nickName">
                {{item.nickName}}
                <span class="profession">
                  {{item.profession}}
                </span>
              </p>
              <p class="commentNumber">点评<b>{{item.commentNumber}}</b>个楼盘</p>
              <p class="content">
                {{item.content}}
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'newHouseDetail',
    data() {
      return {
        city: this.$route.path.substring(16,18),
        id: this.$route.path.substring(19)
      };
    },
    created() {
      // this.getNewHouseDetail();
      this.$nextTick(() => {
          window.scrollTo(0, 0);
      });
    },
    props: {
        newHouseDetail : {
          type: Object
        }
    },
    computed: {
        targetObj: function() {
            for(let i=0; i<this.newHouseDetail[this.city].length; i++) {
                if(this.newHouseDetail[this.city][i]['id'] == parseInt(this.id)) {
                    return this.newHouseDetail[this.city][i];
                }
            }
        }
    }
  }
</script>

<style class="scoped">
  #nhDetail {
    margin: 0 160px;
  }
  #nhDetail h1 {
    font-size: 36px;
    font-weight: 600;
    margin-top: 30px;
    height: 80px;
    line-height: 80px;
  }
  .carouselList {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }

  /* 轮播图 */
  .el-carousel__item {
    flex: 1;
  }
  .lbDetail {
    flex: 2;
    font-size: 14px;
    margin-left: 20px;
  }
  .lbDetail p .lbLeft {
    font-size: 16px;
    color: #656565;
    margin: 0 10px 0 15px;
    height: 37px;
    line-height: 37px;
  }
  .lbDetail p .ckPrice {
    font-size: 30px;
    color: #f60;
    margin: 0 10px;
  }

  /*楼盘资讯*/
  .houseInfo {
    margin-top: 30px;
    display: flex;
  }
  .houseInfo .houseInfo-left {
    flex: 2;
    margin-right: 20px;
  }
  .houseInfo .houseInfo-left h2,
  .houseInfo .houseInfo-right h2,
  .houseType h2,
  .userComments .comment h2,
  .userComments .superMan h2
  {
    font-size: 26px;
    font-weight: 600;
    height: 50px;
    line-height: 50px;
  }
  .houseInfo .houseInfo-left .info {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    height: 160px;
  }
  .houseInfo-left .info h3 {
    font-size: 18px;
    font-weight: 600;
  }
  .houseInfo-left .info h3 .infoTime {
    float: right;
    font-weight: 400;
    font-size: 14px;
    color: #999;
  }
  .houseInfo-left .info .infoDes {
    font-size: 16px;
    height: 100px;
    line-height: 33px;
    color: #656565;
    margin-bottom: 10px;
    border-bottom: 1px dashed #ccc;
  }
  .houseInfo .houseInfo-right {
    flex: 1;
  }
  .houseInfo .houseInfo-right .infoQA {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    height: 160px;
  }
  .houseInfo-right .infoQA li {
    font-size: 14px;
    height: 20px;
    line-height: 20px;
  }

  /*楼盘户型*/
  .houseType {
    margin-top: 50px;
  }
  .houseType ul {
    display: flex;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    justify-content: space-around;
  }
  .houseType ul li {
    flex: 1;
  }
  .houseType ul li .typeTitle {
    font-size: 16px;
    color: #333;
    height: 30px;
    line-height: 30px;
  }
  .houseType ul li .typeDes {
    font-size: 14px;
    color: #666;
    height: 30px;
    line-height: 30px;
  }

  /*用户点评*/
  .userComments {
    margin-top: 50px;
    display: flex;
  }
  .userComments .comment {
    flex: 2;
  }
  .userComments .comment .commentList {
    margin-right: 20px;
    height: 190px;
  }
  .userComments .comment .commentList,
  .userComments .superMan .superManList{
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
  }
  .comment .commentList li,
  .superMan .superManList li{
    display: flex;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 10px;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  .comment .commentList li:last-child,
  .superMan .superManList li:last-child{
    border-bottom: 0 none;
  }
  .comment .commentList li .left,
  .superMan .superManList li .left{
    flex: 1;
  }
  .commentList li .left img,
  .superManList li .left img{
    width: 38px;
    height: 38px;
  }
  .comment .commentList li .right,
  .superMan .superManList li .right{
    flex: 9;
  }
  .commentList li .right .commentTime,
  .superManList li .right .profession,
  .superManList li .right .content
  {
    color: #999;
    font-size: 14px;
  }
  .commentList li .right .commentTime span {
    float: right;
  }
  .commentList li .right .commentTime .upNumber {
    display: inline-block;
    padding-right: 20px;
  }
  .userComments .superMan {
    flex: 1;
  }
  .superMan .superManList li .left {
    margin-right: 10px;
  }
  .superManList li .right .commentNumber b {
    font-size: 18px;
    color: #f60;
  }
  .superManList li .right .content {
  }
</style>
