var 快手极速版={};
息屏()
function 息屏(){
    
// ======息屏代码=TOP=====
var w = floaty.rawWindow(
    <frame  id="fra_bg"  gravity="center"  >
       <button id="but" w="*" h="*" bg="#40400000"  layout_gravity="center" gravity="center"/>
    </frame>
 );
 var ww = floaty.rawWindow(
      <frame  id="fra_bg"  gravity="center"  >
         <button id="but" w="80" h="80" bg="#40400000" text="息屏" textColor="#ff0000" textSize="15" layout_gravity="center" gravity="center"/>
      </frame>
 );
 w.setSize(-1, -1);
 w.setTouchable(false);
 var 上滑次数=0
 var 下滑次数=0
 setInterval(()=>{}, 1000);
 ww.but.setOnTouchListener(function(view, event){
      switch(event.getAction()){
           case event.ACTION_DOWN:
                downx = Math.ceil(event.getRawX());
                downy = Math.ceil(event.getRawY());
                log(downx,downx)
                return true;
           case event.ACTION_UP:
                upx = Math.ceil(event.getRawX());
                upy = Math.ceil(event.getRawY());
                log(upx,upy)
                log(upx-downx)
                log(upy-downy)
                if((upy-downy)==0){
                     上滑次数++
                     log(上滑次数%2)
                     toastLog("单击收缩");
                     if(上滑次数%2==1){
                          ww.but.attr("w", "35");
                          ww.but.attr("h", "35");
                     }else{
                          ww.but.attr("w", "80");
                          ww.but.attr("h", "80");
                     } 
                }else if((upy-downy)>50){
                     下滑次数++
                     log(下滑次数%2)
                     toastLog("下滑息屏操作");
                     if(下滑次数%2==1){
                         w.but.attr("bg", "#000000");
                         ww.but.attr("bg", "#000000");
                          }else{
                             w.but.attr("bg", "#40400000");
                             ww.but.attr("bg", "#40400000");
                          }
                     }else  if((upy-downy)<50){
                         exit()}
           return true;
      }
      return true;
 });
 // ======息屏代码=END=====
}
console.show()
console.setPosition(200, 0);



// var path =engines.myEngine().cwd();
// var root =path.slice(0,path.lastIndexOf("/"))
// var 划 = require(root+"/库/人工划屏.js");


var root =engines.myEngine().cwd();
//获取位置，方便在VS测试
if(root="/storage/emulated/0/脚本"){
    var root =root+"/AutoJs/库/"; //当前文件所在的工程位置
}else{
    var root =engines.myEngine().cwd();
}
var intent = require(root+"/funIertent.js");
// log('单例测试 代码；【root】：',root)
var 清理缓存 = require(root+"/清理缓存.js");
var 签到 = require(root+"/签到.js");
var funs = require(root+"/funs.js");
var 学习强国 = require(root+"/学习强国.js");
var ksjsb = require(root+"/快手极速版.js");
var 划 = require(root+"/人工划屏.js");
log('进入===【单例测试】')
var 点赞关注次数=0
// 
// 
准备工作()
// 清除缓存()
var timeshp="10"//随机划屏
function 清除缓存(){
    for(var i=0;i<text('清空').find().size();i++){
        log(text('清空').find().get(i))
        text('清空').find().get(i).click()
        if(text('确定').exists()){
            click('确定')
        }  
        sleep(3000)
    }
}

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
// log(timeout)
var 开关计数="0"
var pl=0
var 主循环=0
var timeStar=0
var dzpl_time=15*60
var tfAll=[true,true,false,false,false,true]
/**
 * 
 * @param {*} ints 赋值true:主程序|评论点赞|日常|看广告|宝箱倒计时|看直播
 */
function tfAlls(ints,tfs){    
    for(var i=0;i<tfAll.length;i++){
        if(ints=='主程序'){tfAlls[0]=tfs}
        if(ints=='评论点赞'){tfAlls[1]=tfs}
        if(ints=='日常'){tfAlls[2]=tfs}
        if(ints=='看广告'){tfAlls[3]=tfs}
        if(ints=='宝箱倒计时'){tfAlls[4]=tfs}
        if(ints=='看直播'){tfAlls[5]=tfs}
    }
}
var 主循环计次=false;
var 来货=[
    ['发现图集',true],
    ['发现图集',true]
]




