console.show()
console.setPosition(200, 0);
var root =files.cwd()

if(files.cwd()=="/storage/emulated/0/脚本") {
log('VScode 直接运行，测试辅助定位')
   root=files.join(files.cwd(),"Autojs")
   }
//对应添加项目文件目录及对应的文件 ： var 快手之直播path=root+"/视频/快手极速版/快手极速版.js"
var funs = require(root+"/库/funs.js");

var 划 = require(root+"/库/人工划屏.js");

// while(id("com.kuaishou.nebula:id/reward_merchant_text").findOnce().text()!=="1s"){
   
//    划.划("上", 5,"上"+funs.当前设备管理());
//    划.划("下", 5,"下"+funs.当前设备管理());
//    log(id("com.kuaishou.nebula:id/reward_merchant_text").findOnce().text())
// }





let textStrArr=["福利","放弃奖励","领福利","开宝箱得金币","看视频最高得","坚持退出"]
广告=threads.start(function(){   
    idtext='后可领取奖励'
    if(funs.控件_判断是否存在_正则(idtext))
    {
       log('发现【后可领取奖励】进入广告.....')
       while(true){
          sleep(1000)
         // log(funs.控件_判断是否存在_正则(idtext))
         str1=funs.控件_判断是否存在_正则(idtext).text()
         if(str1){
            this.倒计时(this.当前设备管理(),random(funs.time_提取秒(str1)+6,funs.time_提取秒(str1)+7))
            log('领取成功'); 
            back();            
         }           
      }         
    }   
})

控件点击=threads.start(function(){ 
   var textOld="0"  
   while(true){
      sleep(5000)
         for(var i=0;i<textStrArr.length;i++){
            textOld=textStrArr[i]+funs.取(textStrArr[i])
            // log("记录：",textOld)
         if(text(textStrArr[i]).exists()){
            funs.存(textStrArr[i],'存在')
            funs.控件_单定位点击(textStrArr[i])   
         }else{
            funs.存(textStrArr[i],'不存在')
         }

         if(textStrArr[i]+funs.取(textStrArr[i])!==textOld){
            log("你是主角：",textStrArr[i]+funs.取(textStrArr[i]))
         }



               
         }
      
}
})

特殊直播=threads.start(function(){   
   while(true){
      sleep(1000) 
      while(true){  
         
         

         if(text("观看精彩直播，可领").exists()){
            log('特殊直播')
            if(text("10/10").exists()){
               log('10/10')      
               back()
               sleep(1000)     
               back()
               break
      
            }   
            for(var i=0;i<10;i++){
               sleep(5000)               
               click(313,818)
               for(var i=70;i>0;i--){
                  sleep(1000)               
                  log('特殊直播倒计时：70/',i)
               }            
               back()
               sleep(1000)     
               back()
            }
   
         }   
      
      }
}
})

function logText(textStrs){
   textStrs
}
   // if(text("放弃奖励").findOnce().parent().exists()){
   //    // log(text("放弃奖励").findOnce().parent().text(),text("放弃奖励").findOnce().parent().bounds())
   
   // }else{
   //    log("放弃奖励父级",'不存在')
   // }






// while(true){
//    sleep(1000)
//    for(var i=0;i<textStrArr.length;i++){    
//       log(textStrArr[i]) 
//       textClose(textStrArr[i])
     
//    }
// }
   
function textClose(textStr){
   if(text(textStr).exists()){
      log(text(textStr).findOnce().text(),text(textStr).findOnce().bounds())
   
   }else{
      log(textStr,'不存在')
   }
}

function textClick(textStr){


}




// sleep(10000)
// console.hide()
//    exit()