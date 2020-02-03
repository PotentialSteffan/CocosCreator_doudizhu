(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/util/event_lister.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '962995stOhKyrdclz+tbBDD', 'event_lister', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=event_lister.js.map
        