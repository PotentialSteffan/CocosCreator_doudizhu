"use strict";
cc._RF.push(module, 'e8cf95t4QZBSaCin9HsUxaS', 'mygolbal');
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