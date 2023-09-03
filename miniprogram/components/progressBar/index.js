// miniprogram/components/progressBar/index.js
Component({
  /**
   * 页面的初始数据
   */
  data: {
    val: '20%',
    txt: ''
  },
  properties: {
    value: {
      type: Number,
      value: 0,
    },
    text: {
      type: String,
      value: '',
    }
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  observers: {
    'text, value'(txt, val) {
      console.log(txt)
      console.log(val)
      this.setData({
          txt: txt || `${val || '?'}%`,
          val: `${val}%`
        })
    },
  },
  methods: {
    

  }

});
