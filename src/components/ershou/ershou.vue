<template>
    <div>
        <h2 class="title">二手房列表</h2>
        <div class="newHouse_list" v-for="(item,index) in oldHouse" track-by="index" v-if="index<15*currentPage&&index>=15*(currentPage-1)">
            <router-link v-bind='{to:"/oldHouseDetail/"+indexUrl+"/"+index}'>
                <div class="list_left">
                    <img :src="item.listImg" alt="">
                </div>
                <div class="list_right">
                    <div class="left">
                        <h3>{{item.listTitle}}</h3>
                        <p class="type" v-html="item.listDetail"></p>
                        <p class="address">{{item.listAddress}}</p>
                        <p class="connect">{{item.listBroker}}</p>
                    </div>
                    <div class="right">
                        <p class="price"><b>{{item.listPrice}}</b>万</p>
                    </div>
                </div>
            </router-link>
        </div>
      <div class="block">
        <el-pagination id="elPage"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-size="15"
                       layout="total, prev, pager, next"
                       :total="oldHouse.length">
        </el-pagination>
      </div>
      <toTop></toTop>
    </div>
</template>

<script>
  import toTop from '../toTop/toTop.vue';

  export default {
        name: 'ershou',
        methods: {
              handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                window.scrollTo(0, 0);
              },
              handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
                window.scrollTo(0, 0);
              }
        },
         props: {
            oldHouse : {
              type: Array
            },
            indexUrl : {
              type: String
            }
        },
        created() {
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },
        data() {
          return {
            currentPage: 1
          };
        },
        components: {
          toTop
        }
    }
</script>

<style scoped>
    .title {
        font-size: 30px;
        font-weight: 700;
        padding-bottom: 20px;
        margin: 40px 160px 0;
    }
    .newHouse_list {
        margin: 0 140px 0px;
        padding: 10px 20px 20px;
        height: 180px;
        line-height: 45px;
        border-top: 1px dashed #ccc;
    }
    .newHouse_list:hover {
        background-color: #f2f2f3;
    }
    .newHouse_list .list_left {
        float: left;
        margin-right: 10px;
    }
    .newHouse_list .list_left img {
        border-radius: 5px;
    }
    .newHouse_list .list_right .left {
        float: left;

    }
    .newHouse_list .list_right .right {
        float: right;
    }
    .list_right .right .price {
        margin-top: 50px;
    }
    .list_right .right .price b {
        font-size: 30px;
        color: #f60;
    }
    .list_right .right .phone {
        margin-top: 60px;
        font-size: 14px;
        color: #666;
    }

    /* 分页 */
    #app .block {
        margin-top: 50px;
        text-align: center;
    }
</style>
