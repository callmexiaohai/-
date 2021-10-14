var root =engines.myEngine().cwd();
//获取位置，方便在VS测试
if(root="/storage/emulated/0/脚本"){
    var root=root+"/AutoJs/库/"; //当前文件所在的工程位置
    }else{
     var root =engines.myEngine().cwd();
}
var funs = require(root+"/funs.js");
var 学习强国多选题={};

var arr=[];//初始化
var arrts=[];//初始化 填空题
var arrda=[];//初始化 填空题

学习强国多选题.开始=function(){
    
var uiobject_duox=text("多选题 (10分)").findOnce();  
var uiobject_duox1=text("多选题").findOnce();
if(uiobject_duox){  
    log(uiobject_duox)
    funs.控件_遍历_返回数组(uiobject_duox.parent().parent(),arr)
}else if(uiobject_duox1){  
        log(uiobject_duox1)
        funs.控件_遍历_返回数组(uiobject_duox1.parent().parent(),arr)
        }else{
        log('找不到控件')
        }


log('=========================循环【找答案】')
for(var k=0;k<arr.length;k++){
    log('【问题部分】====第=======',k);
    log(arr[k]);
    // k=0 填空题 ---标题
    // k=1 第几题 --1/5
    // k=2  题目前半段 
    // k=3      填空项 总的数据
    // k=4 5 6  填空项 各个空格数据，判断是否正确用
    // k=7  题目后半段
    // k=8  出题，出处
    // k=9  换行
    // k=10  查看提示

    newarr=arr[k]
    if(newarr.text()=="查看提示"){
        newarr.click()
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
                log(daStr.indexOf(arr[k].text())>0)               
                if(daStr.indexOf(arr[k].text())>0){
                    arrda.push(arr[k]);
                }
            }
        }else{
            log('找不到控件')
        }
    }


    //=======提示部分
    // k=0 填空题 ---标题 ：提示
    // k=1 换行
    // k=2  题目全部内容 

}
log('=========================循环【出答案】')
log(arrda.length)
for(var k=0;k<arrda.length;k++){
    log('【答案】====第=======',k);
    log(arrda[k].text())
    arrda[k].click();
} 
}
module.exports=学习强国多选题;