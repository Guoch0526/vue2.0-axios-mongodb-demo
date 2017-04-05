<template>
  <div id="app">
    <!-- 导航栏 -->
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"  @select="handleSelect">
      <el-menu-item index="1"><router-link v-bind='{to:"/index/"+indexUrl}'>首页</router-link></el-menu-item>
      <el-menu-item index="2"><router-link v-bind='{to:"/newHouse/"+indexUrl}'>新房</router-link></el-menu-item>
      <el-menu-item index="3"><router-link v-bind='{to:"/ershou/"+indexUrl}'>二手房</router-link></el-menu-item>
      <el-menu-item index="4"><router-link v-bind='{to:"/newsHome/"+indexUrl}'>楼盘资讯</router-link></el-menu-item>
      <el-menu-item index="5" class="login" v-show="!isLoginSuccess"><el-button type="text" @click="dialogLogin = true">登录</el-button></el-menu-item>
      <el-menu-item index="6" class="register" v-show="!isLoginSuccess"><el-button type="text" @click="dialogRegister = true">注册</el-button></el-menu-item>
      <el-menu-item index="7" class="nickname" v-show="isLoginSuccess"><el-dropdown>
        <span class="el-dropdown-link">
          {{userNickname}}<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item>个人中心</el-dropdown-item> -->
          <el-dropdown-item><div @click="logoff">退出登录</div></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown></el-menu-item>
    </el-menu>

    <el-select v-model="cityValue" size="small" class="selectCity" ref="selCity" v-on:change="changeCity">
            <el-option
              v-for="item in options"
              :label="item.label"
              :value="item.value">
            </el-option>
    </el-select>

    <el-dialog title="登   录" v-model="dialogLogin" top="25%">
      <el-form :model="loginForm">
        <el-form-item label="昵称：" :label-width="formLabelWidth">
          <el-input v-model="loginForm.nickname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" :label-width="formLabelWidth">
          <el-input v-model="loginForm.password" type="password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogLogin = false">取 消</el-button>
        <el-button type="primary" @click="login">登 录</el-button>
      </div>
    </el-dialog>

    <el-dialog title="注   册" v-model="dialogRegister" top="25%">
      <el-form :model="registerForm">
        <el-form-item label="昵  称：" :label-width="formLabelWidth">
          <el-input v-model="registerForm.nickname" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号：" :label-width="formLabelWidth">
          <el-input v-model="registerForm.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密  码：" :label-width="formLabelWidth">
          <el-input v-model="registerForm.password" type="password" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRegister = false">取 消</el-button>
        <el-button type="primary" @click="register">注 册</el-button>
      </div>
    </el-dialog>

     <!--<login v-if="userType === 'login' && urlPage === 'index'"></login>-->
     <!--<register v-if="userType === 'register' && urlPage === 'index'"></register>-->
    <!-- 传参数到router-view中 -->
   <!--  <router-view
        :new-hourse="new_hourse"
        :old-hourse="old_hourse"
        :news-home="news_home"
        :new-house="new_house"
        :old-house="old_house"
        :news-homes="news_homes"
        :new-house-detail="new_house_detail"
        :old-house-detail="old_house_detail"
        :index-url="indexUrl"
        :sz-news-home="sz_news_home"
        :zs-news-home="zs_news_home"
        :hz-news-home="hz_news_home"
    ></router-view> -->

    <router-view
        :new-hourse="new_hourse"
        :old-hourse="old_hourse"
        :news-home="news_home"
        :new-house="new_house"
        :old-house="old_house"
        :news-homes="news_homes"
        :new-house-detail="new_house_detail"
        :old-house-detail="old_house_detail"
        :index-url="indexUrl"
        :sz-news-home="sz_news_home"
        :zs-news-home="zs_news_home"
        :hz-news-home="hz_news_home"
    ></router-view>

    <!-- 底部 -->
    <div class="footer">
      <p>深中惠搜房网  |  人才招聘   |   联系我们   |    用户协议   |    使用帮助   |    友情链接   |    网络经营许可证 粤ICP备11024601号-12   |   © Copyright©2017  深中惠版权所有</p>
    </div>
  </div>
</template>

<script>
import oldHouseDetail from '../data/oldHouseDetail.json';
import newHouseDetail from '../data/newHouseDetail.json';
import szNewsHome from '../data/szNewsHome.json';
import zsNewsHome from '../data/zsNewsHome.json';
import hzNewsHome from '../data/hzNewsHome.json';

