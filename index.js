const  UrlName=""; //配置地址
const  header={    //配置请求头
  'Accept': 'application/json',
  'content-type': 'application/json',
  'Authorization': null,
}
function get(url,data,call){
	wx.hideLoading({
		title:'加载中',
	})
	wx.request({
		url:UrlName+url;
		method:'get',
		header:header,
		success:function(res=>{
		       wx.hideLoading();
		},
		fail: function () {
                       wx.hideLoading();
                       wx.showModal({
                             title: '网络错误',
                             content: '网络出错，请刷新重试',
                             showCancel: false
                       })
                })
	})
}


module.exports={
	get:get
}
