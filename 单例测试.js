var root =files.cwd()
if(files.cwd()=="/storage/emulated/0/脚本") {
log('VScode 直接运行，测试辅助定位')
   root=files.join(files.cwd(),"Autojs")
   }
//对应添加项目文件目录及对应的文件 ： var 快手之直播path=root+"/视频/快手极速版/快手极速版.js"
var funs = require(root+"/库/funs.js");

while(true){
    if(funs.控件_单_位置_居中('观看广告单日最高可得10000金币')){
        uiobject=funs.控件_判断是否存在_正则('观看广告单日最高可得10000金币');
        // log(uiobject)
        if(uiobject){
            log(uiobject.text())
            if(funs.控件_点击(uiobject)){
                funs.广告("快手悬赏")
            }
        }   

    }else if(funs.控件_单_位置_居中('每次110金币，海量主播发福利')){   
        uiobject=funs.控件_判断是否存在_正则('每次110金币，海量主播发福利');
        if(uiobject){
            log(uiobject.text())
            if(funs.控件_点击(uiobject)){
                funs.倒计时('直播',65)
                back()
            }
        }   }
    

}
exit()