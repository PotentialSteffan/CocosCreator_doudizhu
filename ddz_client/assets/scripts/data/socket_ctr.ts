import eventlister from "../util/event_lister"
import {defines} from "../defines"
// import { Socket } from "../lib/socket-io.js"
// import _socket from "socket.io"
export default class socketCtr {
    constructor() {

    }
    respone_map = {}
    call_index = 0


    _socket = null;
    eventObj: eventlister = new eventlister()
    _sendmsg(cmdtype, req, callindex) {
         this._socket.emit("notify", { cmd: cmdtype, data: req, callindex: callindex })
    }

    _request(cmdtype, req, callback) {
        console.log("send cmd:" + cmdtype + "  " + JSON.stringify(req))
        this.call_index++
        this.respone_map[this.call_index] = callback
        this._sendmsg(cmdtype, req, this.call_index)
    }


    initSocket() {
        let opts = {
            'reconnection': false,
            'force new connection': true,
            'transports': ['websocket', 'polling']
        }
         this._socket = window["io"].connect(defines.serverUrl, opts);

         this._socket.on("connection", function () {
            console.log("connect server success!!")
        })
         this._socket.on("notify", (res) => {
            console.log("on notify cmd:" + JSON.stringify(res))
            if (this.respone_map.hasOwnProperty(res.callBackIndex)) {
                let callback = this.respone_map[res.callBackIndex]
                if (callback) {
                    callback(res.result, res.data)
                }
            } else {
                //if(res.callBackIndex!=0){
                //console.log("not found call index",res.callBackIndex)

                //提交一个监听的事件给监听器
                //  on notify cmd:{"type":"player_joinroom_notify","result":0,"data":
                //  {"accountid":"2586422","nick_name":"tiny110","avatarUrl":
                //  "avatar_3","goldcount":1000,"seatindex":2},"callBackIndex":null}
                //没有找到回到函数，就给事件监听器提交一个事件
                let type = res.type
                this.eventObj.fire(type, res.data)
                // }

            }

        })
    }

    request_wxLogin(req, callback) {
        this._request("wxlogin", req, callback)
    }
    request_guestLogin(req, callback) {
        this._request("guestlogin", req, callback)
    }

    request_creatroom(req, callback) {
        this._request("createroom_req", req, callback)
    }

    request_jion(req, callback) {
        this._request("joinroom_req", req, callback)
    }

    request_enter_room(req, callback) {
        this._request("enterroom_req", req, callback)
    }

    //发送不出牌信息
    request_buchu_card(req, callback) {
        this._request("chu_bu_card_req", req, callback)
    }
    /*玩家出牌
      需要判断: 
         出的牌是否符合规则
         和上个出牌玩家比较，是否满足条件
 
    */
    request_chu_card(req, callback) {
        this._request("chu_card_req", req, callback)
    }
    //监听其他玩家进入房间消息
    onPlayerJoinRoom(callback) {
        this.eventObj.on("player_joinroom_notify", callback)
    }

    onPlayerReady(callback) {
        this.eventObj.on("player_ready_notify", callback)
    }

    onGameStart(callback) {
        if (callback) {
            this.eventObj.on("gameStart_notify", callback)
        }
    }

    onChangeHouseManage(callback) {
        if (callback) {
            this.eventObj.on("changehousemanage_notify", callback)
        }
    }
    //发送ready消息
    requestReady() {
        this._sendmsg("player_ready_notify", {}, null)
    }

    requestStart(callback) {
        this._request("player_start_notify", {}, callback)
    }

    //玩家通知服务器抢地主消息
    requestRobState(state) {
        this._sendmsg("player_rob_notify", state, null)
    }
    //服务器下发牌通知
    onPushCards(callback) {
        if (callback) {
            this.eventObj.on("pushcard_notify", callback)
        }
    }

    //监听服务器通知开始抢地主消息
    onCanRobState(callback) {
        if (callback) {
            this.eventObj.on("canrob_notify", callback)
        }
    }

    //监听服务器:通知谁抢地主操作消息
    onRobState(callback) {
        if (callback) {
            this.eventObj.on("canrob_state_notify", callback)
        }
    }

    //监听服务器:确定地主消息
    onChangeMaster(callback) {
        if (callback) {
            this.eventObj.on("change_master_notify", callback)
        }
    }

    //监听服务器:显示底牌消息
    onShowBottomCard(callback) {
        if (callback) {
            this.eventObj.on("change_showcard_notify", callback)
        }
    }

    //监听服务器:可以出牌消息
    onCanChuCard(callback) {
        if (callback) {
            this.eventObj.on("can_chu_card_notify", callback)
        }
    }

    onRoomChangeState(callback) {
        if (callback) {
            this.eventObj.on("room_state_notify", callback)
        }
    }

    onOtherPlayerChuCard(callback) {
        if (callback) {
            this.eventObj.on("other_chucard_notify", callback)
        }
    }
}