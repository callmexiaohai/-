var root =engines.myEngine().cwd();
//获取位置，方便在VS测试
if(root="/storage/emulated/0/脚本"){
    var root=root+"/AutoJs/库/"; //当前文件所在的工程位置
    }else{
     var root =engines.myEngine().cwd();
}

var funs = require(root+"/funs.js");

var 学习强国填空题={};

学习强国填空题.开始=function(){
    
var arr=[];//初始化
var arrts=[];//初始化 
var uiobject_meiRi=text("填空题").findOnce();   
var uiobject_zxTk=text("填空题 (10分)").findOnce();    


if(uiobject_meiRi){        
    log(uiobject_meiRi)
    funs.控件_遍历_返回数组(uiobject_meiRi.parent().parent(),arr)
    }else if(uiobject_zxTk){  
        log(uiobject_zxTk)
        funs.控件_遍历_返回数组(uiobject_zxTk.parent().parent(),arr)
        }else{
        log('找不到控件')
}

for(var k=0;k<arr.length;k++){
    log('【问题部分】====第=======',k);
    log(arr[k]);
    // k=0 填空题 ---标题
    // k=1 第几题 --1/5
    // k=2  题目前半段 
    // k=3      填空项 总的数据
    // k=4 5 6  填空项 各个空格数据，判断是否正确用
    // k=7  题目后半段
    // k=2  题目全部内容 
    // k=8  出题，出处
    // k=9  换行
    // k=10  查看提示

    newarr=arr[k]
    if(newarr.text()=="查看提示"){
        newarr.click()
        if(className("android.view.View").text("请观看视频").exists()){
            back();
            break;
        }
        sleep(1000)
        var uiobject=text("提示").findOnce();    
        if(uiobject){        
            log(uiobject)
            funs.控件_遍历_返回数组(uiobject.parent().parent(),arrts) 
            for(var kk=0;kk<arrts.length;kk++){
                log('【提示部分】====第=======',kk);
                log(arrts[kk]);

            }
            sleep(1000)
            back()

            log(arr[2].text())
            log(arr[7].text())
            log(arrts[2].text())
            daStr=arrts[2].text()
            for(var k=0;k<arr.length;k++){
                log('【问题部分】====第=======',k);
                log(arr[k].text())
                daStr=daStr.replace(arr[k].text(),"")
                log('替换结果：',daStr)
            }
            log('处理完成==========================================')
            log(daStr)
            setClip(daStr)
            log('处理完成==========================================')
            break;

        }else{
            log('找不到控件')
        }
    }


    //=======提示部分
    // k=0 填空题 ---标题 ：提示
    // k=1 换行
    // k=2  题目全部内容 

}

if(className("android.view.View").text("确定").exists()){
    log("确定")
    className("android.view.View").text("确定").findOnce().click()
  }else{
    if(className("android.view.View").text("下一题").exists()){
        log("下一题")
        className("android.view.View").text("下一题").findOnce().click()
      }else{
            for(var k=0;k<arr.length;k++){
                daStr=daStr.replace(arr[k].text(),"")
                if(arr[k].enabled()){  
                    log('【填入空格】====第=======',k);                  
                    log(arr[k].enabled(),arr[k].text())
                    arr[k].setText(getClip())
                }
            }
      }
  }




}
module.exports=学习强国填空题;