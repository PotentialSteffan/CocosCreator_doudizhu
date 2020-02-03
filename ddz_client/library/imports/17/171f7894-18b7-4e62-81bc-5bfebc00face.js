"use strict";
cc._RF.push(module, '171f7iUGLdOYoG8W/68APrO', 'socket_ctr');
// scripts/data/socket_ctr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var event_lister_1 = require("../util/event_lister");
var defines_1 = require("../defines");
// import { Socket } from "../lib/socket-io.js"
// import _socket from "socket.io"
var socketCtr = /** @class */ (function () {
    function socketCtr() {
        this.respone_map = {};
        this.call_index = 0;
        this._socket = null;
        this.eventObj = new event_lister_1.default();
    }
    socketCtr.prototype._sendmsg = function (cmdtype, req, callindex) {
        this._socket.emit("notify", { cmd: cmdtype, data: req, callindex: callindex });
    };
    socketCtr.prototype._request = function (cmdtype, req, callback) {
        console.log("send cmd:" + cmdtype + "  " + JSON.stringify(req));
        this.call_index++;
        this.respone_map[this.call_index] = callback;
        this._sendmsg(cmdtype, req, this.call_index);
    };
    socketCtr.prototype.initSocket = function () {
        var _this = this;
        var opts = {
            'reconnection': false,
            'force new connection': true,
            'transports': ['websocket', 'polling']
        };
        this._socket = window["io"].connect(defines_1.defines.serverUrl, opts);
        this._socket.on("connection", function () {
            console.log("connect server success!!");
        });
        this._socket.on("notify", function (res) {
            console.log("on notify cmd:" + JSON.stringify(res));
            if (_this.respone_map.hasOwnProperty(res.callBackIndex)) {
                var callback = _this.respone_map[res.callBackIndex];
                if (callback) {
                    callback(res.result, res.data);
                }
            }
            else {
                //if(res.callBackIndex!=0){
                //console.log("not found call index",res.callBackIndex)
                //提交一个监听的事件给监听器
                //  on notify cmd:{"type":"player_joinroom_notify","result":0,"data":
                //  {"accountid":"2586422","nick_name":"tiny110","avatarUrl":
                //  "avatar_3","goldcount":1000,"seatindex":2},"callBackIndex":null}
                //没有找到回到函数，就给事件监听器提交一个事件
                var type = res.type;
                _this.eventObj.fire(type, res.data);
                // }
            }
        });
    };
    socketCtr.prototype.request_wxLogin = function (req, callback) {
        this._request("wxlogin", req, callback);
    };
    socketCtr.prototype.request_guestLogin = function (req, callback) {
        this._request("guestlogin", req, callback);
    };
    socketCtr.prototype.request_creatroom = function (req, callback) {
        this._request("createroom_req", req, callback);
    };
    socketCtr.prototype.request_jion = function (req, callback) {
        this._request("joinroom_req", req, callback);
    };
    socketCtr.prototype.request_enter_room = function (req, callback) {
        this._request("enterroom_req", req, callback);
    };
    //发送不出牌信息
    socketCtr.prototype.request_buchu_card = function (req, callback) {
        this._request("chu_bu_card_req", req, callback);
    };
    /*玩家出牌
      需要判断:
         出的牌是否符合规则
         和上个出牌玩家比较，是否满足条件
 
    */
    socketCtr.prototype.request_chu_card = function (req, callback) {
        this._request("chu_card_req", req, callback);
    };
    //监听其他玩家进入房间消息
    socketCtr.prototype.onPlayerJoinRoom = function (callback) {
        this.eventObj.on("player_joinroom_notify", callback);
    };
    socketCtr.prototype.onPlayerReady = function (callback) {
        this.eventObj.on("player_ready_notify", callback);
    };
    socketCtr.prototype.onGameStart = function (callback) {
        if (callback) {
            this.eventObj.on("gameStart_notify", callback);
        }
    };
    socketCtr.prototype.onChangeHouseManage = function (callback) {
        if (callback) {
            this.eventObj.on("changehousemanage_notify", callback);
        }
    };
    //发送ready消息
    socketCtr.prototype.requestReady = function () {
        this._sendmsg("player_ready_notify", {}, null);
    };
    socketCtr.prototype.requestStart = function (callback) {
        this._request("player_start_notify", {}, callback);
    };
    //玩家通知服务器抢地主消息
    socketCtr.prototype.requestRobState = function (state) {
        this._sendmsg("player_rob_notify", state, null);
    };
    //服务器下发牌通知
    socketCtr.prototype.onPushCards = function (callback) {
        if (callback) {
            this.eventObj.on("pushcard_notify", callback);
        }
    };
    //监听服务器通知开始抢地主消息
    socketCtr.prototype.onCanRobState = function (callback) {
        if (callback) {
            this.eventObj.on("canrob_notify", callback);
        }
    };
    //监听服务器:通知谁抢地主操作消息
    socketCtr.prototype.onRobState = function (callback) {
        if (callback) {
            this.eventObj.on("canrob_state_notify", callback);
        }
    };
    //监听服务器:确定地主消息
    socketCtr.prototype.onChangeMaster = function (callback) {
        if (callback) {
            this.eventObj.on("change_master_notify", callback);
        }
    };
    //监听服务器:显示底牌消息
    socketCtr.prototype.onShowBottomCard = function (callback) {
        if (callback) {
            this.eventObj.on("change_showcard_notify", callback);
        }
    };
    //监听服务器:可以出牌消息
    socketCtr.prototype.onCanChuCard = function (callback) {
        if (callback) {
            this.eventObj.on("can_chu_card_notify", callback);
        }
    };
    socketCtr.prototype.onRoomChangeState = function (callback) {
        if (callback) {
            this.eventObj.on("room_state_notify", callback);
        }
    };
    socketCtr.prototype.onOtherPlayerChuCard = function (callback) {
        if (callback) {
            this.eventObj.on("other_chucard_notify", callback);
        }
    };
    return socketCtr;
}());
exports.default = socketCtr;

cc._RF.pop();