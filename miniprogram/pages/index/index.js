//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: "暂无结果",
    bar_code: '',
    name:'',
    pro_date:'',
    keep_days:'',
    keep_months:'',
    producer_name:'',
    producer_location:'',
    p_specification:'',
    update_res:'还未上传信息',
  },
  //事件处理函数
  search: function () {
    wx.request({
      url: 'https://www.foodtracing.xyz/wei_search',
      data: {
        bar_code: this.data.bar_code
      },
      success: res => {
        if (res.statusCode == 200) {
          this.setData({
            result: res.data
          })
          console.log(res.data);
        }
      }
    })
  },
  input_barcode: function (e) {
    this.setData({
      bar_code: e.detail.value
    })
  },
  inp_name: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  inp_barcode: function (e) {
    this.setData({
      bar_code: e.detail.value
    })
  },
  inp_prodate: function (e) {
    this.setData({
      pro_date: e.detail.value
    })
  },
  inp_keepdays: function (e) {
    this.setData({
      keep_days: e.detail.value
    })
  },
  inp_keepmonths: function (e) {
    this.setData({
      keep_months: e.detail.value
    })
  },
  inp_producername: function (e) {
    this.setData({
      producer_name: e.detail.value
    })
  },
  inp_producerlocation: function (e) {
    this.setData({
      producer_location: e.detail.value
    })
  },
  inp_pspecification: function (e) {
    this.setData({
      p_specification: e.detail.value
    })
  },

  update_info:function(){
    console.log(this.data.name);
    wx.request({
      url: 'https://www.foodtracing.xyz/wei_insert',
      data: {
        name:this.data.name,
        bar_code: this.data.bar_code,
        pro_date:this.data.pro_date,
        keep_days:this.data.keep_days,
        keep_months:this.data.keep_months,
        producer_name:this.data.producer_name,
        producer_location:this.data.producer_location,
        p_specification:this.data.p_specification,
      },
      success: res => {
        if (res.statusCode == 200) {
          this.setData({
            update_res: res.data
          })
          console.log(res.data);
        }
      }
    })
  }
})