export default {
  name: 'app',
  data() {
      return {
        dialogLogin: false,
        dialogRegister: false,
        loginForm: {
          nickname: '',
          password: ''
        },
        registerForm: {
          nickname: '',
          password: '',
          phone: ''
        },
        userNickname: '',
        isLoginSuccess: false,
        formLabelWidth: '70px',

        userType: '',
        activeIndex: '1',
        activeIndex2: '1',
        listData: [],
        options: [{
          value: 'sz',
          label: '深圳'
        }, {
          value: 'zs',
          label: '中山'
        }, {
          value: 'hz',
          label: '惠州'
        }],
        urlPage: this.$route.path.substring(1,6),
        cityValue: 'sz',
        indexUrl: 'sz',
        new_hourse: [],
        old_hourse: [],
        news_home: [],

        new_house: [],
        old_house: [],
        news_homes: [],
        new_house_detail: newHouseDetail.newHouseDetail,
        old_house_detail: oldHouseDetail.oldHouseDetail,
        sz_news_home: szNewsHome.data,
        zs_news_home: zsNewsHome.data,
        hz_news_home: hzNewsHome.data
      };
  },
  created() {
    this.getListData();
  },
  methods: {
    login() {
      const that = this;
      let params = {
        nickname: that.loginForm.nickname,
        password: that.loginForm.password
      }
       // 获取已有账号密码  
      this.$http.post('/api/login/getAccount', params)
        .then((response) => {
          console.log(response)
          // 响应成功回调
          if(response.data.errcode == 0) {
            this.$alert('验证成功', '提示', {
              confirmButtonText: '确定',
              callback: function() {
                that.dialogLogin = false
                that.isLoginSuccess = true
                that.userNickname = params.nickname
                that.loginForm.nickname = ''
                that.loginForm.password = ''
              }
            });
          } else {
            this.$alert('验证失败', '提示', {
              confirmButtonText: '确定',
            });
          }
        },(res) => {

        })
        .catch((reject) => {
          console.log(reject)
        });
    },
    register() {
      const that = this;
      let params = {
        nickname: that.registerForm.nickname,
        password: that.registerForm.password,
        phone: that.registerForm.phone
      };
      if (that.registerForm.nickname.length === 0) {
        this.$notify({
          title: '警告',
          message: '昵称不能为空',
          type: 'warning',
          offset: 200,
          duration: 1000
        });
        return;
      } else if (that.registerForm.phone.length === 0 || !(/^1[34578]\d{9}$/.test(that.registerForm.phone))) {
        this.$notify({
          title: '警告',
          message: '手机号码格式错误',
          type: 'warning',
          offset: 200,
          duration: 1000
        });
        return;
      } else if (that.registerForm.password.length === 0) {
        this.$notify({
          title: '警告',
          message: '密码不能为空',
          type: 'warning',
          offset: 200,
          duration: 1000
        });
        return;
      }
      this.$http.post('/api/register/createAccount', params).then((res) => {
        if (res.data.errcode === 0) {
          this.$alert('注册成功', '提示', {
            confirmButtonText: '确定',
            callback: function() {
              that.dialogRegister = false
              that.isLoginSuccess = true
              that.userNickname = params.nickname
              that.registerForm.nickname = ''
              that.registerForm.password = ''
              that.registerForm.phone = ''
            }
          });
        } else if (res.data.errcode === 1) {
          this.$alert('昵称或手机号不能重复', '提示', {
            confirmButtonText: '确定',
            callback: function() {
              that.dialogRegister = true
              that.isLoginSuccess = false
              that.registerForm.nickname = ''
              that.registerForm.password = ''
              that.registerForm.phone = ''
            }
          });
        }
      });
    },
    logoff() {
      this.isLoginSuccess = false
    },
    getListData() {
      this.$http.get('/api/getListData')
        .then((response) => {
          // 响应成功回调
          this.listData = response.data[0];
          console.log(this.listData[0])
          this.new_hourse = this.listData.index.sz.new_hourse,
          this.old_hourse = this.listData.index.sz.old_hourse,
          this.news_home = this.listData.index.sz.news_home,

          this.new_house = this.listData.newHouse.sz,
          this.old_house = this.listData.oldHouse.sz,
          this.news_homes = this.listData.newsHomes.sz
        },(res) => {
          console.log(res)
        })
        .catch((reject) => {
          console.log(reject)
        });
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    userTab(type) {
      this.userType = type;
      console.log(this.userType);
      console.log(this.$route.path.substring(1,6));
    },
    changeCity() {
      this.new_hourse = this.listData.index[this.$refs.selCity.value].new_hourse;
      this.old_hourse = this.listData.index[this.$refs.selCity.value].old_hourse;
      this.news_home = this.listData.index[this.$refs.selCity.value].news_home;

      this.new_house = this.listData.newHouse[this.$refs.selCity.value];
      this.old_house = this.listData.oldHouse[this.$refs.selCity.value];
      this.news_homes = this.listData.newsHomes[this.$refs.selCity.value];
      this.indexUrl = this.$refs.selCity.value;

      this.$router.replace(this.indexUrl);
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#app a {
  text-decoration: none;
}
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
a {
  color: #42b983;
}
#app li[data-v-102604ab] {
  display: block;
}
#app .selectCity {
  width: 80px;
  position: absolute;
  top: 15px;
  right: 350px;
}
#app .el-menu {
  background-color: #62ab00;
  padding: 0 150px;
}

#app .el-menu-item {
  color: #fff;
  font-size: 20px;
  position: relative;
}
#app .el-menu-item.login,
#app .el-menu-item.nickname {
  /*margin-left: 500px;*/
  position: absolute;
  right: 230px;
  top: 0;
}
#app .el-menu-item.register {
  position: absolute;
  right: 150px;
  top: 0;
}
#app .el-menu-item.login .el-button,
#app .el-menu-item.register .el-button,
#app .el-menu-item.nickname .el-dropdown-link {
  color: #fff;
  font-size: 16px;
}
#app .el-menu-item.is-active {
  color: #fff;
  border-bottom: 0 none;
  background-color: #528e01;
}
#app .el-menu--horizontal>.el-menu-item:hover {
  border-bottom: 0 none;
  background-color: #528e01;
}
#app .el-menu--horizontal .el-menu-item {
  border-bottom: 0 none;
}
#app .el-scrollbar__view.el-select-dropdown__list .el-select-dropdown__item {
  display: block !important;
}
/* 底部 */
.footer {
  height: 200px;
  line-height: 200px;
  /*margin-top: 50px;*/
  text-align: center;
  background: url(../static/img/footer.jpg) center;
  /*background-position:center;*/
  background-size:cover;
}
.footer p {
  font-size: 13px;
  color: #ccc;
}

/*弹出层*/
.dialog-footer {
  display: flex;
}
.dialog-footer button {
  margin: -30px 60px 0;
}
.el-dialog.el-dialog--small {
  width: 25%;
  /*top: 25%!important;*/
}
.el-dialog__header {
  text-align: center;
  font-size: 16px;
}
</style>
