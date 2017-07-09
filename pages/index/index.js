//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '这是一个欢迎界面，欢迎来到小程序',
    userInfo: {},
    imgUrls: [
      'http://img1.imgtn.bdimg.com/it/u=1089399937,1684001946&fm=26&gp=0.jpg',
      'http://img4.imgtn.bdimg.com/it/u=787324823,4149955059&fm=26&gp=0.jpg',
      'http://img1.imgtn.bdimg.com/it/u=2227804654,860253351&fm=26&gp=0.jpg',
      'http://img3.imgtn.bdimg.com/it/u=3633691784,3186862163&fm=26&gp=0.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  //事件处理函数
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
