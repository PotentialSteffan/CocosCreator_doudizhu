"use strict";
cc._RF.push(module, 'b86b3Jr/F1BNKBP1Dgpv4WF', 'player');
// scripts/data/player.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var playerData = /** @class */ (function () {
    function playerData() {
        //that.uniqueID = "200000";
        //that.uniqueID = "1328014"
        this.uniqueID = 1 + this.getRandomStr(6);
        this.accountID = "2" + this.getRandomStr(6);
        this.nickName = "tiny" + this.getRandomStr(3);
        this.str = "avatar_" + (Math.floor(Math.random() * 3) + 1);
        this.avatarUrl = this.str; //随机一个头像
        this.gobal_count = 0;
        this.master_accountid = "0";
    }
    playerData.prototype.getRandomStr = function (count) {
        var str = '';
        for (var i = 0; i < count; i++) {
            str += Math.floor(Math.random() * 10);
        }
        return str;
    };
    ;
    return playerData;
}());
exports.default = playerData;

cc._RF.pop();