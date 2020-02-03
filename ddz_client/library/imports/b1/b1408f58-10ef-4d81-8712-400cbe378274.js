"use strict";
cc._RF.push(module, 'b14089YEO9NgYcSQAy+N4J0', 'joinRoom');
// scripts/hallscene/prefabs_script/joinRoom.ts

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
var mygolbal_1 = require("../../mygolbal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var joinRoom = /** @class */ (function (_super) {
    __extends(joinRoom, _super);
    function joinRoom() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.joinids = [];
        return _this;
    }
    joinRoom.prototype.onLoad = function () {
        this.joinid = "";
        this.cur_input_count = -1;
    };
    joinRoom.prototype.start = function () {
    };
    //  update (dt) {
    //  },
    joinRoom.prototype.onButtonClick = function (event, customData) {
        if (customData.length === 1) {
            this.joinid += customData;
            this.cur_input_count += 1;
            this.joinids[this.cur_input_count].string = customData;
            //console.log("joinid.length:"+this.joinid.length)
            if (this.joinid.length >= 6) {
                //判断加入房间逻辑
                var room_para = {
                    roomid: this.joinid,
                };
                mygolbal_1.default.socket.request_jion(room_para, function (err, result) {
                    if (err) {
                        console.log("err" + err);
                    }
                    else {
                        console.log("join room sucess" + JSON.stringify(result));
                        mygolbal_1.default.playerData.bottom = result.bottom;
                        mygolbal_1.default.playerData.rate = result.rate;
                        cc.director.loadScene("gameScene");
                    }
                });
                return;
            }
            console.log("customData:" + customData);
        }
        switch (customData) {
            case "back":
                if (this.cur_input_count < 0) {
                    return;
                }
                this.joinids[this.cur_input_count].string = "";
                this.cur_input_count -= 1;
                this.joinid = this.joinid.substring(0, this.joinid.length - 1);
                break;
            case "clear":
                for (var i = 0; i < 6; ++i) {
                    this.joinids[i].string = "";
                }
                this.joinid = "";
                this.cur_input_count = -1;
                break;
            case "close":
                this.node.destroy();
                break;
            default:
                break;
        }
    };
    __decorate([
        property(cc.Label)
    ], joinRoom.prototype, "joinids", void 0);
    joinRoom = __decorate([
        ccclass
    ], joinRoom);
    return joinRoom;
}(cc.Component));
exports.joinRoom = joinRoom;

cc._RF.pop();