var hqjbsl=0
//辅助： 查看金币数量
跳开直播=threads.start(function(){    
    while(true){
        sleep(1000)
        // 立即签到
                uiselector=textContains('立即签到')
                if(uiselector.exists()){
                    if(uiselector.findOnce().click()){
                        log('签到成功')
                    }else{
                        rect=uiselector.findOnce().bounds()
                        if(click(rect.centerX(),rect.centerY())){
                            log('签到成功-坐标')
                        }else{
                            log('签到未成功')
                        }
                    }
                }

        // 看广告得金币
        uiselector=textContains('看广告再得')
        if(uiselector.exists()){
            if(uiselector.findOnce().click()){
                log('看广告再得金币')
            }else{
                rect=uiselector.findOnce().bounds()
                if(click(rect.centerX(),rect.centerY())){
                    log('看广告再得金币-坐标')
                }else{
                    log('看广告再得金币   未找到')
                }
            }
        }
        
        // log('=============')
        hqjbsl++
        if(!funs.快手极速版_金币球){
            log('=====金币球不见了====')
        }
        if(hqjbsl%60*25==0){
            // funs.快手极速版_进入日常()
        }
        if(funs.快手极速版_金币()){    
            log('进入日常')
            log(funs.快手极速版_金币())
            funs.存('金币',funs.快手极速版_金币());
            back()
        }
        // log('当前金币数量=',funs.取('金币'))
    }
});


//辅助： 点赞评论
点赞评论=threads.start(function(){
    //在新线程执行的代码
    
    while(true){
        sleep(1000)
        pl++

        ksjsb_我知道了();
        // log(pl,pl%dzpl_time)   //
        if(pl%dzpl_time==0){
            log("【辅助：点赞评论】=")
            ksjsb_点赞();
            sleep(3000)
            ksjsb_评论();
        }
    }
});

//辅助： 跳开直播
跳开直播=threads.start(function(){    
    while(true){
        if(funs.控件_判断是否存在('点击进入直播间')){
            log('【直播间出现 直播tf】=',tfAll[5])            
            ksjsb_下滑() 
        } 
    }
});

//主循环  
while (true) {  
    sleep(1000)
    主循环++       
    if(textContains('＠').findOnce()){
        log(主循环,textContains('＠').findOnce().text(),'<->点赞关注次数=',点赞关注次数)
        log(funs.单前设备管理())
    } 
    if(!funs.toTime_timeout(timeout)){
        log('时间到了')
        log('结束了====')
        console.hide()
        home()
        exit()
    }

    if(funs.快手极速版_金币球){  
        // log('【进入主页 主程序】=')
        random(timeshp, timeshp+4)
        划.划("上", 10,'主程序tf'); 
    }
}



