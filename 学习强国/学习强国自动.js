var root =engines.myEngine().cwd();
//获取位置，方便在VS测试
if(root="/storage/emulated/0/脚本"){
    var root=root+"/AutoJs/库/"; //当前文件所在的工程位置
    }else{
     var root =engines.myEngine().cwd();
}
var funs = require(root+"/funs.js");
var 单选题 = require(root+"/学习强国单选题.js");
var 多选题 = require(root+"/学习强国多选题.js");
var 填空题= require(root+"/学习强国填空题.js");

// 多选题.开始()
while (true) {
    sleep(1000)
    //单选题
    if(className("android.view.View").text("单选题").exists()){
      log("单选题") 
      if(className("android.view.View").text("确定").exists()){
          log("确定")
          sleep(3000)
          className("android.view.View").text("确定").findOnce().click()
        }else{
            单选题.开始()
        }
    }
    //多选题
    if(className("android.view.View").text("多选题").exists()){
      log("多选题") 
      if(className("android.view.View").text("确定").exists()){
          log("确定")
          sleep(3000)
          className("android.view.View").text("确定").findOnce().click()
        }else{
            多选题.开始()
        }
    }
    //填空题
    if(className("android.view.View").text("填空题").exists()){
      log("填空题") 
      if(className("android.view.View").text("确定").exists()){
          log("确定")
          sleep(3000)
          className("android.view.View").text("确定").findOnce().click()
        }else{
            填空题.开始()
            sleep(5000)
        }
    }
    
}