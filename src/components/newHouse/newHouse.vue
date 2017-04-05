<template>
  <div>
    <h2 class="title">新房列表</h2>
    <div class="newHouse_list" v-for="(item,index) in newHouse" track-by="index"
         v-if="index<15*currentPage&&index>=15*(currentPage-1)">
      <!-- 路由地址需要改变要使用这种形式：v-bind='{to:"/newHouseDetail/"+index}' -->
      <router-link v-bind='{to:"/newHouseDetail/"+indexUrl+"/"+index}'>
        <div class="list_left">
          <img :src="item.listImg" alt="">
        </div>
        <div class="list_right">
          <div class="left">
            <h3>{{item.listTitle}}</h3>
            <p class="address">{{item.listAddress}}</p>
            <p class="type" v-show="item.openTime.length>0">户型：{{item.openTime}}</p>
            <p class="active" v-show="item.listTag.length>0">动态：{{item.listTag}} </p>
          </div>
          <div class="right">
            <p class="price" v-show="item.avgPrice.length>0">均价<b>{{item.avgPrice}}</b>元/m²</p>
            <p class="phone" v-show="item.listTel.length>0">电话：{{item.listTel}}</p>
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
                     :total="newHouse.length">
      </el-pagination>
    </div>
    <toTop></toTop>

  </div>
</template>

<script>
  import toTop from '../toTop/toTop.vue';

  export default {
    name: 'newHouse',
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        window.scrollTo(0, 0);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
        window.scrollTo(0, 0);
      },
      sendIndex(index) {
        console.log(index);
      }
    },
    created() {
      this.$nextTick(() => {
        window.scrollTo(0, 0);
      });
    },
    props: {
      newHouse: {
        type: Array
      },
      indexUrl: {
        type: String
      }
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
  @import url("//unpkg.com/element-ui/lib/theme-default/index.css");

  .title {
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 20px;
    margin: 40px 160px 0;
  }

  .newHouse_list {
    margin: 0 140px 0px;
    padding: 10px 20px 20px;
    height: 140px;
    line-height: 35px;
    border-top: 1px dashed #ccc;
  }

  .newHouse_list a {
    display: block;
    width: 100%;
    height: 100%;
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
