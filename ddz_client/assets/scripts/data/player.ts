export default class playerData{

    //that.uniqueID = "200000";
    //that.uniqueID = "1328014"
    uniqueID = 1 + this.getRandomStr(6)
    accountID = "2" + this.getRandomStr(6)
    nickName = "tiny" + this.getRandomStr(3)
    bottom:number;
    rate:number;
    housemanageid:string;
    constructor(){
    }
    str = "avatar_" + (Math.floor(Math.random() * 3) + 1)
    avatarUrl = this.str   //随机一个头像
    gobal_count = 0
    master_accountid:string="0"
    getRandomStr(count) {
        var str = '';
        for (var i = 0 ; i < count ; i ++){
            str += Math.floor(Math.random() * 10);
        }
        return str;
    };
}
