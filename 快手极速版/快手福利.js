// 
console.show()
console.setPosition(200, 0);
var root ="/storage/emulated/0/脚本/机器人"
var 快手之直播path=root+"/视频/快手极速版/快手之直播.js"
var funs = require(root+"/库/funs.js");
var 划 = require(root+"/库/人工划屏.js");
//到点必须关闭


var rrayxs=['每次100金币，','观看广告单日最高']                   
var rrayxsr=['福利 领金币','福利']   

var timeshp=8
var 悬赏度=funs.取('悬赏度')
var 悬赏次数=funs.取('悬赏次数')
var 悬赏任务=true
var 直播广告时长 = 65
准备工作()
function 准备工作(){   
    
funs.功能_清理通知()
funs.功能_关闭全部应用()
    while (true) {
        sleep(1000)
        log("=====进入快手极速版==")
        app.launch("com.kuaishou.nebula")
        
        idtext='跳过'
        if(funs.控件_判断是否存在(idtext))
            {log(idtext)
                funs.控件_单定位点击(idtext);
            }
    
        // sleep(5000)
        if (packageName("com.kuaishou.nebula").exists()) {
            toastLog("启动快手成功")
            sleep(10000)
            // ksjsb.清除缓存();
            break
        }
    }

    log('进入观看视频')
    var node=id('left_btn').findOnce()
    if (node) {
        log('点击菜单栏')
    node.click() 
    sleep(1*1000)       
    }else{
        log('占时没发现，菜单')
    }
    var node=text('去赚钱').findOne(1*1000)
    if (node) {
        log('点击去赚钱，进入日常')
    node.parent().click() 
    sleep(1*1000)       
    }else{
        log('占时没发现，去赚钱')
    }
}

//辅助： 查看金币数量
广告辅助=threads.start(function(){    
    while(true){
        sleep(1000)
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
            准备工作()
        }   
        //================出现【退出】，默认点击
        uiobject=funs.控件_判断是否存在_正则('打开签到提醒');
        // log(uiobject)
        if(uiobject){
            log('打开签到提醒.】')
            准备工作()
        }   
    
    
    
    
    
    
        uiobject=funs.控件_判断是否存在_正则('明日看广告最高领取');
        // log(uiobject)
        if(uiobject){
            engines.execScriptFile(快手之直播path);
            console.hide()
            exit()
        }   
        // log('追踪....广告')
        idtext='后可领取奖励'
        if(funs.控件_判断是否存在_正则(idtext))
        {   
            log('发现【后可领取奖励】进入广告.....')
            // log(funs.控件_判断是否存在_正则(idtext))
            str1=funs.控件_判断是否存在_正则(idtext).text()
            if(str1){
                log('倒计时：',funs.time_提取秒(str1))
                if(funs.time_提取秒(str1)<=11){
                    funs.倒计时('倒计时=',random(13,15))
                    log('领取成功'); 
                    back();
                }
            }
        } 
    }
});

while (true) {
    sleep(1000);
    log(funs.单前设备管理())
    

    log(悬赏任务)
    if(悬赏任务){
        //================出现【退出】，默认点击
        uiobject=funs.控件_判断是否存在_正则('明日看广告最高领取');
        // log(uiobject)
        if(uiobject){
            log('【悬赏任务完成了w.】')
            engines.execScriptFile(快手之直播path);
            console.hide()
            exit()
        } 
        悬赏任务进度()
        悬赏度=funs.取('悬赏度')
        悬赏次数=funs.取('悬赏次数')
        直播度=funs.取('直播度')
        直播次数=funs.取('直播次数')
        log("悬赏度",悬赏度,"悬赏次数",悬赏次数)
        log('===========信息结束==============')
        while(true){
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
            //================出现【退出】，默认点击
            uiobject=funs.控件_判断是否存在_正则('明日看广告最高领取');
            // log(uiobject)
            if(uiobject){
                log('【悬赏任务完成了w.】')
                悬赏任务=false
                break;
            }   
            log('刷悬赏..')
            悬赏任务进度()
            sleep(1000);
            if(funs.控件_位置_居中('福利',赚悬赏funtext(),'福利')){
                广告("悬赏度"+悬赏次数+"/"+ 悬赏度) 
            }else if(funs.控件_位置_居中('去赚钱',赚悬赏funtext(),'去赚钱')){
                广告("悬赏度"+悬赏次数+"/"+ 悬赏度)
            }
        }
        
    }else{
        log('【悬赏任务完成了e.】')
        engines.execScriptFile(快手之直播path);
        console.hide()
        exit()
    }
}
        



  
function 赚悬赏funtext(){
    for(var i=0;i<rrayxs.length;i++){
        uiobject=funs.控件_判断是否存在_正则(rrayxs[i]);
        if (uiobject) {
            log('赚悬赏funtext:',uiobject.text())
            return uiobject.text()
        }
    }
    
}
function 赚悬赏rfuntext(){
    for(var i=0;i<rrayxsr.length;i++){
        uiobject=funs.控件_判断是否存在_正则(rrayxsr[i]);
        if (uiobject) {
            log('赚悬赏rfuntext:',uiobject.text())
            return uiobject.text()
        }
    }
    
}
function 广告(logs){
    log('等待8s....')
    sleep(8000)
    while(true){
        sleep(1000)
        log('进入广告.....')
        idtext='后可领取奖励'
        if(!funs.控件_判断是否存在_正则(idtext))
        {
            for(var i=直播广告时长;i>0;i--){
                sleep(1000)
                log(logs,'倒计时：',i,'s')
                if(i==1){
                  log('退出....')
                  back();
                  break; //退出for
                }
            } 
            break;//退出广告   
        }else{
            break;//退出广告   
        }
    }
}
function 分辨率适配坐标点击(rxx,ryy){
    let rx = 1080; //开发设备x值
    let ry = 1920; //开发设备的y值
    
    //换算公式 点击坐标除以 点击坐标X Y | 除以开发设备X Y |乘以实际设备X Y ==换算后的坐标
    
    let 点击坐标 = [rxx,ryy] //x,y
    let x = (点击坐标[0] * device.width)/ rx //换算后的x
    let y = (点击坐标[1] * device.height)/ ry  //换算后的y
    log('分辨率适配坐标点击:',x,y)
    click(x,y)
}

function 悬赏任务进度(){//重新获取进度数据
    uiobject=funs.控件_判断是否存在_正则('观看广告单日最高'); //赚悬赏funtext()
    log('====悬赏TOP====')
    // log(uiobject)
    if(uiobject){
        log(uiobject.text())
        var reallyNumbers = uiobject.text().match(/\d+/g).map(Number);
        // for(var i=reallyNumbers.length;i>0;i--){
        //   log('i=',i,reallyNumbers[i])
        // } 

        log(reallyNumbers)
        悬赏度=reallyNumbers[2] 
        悬赏次数=reallyNumbers[1]             
        funs.存('悬赏度',悬赏度);
        funs.存('悬赏次数',悬赏次数);  
        log('====悬赏END====')
      } 
}