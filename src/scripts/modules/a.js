/**
 * Created by viruser on 2017/8/23.
 */
//console.log("a.js");
import nameA from "./b.js";
var moduleA = function(){
    this.num = 1;
    this.attrB = nameA;
};
moduleA.prototype.print = function(){
    var self = this;

    console.log(self.num);
};
moduleA.prototype.addNum = function(n){
    var self = this;
    self.num += n;
};

export default moduleA;