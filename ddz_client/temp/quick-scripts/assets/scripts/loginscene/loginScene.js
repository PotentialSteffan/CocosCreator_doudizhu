(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/loginscene/loginScene.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b05a68gSOpBWr8ddvT03Jpj', 'loginScene', __filename);
// scripts/loginscene/loginScene.js

"use strict";

var _mygolbal = require("../mygolbal.js");

var _mygolbal2 = _interopRequireDefault(_mygolbal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

cc.Class({
    extends: cc.Component,

    properties: {
        wait_node: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //console.log("qian_state.qian:"+ qian_state.qian)
        if (isopen_sound) {
            cc.audioEngine.play(cc.url.raw("resources/sound/login_bg.ogg"), true);
        }

        _mygolbal2.default.socket.initSocket();
    },
    start: function start() {},
    onButtonCilck: function onButtonCilck(event, customData) {
        switch (customData) {
            case "wx_login":
                // console.log("wx_login request")
                console.log(customData + "request");

                //this.wait_node.active = true

                _mygolbal2.default.socket.request_wxLogin({
                    uniqueID: _mygolbal2.default.playerData.uniqueID,
                    accountID: _mygolbal2.default.playerData.accountID,
                    nickName: _mygolbal2.default.playerData.nickName,
                    avatarUrl: _mygolbal2.default.playerData.avatarUrl
                }, function (err, result) {
                    //请求返回
                    //先隐藏等待UI
                    //this.wait_node.active = false
                    if (err != 0) {
                        console.log("err:" + err);
                        return;
                    }

                    console.log("login sucess" + JSON.stringify(result));
                    _mygolbal2.default.playerData.gobal_count = result.goldcount;
                    cc.director.loadScene("hallScene");
                }.bind(this));
                break;
            case 'guest_login':
                _mygolbal2.default.socket.request_guestLogin({
                    uniqueID: _mygolbal2.default.playerData.uniqueID,
                    accountID: _mygolbal2.default.playerData.accountID,
                    nickName: _mygolbal2.default.playerData.nickName,
                    avatarUrl: _mygolbal2.default.playerData.avatarUrl
                }, function (err, result) {
                    //请求返回
                    //先隐藏等待UI
                    //this.wait_node.active = false
                    if (err != 0) {
                        console.log("err:" + err);
                        return;
                    }

                    console.log("login sucess" + JSON.stringify(result));
                    _mygolbal2.default.playerData.gobal_count = result.goldcount;
                    cc.director.loadScene("hallScene");
                }.bind(this));

                break;
            default:

                break;
        }
    }
    // update (dt) {},


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
        //# sourceMappingURL=loginScene.js.map
        