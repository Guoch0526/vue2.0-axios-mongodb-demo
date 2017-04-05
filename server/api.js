"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

models.UserInfo.find((err,data) => {
        // if (err) {
        //     res.send(err);
        // } else {
        //     //if(data)
        //     res.send(data);
        // }
        // console.log(data)
    });

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 注册账号接口
router.post('/api/register/createAccount',(req,res) => {
    let newAccount = new models.UserInfo({
        nickname : req.body.nickname,
        password : req.body.password,
        phone: req.body.phone
    });
    let tempInfo = {
      nickname : req.body.nickname,
      password : req.body.phone
    }
    // 通过模型去查找数据库
    models.UserInfo.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            //if(data)
            for(let item of data) {
              if(item['nickname'] == tempInfo.nickname || item['phone'] == tempInfo.phone) {
                res.send({errcode:1})
                return;
              }
            }
            // 保存数据newAccount数据进mongoDB
            newAccount.save((err,data) => {
                if (err) {
                    res.send(err);
                } else {
                    res.send({errcode:0});
                }
            });
        }
    });
    
});

// 获取已有账号接口
router.post('/api/login/getAccount',(req,res) => {
    let tempInfo = {
      nickname : req.body.nickname,
      password : req.body.password
    }
    // 通过模型去查找数据库
    models.UserInfo.find((err,data) => {
        if (err) {
            res.send(err);
        } else {
            //if(data)
            for(let item of data) {
              if(item['nickname'] == tempInfo.nickname && item['password'] == tempInfo.password) {
                res.send({errcode:0})
                return;
              }
            }
            res.send({errcode:1});
        }
    });
});

// 获取列表数据接口
router.get('/api/getListData', (req, res) => {
  models.ListData.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

// 获取深圳楼盘资讯数据接口
router.get('/api/getSzNewsHomeData', (req, res) => {
  models.SzNewsHomeData.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

// 获取中山楼盘资讯数据接口
router.get('/api/getZsNewsHomeData', (req, res) => {
  models.ZsNewsHomeData.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

// 获取惠州楼盘资讯数据接口
router.get('/api/getHzNewsHomeData', (req, res) => {
  models.HzNewsHomeData.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

// 获取新房详情数据接口
router.get('/api/getNewHouseDetail', (req, res) => {
  models.newHouseDetailData.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

// 获取二手房详情数据接口
router.get('/api/getOldHouseDetail', (req, res) => {
  models.oldHouseDetailData.find((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

module.exports = router;
