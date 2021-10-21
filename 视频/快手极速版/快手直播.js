// // 
// console.show()
// console.setPosition(200, 0);

// var root ="/storage/emulated/0/脚本/AutoJs"
// var 快手极速版path=root+"/视频/快手极速版/快手极速版.js"
// var funs = require(root+"/库/funs.js");
// var 划 = require(root+"/库/人工划屏.js");


// //到点必须关闭


// // while(true){
// //     idtext='退出'
// //     if(funs.控件_判断是否存在_正则(idtext))
// //     {  
// //         funs.控件_点击(textContains(idtext).findOnce())
// //     }
// //     sleep(1000)
// //     idtext='看直播领1100金币'
// //     if(funs.控件_判断是否存在_正则(idtext))
// //     {    
// //         uiobject=textContains(idtext).findOnce().parent().parent().child(0).child(3)
// //         if(uiobject){
// //             log(uiobject.text())
// //             if(uiobject.text()!=='今日已成功领取直播奖励金币'){
// //                 var reallyNumbers = uiobject.text().match(/\d+/g).map(Number);
        
// //                 log(reallyNumbers)         
// //                 log(reallyNumbers[2]);
// //                 log(reallyNumbers[1]);
// //                 if(reallyNumbers[2]-reallyNumbers[1]==1) {
// //                     log('完成任务')
// //                     break;
// //                 } 

// //                 log(textContains(idtext).findOnce().text())
// //                 if(funs.控件_点击(textContains(idtext).findOnce())){
// //                     for(var i=70;i>0;i--){
// //                       sleep(1000)
// //                       log(i)
// //                       if(i==1){
// //                           back()
// //                       }
// //                     }
// //                 }



// //             }
// //           } 

        

// //     }
// //     idtext='后可领取奖励'
// //     if(funs.控件_判断是否存在_正则(idtext))
// //     {   
// //         log('发现【后可领取奖励】进入广告.....')
// //         // log(funs.控件_判断是否存在_正则(idtext))
// //         str1=funs.控件_判断是否存在_正则(idtext).text()
// //         if(str1){
// //             log('倒计时：',funs.time_提取秒(str1))
// //             if(funs.time_提取秒(str1)<=11){
// //                 funs.倒计时('倒计时=',random(13,15))
// //                 log('领取成功'); 
// //                 back();
// //             }
// //         }
// //     } 
// // }



// var rraykzb=['观看精彩直播得110金币，已完成','快来看精彩直播'] 
// var rraykzbr=['看直播','看直播 领金币'] 

// var 直播度=funs.取('直播度')
// var 直播次数=funs.取('直播次数')
// var 直播广告时长=65
// var 直播任务=true

// 准备工作()
// function 准备工作(){   
  
//     funs.功能_清理通知()
//     funs.功能_关闭全部应用()
//     while (true) {
//         sleep(1000)
//         log("=====进入快手极速版==")
//         app.launch("com.kuaishou.nebula")
        
//         idtext='跳过'
//         if(funs.控件_判断是否存在(idtext))
//             {log(idtext)
//                 funs.控件_单定位点击(idtext);
//             }
    
//         // sleep(5000)
//         if (packageName("com.kuaishou.nebula").exists()) {
//             toastLog("启动快手成功")
//             sleep(10000)
//             // ksjsb.清除缓存();
//             break
//         }
//     }

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
// }


// while (true) {
//     sleep(1000);
//     //================出现【 签到 】，默认点击
//     uiobject=funs.控件_判断是否存在_正则('签到立得');
//     // log(uiobject)
//     if(uiobject){
//         log('签到立得.】')
//         uiobject.click()
//     } 
//     //================出现【 签到 】，默认点击
//     uiobject=funs.控件_判断是否存在_正则('立即签到');
//     // log(uiobject)
//     if(uiobject){
//         log('立即签到.】')
//         uiobject.click()
//     } 
//     //================出现【 签到 】，默认点击
//     uiobject=funs.控件_判断是否存在_正则('补签再得');
//     // log(uiobject)
//     if(uiobject){
//         log('补签再得.】')
//         uiobject.click()
//     } 
//     //================出现【 签到 】，默认点击
//     uiobject=funs.控件_判断是否存在_正则('去看视频再赚');
//     // log(uiobject)
//     if(uiobject){
//         log('去看视频再赚.】')
//         uiobject.click()
//     } 
//     //================出现【 签到 】，默认点击
//     uiobject=funs.控件_判断是否存在_正则('看广告再得');
//     // log(uiobject)
//     if(uiobject){
//         log('看广告再得.】')
//         uiobject.click()
//     } 
//     //================出现【退出】，默认点击
//     uiobject=funs.控件_判断是否存在_正则('邀请好友赚更多');
//     // log(uiobject)
//     if(uiobject){
//         log('邀请好友赚更多.】')
//         准备工作()
//     }   
//     //================出现【退出】，默认点击
//     uiobject=funs.控件_判断是否存在_正则('打开签到提醒');
//     // log(uiobject)
//     if(uiobject){
//         log('打开签到提醒.】')
//         准备工作()
//     }   


