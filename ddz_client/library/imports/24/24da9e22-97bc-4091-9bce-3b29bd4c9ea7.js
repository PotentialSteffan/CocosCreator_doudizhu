"use strict";
cc._RF.push(module, '24da94il7xAkZvOOym9TJ6n', 'hallScene');
// scripts/hallscene/hallScene.ts

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
var mygolbal_1 = require("./../mygolbal");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var hallScene = /** @class */ (function (_super) {
    __extends(hallScene, _super);
    function hallScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nickname_label = null;
        _this.headimage = null;
        _this.gobal_count = null;
        _this.creatroom_prefabs = null;
        _this.joinroom_prefabs = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    hallScene.prototype.onLoad = function () {
        this.nickname_label.string = mygolbal_1.default.playerData.nickName;
        this.gobal_count.string = ":" + mygolbal_1.default.playerData.gobal_count;
    };
    hallScene.prototype.start = function () {
    };
    // update (dt) {},
    hallScene.prototype.onButtonClick = function (event, customData) {
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
    };
    __decorate([
        property(cc.Label)
    ], hallScene.prototype, "nickname_label", void 0);
    __decorate([
        property(cc.Sprite)
    ], hallScene.prototype, "headimage", void 0);
    __decorate([
        property(cc.Label)
    ], hallScene.prototype, "gobal_count", void 0);
    __decorate([
        property(cc.Prefab)
    ], hallScene.prototype, "creatroom_prefabs", void 0);
    __decorate([
        property(cc.Prefab)
    ], hallScene.prototype, "joinroom_prefabs", void 0);
    hallScene = __decorate([
        ccclass
    ], hallScene);
    return hallScene;
}(cc.Component));
exports.hallScene = hallScene;

cc._RF.pop();