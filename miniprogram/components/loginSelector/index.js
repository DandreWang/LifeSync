Component({
    lifetimes: {
        ready() {
            const {
                value
            } = this.properties;
            this.updateValue(value == null ? '' : value);
        }
    },
    /**
     * 页面的初始数据
     */
    data: {
        val: undefined,
    },
    properties: {
        options: Array,
        value: {
            type: String,
            optionalTypes: [String, Number]
        }
    },
    observers: {

    },
    methods: {
        updateValue(value) {
            const {
                options
            } = this.properties;
            this.setData({
                val: value
            })
        },
        handleChange(e) {
            const {
                id
            } = e.currentTarget.dataset
            const {
                val,
                options
            } = this.data
            if (id === val) {
                return
            }
            console.log(options)
            console.log(id)
            // 更新
            this.updateValue(id);
            // 通知
            this.triggerEvent('change', {
                val: id,
                option: options.find(i => i.id === id)
            })
        }
    }
});