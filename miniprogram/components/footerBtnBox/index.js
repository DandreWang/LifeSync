// miniprogram/components/footerBtn/index.js
Component({
    options: {
        multipleSlots: true,
    },
    /**
     * 页面的初始数据
     */
    data: {
       center: true, 
       left: true, 
       right: true
    },
    properties: {
        bgc: {
            type: String,
            value: '#D1E7FE'
        },
        hideCenter: {
            type: Boolean,
            observer(val) {
                this.setData({center: !val})
            }
        },
        hideLeft: {
            type: Boolean,
            observer(val) {
                this.setData({left: !val})
            }
        },
        hideRight: {
            type: Boolean,
            observer(val) {
                console.log(val)
                this.setData({right: !val})
            }
        },
        isFixed: Boolean
    },
    lifetimes: {
        ready(e) {
            console.log(this)
        }
    },
    observers: {
        
    },
    methods: {}
});