console.show()
console.setPosition(200, 0);
var root =files.cwd()

if(files.cwd()=="/storage/emulated/0/脚本") {
log('VScode 直接运行，测试辅助定位')
   root=files.join(files.cwd(),"Autojs")
   }
//对应添加项目文件目录及对应的文件 ： var 快手之直播path=root+"/视频/快手极速版/快手极速版.js"
var funs = require(root+"/库/funs.js");

   //  log(device.serial)
   // log( funs.单前设备管理())
   // //  funs.存('','')
   // log(files.isDir(root+"/zip文件专用dome/test/AutoJs-master")) //查看文件夹是否存在
   // log(files.isFile(root+"/zip文件专用dome/test/AutoJs-master/版本.js"))//查看文件是否存在
   // log(files.read(root+"/zip文件专用dome/test/AutoJs-master/版本.js",encoding = "UTF-8"))
   // let AutoJsVesion =files.read(root+"/zip文件专用dome/test/AutoJs-master/版本.js")
   // log(AutoJsVesion)
   // var reallyNumbers = AutoJsVesion.match(/\d+/g).map(Number);
   // log("版本号=",reallyNumbers) 
   // log("版本号=",reallyNumbers[0]+reallyNumbers[1]+reallyNumbers[2]) 
   
   // function 版本对比(oldJs,newJs){
   //    let AutoJsVesion =files.read(root+"/zip文件专用dome/test/AutoJs-master/版本.js")
   //    log(AutoJsVesion)
   //    var reallyNumbers = AutoJsVesion.match(/\d+/g).map(Number);
   //    log("版本号=",reallyNumbers) 
   //    log("版本号=",reallyNumbers[0]+reallyNumbers[1]+reallyNumbers[2]) 
   // }         
   



while(true){
   sleep(1000)
   if(className('android.widget.ImageView')
   .id('com.kuaishou.nebula:id/live_close')
   // .id("com.kuaishou.nebula:id/live_close_place_holder")
   .exists()){
      log('发现 退出控件按钮')
   var target=className('android.widget.ImageView')
   .id('com.kuaishou.nebula:id/live_close')
   .findOnce()
   if(target.clickable()){
      target.click()
      log('退出直播间')
   }
   }else{
     log('没有发现 退出1')
     }


}
   

   exit()