const mongoose = require('mongoose');
// 报错DeprecationWarning: Mongoose: mpromise (mongoose's default promise library) is deprecated
// 解决：
mongoose.Promise = global.Promise;
// 连接数据库
mongoose.connect('mongodb://localhost/szhData');

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('error',() => console.log('Mongo connection error'));
db.once('open',() => console.log('Mongo connection successed'));

/************** 定义用户账户信息 模式userInfoSchema **************/
const userInfoSchema = mongoose.Schema({
  nickname: String,
  password: Number,
  phone: String
});

/************** 定义列表数据 模式listDataSchema **************/
const listDataSchema = mongoose.Schema({
  index: Object,
  newHouse: Object,
  oldHouse: Object,
  newsHomes: Object
}, { collection: "listData" });

/************** 定义深圳楼盘资讯数据 模式listDataSchema **************/
const szNewsHomeDataSchema = mongoose.Schema({
    data: Array
}, { collection: "szNewsHome" })

/************** 定义中山楼盘资讯数据 模式listDataSchema **************/
const zsNewsHomeDataSchema = mongoose.Schema({
    data: Array
}, { collection: "zsNewsHome" })

/************** 定义惠州楼盘资讯数据 模式listDataSchema **************/
const hzNewsHomeDataSchema = mongoose.Schema({
    data: Array
}, { collection: "hzNewsHome" })

/************** 定义新房详情数据 模式listDataSchema **************/
const newHouseDetailDataSchema = mongoose.Schema({
    newHouseDetail: Object
}, { collection: "newHouseDetail" })

/************** 定义二手房详情数据 模式listDataSchema **************/
const oldHouseDetailDataSchema = mongoose.Schema({
    oldHouseDetail: Object
}, { collection: "oldHouseDetail" })


/************** 定义模型Model **************/
const Models = {
  UserInfo: mongoose.model('UserInfo', userInfoSchema, 'userInfo'),
  ListData: mongoose.model('ListData', listDataSchema, 'listData'),
  SzNewsHomeData: mongoose.model('SzNewsHomeData', szNewsHomeDataSchema, 'szNewsHome'),
  ZsNewsHomeData: mongoose.model('ZsNewsHomeData', zsNewsHomeDataSchema, 'zsNewsHome'),
  HzNewsHomeData: mongoose.model('HzNewsHomeData', hzNewsHomeDataSchema, 'hzNewsHome'),
  newHouseDetailData: mongoose.model('newHouseDetailData', newHouseDetailDataSchema, 'newHouseDetail'),
  oldHouseDetailData: mongoose.model('oldHouseDetailData', oldHouseDetailDataSchema, 'oldHouseDetail')
}

module.exports = Models;
