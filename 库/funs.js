var funs = {};

funs.获取路径 = function (strs) {
    var root = engines.myEngine().cwd();
    if (root = "/storage/emulated/0/脚本") {
        var root = root + strs; //当前文件所在的工程位置
    } else {
        var root = engines.myEngine().cwd();
    }
    return root;
}
funs.参数 = function (uiobject) {
    log(uiobject)
    log('没有传内容')
}
funs.参数 = function (uiobject, logStr) {
    log(uiobject)
    log(logStr)
}
funs.功能_关闭全部应用=function(){
    home()
    sleep(1000)
    recents()
    sleep(1000)

    // click('全部关闭') //索爱
    if(id("recents_close_all_button").exists()){
        id("recents_close_all_button").findOnce().click()
    }else{home()}
    if(id("clearAnimView").exists()){
        id("clearAnimView").findOnce().click() //小米note 4x
    }else{home()}
}
funs.功能_清理通知=function(){
    home()
    sleep(1000)
    notifications()
    sleep(1000)
    
    if(android.os.Build.MODEL=='SM-G9300'){
        if(!click('清除')){
            home()
        }
    }
    if(android.os.Build.MODEL=='Redmi Note 4X'){click(534,1724)}
    
}
funs.控件_更新控件 = function (uiobject) {
    uiobject_id = id(uiobject_str1).findOnce();
    uiobject_text = text(uiobject_str1).findOnce();
    uiobject_desc = desc(uiobject_str1).findOnce();
    if (uiobject_id) {
        return uiobject_id;
    } else if (uiobject_text) {
        return uiobject_text;
    } else if (uiobject_desc) {
        return uiobject_desc;
    } else {
        return null;
    }
}


funs.getApiLevel =function() {//获取系统API级别
    return android.os.Build.VERSION.SDK_INT;
  }
  
  funs.getSysDevelopmentCode =function() {//获取系统开发代号
    return android.os.Build.VERSION.CODENAME;
  }
  
  funs.getSystemVersion =function() {//获取系统版本
    return android.os.Build.VERSION.RELEASE;
  }
  
  funs.getDeviceUser =function() {//获取设备用户名
    return android.os.Build.USER;
  }
  
  funs.getDeviceVersionType =function() {//获取设备版本类型
    return android.os.Build.TYPE;
  }
  
  funs.getTime =function() {//获取系统时间
    return android.os.Build.TIME;
  }
  
  funs.getDeviceTags =function() {//获取设备标签
    return android.os.Build.TAGS;
  }
  
  funs.getProductName =function() {//获取产品名称
    return android.os.Build.PRODUCT;
  }
  
  funs.getManufacturer =function() {//获取制造商名称
    return android.os.Build.MANUFACTURER;
  }
  
  funs.getDeviceModel =function() {//获取设备型号
    return android.os.Build.MODEL;
  }
  
  funs.getDeviceVersion =function() {//获取设备版本号
    return android.os.Build.ID;
  }
  
  funs.getHost =function() {//获取主机地址
    return android.os.Build.HOST;
  }
  
  funs.getUniqueID =function() {//获取设备唯一标识
    return android.os.Build.FINGERPRINT;
  }
  
  funs.getDeviceName =function() {//获取设备驱动名称
    return android.os.Build.DEVICE;
  }
  
  funs.getCpuType =function() {//获取CPU第一个指令集名称
    return android.os.Build.CPU_ABI;
  }
  
  funs.getCpuType2 =function() {//获取CPU第二个指令集名称
    return android.os.Build.CPU_ABI2;
  }
  
  funs.getDeviceBrand =function() {//获取设备品牌;
    return android.os.Build.BRAND;
  }
  
  funs.getBootLoader =function() {//获取设备引导程序版本号
    return android.os.Build.BOOTLOADER;
  }
  funs.单前设备管理 =function (){
    if(device.serial=='defbd47c0903'){
        // log('18070737164')
        return'18070737164'
    }
    if(device.serial=='30ea67cb'){
        // log('18070737264')
        return '18070737264'
    }
    if(device.serial=='41e8d596'){
        // log('17114713590')
        return'17114713590'
    }
    if(device.serial=='6d2c28d8'){  //72ec0548
        // log('17114713591')
        return'17114713591'
    }
    if(device.serial=='0564b4d8 '){
        // log('16570875484')
        return'16570875484'
    }
    
  }

funs.下滑 = function () {
    log("来货，划一下,下滑")
    x = device.width * 0.5
    y = device.height * 0.5
    this.sml_move(x - 30, y - 200, x + 30, y + 200, 500)
}
funs.上滑 = function (logStr) {
    log(logStr, "来货，划一下,上滑")
    x = device.width * 0.5
    y = device.height * 0.5
    this.sml_move(x + 30, y + 200, x - 30, y - 200, 500)
}

funs.点击= function (x, y){
    console.setPosition(x, y);
    click(x,y)
}


funs.控件_遍历_返回数组 = function (json, arr) {
    for (var i = 0; i < json.childCount(); i++) {
        var sonList = json.child(i);
        if (sonList.childCount() == 0) {
            arr.push(json.child(i));
        } else {
            this.控件_遍历_返回数组(sonList, arr);
        }
    }
    return arr;
}
funs.控件_判断是否存在_正则 = function (uiobj) {
    var uiobject_text = textContains(uiobj).findOnce();
    // log(uiobject_text)
    if (uiobject_text) {
        return uiobject_text;
    } else {
        return null;
    }

}

funs.控件_判断是否存在 = function (uiobj) {
    uiobject_id = id(uiobj).findOnce();
    uiobject_text = text(uiobj).findOnce();
    uiobject_desc = desc(uiobj).findOnce();
    if (uiobject_id) {
        return uiobject_id;
    } else if (uiobject_text) {
        return uiobject_text;
    } else if (uiobject_desc) {
        return uiobject_desc;
    } else {
        return null;
    }

}

