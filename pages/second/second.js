// pages/second.js

var app = getApp();
var pages = getCurrentPages();
var currentPage = pages[pages.length - 1];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count : 0,
    title: "我的页面",
    id: 1,
    border: 'solid 1px #000',
    showContent: false,
    myArray:[
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ],
    name: 'myTemplate',
    myObj:{
      key1: 'value1'
    },
    myObj2:{
      key2: 'value2'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(app.globalData);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 自定义函数
   */
  countClick:function(){
    this.setData({
      count:this.data.count + 1
    });
  },

  //自定义数据
  customData:{
    name:'微信'
  },

  myevent:function(e){
    console.log(e);
  }

})