//     log(funs.单前设备管理())
//     log(直播任务)
//     if(直播任务){
        
//         //================出现【退出】，默认点击
//         uiobject=funs.控件_判断是否存在_正则('今日已成功领取直播奖励');
//         // log(uiobject)
//         if(uiobject){
//             log('【直播任务完成了】')
//             engines.execScriptFile(快手极速版path);
//             console.hide()
//             exit()
//         }  

//         直播任务进度()
//         直播度=funs.取('直播度')
//         直播次数=funs.取('直播次数')
//         log("直播度",直播度,"直播次数",直播次数)
//         log('===========信息结束==============')
//         while(true){ 
//             if(funs.控件_判断是否存在('看直播')){
//                 log('主循环广告，看直播存在')
//             }   
//             //================出现【退出】，默认点击
//             log('判断下直播是否完成')
//             uiobject=funs.控件_判断是否存在_正则('今日已成功领取直播奖励');
//             // log(uiobject)
//             if(uiobject){
//                 log('【直播任务完成了】')
//                 engines.execScriptFile(快手极速版path);
//                 console.hide()
//                 exit()
//             }   
//             log('没完成.开始刷直播了..')
//             //================出现【退出】，默认点击
//             uiobject=funs.控件_判断是否存在_正则('退出');
//             if(uiobject){
//             uiobject.click()
//             }  
//             直播任务进度()
//             sleep(1000);
//             if(funs.控件_位置_居中('看直播',看直播rfuntext(),'看直播')){  //观看精彩直播得110金币，已完成
//                 log('准备进入广告....')
//                 广告("直播度"+直播次数+"/"+直播度) 
//                 if(funs.控件_判断是否存在('看直播')){
//                     log('看完广告，看直播存在')
//                 }else{
//                     sleep(3000)
//                     log('看完广告，看直播不存在')
//                     back()}             
//             }
//         }
//     }else{
//         log('【直播任务完成了】')
//         engines.execScriptFile(快手极速版path);
//         console.hide()
//         exit()
//     }

//     }
        




// function 看直播rfuntext(){
//     for(var i=0;i<rraykzbr.length;i++){
//         uiobject=funs.控件_判断是否存在_正则(rraykzbr[i]);
//         if (uiobject) {
//             log('看直播rfuntext:',uiobject.text())
//             return uiobject.text()
//         }
//     }
    
//   }

// function 看直播funtext(){
//       for(var i=0;i<rraykzb.length;i++){
//           uiobject=funs.控件_判断是否存在_正则(rraykzb[i]);
//           if (uiobject) {
//               log('看直播funtext:',uiobject.text())
//               return uiobject.text()
//           }
//       }
      
// }

// function 广告(logs){
//     log('等待8s....')
//     for(var i=8;i>0;i--){
//         sleep(1000)
//         log('等待',i,'s')        
//     } 
//     for(var i=直播广告时长;i>0;i--){
//         sleep(1000)
//         log(logs,'倒计时：',i,'s')
//         if(i==1){
          
//           if(funs.控件_坐标点击(id("live_close_place_holder").findOnce())){
            
//           log('倒计时退出...live_close_place_holder.')  
          
//           }else{
//               back()
//             log('没有点击成功')}
//         }
//     } 
    
// }
// function 分辨率适配坐标点击(rxx,ryy){
//     let rx = 1080; //开发设备x值
//     let ry = 1920; //开发设备的y值
    
//     //换算公式 点击坐标除以 点击坐标X Y | 除以开发设备X Y |乘以实际设备X Y ==换算后的坐标
    
//     let 点击坐标 = [rxx,ryy] //x,y
//     let x = (点击坐标[0] * device.width)/ rx //换算后的x
//     let y = (点击坐标[1] * device.height)/ ry  //换算后的y
//     log('分辨率适配坐标点击:',x,y)
//     click(x,y)
// }

// function 直播任务进度(){
//     uiobject=funs.控件_判断是否存在_正则(看直播funtext());    
//     log('===直播进度TOP===')
//     // log(uiobject)
//     if(uiobject){
//             log(uiobject.text())
//             var reallyNumbers = uiobject.text().match(/\d+/g).map(Number); 
//             log(uiobject.text())
//             log(reallyNumbers)
//             直播度=reallyNumbers[2] 
//             直播次数=reallyNumbers[1]                
//             funs.存('直播度',直播度);
//             funs.存('直播次数',直播次数);                
//             log('===直播进度END===')
            
//             }
//     }

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
                    funs.广告('直播',65)
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