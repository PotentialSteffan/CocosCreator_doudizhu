(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/hallscene/hallScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9eee7bdCqVB/LXv3XqKAza9', 'hallScene', __filename);
// scripts/hallscene/hallScene.js

"use strict";

var _mygolbal = require("./../mygolbal.js");

var _mygolbal2 = _interopRequireDefault(_mygolbal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        nickname_label: cc.Label,
        headimage: cc.Sprite,
        gobal_count: cc.Label,
        creatroom_prefabs: cc.Prefab,
        joinroom_prefabs: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.nickname_label = _mygolbal2.default.playerData.nickName;
        this.gobal_count.string = ":" + _mygolbal2.default.playerData.gobal_count;
    },
    start: function start() {},


    // update (dt) {},

    onButtonClick: function onButtonClick(event, customData) {
        switch (customData) {
            case "create_room":
                var creator_Room = cc.instantiate(this.creatroom_prefabs);
                creator_Room.parent = this.node;
                creator_Room.zIndex = 100;
                break;
            case "join_room":
                var join_Room = cc.instantiate(this.joinroom_prefabs);
                join_Room.parent = this.node;
                join_Room.zIndex = 100;
                break;
            default:
                break;
        }
    }
});

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
        //# sourceMappingURL=hallScene.js.map
        