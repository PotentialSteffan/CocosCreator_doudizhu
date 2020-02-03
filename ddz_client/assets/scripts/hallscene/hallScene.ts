import myglobal from "./../mygolbal"
const { ccclass, property } = cc._decorator
@ccclass
export class hallScene extends cc.Component {
    @property(cc.Label)
    nickname_label: cc.Label = null
    @property(cc.Sprite)
    headimage: cc.Sprite = null
    @property(cc.Label)
    gobal_count: cc.Label = null
    @property(cc.Prefab)
    creatroom_prefabs: cc.Prefab = null
    @property(cc.Prefab)
    joinroom_prefabs: cc.Prefab = null

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        this.nickname_label.string = myglobal.playerData.nickName
        this.gobal_count.string = ":" + myglobal.playerData.gobal_count
    }

    start() {

    }

    // update (dt) {},

    onButtonClick(event, customData) {
        switch (customData) {
            case "create_room":
                var creator_Room = cc.instantiate(this.creatroom_prefabs)
                creator_Room.parent = this.node
                creator_Room.zIndex = 100
                break
            case "join_room":
                var join_Room = cc.instantiate(this.joinroom_prefabs)
                join_Room.parent = this.node
                join_Room.zIndex = 100
                break
            default:
                break
        }
    }
}