function 准备工作(){   
    while (true) {
        
        idtext='跳过'
        if(funs.控件_判断是否存在(idtext))
            {log(idtext)
                funs.控件_单定位点击(idtext);
            }
    
        sleep(5000)
        if (packageName("com.kuaishou.nebula").exists()) {
            toastLog("启动快手成功")
            sleep(10000)
            // ksjsb.清除缓存();
            break
        }else{
            funs.功能_清理通知()
            funs.功能_关闭全部应用() 
            log("=====进入快手极速版==")
            app.launch("com.kuaishou.nebula")}
    }
}
function ksjsb_我知道了(){    
    var target=className("android.widget.TextView").id("com.kuaishou.nebula:id/positive").text("我知道了").findOnce();
    // log(target)
    if(target){
        toastLog("我知道了 出现")        
        if(target.clickable()){
            target.click();
            toastLog("自己 我知道了 成功")
        }else if(target.parent().clickable()) {
            toastLog("求助老爸 我知道了 成功")
            target.parent().click();
        }else if(target.parent().parent().clickable()) {
            toastLog("求助爷爷 我知道了 成功")
            target.parent().parent().click();
        }else{
            toastLog("不给 我知道了 ，坐标点")
            ksjzb_坐标点击(target)
        }
    }    
}
function ksjsb_发现圈圈(){    
  var target=className("android.view.View").depth("5").indexInParent("2").id("com.kuaishou.nebula:id/circular_progress_bar").findOnce();
  if(target){
      if(target.bounds().centerY()>0 && target.bounds().centerY()<device.height){
          // log("【圈圈还在手机屏幕内】====【速速划屏】")
          // ksjsb_下滑();
      }else{
          log("【圈圈不在手机屏幕内】====【速速划屏】")
          log("发现圈圈")
          log(device.height)
          log(target.bounds().centerY())
          ksjsb_下滑();
      }
  }   else{
    log("【圈圈不见了】====【速速划屏】")
    ksjsb_下滑();
} 
}
function ksjsb_下滑 (){
  log("来货，划一下")
  var gesturesAry=[
      [[0,601,[516,1454],[516,1454],[527,1446],[570,1337],[616,1222],[659,1037],[656,801],[651,681],[643,629],[621,473],[616,411],[616,395],[616,394]]]]
  for(let i=0;i<gesturesAry.length;i++){
      if(i==0){sleep(500);};

      gestures.apply(null, gesturesAry[i]);
  };    
}

function ksjsb_点赞(){    
    var target=className("android.widget.TextView").id("com.kuaishou.nebula:id/like_count_view").findOnce();  
    log(target)
    if(target){
        toastLog("点赞存在")        
        if(target.clickable()){
            target.click();
            toastLog("自己 点赞 成功")
        }else if(target.parent().clickable()) {
            toastLog("求助老爸 点赞 成功")
            target.parent().click();
        }else if(target.parent().parent().clickable()) {
            toastLog("求助爷爷 点赞 成功")
            target.parent().parent().click();
        }else{
            toastLog("不给 点赞 ，坐标点")
            ksjzb_坐标点击(target)
        }
    }    
}
function ksjsb_评论(){   
    //className("android.view.View").depth("13").indexInParent("0").id("com.kuaishou.nebula:id/comment_icon") 
    var target=className("android.view.View").id("com.kuaishou.nebula:id/comment_icon").findOnce();  
    log(target)
    if(target){
        log("评论")        
        if(target.clickable()){
            target.click();
            log("自己 评论 成功")
        }else if(target.parent().clickable()) {
            log("求助老爸 评论 成功")
            target.parent().click();
        }else if(target.parent().parent().clickable()) {
            log("求助爷爷 评论 成功")
            target.parent().parent().click();
        }else{
            log("不给 评论 ，坐标点")
            ksjzb_坐标点击(target)
        }

        log("===开始发飙！！！评论，上机器人")
        sleep(5000)
        var CommentKeyWord = [
            '收集点关注人气，关注了你你要关注我哦！',
            '山高路远坑深，大军纵横驰奔，谁敢横刀立马？点赞加关注！',
            '我的未来不是梦，我相信你也是',
            '身同感受',
            '不错哦',
            '我喜欢',
            '支持，帮相互关注下，感谢。',
            '好看',
            '求关注',
            '点赞',
        ];
        
        let comment = CommentKeyWord[Math.floor(Math.random() * CommentKeyWord.length)];
        log(comment)
        if (id("com.kuaishou.nebula:id/comment_editor_holder_text").exists()) {
            if (id("com.kuaishou.nebula:id/comment_editor_holder_text").findOnce().text()=='仅作者的好友可评论') {
                log('仅作者的好友可评论')
                back() 
             }
            id("com.kuaishou.nebula:id/comment_editor_holder_text").findOnce().click();
            sleep(1000);
            setText(0, comment);
            sleep(1000);
            if (text("发送").exists()) {
                toastLog("开启自动评论");
                if (text("发送").findOnce().click()) {
                    toastLog("自动评论成功");
                    点赞关注次数++
                    sleep(3000)
                    back();
                }
            }
        }

    }    
}
module.exports=快手极速版;