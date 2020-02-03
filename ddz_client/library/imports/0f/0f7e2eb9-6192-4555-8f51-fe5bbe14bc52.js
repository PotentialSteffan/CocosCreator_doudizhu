"use strict";
cc._RF.push(module, '0f7e265YZJFVY9R/lu+FLxS', 'player_node');
// scripts/gameScene/prefabs/player_node.ts

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
var player_node = /** @class */ (function (_super) {
    __extends(player_node, _super);
    function player_node() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.account_label = null;
        _this.nickname_label = null;
        _this.room_touxiang = null;
        _this.globalcount_label = null;
        _this.headimage = null;
        _this.readyimage = null;
        _this.offlineimage = null;
        _this.card_node = null;
        _this.card_prefab = null;
        //tips_label:cc.Label = null;
        _this.clockimage = null;
        _this.qiangdidzhu_node = null; //抢地主的父节点 = null; 
        _this.time_label = null;
        _this.robimage_sp = null;
        _this.robnoimage_sp = null;
        _this.robIconSp = null;
        _this.robIcon_Sp = null;
        _this.robnoIcon_Sp = null;
        _this.masterIcon = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    player_node.prototype.onLoad = function () {
        this.readyimage.active = false;
        this.offlineimage.active = false;
        //监听开始游戏事件(客户端发给客户端)
        this.node.on("gamestart_event", function (event) {
            this.readyimage.active = false;
        }.bind(this));
        //给其他玩家发牌事件
        this.node.on("push_card_event", function (event) {
            console.log("on push_card_event");
            //自己不再发牌
            if (this.accountid == mygolbal_1.default.playerData.accountID) {
                return;
            }
            this.pushCard();
        }.bind(this));
        this.node.on("playernode_rob_state_event", function (event) {
            //{"accountid":"2162866","state":1}
            var detail = event;
            //如果是自己在抢，需要隐藏qiangdidzhu_node节点
            //this.accountid表示这个节点挂接的accountid
            if (detail.accountid == this.accountid) {
                //console.log("detail.accountid"+detail.accountid)
                this.qiangdidzhu_node.active = false;
            }
            if (this.accountid == detail.accountid) {
                if (detail.state == defines_1.qian_state.qian) {
                    console.log("this.robIcon_Sp.active = true");
                    this.robIcon_Sp.active = true;
                }
                else if (detail.state == defines_1.qian_state.buqiang) {
                    this.robnoIcon_Sp.active = true;
                }
                else {
                    console.log("get rob value :" + detail.state);
                }
            }
        }.bind(this));
        this.node.on("playernode_changemaster_event", function (event) {
            var detail = event;
            this.robIcon_Sp.active = false;
            this.robnoIcon_Sp.active = false;
            if (detail == this.accountid) {
                this.masterIcon.active = true;
            }
        }.bind(this));
        // this.node.on("playernode_add_three_card",function(event){
        //   var detail = event //地主的accountid
        //   if(detail==this.accountid){
        //     //给地主发三张排
        //   }
        // }.bind(this))
    };
    player_node.prototype.start = function () {
    };
    //这里初始化房间内位置节点信息(自己和其他玩家)
    //data玩家节点数据
    //index玩家在房间的位置索引
    player_node.prototype.init_data = function (data, index) {
        console.log("init_data:" + JSON.stringify(data));
        //data:{"accountid":"2117836","nick_name":"tiny543","avatarUrl":"http://xxx","goldcount":1000}
        this.accountid = data.accountid;
        this.account_label.string = data.accountid;
        this.nickname_label.string = data.nick_name;
        this.globalcount_label.string = data.goldcount;
        this.cardlist_node = [];
        this.seat_index = index;
        if (data.isready == true) {
            this.readyimage.active = true;
        }
        //网络图片加载
        //     cc.loader.load({url: data.avatarUrl, type: 'jpg'},  (err, tex)=> {
        //     //cc.log('Should load a texture from RESTful API by specify the type: ' + (tex instanceof cc.Texture2D));
        //     let oldWidth = this.headImage.node.width;
        //     //console.log('old withd' + oldWidth);
        //     this.room_touxiang.spriteFrame = new cc.SpriteFrame(tex);
        //     let newWidth = this.headImage.node.width;
        //     //console.log('old withd' + newWidth);
        //     this.headImage.node.scale = oldWidth / newWidth;
        // });
        //这里根据传入的avarter来获取本地图像
        var str = data.avatarUrl;
        //console.log(str)
        var head_image_path = "UI/headimage/" + str;
        cc.loader.loadRes(head_image_path, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.log(err.message || err);
                return;
            }
            this.headimage.spriteFrame = spriteFrame;
        }.bind(this));
        //注册一个player_ready消息
        this.node.on("player_ready_notify", function (event) {
            console.log("player_ready_notify event", event);
            var detail = event;
            console.log("------player_ready_notify detail:" + detail);
            if (detail == this.accountid) {
                this.readyimage.active = true;
            }
        }.bind(this));
        //监听内部随可以抢地主消息,这个消息会发给每个playernode节点
        this.node.on("playernode_canrob_event", function (event) {
            var detail = event;
            console.log("------playernode_canrob_event detail:" + detail);
            if (detail == this.accountid) {
                this.qiangdidzhu_node.active = true;
                //this.tips_label.string ="正在抢地主" 
                console.log('this->', this);
                this.time_label.string = "10";
                //开启一个定时器
            }
        }.bind(this));
        //?
        if (index == 1) {
            this.card_node.x = -this.card_node.x - 30;
        }
    };
    // update (dt) {},
    player_node.prototype.pushCard = function () {
        this.card_node.active = true;
        for (var i = 0; i < 17; i++) {
            var card = cc.instantiate(this.card_prefab);
            card.scale = 0.6;
            console.log(" this.card_node.parent.parent" + this.card_node.parent.parent.name);
            card.parent = this.card_node;
            //card.parent = this.node
            var height = card.height;
            card.y = (17 - 1) * 0.5 * height * 0.4 * 0.3 - height * 0.4 * 0.3 * i;
            card.x = 0;
            //console.log("call pushCard x:"+card.x+" y:"+card.y)
            this.cardlist_node.push(card);
        }
    };
    __decorate([
        property(cc.Label)
    ], player_node.prototype, "account_label", void 0);
    __decorate([
        property(cc.Label)
    ], player_node.prototype, "nickname_label", void 0);
    __decorate([
        property(cc.Sprite)
    ], player_node.prototype, "room_touxiang", void 0);
    __decorate([
        property(cc.Label)
    ], player_node.prototype, "globalcount_label", void 0);
    __decorate([
        property(cc.Sprite)
    ], player_node.prototype, "headimage", void 0);
    __decorate([
        property(cc.Node)
    ], player_node.prototype, "readyimage", void 0);
    __decorate([
        property(cc.Node)
    ], player_node.prototype, "offlineimage", void 0);
    __decorate([
        property(cc.Node)
    ], player_node.prototype, "card_node", void 0);
    __decorate([
        property(cc.Prefab)
    ], player_node.prototype, "card_prefab", void 0);
    __decorate([
        property(cc.Node)
    ], player_node.prototype, "clockimage", void 0);
    __decorate([
        property(cc.Node)
    ], player_node.prototype, "qiangdidzhu_node", void 0);
    __decorate([
        property(cc.Label)
    ], player_node.prototype, "time_label", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], player_node.prototype, "robimage_sp", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], player_node.prototype, "robnoimage_sp", void 0);
    __decorate([
        property(cc.Sprite)
    ], player_node.prototype, "robIconSp", void 0);
    __decorate([
        property(cc.Node)
    ], player_node.prototype, "robIcon_Sp", void 0);
    __decorate([
        property(cc.Node)
    ], player_node.prototype, "robnoIcon_Sp", void 0);
    __decorate([
        property(cc.Node)
    ], player_node.prototype, "masterIcon", void 0);
    player_node = __decorate([
        ccclass
    ], player_node);
    return player_node;
}(cc.Component));
exports.player_node = player_node;

cc._RF.pop();