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
    // log(textContains('限时奖励').findOnce().bounds().centerX())
    // log(device.height*0.5)
     let x=textContains('限时奖励').findOnce().bounds().centerX()+random(-20, 20)
    let y=device.height*0.5+random(-20, 20)
     if(click(x,y)){
        funs.广告("快手定点")
    }
    
    
    

}