funs.控件_单定位点击 = function (uiobject_str) {
    // log("控件_单定位点击=",uiobject_str)
    uiobject_id = id(uiobject_str).findOnce();
    uiobject_text = text(uiobject_str).findOnce();
    uiobject_desc = desc(uiobject_str).findOnce();
    if (uiobject_id) {
        uiobject = uiobject_id;
        uiobject_str = uiobject.id();
        // log('id==',uiobject)
    } else if (uiobject_text) {
        uiobject = uiobject_text;
        uiobject_str = uiobject.text();
        // log('text==',uiobject)        
    } else if (uiobject_desc) {
        uiobject = uiobject_desc;
        uiobject_str = uiobject.desc();
        // log('desc==',uiobject)       
    }

    if (uiobject) {
        objkj = uiobject;
        if (objkj.clickable()) {
            log('本控件')
            objkj.click();
            return objkj;
        } else {
            // log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('坐标点击')
            log(x, y)
            log(x + z1, y + z2)
            click(x + z1, y + z2)

            return objkj;
        }
    }
    if (uiobject.parent()) {
        objkj1 = uiobject.parent();
        if (objkj1.clickable()) {
            log('1层父控件')
            objkj1.click();
            return objkj1;
        } else {
            log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    }
    if (uiobject.parent().parent()) {
        objkj2 = uiobject.parent().parent()
        if (objkj2.clickable()) {
            log('2层父控件！')
            objkj2.click();
            return objkj2;
        } else {
            log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    };
    if (uiobject.parent().parent().parent()) {
        objkj3 = uiobject.parent().parent().parent();
        if (objkj3.clickable()) {
            log('3层父控件！')
            objkj3.click();
            return objkj3;
        } else {
            log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    };
    if (uiobject.parent().parent().parent().parent()) {
        objkj4 = uiobject.parent().parent().parent().parent();
        if (objkj4.clickable()) {
            log('4层父控件！')
            objkj4.click();
            return objkj4;
        } else {
            log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    };


}

funs.控件_双重定位 = function (uiobject_str1, uiobject_str2,mun) {
    uiobject1 = textContains('福利').find()
    for (var i = 0; i < uiobject1.size(); i++) {
        uiobject2 = textContains('观看广告单日最高').find()
        for (var j =0; j <uiobject2.size() ; j++) {   
            y1=uiobject1.get(i).bounds().centerY()
            y2=uiobject2.get(j).bounds().centerY()     
            if(Math.abs(y2-y1)<100){
                log(uiobject1.get(i).text(),uiobject1.get(i).bounds().centerY())
                log(uiobject2.get(j).text(),uiobject2.get(j).bounds().centerY())
                log('=== %d ===',Math.abs(y1-y2))  
                uiobject11=uiobject1.get(i)
                uiobject22=uiobject2.get(j)
                log(uiobject1.get(i)) 
                log(uiobject2.get(j)) 
            }
        }
    }


    if(mun=='1'){return uiobject11}
    if(mun=='2'){return uiobject22}
}

 funs.打开app=function(appName){
    if(appName='快手极速版'){
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
}

funs.进入日常任务=function(appName){
    if(appName='快手极速版'){
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
}
funs.控件_双_位置_居中 = function (uiobject_str1, uiobject_str2, logStr) {
    while (true) {
        sleep(800)
        uiobject = funs.控件_双字符定位(uiobject_str1, uiobject_str2)
        if (uiobject) {
            移动距离 = uiobject.bounds().centerY() - (device.height * 0.5)
            if (移动距离 > 300) {
                this.上滑(logStr)
            } else if (移动距离 < -300) {
                this.下滑(logStr)
            } else {
                log(logStr, '在中间了哦...')

                log(uiobject.bounds().centerX(), uiobject.bounds().centerY())
                click(uiobject.bounds().centerX(), uiobject.bounds().centerY())
                return true;
            }
        } else {
            return null;
        }
    }
    // log(移动距离)



}
funs.手机号=function(){
    var arr = files.listDir('/storage/emulated/0/脚本')
   for (var i = 0; i < arr.length; i++) {
      if(arr[i].indexOf("手机号")>=0){
         log("发现一例:");
         funs.存('手机号',files.read('/storage/emulated/0/脚本/'+arr[i],encoding = "UTF-8"));
     }else{log('请初始化手机号js')}
   }
}
funs.广告=function(logs){
    idtext='后可领取奖励'
    if(funs.控件_判断是否存在_正则(idtext))
    {
        log('发现【后可领取奖励】进入广告.....')
        // log(funs.控件_判断是否存在_正则(idtext))
        str1=funs.控件_判断是否存在_正则(idtext).text()
        if(str1){
            log(logs,'倒计时：',funs.time_提取秒(str1))
            this.倒计时('倒计时=',random(funs.time_提取秒(str1)+6,funs.time_提取秒(str1)+7))
            log('领取成功'); 
            back();
            
        }  
    }


   //直播金币倒计时
   if(className("android.widget.TextView")
   .id("com.kuaishou.nebula:id/award_count_down_text")
   .exists()){
      log('发现 直播金币倒计时。开始倒计时')
      var target=className("android.widget.TextView")
      .id("com.kuaishou.nebula:id/award_count_down_text")  
      .findOnce()
      log(target.text())
      log(funs.time_提取秒(target.text()))
      this.倒计时('倒计时=',random(funs.time_提取秒(target.text())+6,funs.time_提取秒(target.text())+7))
      log('领取成功'); 
      
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
            back();
            log('没有发现 退出1')
            }
   
   }else{
      log('没有发现 直播金币倒计时')
   }

    // else{log("没发现广告")}
}
funs.控件_单_位置_居中 = function (uiobject_str1, logStr) {
    while (true) {
        sleep(800)
        
        uiobject = textContains(uiobject_str1).findOnce()
        if (uiobject) {
            // log(uiobject)
            // log(uiobject.bounds().centerY())
            移动距离 = uiobject.bounds().centerY() - (device.height * 0.5)
            if (移动距离 > 300) {
                this.上滑(logStr)
            } else if (移动距离 < -300) {
                this.下滑(logStr)
            } else {
                log(logStr, '在中间了哦...')

                // log(uiobject.bounds().centerX(), uiobject.bounds().centerY())
                // click(uiobject.bounds().centerX(), uiobject.bounds().centerY())
                return true;
            }
        } else {
            return null;
        }
    }
    // log(移动距离)



}
funs.queryList = function (json, arr) {
    for (var i = 0; i < json.childCount(); i++) {
        var sonList = json.child(i);
        if (sonList.childCount() == 0) {
            arr.push(json.child(i));
        } else {
            this.queryList(sonList, arr);
        }
    }
    return arr;
}

var arr = [];//初始化
var uiarr = [];//初始化

/**
 * 
 * @param {*} uiobject_str1 
 * @param {*} uiobject_str2 
 * @returns 返回控件
 */
funs.控件_更新 = function (uiobject_str1, uiobject_str2) {
    uiobject = text(uiobject_str1).find();
    //  log('控件更新-',uiobject)
    // uiobject=text(uiobject_str1).findOnce()
    // log('控件更新-',uiobject.size())
    // log('控件更新-',uiobject)
    var uiobjecttrue = "";


    for (var i = 0; i < uiobject.size(); i++) {
        uiobjectmun = text(uiobject_str1).find().get(i)
        log("=======================\n")
        log("=====更新查找，第", i, '个控件')
        log(uiobjectmun.text())
        log("=====更新查找-循环下")
        // log(uiobjectmun.parent().parent())  
        uiobjectp = uiobjectmun.parent().parent().parent()
        // for (var i = 0; i < uiobjectp.childCount(); i++) {
        //     var sonList = uiobjectp.child(i);
        //     log(sonList.text())
        //     if (sonList.text().indexOf(uiobject_str2)>=0) {
        //         log(sonList);
        //         break;
        //     } else {
        //         json=uiobjectp.child(i)
        //         for (var i = 0; i < json.childCount(); i++) {
        //             var sonList = json.child(i);
        //             log(sonList.text())
        //             if (sonList.text().indexOf(uiobject_str2)>=0) {
        //                 log(sonList);
        //                 break;
        //             } 
        //         }
        //     }
        // }






        log(uiobjectp.childCount())
        for (var j = 0; j < uiobjectp.childCount(); j++) {
            var sonList = uiobjectp.child(j);
            if (sonList.childCount() == 0) {
                log(uiobjectp.child(j).text());
                log(uiobjectp.child(j).text().indexOf(uiobject_str2))
                if (uiobjectp.child(j).text().indexOf(uiobject_str2) >= 0) {

                    log("======找到控件======");
                    log(uiobjectp.child(j).text());
                    log(uiobjectmun);
                    uiobjecttrue = uiobjectmun
                    // uiobject.click()
                    break;
                }


            }
        }
        this.queryList(uiobjectp, uiarr)
        for (var k = 0; k < uiarr.length; k++) {
            log(uiarr[k])
        }


        if (uiobjecttrue) {
            log('双重查找中找到控件=========================', uiobjectmun);
            return uiobjectmun;
        } else {
            return null;
        }
    }

}
funs.控件_更新_text = function (uiobject_str1, uiobject_str2) {
    uiobject = textContains(uiobject_str1).find();
    log('控件更新-', uiobject)
    // uiobject=text(uiobject_str1).findOnce()
    // log('控件更新-',uiobject.size())
    // log('控件更新-',uiobject)
    var uiobjecttrue = "";
    for (var i = 0; i < uiobject.size(); i++) {
        uiobjectmun = textContains(uiobject_str1).find().get(i)
        log("=======================\n")
        log("=====更新查找，第", i, '个控件')
        log(uiobjectmun.text(), "===》寻找兄弟节点")
        log("=====更新查找-循环下")
        // log(uiobjectmun.parent().parent())  
        uiobjectp = uiobjectmun.parent()
        //    uiobjectp=uiobjectmun.parent().parent()
        // log(uiobjectp.childCount())
        for (var j = 0; j < uiobjectp.childCount(); j++) {
            var sonList = uiobjectp.child(j);
            if (sonList.childCount() == 0) {
                log(uiobjectp.child(j).text());
                log(uiobjectp.child(j).text().indexOf(uiobject_str2))
                if (uiobjectp.child(j).text().indexOf(uiobject_str2) >= 0) {

                    log("======找到控件======");
                    log(uiobjectp.child(j).text());
                    log(uiobjectmun);
                    uiobjecttrue = uiobjectmun
                    // uiobject.click()
                    break;
                }

            }
        }
        if (uiobjecttrue) {
            log('双重查找中找到控件=========================', uiobjectmun);
            return uiobjectmun;
        } else {
            return null;
        }
    }

}


funs.控件_双字符定位 = function(uiobject_str1,uiobject_str2){
    uiobject1 = textContains(uiobject_str1).find()
    for (var i = 0; i < uiobject1.size(); i++) {
        uiobject2 = textContains(uiobject_str2).find()
        for (var j =0; j <uiobject2.size() ; j++) {   
            x1=uiobject1.get(i).bounds().centerX()  
            y1=uiobject1.get(i).bounds().centerY()
            y2=uiobject2.get(j).bounds().centerY()     
            if(Math.abs(y2-y1)<100){
                // log(uiobject1.get(i).text(),uiobject1.get(i).bounds().centerY())
                // log(uiobject2.get(j).text(),uiobject2.get(j).bounds().centerY())
                // log(uiobject1.get(i).bounds())
                // log(uiobject2.get(j).bounds())
                // log('=== %d ===',Math.abs(y1-y2))  
                uiobject11=uiobject1.get(i)
                uiobject22=uiobject2.get(j)
                return uiobject11
            }
        }
    }
}


funs.息屏=function() {
    
//bg="#000000"  #40400000
var w = floaty.rawWindow(
    <frame  id="fra_bg"  gravity="center"  > 
    <button id="but" w="*" h="*" bg="#000000" text="+" textColor="#ff0000"textSize="30" layout_gravity="center"gravity="center"/>
    </frame>
);

    w.setSize(-1, -1);
    w.setTouchable(true);
    //长按关闭
    var 单击次数=0
    w.fra_bg.click(function(){
        单击次数++
        log(单击次数%2)
        toastLog("单击");
        if(单击次数%2==0){
            w.but.attr("bg", "#40400000");
            // w.setTouchable(false);
        }else{
            w.but.attr("bg", "#000000");
            // w.setTouchable(true);
        }
    });
    
    setInterval(()=>{}, 1000);
}
    



funs.控件_中心坐标= function (uiobject){ 
       
    x = objkj.bounds().centerX();
    y = objkj.bounds().centerY();
    z1 = random(-10, 10)
    z2 = random(-10, 10)
    
    log((x + z1)+'|'+ (y + z2))
    return (x + z1)+'|'+ (y + z2)

}
funs.控件_坐标点击 = function (uiobject) {
    if (uiobject) {
        objkj = uiobject;
        if (objkj.clickable()) {
            log('本控件')
            objkj.click();
            return objkj;
        } else {
            // log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-10, 10)
            z2 = random(-10, 10)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    }
}

funs.控件_点击 = function (uiobject) {
    if (uiobject) {
        objkj = uiobject;
        if (objkj.clickable()) {
            log('本控件')
            objkj.click();
            return objkj;
        } else {
            // log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            // this.标记_xy(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }



        
    } 
    if (uiobject.parent()) {
        objkj1 = uiobject.parent();
        if (objkj1.clickable()) {
            log('1层父控件')
            objkj1.click();
            return objkj1;
        } else {
            log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            // this.标记_xy(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    }
    if (uiobject.parent().parent()) {
        objkj2 = uiobject.parent().parent()
        if (objkj2.clickable()) {
            log('2层父控件！')
            objkj2.click();
            return objkj2;
        } else {
            log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            // this.标记_xy(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    };
    if (uiobject.parent().parent().parent()) {
        objkj3 = uiobject.parent().parent().parent();
        if (objkj3.clickable()) {
            log('3层父控件！')
            objkj3.click();
            return objkj3;
        } else {
            log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    };
    if (uiobject.parent().parent().parent().parent()) {
        objkj4 = uiobject.parent().parent().parent().parent();
        if (objkj4.clickable()) {
            log('4层父控件！')
            objkj4.click();
            return objkj4;
        } else {
            log(objkj)
            x = objkj.bounds().centerX();
            y = objkj.bounds().centerY();
            z1 = random(-20, 20)
            z2 = random(-20, 20)
            //随机子增减
            log('都没有可以点击的！找坐标吧')
            log(x, y)
            log(x + z1, y + z2)
            log('点击')
            click(x + z1, y + z2)

            return objkj;
        }
    };
}

funs.当前app = function () {
    if (currentPackage() == 'org.autojs.autojs') {
        log('当前app=【 auto.js 】')
        return 'auto.js'
    }
    if (currentPackage() == 'com.kuaishou.nebula') {
        log('当前app=【 快手极速版 】')
        return '快手极速版'
    }
    if (currentPackage() == 'com.miui.home') {
        log('当前app=【 小米桌面 】')
        return '小米桌面'
    }
    if (currentPackage() == 'com.android.systemui') {
        log('当前app=【 小米系统UI 】')
        return '小米系统UI'
    }
    if (currentPackage() == 'cn.xuexi.android') {
        log('当前app=【 学习强国 】')
        return '学习强国'
    }
    if (currentPackage() == 'com.taobao.taobao') {
        log('当前app=【 淘宝 】')
        return '淘宝'
    }
    if (currentPackage() == 'com.taobao.litetao') {
        log('当前app=【 淘宝极速版 】')
        return '淘宝极速版'
    }
}
funs.启动app = function (appName) {
    // var appName="学习强国"
    app.launchApp(appName);
}

funs.当前界面_添加测试 = function () {
    log(currentPackage())
    log(currentActivity())
    log(funs.当前app());
    log(funs.当前界面());
}
funs.time_提取秒 = function (timeStr) {
    time1 = timeStr.substr(0, timeStr.indexOf("后可领取奖励"))
    time2 = timeStr.substr(0, timeStr.indexOf(":"))
    time3 = timeStr.substr(0, timeStr.indexOf("分"))
    if (time2 > 0)//判断是不是:时间
    {
        timeS = parseInt(timeStr.substr(0, timeStr.indexOf(":")) * 60) + parseInt(timeStr.substr(timeStr.indexOf(":") + 1, 2))
        if (timeS > 120) {
            // log(':-timeS>120', timeS)
            return timeS
        } else {
            return timeS
        }


    }
    if (time1 > 0)//判断是不是  后可领取奖励
    {
        Ntrs = timeSts.indexOf("s")
        timeS = timeSts.substr(0, Ntrs)
        log('后可领取奖励-timeS', timeS)
        return timeS

    }
    if (time3 > 0)//判断是不是  后可领取奖励
    {
        Ntrs = timeStr.indexOf("分")
        // log('后可领取奖励-timeS',timeS)
        // log(timeStr.indexOf("秒"))  
        // log("提取分折算秒数=",timeStr.substr(0,timeStr.indexOf("分"))*60)
        // log("提取秒数=",timeStr.substr(timeStr.indexOf("分")+1,2))
        timeS = parseInt(timeStr.substr(0, timeStr.indexOf("分")) * 60) + parseInt(timeStr.substr(timeStr.indexOf("分") + 1, 2))
        // log(timeS)

        return timeS

    }

    return parseInt(timeStr.substr(0, timeStr.indexOf(":")) * 60) + parseInt(timeStr.substr(timeStr.indexOf(":") + 1, 2))

}







funs.当前界面 = function () {
    //【===日常===】
    idtext = [
        '活动规则',
        '开宝箱得金币',
        '每次100金币',
        '每次100金币，每天1000金币',
        '每次100金币，每天2000金币',
        '今日已成功领取直播奖励金币',
        '明天看视频继续领取',
        '观看经常直播得110金币'
    ]
    for (var i = idtext.length - 1; i >= 0; i--) {
        // log("idtext 控件存在=",idtext[i])
        if (funs.控件_判断是否存在_正则(idtext[i])) {
            log('控件存在判断日常界面：', idtext[i])
            return "日常";
        }
    }
    //【===看广告===】
    idtext = [
        '后可领取奖励'
    ]
    for (var i = idtext.length - 1; i >= 0; i--) {
        // log("idtext 控件存在=",idtext[i])
        if (funs.控件_判断是否存在_正则(idtext[i])) {
            // log(idtext[i])
            return "看广告";
        }
    }//【===直播间===】
    idtext = [
        '点击进入直播间'
    ]
    for (var i = idtext.length - 1; i >= 0; i--) {
        // log("idtext 控件存在=",idtext[i])
        if (funs.控件_判断是否存在_正则(idtext[i])) {
            // log(idtext[i])
            return "直播";
        }
    }
    //【===看广告===】
    idtext = [
        '后可领取奖励'
    ]
    for (var i = idtext.length - 1; i >= 0; i--) {
        // log("idtext 控件存在=",idtext[i])
        if (funs.控件_判断是否存在_正则(idtext[i])) {
            // log(idtext[i])
            return "看广告";
        }
    }

    //【===首页===】
    idtext = [
        '下拉刷新内容'
    ]
    for (var i = idtext.length - 1; i >= 0; i--) {
        // log("idtext 控件存在=",idtext[i])
        if (funs.控件_判断是否存在_正则(idtext[i])) {
            // log(idtext[i])
            return "首页";
        }
    }

    idtext = [
        'com.kuaishou.nebula:id/circular_progress_bar',
        'com.kuaishou.nebula:id/sidebar_top_area',
        'com.kuaishou.nebula:id/sidebar_right_top_text',
        'com.kuaishou.nebula:id/thanos_pull_to_refresh_text'

    ]
    for (var i = idtext.length - 1; i >= 0; i--) {
        // log("idtext 控件存在=",idtext[i])
        if (funs.控件_判断是否存在(idtext[i])) {
            // log(idtext[i])
            return "首页";
        }
    }
    idtext = [
        '未成年保护工具',
        '关闭挂件',
        '直播广场',
        '扫一扫',
        '大家都在看'
    ]
    for (var i = idtext.length - 1; i >= 0; i--) {
        // log("idtext 控件存在=",idtext[i])
        if (funs.控件_判断是否存在_正则(idtext[i])) {
            // log(idtext[i])
            return "设置";
        }
    }
    return "未知";


    // if(currentPackage()=='cn.xuexi.android'
    // && currentActivity()=='android.widget.FrameLayout'){
    //         // log('学习强国 【首页】')
    //         return '学习强国首页'
    //     }
    // if(currentPackage()=='cn.xuexi.android'
    // && currentActivity()=='com.alibaba.lightapp.runtime.activity.CommonWebViewActivity'){
    //     // log('学习强国 【学习积分】')
    //     return '学习强国学习积分'
    // }
    // if(currentPackage()=='com.kuaishou.nebula'
    // && currentActivity()=='com.yxcorp.gifshow.HomeActivity'){
    //         // log('快手极速版 【首页】')
    //         return '快手极速版首页'
    //     }
    //     if(currentPackage()=='com.kuaishou.nebula'
    //         && currentActivity()=='androidx.slidingpanelayout.widget.SlidingPaneLayout'){
    //             // log('快手极速版 【菜单栏】')
    //             return '快手极速版菜单栏'
    //         }

    // if(currentPackage()=='com.kuaishou.nebula'
    //     && currentActivity()=='androidx.slidingpanelayout.widget.SlidingPaneLayout'){
    //         // log('快手极速版 【菜单栏】')
    //         return '快手极速版日常'
    //     }


    // if(currentPackage()=='com.kuaishou.nebula'
    //     && currentActivity()=='com.yxcorp.gifshow.detail.PhotoDetailActivity'){
    //         // log('快手极速版 【菜单栏】')
    //         return '快手极速版直播'
    //     }



    // // 判断方式一：控件判断
    // idtext1='金币收益'           
    // idtext2='可用抵用金（张）'           
    // idtext3='金币每日凌晨自动兑换成抵用金'
    // IsNot_ksjsbRc1=false;
    // if(funs.控件_判断是否存在(idtext1)
    // &&funs.控件_判断是否存在(idtext2)
    // &&funs.控件_判断是否存在(idtext3)){
    //     // log('进入快手极速版KJ==【日常界面】')
    //     IsNot_ksjsbRc1=true;
    // }
    // // 判断方式二：Activity判断法
    // IsNot_ksjsbRc2=false;
    // if(currentPackage()=='com.kuaishou.nebula'
    // && currentActivity()=='com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity'){
    //     IsNot_ksjsbRc1=true;
    // }
    // if(IsNot_ksjsbRc1 || IsNot_ksjsbRc2){
    //     // log('快手极速版 【日常】')
    //     return '快手极速版日常'
    // }
}




/**
 * 
 * @param {*} msg toastAt('sdfsfdsdfs',300,300)
 * @param {*} x 重新定义toast的x坐标
 * @param {*} y 重新定义toast的y坐标
 */
funs.toastAt0 = function (msg, x, y) {
    importClass(android.widget.Toast);
    importClass(android.view.Gravity);
    var toast = Toast.makeText(context, msg, Toast.LENGTH_SHORT);
    toast.setGravity(Gravity.TOP | Gravity.LEFT, x, y);
    toast.show();
}

funs.toastAt = function (msg, x, y) {
    ui.run(() => this.toastAt0(msg, x, y));
}



// 返回 true 表示锁定
funs.屏幕是否锁屏 = function () {
    let km = context.getSystemService("keyguard");
    return km.inKeyguardRestrictedInputMode();
};
// log(isScreenLocked())


funs.切换指针 = function () {
    app.startActivity({
        action: "android.intent.action.VIEW", //此处可为其他值
        packageName: "com.android.settings",
        className: "com.android.settings.Settings$DevelopmentSettingsActivity"
        //此处可以加入其他内容，如data、extras
    });
    sleep(200);
    while (!textContains("指针位置").exists()) {
        //sleep(50);
        scrollDown();
        sleep(100);
    }
    var zz = textContains("指针位置").findOne(5000);
    if (zz) {
        log('发现指针')
        sleep(8000)
    }


}
funs.存 = function (stostr, stostrs) {
    var woolStorage = storages.create("huangshao_yi@163.com");//创建本地存储
    woolStorage.put(stostr, stostrs);
}
funs.取 = function (stostr) {
    var woolStorage = storages.create("huangshao_yi@163.com");//创建本地存储
    return woolStorage.get(stostr);
}

funs.测试模块是否可用 = 'funs,模块可用';
// funs.切换指针=切换指针();
// funs.清理通知栏=清理通知栏();

funs.清理通知栏 = function () {
    // notifications()  //拉出通知栏。返回是否执行成功。 此函数依赖于无障碍服务
    quickSettings()//显示快速设置(下拉通知栏到底)。返回是否执行成功
    sleep(2000)
    if (device.model == 'Redmi Note 4X') {
        log('这是：Redmi Note 4X   手机')
        // click((409+671)/2,1(598+1860)/2);
        id("com.android.systemui:id/dismiss_view").findOne().click()
    }
    if (device.model == 'KSA-AL10') {
        log('这是：KSA-AL10   手机')
        // id("clear_all_recents_image_button").findOne().click()
        click(363, 1345)

    }
    if (device.model == 'M5 Note') {
        log('这是：meizu_M5 Note   手机')
        sleep(3000)
        //不关闭当前APP
        click(530, 1700)
    }

    if (device.model == 'HM NOTE 1S') {
        log('这是：HM NOTE 1S   手机')
        sleep(3000)
        //不关闭当前APP
        click(device.width * 0.96, device.height * 0.9)
    }

}
var dzmun = 0
funs.点赞 = function (strmun) {

    if (strmun % 20 == 0) {//整除20，除尽，进入0:0 20:0 40:0 60:0 80:0      
        划.划("下", 0.8)
        划.划("下", 0.8)
        if (textContains('点击进入直播间')) {
            划.划("下", 0.8)
        }
        var gesturesAry = [[[0, 151, [510, 764], [510, 764], [510, 764], [510, 764]]], [[0, 101, [510, 764], [510, 764], [510, 764]]]]
        for (let i = 0; i < gesturesAry.length; i++) {
            if (i == 0) { sleep(500); };
            if (i == 1) { sleep(0 * 1000); };

            gestures.apply(null, gesturesAry[i]);
        };
        log('点赞' + dzmun + '次')
    }
}
funs.清理应用 = function () {
    sleep(2000)
    // 先进入Auto.js ,在关闭应用，meizu_M5 Note 就用这种情况
    home()
    sleep(2000)
    recents()  //显示最近任务。返回是否执行成功。 此函数依赖于无障碍服务。
    sleep(2000)
    // 清理应用
    if (device.model == 'Redmi Note 4X') {
        log('这是：Redmi Note 4X   手机')
        id("clearAnimView").findOne().click()
    }
    if (device.model == 'KSA-AL10') {
        log('这是：KSA-AL10   手机')
        id("clear_all_recents_image_button").findOne().click()
    }
    if (device.model == 'M5 Note') {
        log('这是：meizu_M5 Note   手机')
        sleep(5000)
        //不关闭当前APP
        click(530, 1700)
    }

    if (device.model == 'HM NOTE 1S') {
        log('这是：HM NOTE 1S   手机')
        sleep(3000)
        //不关闭当前APP
        click(530, 1700)
    }

}
funs.IntTime = function () {
    //网络北京时间
    try {
        var recode_suning = http.get("http://quan.suning.com/getSysTime.do");
        var suningTime = recode_suning.body.json();
        sunt = suningTime.sysTime1;
        return sunt.substr(0, 4) + "-" +
            sunt.substr(4, 2) + "-" +
            sunt.substr(6, 2) + " " +
            sunt.substr(8, 2) + ":" +
            sunt.substr(10, 2) + ":" +
            sunt.substr(12, 2)
    } catch (e) { }
}

funs.AddTime = function (n,date) {
    // var date = new Date();
    var reallyNumbers = date.match(/\d+/g).map(Number);
    log(reallyNumbers)
    var date = new Date(
        parseInt(reallyNumbers[0]), 
        parseInt(reallyNumbers[1])-1, 
        parseInt(reallyNumbers[2]), 
        '21',  
        '49', 
        '00'); 
　　date.setDate(date.getDate()+n-1);       
    //手机本地时间
    return new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(date);
}
funs.toTime = function () {
    //手机本地时间
    return new java.text.SimpleDateFormat("yyyyMMddHHmmss").format(new Date());
}
funs.SimpleDateFormat = function (newDate) {
    //手机本地时间
    return new java.text.SimpleDateFormat("yyyyMMddHHmmss").format(newDate);
}
funs.toTimeyyyyMMdd = function () {
    //手机本地时间
    return new java.text.SimpleDateFormat("yyyyMMdd").format(new Date());
}
funs.toTimeyyyy_MM_dd = function () {
    //手机本地时间
    return new java.text.SimpleDateFormat("yyyy-MM-dd").format(new Date());
}
funs.toTimeHHmmss = function () {
    //手机本地时间
    return new java.text.SimpleDateFormat("HHmmss").format(new Date());
}

funs.倒计时 = function (Strs, timestr) {
    for (var i = timestr; i > 0; i--) {
        sleep(1000)
        log(Strs, i)
    }
}

funs.toTime_timeout = function (ntime) {
    // 调用方法
    // ntime = 20210823090700;  //多两位数
    log("ntime",ntime)    //超期时间，到时间返回false
    // log('toTime()',this.toTime())  //当前时间
    // log('IntTime()',this.IntTime() )
    // log(' ntime-this.toTime()',ntime-this.toTime() )
    // log(' ntime-this.IntTime()',ntime-this.IntTime() )
    // log(this.toTime() < ntime)
    // log(this.IntTime() < ntime)
    if (this.toTime() < ntime ) {  //|| this.IntTime() < ntime
        // toastLog("正常");
        return true;
    } else {
        // toastLog("已过期");
        return false;
    }

}


funs.标记_xy = function (x, y) {
    var w = floaty.window(
        <frame gravity="center">
            <text id="text" colors='red'>点击</text>
        </frame>
    );
    w.setPosition(x, y);
    setTimeout(() => {
        w.close();
    }, 2000);
}
funs.标记_bounds = function (position) {
    let left = position[0];
    let top = position[1];
    let right = position[2];
    let bottom = position[3];



    var window = floaty.rawWindow(
        <canvas id="board"
            h="{{device.height}}"
            w="{{device.width}}"
        />
    );


    window.setTouchable(false);
    setInterval(() => { }, 3000)
    paint = new Paint()
    paint.setStrokeWidth(5);
    paint.setColor(-28707)
    paint.setStyle(Paint.Style.STROKE);
    window.board.on("draw", function (canvas) {
        canvas.drawRect(left, top, right, bottom, paint)
        // canvas.drawRect(0,0,300,300,paint)
    });

    setTimeout(() => {
        window.close();
    }, 3000);
}


funs.快手极速版_金币球 = function () {
    jbUiObject = className("android.view.View").depth("5").indexInParent("2").id("com.kuaishou.nebula:id/circular_progress_bar")
    if (jbUiObject.exists()) {
        return true
    } else {
        return false

    }
}

funs.快手极速版_进入日常 = function () {

    //     log('进入观看视频')
    //     var node=id('left_btn').findOnce()
    //     if (node) {
    //         log('点击菜单栏')
    //     node.click() 
    //     sleep(1*1000)       
    //     }else{
    //         log('占时没发现，菜单')
    //     }
    //     var node=text('去赚钱').findOne(1*1000)
    //     if (node) {
    //         log('点击去赚钱，进入日常')
    //     node.parent().click() 
    //     sleep(1*1000)       
    //     }else{
    //         log('占时没发现，去赚钱')
    //     }
    jbUiObject = className("android.view.View").depth("5").indexInParent("2").id("com.kuaishou.nebula:id/circular_progress_bar")
    if (jbUiObject.exists()) {
        log(jbUiObject.findOnce())
        log(jbUiObject.findOnce().bounds().centerX(), jbUiObject.findOnce().bounds().centerY())
        if (click(jbUiObject.findOnce().bounds().centerX(), jbUiObject.findOnce().bounds().centerY())) {
            return true
        }
    }
}
funs.快手极速版_现金 = function () {
    // findsUI =className("android.view.View")
    // .text('11534').findOnce()  //实际金币 调去当前的
    // strs="findsUI ="+"className('"+findsUI.className()+"')\n"
    // strs=strs+".depth('"+findsUI.depth()+"')"
    // strs=strs+".indexInParent('"+findsUI.indexInParent()+"')"
    // strs=strs+".row('"+findsUI.row()+"')"
    // strs=strs+".rowSpan('"+findsUI.rowSpan()+"')"
    // strs=strs+".drawingOrder('"+findsUI.drawingOrder()+"')"
    // strs=strs+".columnCount('"+findsUI.columnCount()+"')"
    // strs=strs+".find()"
    // log(strs)
    findsUI = className('android.view.View').depth('12').indexInParent('1').row('-1').rowSpan('-1').drawingOrder('0').columnCount('0').find()
    for (var i = 0; i < findsUI.size(); i++) {
        if (findsUI.get(i).text() >= 0 && findsUI.get(i).text() <= 100 && !(findsUI.get(i).text() == "")) {
            // log("人民币=",findsUI.get(i).text())
            return findsUI.get(i).text()
        }
    }
}

funs.快手极速版_金币 = function () {
    // findsUI =className("android.view.View")
    // .text('11534').findOnce()  //实际金币 调去当前的
    // strs="findsUI ="+"className('"+findsUI.className()+"')\n"
    // strs=strs+".depth('"+findsUI.depth()+"')"
    // strs=strs+".indexInParent('"+findsUI.indexInParent()+"')"
    // strs=strs+".row('"+findsUI.row()+"')"
    // strs=strs+".rowSpan('"+findsUI.rowSpan()+"')"
    // strs=strs+".drawingOrder('"+findsUI.drawingOrder()+"')"
    // strs=strs+".columnCount('"+findsUI.columnCount()+"')"
    // strs=strs+".find()"
    // log(strs)
    findsUI = className('android.view.View').depth('12').indexInParent('1').row('-1').rowSpan('-1').drawingOrder('0').columnCount('0').find()
    for (var i = 0; i < findsUI.size(); i++) {
        if (findsUI.get(i).text() >= 200 && !(findsUI.get(i).text() == "")) {
            // log("金币=",findsUI.get(i).text())
            return findsUI.get(i).text()
        }
    }
}

funs.字符串_分割数组 = function (strarr, strs) {
    strarrnew = strarr.split(strs)
    return strarrnew
}
funs.定点倒计时 = function (times) {
    var curTime = new Date();
    var currentTime = new Date(parseInt(curTime.getFullYear()), parseInt(curTime.getMonth() + 1), parseInt(curTime.getDate()), parseInt(curTime.getHours()), parseInt(curTime.getMinutes()), parseInt(curTime.getSeconds()));
    var appInstallDate = times.split("-");
    var getDay = appInstallDate[2].split(" ")[0]; //天
    var hourMM = appInstallDate[2].split(" ")[1];//时分秒
    var appInstallTime = new Date(parseInt(appInstallDate[0]), parseInt(appInstallDate[1]), parseInt(getDay), hourMM.split(":")[0], hourMM.split(":")[1], parseInt(0));
    var seconds = appInstallTime - currentTime;
    log(appInstallTime)
    log(currentTime)
    log(seconds)
    // log(seconds)
    // log(seconds/(1000 * 60 * 60 * 24))
    return (seconds)   //返回秒

}



// 定时抢购功能
funs.Panic_buy = function (time_str) {
    while (true) {
        // 获取本地时间
        var nowTime = new Date();
        // // 设置的目标时间
        // time=ui.name.getText();
        time = time_str
        targetTime = new Date(time);
        var spanTime = targetTime - nowTime;
        // 如果到了时间，调用pay方法，进行抢购
        if (spanTime <= 0) {
            log(nowTime);
            // pay();
            break;
        }
    }
}


/*===================人工划屏区TOP=============*/
/**
 * 
 * @param {倒计时时间} 随机间隔时间 
 */
funs.间隔倒计时 = function (随机间隔时间, strsmsg) {
    // log(随机间隔时间,strsmsg)
    let min随机间隔时间 = parseInt(随机间隔时间);
    let max随机间隔时间 = parseInt(随机间隔时间) + 5;
    let sj随机间隔时间 = random(min随机间隔时间, max随机间隔时间)
    // log('间隔倒计时:',随机间隔时间)
    // log('min随机间隔时间:',min随机间隔时间)
    // log('max随机间隔时间:',max随机间隔时间)
    // log('最终确定随机间隔时间:',sj随机间隔时间)
    for (var 间隔倒计时 = sj随机间隔时间; 间隔倒计时 > 0; 间隔倒计时--) {
        sleep(1000)
        log(strsmsg + ';下个视频：' + 间隔倒计时)
    }
}



/**
 * @param {滑动的方位} strs 
 * @param {时间} timesInterval 
 */
funs.人工划屏 = function (strs, timesInterval) {
    if (strs == "上") {
        log('进入了上滑的位置')
        x1 = random(device.width * 0.4, device.width * 0.5);
        y1 = random(device.height * 0.8, device.height * 0.9);
        x2 = random(device.width * 0.6, device.width * 0.8);
        y2 = random(device.height * 0.1, device.height * 0.2);
        this.sml_move(x1, y1, x2, y2, random(500, 700));
        // log('timesInterval,参数间隔时间：',timesInterval)
        this.间隔倒计时(timesInterval, '上');
    }
    if (strs == "下") {
        x1 = random(device.width * 0.7, device.width * 0.8);
        y1 = random(device.height * 0.1, device.height * 0.2);
        x2 = random(device.width * 0.4, device.width * 0.5);
        y2 = random(device.height * 0.8, device.height * 0.9);
        this.sml_move(x1, y1, x2, y2, random(500, 700));
        this.间隔倒计时(random(timesInterval, timesInterval + 3), '下');
    }

    if (strs == "左") {
        x1 = random(device.width * 0.8, device.width * 0.9);
        y1 = random(device.height * 0.5, device.height * 0.6);
        x2 = random(device.width * 0.1, device.width * 0.2);
        y2 = random(device.height * 0.7, device.height * 0.9);
        this.sml_move(x1, y1, x2, y2, random(500, 700));
        this.间隔倒计时(random(timesInterval, timesInterval + 3), '左');
    }
    if (strs == "右") {
        x1 = random(device.width * 0.1, device.width * 0.2);
        y1 = random(device.height * 0.7, device.height * 0.9);
        x2 = random(device.width * 0.8, device.width * 0.9);
        y2 = random(device.height * 0.5, device.height * 0.6);
        this.sml_move(x1, y1, x2, y2, random(500, 700));
        this.间隔倒计时(random(timesInterval, timesInterval + 3), '右');
    }
    if (strs == "左窗口") {
        x1 = random(device.width * 0, device.width * 0.1);
        y1 = random(device.height * 0.4, device.height * 0.7);
        x2 = random(device.width * 0.5, device.width * 0.9);
        y2 = random(device.height * 0.5, device.height * 0.6);
        this.sml_move(x1, y1, x2, y2, random(500, 700));
    }
}



//此代码由飞云脚本圈整理提供（www.feiyunjs.com）
funs.bezier_curves = function (cp, t) {
    cx = 3.0 * (cp[1].x - cp[0].x);
    bx = 3.0 * (cp[2].x - cp[1].x) - cx;
    ax = cp[3].x - cp[0].x - cx - bx;
    cy = 3.0 * (cp[1].y - cp[0].y);
    by = 3.0 * (cp[2].y - cp[1].y) - cy;
    ay = cp[3].y - cp[0].y - cy - by;

    tSquared = t * t;
    tCubed = tSquared * t;
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
    return result;
};

//仿真随机带曲线滑动  
//qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,过程耗时单位毫秒
funs.sml_move = function (qx, qy, zx, zy, time) {
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };

    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {

        eval("point.push(dx" + i + ")");

    };
    // log(point[3].x)

    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(this.bezier_curves(point, i).x), parseInt(this.bezier_curves(point, i).y)]

        xxy.push(xxyy);

    }

    // log(xxy);
    gesture.apply(null, xxy);
};

/*===================人工划屏区END=============*/
module.exports = funs;
