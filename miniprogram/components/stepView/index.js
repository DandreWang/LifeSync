Component({
    options: {
        virtualHost: true
    },
    /**
     * 页面的初始数据
     */
    data: {
        step: 0,
        formData: {
            nick: '',
            key: 0,
            role: 0
        },
        width: 0,
        btnTxt: '',
        _form: [{
                title: '你的昵称是什么呢',
                key: 'nick',
            },
            {
                title: '你的性别是',
                holder: '选择性别',
                key: 'six',
                range: [
                    {name: '女生', id: 1},
                    {name: '男生', id: 2},
                ]
            },
            {
                title: '你的身份是',
                holder: '选择身份',
                key: 'role',
                range: [
                    {name: '学生党', id: 1},
                    {name: '打工人', id: 2},
                ]
            }
        ]
    },
    lifetimes: {
        attached() {
            this.setData({
                step: 1
            })
        }
    },
    properties: {},
    observers: {
        step(val) {
            const last = val > 2
            console.log(this.data._form)
            const options = this.data._form[val - 1]
            this.setData({
                width: last ? 100 : 33.33 * val,
                btnTxt: last ? '完成' : '下一步',
                ...options
            })
        }
    },
    methods: {
        handleNext(e) {
            const { step } = this.data
            this.setData({step: step + 1})
        },
        handlePrev() {
            const { step } = this.data
            this.setData({step: step - 1})
        },
        handleSelect(e) {
            console.log(e)
            const { value } = e.detail
            console.log(value)
            this.handleNext()
        }
    }

});