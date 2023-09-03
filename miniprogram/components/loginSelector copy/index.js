Component({
    options: {},
    /**
     * 页面的初始数据
     */
    data: {
        show: false,
        text: '',
        value: undefined,
        height: 0
    },
    properties: {
        placeholder: String,
        options: Array
    },
    observers: {
        'placeholder,value'(holder, value) {
            console.log(holder)
            const {
                options
            } = this.data
            console.log(options)
            if (value === undefined) {
                return this.setData({
                    text: holder
                })
            }
            const opt = options.find(i => i.id === value)
            this.setData({
                text: typeof opt === 'object' ? opt.name : value
            })
        },
        options(val) {
            this.setData({
                height: val.length * 100
            })
        }
    },
    methods: {
        handleToggleShow() {
            this.setData({
                show: !this.data.show
            })
        },
        handleChange(e) {
            const {
                id
            } = e.currentTarget.dataset
            const {value, options} = this.data
            if (id === value) {
                return
            }
            console.log(options)
            console.log(id)
            this.setData({
                value: id,
                show: false
            })
            // 通知
            this.triggerEvent('change', {
                value: id,
                option: options.find(i => i.id === id)
            })
        }
    }
});