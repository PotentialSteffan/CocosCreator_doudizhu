"use strict";
cc._RF.push(module, '527dcmCZCZE0rohKQXfLKJV', 'loginScene');
// scripts/loginscene/loginScene.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mygolbal_1 = require("../mygolbal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var loginScene = /** @class */ (function (_super) {
    __extends(loginScene, _super);
    function loginScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wait_node = null;
        // LIFE-CYCLE CALLBACKS:
        _this.isopen_sound = false;
        return _this;
        // update (dt) {},
    }
    loginScene.prototype.onLoad = function () {
        //console.log("qian_state.qian:"+ qian_state.qian)
        if (this.isopen_sound) {
            // cc.audioEngine.play(cc.url.raw("resources/sound/login_bg.ogg"),true,1) 
        }
        mygolbal_1.default.socket.initSocket();
    };
    loginScene.prototype.start = function () {
    };
    loginScene.prototype.onButtonCilck = function (event, customData) {
        switch (customData) {
            case "wx_login":
                // console.log("wx_login request")
                console.log(customData + "request");
                //this.wait_node.active = true
                mygolbal_1.default.socket.request_wxLogin({
                    uniqueID: mygolbal_1.default.playerData.uniqueID,
                    accountID: mygolbal_1.default.playerData.accountID,
                    nickName: mygolbal_1.default.playerData.nickName,
                    avatarUrl: mygolbal_1.default.playerData.avatarUrl,
                }, function (err, result) {
                    //请求返回
                    //先隐藏等待UI
                    //this.wait_node.active = false
                    if (err != 0) {
                        console.log("err:" + err);
                        return;
                    }
                    console.log("login sucess" + JSON.stringify(result));
                    mygolbal_1.default.playerData.gobal_count = result.goldcount;
                    cc.director.loadScene("hallScene");
                }.bind(this));
                break;
            case 'guest_login':
                mygolbal_1.default.socket.request_guestLogin({
                    uniqueID: mygolbal_1.default.playerData.uniqueID,
                    accountID: mygolbal_1.default.playerData.accountID,
                    nickName: mygolbal_1.default.playerData.nickName,
                    avatarUrl: mygolbal_1.default.playerData.avatarUrl,
                }, function (err, result) {
                    //请求返回
                    //先隐藏等待UI
                    //this.wait_node.active = false
                    if (err != 0) {
                        console.log("err:" + err);
                        return;
                    }
                    console.log("login sucess" + JSON.stringify(result));
                    mygolbal_1.default.playerData.gobal_count = result.goldcount;
                    cc.director.loadScene("hallScene");
                }.bind(this));
                break;
            default:
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], loginScene.prototype, "wait_node", void 0);
    loginScene = __decorate([
        ccclass
    ], loginScene);
    return loginScene;
}(cc.Component));
exports.loginScene = loginScene;

cc._RF.pop();