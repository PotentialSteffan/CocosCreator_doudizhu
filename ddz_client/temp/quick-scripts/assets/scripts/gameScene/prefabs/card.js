(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/gameScene/prefabs/card.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6e0c7mJiE1M0p0VlUt+a+DV', 'card', __filename);
// scripts/gameScene/prefabs/card.ts

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
var defines_1 = require("../../defines");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var cards = /** @class */ (function (_super) {
    __extends(cards, _super);
    function cards() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cards_sprite_atlas = null;
        return _this;
    }
    cards.prototype.onLoad = function () {
        this.flag = false;
        this.offset_y = 20;
        this.node.on("reset_card_flag", function (event) {
            if (this.flag == true) {
                this.flag = false;
                this.node.y -= this.offset_y;
            }
        }.bind(this));
        // this.node.on("chu_card_succ",function(event){
        //    var chu_card_list = event
        //    for(var i=0;i<chu_card_list.length;i++){
        //     if(chu_card_list[i].card_id==this.card_id){
        //         //this.runToCenter(chu_card_list[i])
        //         //this.node.destory()
        //     }
        //    }
        // }.bind(this))
    };
    cards.prototype.runToCenter = function () {
        //移动到屏幕中间，并带一个牌缩小的效果
    };
    cards.prototype.start = function () {
    };
    cards.prototype.init_data = function (data) {
    };
    // update (dt) {},
    cards.prototype.setTouchEvent = function () {
        if (this.accountid == mygolbal_1.default.playerData.accountID) {
            this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
                var gameScene_node = this.node.parent;
                var room_state = gameScene_node.getComponent("gameScene").roomstate;
                if (room_state == defines_1.RoomState.ROOM_PLAYING) {
                    console.log("TOUCH_START id:" + this.card_id);
                    if (this.flag == false) {
                        this.flag = true;
                        this.node.y += this.offset_y;
                        //通知gameui层选定的牌
                        var carddata = {
                            "cardid": this.card_id,
                            "card_data": this.card_data,
                        };
                        gameScene_node.emit("choose_card_event", carddata);
                    }
                    else {
                        this.flag = false;
                        this.node.y -= this.offset_y;
                        //通知gameUI取消了那张牌
                        gameScene_node.emit("unchoose_card_event", this.card_id);
                    }
                }
            }.bind(this));
        }
    };
    cards.prototype.showCards = function (card, accountid) {
        //card.index是服务器生成card给对象设置的一副牌里唯一id
        this.card_id = card.index;
        //传入参数 card={"value":5,"shape":1,"index":20}
        this.card_data = card;
        if (accountid) {
            this.accountid = accountid; //标识card属于的玩家
        }
        //this.node.getComponent(cc.Sprite).spriteFrame = 
        //服务器定义牌的表示
        // const cardvalue = {
        //     "A": 12,
        //     "2": 13,
        //     "3": 1,
        //     "4": 2,
        //     "5": 3,
        //     "6": 4,
        //     "7": 5,
        //     "8": 6,
        //     "9": 7,
        //     "10": 8,
        //     "J": 9,
        //     "Q": 10,
        //     "K": 11,
        // }
        //服务器返回的是key,value对应的是资源的编号
        var CardValue = {
            "12": 1,
            "13": 2,
            "1": 3,
            "2": 4,
            "3": 5,
            "4": 6,
            "5": 7,
            "6": 8,
            "7": 9,
            "8": 10,
            "9": 11,
            "10": 12,
            "11": 13
        };
        // 黑桃：spade
        // 红桃：heart
        // 梅花：club
        // 方片：diamond
        // const CardShape = {
        //     "S": 1,
        //     "H": 2,
        //     "C": 3,
        //     "D": 4,
        // };
        var cardShpae = {
            "1": 3,
            "2": 2,
            "3": 1,
            "4": 0
        };
        var Kings = {
            "14": 54,
            "15": 53
        };
        var spriteKey = '';
        if (card.shape) {
            spriteKey = 'card_' + (cardShpae[card.shape] * 13 + CardValue[card.value]);
        }
        else {
            spriteKey = 'card_' + Kings[card.king];
        }
        // console.log("spriteKey"+spriteKey)
        this.node.getComponent(cc.Sprite).spriteFrame = this.cards_sprite_atlas.getSpriteFrame(spriteKey);
        this.setTouchEvent();
    };
    __decorate([
        property(cc.SpriteAtlas)
    ], cards.prototype, "cards_sprite_atlas", void 0);
    cards = __decorate([
        ccclass
    ], cards);
    return cards;
}(cc.Component));
exports.cards = cards;

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
        //# sourceMappingURL=card.js.map
        