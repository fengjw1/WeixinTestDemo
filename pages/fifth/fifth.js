// pages/fifth/fifth.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		sliderList:[
			{selected:true, imageSource:'/images/cat1.png'},
			{selected:false, imageSource:'/images/cat2.png'},
			{selected:false, imageSource:'/images/cat3.png'}]
	},
switchTab:function(e){
	var sliederList = this.data.sliderList,
		 i, item;
	for(i = 0; item = sliederList[i]; ++i){
		item.selected = e.detail.current == i;
	}
	this.setData({
		sliderList : sliederList
	});
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

	}
})