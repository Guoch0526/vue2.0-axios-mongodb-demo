<template>
    <div id="ohDetail">
        <h2 class="lpTitle">{{targetObj.lpTitle}}</h2>
        <p class="houseAreas">
            <span class="lpPrice">{{targetObj.houseAreas.lpPrice}}万</span>
            <span class="shi">{{targetObj.houseAreas.shi}}室</span>
            <span class="ting">{{targetObj.houseAreas.ting}}厅</span>
            <span class="lpArea">{{targetObj.houseAreas.lpArea}}平方米</span>
        </p>

        <!-- 轮播列表 -->
        <div class="sellerCarouse">
            <div class="left">
                <el-carousel trigger="click" height="450px" style="width:600px">
                  <el-carousel-item v-for="(index,item) in targetObj['carouselImg']" track-by="index">
                    <img :src="item" alt="">
                  </el-carousel-item>
                </el-carousel>
            </div>
            <div class="right">
                <img class="headImg" :src="targetObj.seller.headImg" alt="">
                <p class="nickName">{{targetObj.seller.nickName}}</p>
                <p class="workTime">{{targetObj.seller.workTime}}</p>
                <h3 class="phone">电话：{{targetObj.seller.phone}}</h3>
            </div>
        </div>

        <!-- 房屋信息 -->
        <div class="houseInfos">
            <h2>房屋信息</h2>
            <div class="houseInfoCol">
                <div class="first-col detail-col">
                    <dl>
                        <dt>小区</dt>
                        <dd>{{targetObj.houseInfo.community}}</dd>
                    </dl>
                    <dl>
                        <dt>位置</dt>
                        <dd>{{targetObj.houseInfo.address}}</dd>
                    </dl>
                    <dl>
                        <dt>年代</dt>
                        <dd>{{targetObj.houseInfo.year}}</dd>
                    </dl>
                    <dl>
                        <dt>类型</dt>
                        <dd>{{targetObj.houseInfo.type}}</dd>
                    </dl>
                </div>
                <div class="second-col detail-col">
                    <dl>
                        <dt>房型</dt>
                        <dd>{{targetObj.houseInfo.houseType}}</dd>
                    </dl>
                    <dl>
                        <dt>面积</dt>
                        <dd>{{targetObj.houseInfo.houseArea}}</dd>
                    </dl>
                    <dl>
                        <dt>朝向</dt>
                        <dd>{{targetObj.houseInfo.toward}}</dd>
                    </dl>
                    <dl>
                        <dt>楼层</dt>
                        <dd>{{targetObj.houseInfo.floor}}</dd>
                    </dl>
                </div>
                <div class="third-col detail-col">
                    <dl>
                        <dt>装修程度</dt>
                        <dd>{{targetObj.houseInfo.decorate}}</dd>
                    </dl>
                    <dl>
                        <dt>房屋单价</dt>
                        <dd>{{targetObj.houseInfo.housePrice}}</dd>
                    </dl>
                    <dl>
                        <dt>参考首付</dt>
                        <dd>{{targetObj.houseInfo.ckPayment}}</dd>
                    </dl>
                    <dl>
                        <dt>参考月供</dt>
                        <dd>{{targetObj.houseInfo.ckMonth}}</dd>
                    </dl>
                </div>
            </div>
        </div>

        <!-- 其他信息 -->
        <div class="otherInfo">
            <div class="oInfo sellPoint">
                <h2>核心卖点</h2>
                <div class="detail" v-html="targetObj.sellPoint"></div>
            </div>
            <div class="oInfo sellThink">
                <h2>业主心态</h2>
                <div class="detail" v-html="targetObj.sellThink"></div>
            </div>
            <div class="oInfo houseCover">
                <h2>小区配套</h2>
                <div class="detail" v-html="targetObj.houseCover"></div>
            </div>
            <div class="oInfo serviceDes">
                <h2>服务介绍</h2>
                <div class="detail" v-html="targetObj.serviceDes"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'oldHouseDetail',
        data() {
          return {
            city: this.$route.path.substring(16,18),
            id: this.$route.path.substring(19)
          };
        },
         props: {
            oldHouseDetail : {
              type: Object
            }
        },
        created() {
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },
        computed: {
            targetObj: function() {
                for(let i=0; i<this.oldHouseDetail[this.city].length; i++) {
                    if(this.oldHouseDetail[this.city][i]['id'] == parseInt(this.id)) {
                        return this.oldHouseDetail[this.city][i];
                    }
                }
            }
        }
    }
</script>

<style class="scoped">
    #ohDetail {
        margin: 0 150px;
    }
    #ohDetail .lpTitle {
        font-size: 28px;
        font-weight: 500;
        height: 50px;
        line-height: 50px;
        margin: 50px 0 20px 0;
    }
    #ohDetail .houseAreas .lpPrice {
        font-size: 24px;
        color: #f60;
    }
    #ohDetail .houseAreas {
        height: 35px;
        line-height: 35px;
        margin-bottom: 10px;
    }
    #ohDetail .houseAreas .shi,
    #ohDetail .houseAreas .ting,
    #ohDetail .houseAreas .lpArea
    {
        font-size: 24px;
    }

    #ohDetail .sellerCarouse {
        display: flex;
    }
    #ohDetail .sellerCarouse .left {
        flex: 5;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-right: 100px;
    }
    #ohDetail .sellerCarouse .right {
        flex: 4;
        border: 1px solid #ccc;
        border-radius: 5px;
        text-align: center;
    }
    .sellerCarouse .right .headImg {
        margin: 30px 0 20px;
    }
    .sellerCarouse .right .nickName {
        font-size: 28px;
        color: #333;
        height: 34px;
        line-height: 35px;
    }
    .sellerCarouse .right .workTime {
        font-size: 18px;
        height: 34px;
        line-height: 35px;
    }
    .sellerCarouse .right .phone {
        margin-top: 30px;
        font-size: 28px;
        color: #333;
        height: 34px;
        line-height: 35px;
    }

    #ohDetail .houseInfos h2 {
        font-size: 38px;
        height: 80px;
        line-height: 80px;
        margin-top: 50px;
        margin-bottom: 20px;
        border-bottom: 1px solid #000;
    }
    #ohDetail .houseInfos .houseInfoCol {
        display: flex;
    }
    .houseInfos .houseInfoCol .detail-col {
        flex: 1;
        margin-bottom: 20px;
    }
    
    .houseInfoCol .detail-col dl {
        font-size: 14px;
        height: 28px;
        line-height: 28px;
    }
    .houseInfoCol .detail-col dl dt {
        float: left;
        margin-right: 10px;

        color: #999;
    }
    #ohDetail .otherInfo {
        margin-top: 50px;
    }
    #ohDetail .otherInfo .oInfo h2 {
        height: 50px;
        line-height: 50px;
        color: #62ab00;
        border-bottom: 1px dashed #000;
        margin-bottom: 20px;
    }
    #ohDetail .otherInfo .oInfo .detail {
        font-size: 18px;
    }
</style>