var root =engines.myEngine().cwd();
if(root="/storage/emulated/0/脚本"){
    var root =root+"/Autojs/库/"; //当前文件所在的工程位置
}else{
    var root =engines.myEngine().cwd();
}

var intent = require(root+"funIertent.js");
var 清理缓存={};

清理缓存.快手极速版=function(){
    // log('清理快手极速版  缓存')
    intent.快手极速版_清除缓存('');
};


module.exports=清理缓存;