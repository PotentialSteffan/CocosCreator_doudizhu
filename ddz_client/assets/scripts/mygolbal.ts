import socketctr from "./data/socket_ctr"
import playerdata from "./data/player"
import eventlister from "./util/event_lister"
export default class myglobal{
    static socket:socketctr = new socketctr()
    static playerData = new playerdata()
    eventlister = new eventlister()
    private static mInstance:myglobal;
    static getInstance(){
        if(!myglobal.mInstance){
            myglobal.mInstance = new myglobal();
        }
        return myglobal.mInstance;
    }
}
