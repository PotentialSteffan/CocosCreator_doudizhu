import myglobal from "../mygolbal"
const {ccclass, property} = cc._decorator;
@ccclass
export class loginScene extends cc.Component{

    @property(cc.Node)
    wait_node:cc.Node = null;

    // LIFE-CYCLE CALLBACKS:
    isopen_sound:boolean = false;
    onLoad () {
        
        //console.log("qian_state.qian:"+ qian_state.qian)
        if(this.isopen_sound){
            // cc.audioEngine.play(cc.url.raw("resources/sound/login_bg.ogg"),true,1) 
         }
           
         myglobal .socket.initSocket()
    }
    
    start () {
    }
    
    onButtonCilck(event,customData){
        switch(customData){
            case "wx_login":
                // console.log("wx_login request")
                console.log(customData+"request")
                
                //this.wait_node.active = true
                
                myglobal .socket.request_wxLogin({
                    uniqueID:myglobal .playerData.uniqueID,
                    accountID:myglobal .playerData.accountID,
                    nickName:myglobal .playerData.nickName,
                    avatarUrl:myglobal .playerData.avatarUrl,
                },function(err,result){
                    //请求返回
                    //先隐藏等待UI
                    //this.wait_node.active = false
                    if(err!=0){
                        console.log("err:"+err)
                        return     
                    }
                    
                    console.log("login sucess" + JSON.stringify(result))
                    myglobal .playerData.gobal_count = result.goldcount
                    cc.director.loadScene("hallScene")
                }.bind(this))
                break
                case 'guest_login':
                    myglobal .socket.request_guestLogin({
                            uniqueID:myglobal .playerData.uniqueID,
                            accountID:myglobal .playerData.accountID,
                            nickName:myglobal .playerData.nickName,
                            avatarUrl:myglobal .playerData.avatarUrl,
                        },function(err,result){
                            //请求返回
                            //先隐藏等待UI
                            //this.wait_node.active = false
                            if(err!=0){
                                console.log("err:"+err)
                                return     
                            }
                            
                            console.log("login sucess" + JSON.stringify(result))
                            myglobal .playerData.gobal_count = result.goldcount
                            cc.director.loadScene("hallScene")
                        }.bind(this))
                
                break;
            default:

                break
        }
    }
    // update (dt) {},


}
