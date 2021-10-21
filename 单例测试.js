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
    while(true){
        if(funs.控件_单_位置_居中('观看广告单日最高可得')){

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
                    funs.广告("快手悬赏")
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
                    funs.倒计时('直播',65)
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
exit()