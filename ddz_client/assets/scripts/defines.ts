export class defines {
    // defines.serverUrl = "http://localhost:3000";
    static serverUrl = "http://192.168.1.106:3000";
    // static serverUrl = "http://localhost:3000";
    isopen_sound = 1;
    //exports.roomFullPlayerCount = 3;

    createRoomConfig = {
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
export enum RoomState {
    ROOM_INVALID = -1,
    ROOM_WAITREADY = 1,  //等待游戏
    ROOM_GAMESTART,  //开始游戏
    ROOM_PUSHCARD,   //发牌
    ROOM_ROBSTATE,    //抢地主
    ROOM_SHOWBOTTOMCARD, //显示底牌
    ROOM_PLAYING,     //出牌阶段  
};
//牌型定义
export var CardsValue = {
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
    'boom': { //炸弹
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
    'scroll': { //顺子
        name: 'Scroll',
        value: 1
    },
    'doubleScroll': {  //连队
        name: 'DoubleScroll',
        value: 1
    },
    'kingboom': { //王炸
        name: 'kingboom',
        value: 3
    },
};
export var qian_state = {
    "buqiang": 0,
    "qian": 1,
};
