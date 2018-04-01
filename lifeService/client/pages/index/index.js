//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 4000,
    duration: 500,
    //[ 当前显示的Imageurl ]
    currentImageUrl: 0,

    //[ 功能按钮 ]
    funcIcons: [
      { image: '../../images/infor.png', url: './index', text: '美容' },
      { image: '../../images/infor_selected.png', url: './index', text: '玩乐' },
      { image: '../../images/infor.png', url: './index', text: '美食' },
      { image: '../../images/infor.png', url: './index', text: '政策' },
      { image: '../../images/infor.png', url: './index', text: '母婴' },
      { image: '../../images/infor.png', url: './index', text: '健康' },
      { image: '../../images/chat.png', url: '../chat/chat', text: '聊天' },
    ]
  },

  //[ Swipe改变事件 ]
  bindchange: function (e) {
    this.setData({
      currentImageUrl: e.detail.current
    })
  },

  //[ Image点击事件 ]
  onSwipClick: function (e) {
    //console.log(this.data.imgUrls[this.data.currentImageUrl])
    util.showSuccess('tap image ' + (this.data.currentImageUrl + 1));
  }
})
