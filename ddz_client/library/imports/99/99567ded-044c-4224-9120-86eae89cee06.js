"use strict";
cc._RF.push(module, '995673tBExCJJEghuronO4G', 'creatRoom');
// scripts/hallscene/prefabs_script/creatRoom.ts

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
var ccclass = cc._decorator.ccclass;
var createRoom = /** @class */ (function (_super) {
    __extends(createRoom, _super);
    function createRoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {},
    createRoom.prototype.start = function () {
    };
    createRoom.prototype._createroom = function (rate) {
        if (rate < 0 || rate > 4) {
            console.log("create room rate error" + rate);
            return;
        }
        var global = 0;
        if (rate == 1) {
            global = 10;
        }
        else if (rate == 2) {
            global = 20;
        }
        else if (rate == 3) {
            global = 30;
        }
        else if (rate == 4) {
            global = 40;
        }
        var room_para = {
            global: global,
            rate: rate
        };
        //播放一个等待动画
        mygolbal_1.default.socket.request_creatroom(room_para, function (err, result) {
            if (err != 0) {
                console.log("create_room err:" + err);
            }
            else {
                console.log("create_room" + JSON.stringify(result));
                //网络数据包
                mygolbal_1.default.playerData.bottom = result.bottom;
                mygolbal_1.default.playerData.rate = result.rate;
                cc.director.loadScene("gameScene");
            }
        });
    };
    // update (dt) {},
    createRoom.prototype.onButtonClick = function (event, customData) {
        switch (customData) {
            case "create_room_1":
                this._createroom(1);
                break;
            case "create_room_2":
                this._createroom(2);
                break;
            case "create_room_3":
                this._createroom(3);
                break;
            case "create_room_4":
                this._createroom(4);
                break;
            case "create_room_close":
                this.node.destroy();
                break;
            default:
                break;
        }
        this.node.destroy();
    };
    createRoom = __decorate([
        ccclass
    ], createRoom);
    return createRoom;
}(cc.Component));
exports.default = createRoom;

cc._RF.pop();