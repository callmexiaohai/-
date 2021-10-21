console.show()
console.setPosition(200, 0);
var root =files.cwd()

if(files.cwd()=="/storage/emulated/0/脚本") {
log('VScode 直接运行，测试辅助定位')
   root=files.join(files.cwd(),"Autojs")
   }
//对应添加项目文件目录及对应的文件 ： var 快手之直播path=root+"/视频/快手极速版/快手极速版.js"
var funs = require(root+"/库/funs.js");



while(true){
    sleep(1000)
var myDate=new Date();
var timess=random(30,55) //随机 分钟到期
var currentTime = new Date(
    parseInt(myDate.getFullYear()), 
    parseInt(myDate.getMonth()), 
    parseInt(myDate.getDate()), 
    '23', 
    timess, 
    '00');     

var timeout=funs.SimpleDateFormat(currentTime)
console.log(timeout);


}