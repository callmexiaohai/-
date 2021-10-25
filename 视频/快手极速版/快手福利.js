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
// 打开app()
// 进入日常任务()

//辅助： 【 签到 】
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
        uiobject=funs.控件_判断是否存在_正则('看精彩视频赚更多');
        // log(uiobject)
        if(uiobject){
            log('看精彩视频赚更多.】')
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
广告辅助=threads.start(function(){
    while(true){
        sleep(1000)
        funs.广告(funs.当前设备管理())
    }
});
while(true){
    while(true){
        sleep(1000)
        if(funs.控件_单_位置_居中('观看广告单日最高可得')){
            log('开始悬赏')
            uiobject=funs.控件_判断是否存在_正则('观看广告单日最高可得');
            // log(uiobject)
            if(uiobject){
                log(uiobject.text())
                var reallyNumbers = uiobject.text().match(/\d+/g).map(Number);
                // for(var i=reallyNumbers.length;i>0;i--){
                //   log('i=',i,reallyNumbers[i])
                // } 
                log("悬赏度=",reallyNumbers[2]) 
                log("悬赏次数=",reallyNumbers[1])
                log("悬赏次数=",reallyNumbers[1]+1)
                if(funs.控件_点击(uiobject)){
                    log('进入广告视频')
                    // funs.广告("快手悬赏")
                }
                if(reallyNumbers[2]==reallyNumbers[1]+1){                
                    log('还剩1次，跑完悬赏退出')
                    break;
                }
            }   
        }else{                
            log('跑完悬赏退出')
            break;
        }

    }
}

function 进入日常任务(){
    while(true){
        sleep(1000)
        if(className("android.view.View")
        .depth("5")
        .indexInParent("2")
        .id("com.kuaishou.nebula:id/circular_progress_bar").exists()   ){
           log('发现金币圈圈。点击进入任务界面')
           var target=className("android.view.View")
           .depth("5")
           .indexInParent("2")
           .id("com.kuaishou.nebula:id/circular_progress_bar")   
           .findOnce()
        //    log(target)
           click(target.bounds().centerX(),target.bounds().centerY())
           break
        //    sleep(5000)
        //    back()
        
        
        }else{
            log('没有发现金币圈圈。划下个视频')
           划.划("上", 10,funs.单前设备管理());
        }
     }
}

function 打开app(){
    while (true) {
        sleep(1000)        
        idtext='跳过'
        if(funs.控件_判断是否存在(idtext))
            {log(idtext)
                funs.控件_单定位点击(idtext);
            }
    
        // sleep(5000)
        if (packageName("com.kuaishou.nebula").exists()) {
            toastLog("【已经在就在快手app】")
            // ksjsb.清除缓存();
            break
        }else{
            log("【启动 快手极速版 ")
            app.launch("com.kuaishou.nebula")
            sleep(10000)
        }
    }
}