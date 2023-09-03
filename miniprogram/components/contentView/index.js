// miniprogram/components/progressBar/index.js
const { isMac } = require('../../envList.js');

Component({

  /**
   * 页面的初始数据
   */
  data: {
    val: 20
  },
  properties: {
    value: Number
  },
  observers: {
    valueProps: function(value) {
      console.log(value)
      this.setData({
        val: value
      });
    }
  },
  methods: {
    

  }

});
