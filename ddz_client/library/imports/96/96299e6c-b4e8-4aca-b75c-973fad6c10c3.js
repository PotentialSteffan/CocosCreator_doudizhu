"use strict";
cc._RF.push(module, '962995stOhKyrdclz+tbBDD', 'event_lister');
// scripts/util/event_lister.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eventLister = /** @class */ (function () {
    function eventLister() {
        this.register = {};
    }
    eventLister.prototype.on = function (type, method) {
        if (this.register.hasOwnProperty(type)) {
            this.register[type].push(method);
        }
        else {
            this.register[type] = [method];
        }
    };
    eventLister.prototype.fire = function (type, data) {
        if (this.register.hasOwnProperty(type)) {
            var methodList = this.register[type];
            for (var i = 0; i < methodList.length; ++i) {
                var handle = methodList[i];
                var args = [];
                for (var i = 1; i < arguments.length; ++i) {
                    args.push(arguments[i]);
                }
                //handle.call(this,args)
                console.log("handle.call(this,args) type:" + type);
                handle.apply(this, args);
            }
        }
    };
    eventLister.prototype.removeLister = function (type) {
        this.register[type] = [];
    };
    eventLister.prototype.removeAllLister = function () {
        this.register = {};
    };
    return eventLister;
}());
exports.default = eventLister;

cc._RF.pop();