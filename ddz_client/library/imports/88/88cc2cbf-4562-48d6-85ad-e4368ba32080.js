"use strict";
cc._RF.push(module, '88cc2y/RWJI1oWt5DaLoyCA', 'defines');
// scripts/defines.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defines = /** @class */ (function () {
    function defines() {
        // static serverUrl = "http://localhost:3000";
        this.isopen_sound = 1;
        //exports.roomFullPlayerCount = 3;
        this.createRoomConfig = {
            //exports.createRoomConfig = {
            'rate_1': {
                needCostGold: 10,
                bottom: 1,
                rate: 1
            },
            'rate_2': {
                needCostGold: 100,
                bottom: 10,
                rate: 2
            },
            'rate_3': {
                needCostGold: 200,
                bottom: 20,
                rate: 3
            },
            'rate_4': {
                needCostGold: 500,
                bottom: 50,
                rate: 4
            }
        };
    }
    // defines.serverUrl = "http://localhost:3000";
    defines.serverUrl = "http://192.168.1.106:3000";
    return defines;
}());
exports.defines = defines;
var RoomState;
(function (RoomState) {
    RoomState[RoomState["ROOM_INVALID"] = -1] = "ROOM_INVALID";
    RoomState[RoomState["ROOM_WAITREADY"] = 1] = "ROOM_WAITREADY";
    RoomState[RoomState["ROOM_GAMESTART"] = 2] = "ROOM_GAMESTART";
    RoomState[RoomState["ROOM_PUSHCARD"] = 3] = "ROOM_PUSHCARD";
    RoomState[RoomState["ROOM_ROBSTATE"] = 4] = "ROOM_ROBSTATE";
    RoomState[RoomState["ROOM_SHOWBOTTOMCARD"] = 5] = "ROOM_SHOWBOTTOMCARD";
    RoomState[RoomState["ROOM_PLAYING"] = 6] = "ROOM_PLAYING";
})(RoomState = exports.RoomState || (exports.RoomState = {}));
;
//牌型定义
exports.CardsValue = {
    'one': {
        name: 'One',
        value: 1
    },
    'double': {
        name: 'Double',
        value: 1
    },
    'three': {
        name: 'Three',
        value: 1
    },
    'boom': {
        name: 'Boom',
        value: 2
    },
    'threeWithOne': {
        name: 'ThreeWithOne',
        value: 1
    },
    'threeWithTwo': {
        name: 'ThreeWithTwo',
        value: 1
    },
    'plane': {
        name: 'Plane',
        value: 1
    },
    'planeWithOne': {
        name: 'PlaneWithOne',
        value: 1
    },
    'planeWithTwo': {
        name: 'PlaneWithTwo',
        value: 1
    },
    'scroll': {
        name: 'Scroll',
        value: 1
    },
    'doubleScroll': {
        name: 'DoubleScroll',
        value: 1
    },
    'kingboom': {
        name: 'kingboom',
        value: 3
    },
};
exports.qian_state = {
    "buqiang": 0,
    "qian": 1,
};

cc._RF.pop();