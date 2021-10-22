console.show()
console.setPosition(200, 0);
var root =files.cwd()

if(files.cwd()=="/storage/emulated/0/脚本") {
log('VScode 直接运行，测试辅助定位')
   root=files.join(files.cwd(),"Autojs")
   }
//对应添加项目文件目录及对应的文件 ： var 快手之直播path=root+"/视频/快手极速版/快手极速版.js"
var funs = require(root+"/库/funs.js");

    log(device.serial)
   log( funs.单前设备管理())
   //  funs.存('','')
    log(funs.toTimeyyyy_MM_dd())
    funs.存('更新','11')
    log('今日是否更新',funs.取('更新'))
    log('今日是否更新',funs.取('更新')==funs.toTimeyyyy_MM_dd())
    funs.存('更新',funs.toTimeyyyy_MM_dd())
    log('今日是否更新',funs.取('更新'))
    log('今日是否更新',funs.取('更新')==funs.toTimeyyyy_MM_dd())
exit()