(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/util/waitnode.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b5c923J4IdGPoTPGsa9A39F', 'waitnode', __filename);
// scripts/util/waitnode.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WaitNode = /** @class */ (function (_super) {
    __extends(WaitNode, _super);
    function WaitNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadimage_target = null;
        _this._isShow = null;
        _this.lblContent = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {},
    WaitNode.prototype.start = function () {
        this.node.active = this._isShow;
    };
    WaitNode.prototype.update = function (dt) {
        this.loadimage_target.rotation = this.loadimage_target.rotation - dt * 45;
    };
    //content为label显示的内容
    WaitNode.prototype.show = function (content) {
        this._isShow = true;
        if (this.node) {
            this.node.active = this._isShow;
        }
        if (this.lblContent) {
            if (content == null) {
                content = "";
            }
            this.lblContent.string = content;
        }
    };
    WaitNode.prototype.hide = function () {
        this._isShow = false;
        if (this.node) {
            this.node.active = this._isShow;
        }
    };
    __decorate([
        property(cc.Node)
    ], WaitNode.prototype, "loadimage_target", void 0);
    __decorate([
        property
    ], WaitNode.prototype, "_isShow", void 0);
    __decorate([
        property(cc.Label)
    ], WaitNode.prototype, "lblContent", void 0);
    WaitNode = __decorate([
        ccclass
    ], WaitNode);
    return WaitNode;
}(cc.Component));
exports.default = WaitNode;

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
        //# sourceMappingURL=waitnode.js.map
        