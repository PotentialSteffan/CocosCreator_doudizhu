(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/gameScene/gamebeforeUI.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3a350E5cTJKqaT17MY3iJAD', 'gamebeforeUI', __filename);
// scripts/gameScene/gamebeforeUI.ts

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
var gamebeforeUI = /** @class */ (function (_super) {
    __extends(gamebeforeUI, _super);
    function gamebeforeUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_ready = null;
        _this.btn_gamestart = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    gamebeforeUI.prototype.onLoad = function () {
        this.btn_gamestart.active = false;
        this.btn_ready.active = false;
        //监听本地的发送的消息
        this.node.on("init", function () {
            console.log("game beforeui init");
            console.log("myglobal.playerData.housemanageid" + mygolbal_1.default.playerData.housemanageid);
            console.log("myglobal.playerData.accountID" + mygolbal_1.default.playerData.accountID);
            if (mygolbal_1.default.playerData.housemanageid == mygolbal_1.default.playerData.accountID) {
                //自己就是房主
                this.btn_gamestart.active = true;
                this.btn_ready.active = false;
            }
            else {
                this.btn_gamestart.active = false;
                this.btn_ready.active = true;
            }
        }.bind(this));
        //监听服务器发送来的消息
        // myglobal.socket.onGameStart(function(){
        //     console.log("gamebrforeUI onGameStart revice")
        //     this.node.active = false
        // }.bind(this))
        mygolbal_1.default.socket.onChangeHouseManage(function (data) {
            console.log("gamebrforeUI onChangeHouseManage revice" + JSON.stringify(data));
            mygolbal_1.default.playerData.housemanageid = data;
            if (mygolbal_1.default.playerData.housemanageid == mygolbal_1.default.playerData.accountID) {
                //自己就是房主
                this.btn_gamestart.active = true;
                this.btn_ready.active = false;
            }
            else {
                this.btn_gamestart.active = false;
                this.btn_ready.active = true;
            }
        }.bind(this));
    };
    gamebeforeUI.prototype.start = function () {
    };
    // update (dt) {},
    gamebeforeUI.prototype.onButtonClick = function (event, customData) {
        switch (customData) {
            case "btn_ready":
                console.log("btn_ready");
                mygolbal_1.default.socket.requestReady();
                break;
            case "btn_start":
                // if(isopen_sound){
                //    cc.audioEngine.play(cc.url.raw("resources/sound/start_a.ogg")) 
                //  }
                console.log("btn_start");
                mygolbal_1.default.socket.requestStart(function (err, data) {
                    if (err != 0) {
                        console.log("requestStart err" + err);
                    }
                    else {
                        console.log("requestStart data" + JSON.stringify(data));
                    }
                });
                break;
            default:
                break;
        }
    };
    __decorate([
        property(cc.Node)
    ], gamebeforeUI.prototype, "btn_ready", void 0);
    __decorate([
        property(cc.Node)
    ], gamebeforeUI.prototype, "btn_gamestart", void 0);
    gamebeforeUI = __decorate([
        ccclass
    ], gamebeforeUI);
    return gamebeforeUI;
}(cc.Component));
exports.gamebeforeUI = gamebeforeUI;

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
        //# sourceMappingURL=gamebeforeUI.js.map
        