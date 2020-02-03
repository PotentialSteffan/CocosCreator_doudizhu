export default class eventLister {
    register = {}

    on(type, method) {
        if (this.register.hasOwnProperty(type)) {
            this.register[type].push(method)
        } else {
            this.register[type] = [method]
        }
    }

    fire(type,data) {
        if (this.register.hasOwnProperty(type)) {
            var methodList = this.register[type]
            for (var i = 0; i < methodList.length; ++i) {
                var handle = methodList[i]
                var args = []
                for (var i = 1; i < arguments.length; ++i) {
                    args.push(arguments[i])
                }

                //handle.call(this,args)
                console.log("handle.call(this,args) type:" + type)
                handle.apply(this, args)
            }
        }
    }

    removeLister(type) {
        this.register[type] = []
    }

    removeAllLister() {
        this.register = {}
    }

}