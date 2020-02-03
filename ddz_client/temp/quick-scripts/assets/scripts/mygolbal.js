(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/mygolbal.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e8cf95t4QZBSaCin9HsUxaS', 'mygolbal', __filename);
// scripts/mygolbal.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socket_ctr_1 = require("./data/socket_ctr");
var player_1 = require("./data/player");
var event_lister_1 = require("./util/event_lister");
var myglobal = /** @class */ (function () {
    function myglobal() {
        this.eventlister = new event_lister_1.default();
    }
    myglobal.getInstance = function () {
        if (!myglobal.mInstance) {
            myglobal.mInstance = new myglobal();
        }
        return myglobal.mInstance;
    };
    myglobal.socket = new socket_ctr_1.default();
    myglobal.playerData = new player_1.default();
    return myglobal;
}());
exports.default = myglobal;

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
        //# sourceMappingURL=mygolbal.js.map
        