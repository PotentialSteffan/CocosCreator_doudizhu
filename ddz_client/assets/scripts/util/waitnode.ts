const { ccclass, property } = cc._decorator;
@ccclass
export default class WaitNode extends cc.Component {
    @property(cc.Node)
    loadimage_target: cc.Node = null
    @property
    _isShow: boolean = null
    @property(cc.Label)
    lblContent: cc.Label = null

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.node.active = this._isShow;
    }

    update(dt) {
        this.loadimage_target.rotation = this.loadimage_target.rotation - dt * 45;
    }

    //content为label显示的内容
    show(content) {
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
    }

    hide() {
        this._isShow = false;
        if (this.node) {
            this.node.active = this._isShow;
        }
    }

}
