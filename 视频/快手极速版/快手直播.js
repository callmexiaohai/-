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

// funs.打开app('快手极速版')
// funs.进入日常任务('快手极速版')

let textStrArr=["退出","直接退出","放弃奖励","看视频最高得","坚持退出"]
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
//辅助： 【签到】
签到辅助=threads.start(function(){    
    while(true){
        sleep(1000)
        // log('辅助....')
        // ================出现【 签到 】，默认点击
        uiobject=funs.控件_判断是否存在_正则('去签到');
        // log(uiobject)
        if(uiobject){
            log('签到立得.】')
            uiobject.click()
        } 
        //================出现【 签到 】，默认点击
        uiobject=funs.控件_判断是否存在_正则('签到立得');
        // log(uiobject)
        if(uiobject){
            log('签到立得.】')
            uiobject.click()
        } 
        //================出现【 签到 】，默认点击
        uiobject=funs.控件_判断是否存在_正则('立即签到');
        // log(uiobject)
        if(uiobject){
            log('立即签到.】')
            uiobject.click()
        } 
        //================出现【 签到 】，默认点击
        uiobject=funs.控件_判断是否存在_正则('补签再得');
        // log(uiobject)
        if(uiobject){
            log('补签再得.】')
            uiobject.click()
        } 
        //================出现【 签到 】，默认点击
        uiobject=funs.控件_判断是否存在_正则('去看视频再赚');
        // log(uiobject)
        if(uiobject){
            log('去看视频再赚.】')
            uiobject.click()
        } 
        //================出现【 签到 】，默认点击
        uiobject=funs.控件_判断是否存在_正则('看广告再得');
        // log(uiobject)
        if(uiobject){
            log('看广告再得.】')
            uiobject.click()
        } 
        //================出现【退出】，默认点击
        uiobject=funs.控件_判断是否存在_正则('邀请好友赚更多');
        // log(uiobject)
        if(uiobject){
            log('邀请好友赚更多.】')
            back()
            进入日常任务()
            // 准备工作()
        }   
        //================出现【退出】，默认点击
        uiobject=funs.控件_判断是否存在_正则('打开签到提醒');
        // log(uiobject)
        if(uiobject){
            log('打开签到提醒.】')
            // 准备工作()
        }  
        //================出现【退出】，默认点击
        uiobject=funs.控件_判断是否存在_正则('开宝箱得金币');
        // log(uiobject)
        if(uiobject){
            log('打开开宝箱得金币.】')
            uiobject.click()
            // 准备工作()
        }  
        
        //================出现【退出】，默认点击
        uiobject=funs.控件_判断是否存在_正则('点击重试');
        // log(uiobject)
        if(uiobject){
            log('点击重试.】')
            uiobject.click()
            // 准备工作()
        }  
        
        //================出现【退出】，默认点击
        uiobject=funs.控件_判断是否存在_正则('重试');
        // log(uiobject)
        if(uiobject){
            log('点击  重试.】')
            uiobject.click()
            // 准备工作()
        }  
        
    }
});

//辅助： 【 广告倒计时 】
// 广告辅助=threads.start(function(){
//     while(true){
//         sleep(1000)
//         funs.广告(funs.当前设备管理())
//     }
// });
while(true){
    while(true){
        if(funs.控件_单_位置_居中('每次110金币，海量主播发福利')){   
            uiobject=funs.控件_判断是否存在_正则('每次110金币，海量主播发福利');
            if(uiobject){
                log(uiobject.text())
                var reallyNumbers = uiobject.text().match(/\d+/g).map(Number);
                // for(var i=reallyNumbers.length;i>0;i--){
                //   log('i=',i,reallyNumbers[i])
                // } 
                log("直播度=",reallyNumbers[2]) 
                log("直播次数=",reallyNumbers[1])
                log("直播次数=",reallyNumbers[1]+1)
                if(funs.控件_点击(uiobject)){
                    log('进入广告视频')
                    funs.广告_直播('直播',65)
                    back()
                }
                if(reallyNumbers[2]==reallyNumbers[1]+1){                
                    log('还剩1次，跑完直播退出')
                    break;
                }
            }   
        }else{                
            log('跑完直播退出')
            break;
        }
    }
    
    
    
    

}