var mixin = {
    data() {
        return {
            interval: '',
            flag_hd: false
        }
    },
    methods: {
        // 触摸开始事件
        touchStart: function (e) {
            var that = this
            that.touchDot = e.mp.changedTouches[0].pageX // 获取触摸时的原点
            console.log('touchDot' + that.touchDot)
            // 使用js计时器记录时间
            that.interval = setInterval(function () {
                that.time++
            }, 100)
            that.flag_hd = true
        },
        touchEnd: function (e) {
            var that = this
            var touchMove = e.mp.changedTouches[0].pageX
            console.log('touchMove' + touchMove)
            if (touchMove > that.touchDot && touchMove - that.touchDot >= 50 && that.time < 10 && that.flag_hd === true) {
                that.flag_hd = false
                wx.navigateBack(-1)
            }
            clearInterval(that.interval)
            that.time = 0
        }
    }
}

export default mixin
