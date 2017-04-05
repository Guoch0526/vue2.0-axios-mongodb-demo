<template>
    <div class="news_home clearfix">
      <h2>楼盘资讯</h2>
      <div class="news_home_list clearfix" v-for="(item,index) in newsHomes" track-by="index" v-if="index<10*currentPage&&index>=10*(currentPage-1)">
        <router-link v-bind='{to:"/newsHomeDetail/"+indexUrl+"/"+index}'>
          <div class="left clearfix">
            <img :src="item.listImg" alt="">
          </div>
          <div class="right clearfix">
            <h3>{{item.listTitle}}</h3>
            <p>{{item.listDescription}}</p>
            <span>{{item.type}}</span>
          </div>
        </router-link>
      </div>

      <div class="block">
        <el-pagination id="elPage"
                       @size-change="handleSizeChange"
                       @current-change="handleCurrentChange"
                       :current-page="currentPage"
                       :page-size="10"
                       layout="total, prev, pager, next"
                       :total="newsHomes.length">
        </el-pagination>
      </div>
      <toTop></toTop>

    </div>
</template>

<script>
  import toTop from '../toTop/toTop.vue';
  export default {
        name: 'newsHome',
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
            newsHomes : {
              type: Array
            },
            indexUrl : {
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

<style class="scoped">
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
  width: 100%;
  margin: 10px 0;
}
.news_home .news_home_list a {
  float: left;
  display: flex;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
  /*margin-top: 10px;*/
  /*padding: 10px;*/
}
.news_home .news_home_list:hover {
  background-color: #f2f2f3;
}
.news_home .news_home_list .left {
  flex: 1;
  margin-right: 20px;
}
.news_home .news_home_list .right {
  flex: 6;
  float: left;
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
.el-pagination {
  text-align: center;
}
</style>
