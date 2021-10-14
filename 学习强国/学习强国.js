
// console.show()
// var funs = require("../库/funs");

var root =engines.myEngine().cwd();
//获取位置，方便在VS测试
if(root="/storage/emulated/0/脚本"){
    var root=root+"/机器人/库/"; //当前文件所在的工程位置
    }else{
     var root =engines.myEngine().cwd();
}

var funs = require(root+"/funs.js");
var 划 = require(root+"/人工划屏.js");
var 说 = require(root+"/文本转语音.js");
//说.说("测试语音")
var 订阅array=[949,583]
var path =engines.myEngine().cwd();
log(path)
var 显示时长=3000;//rawInput("显示时长,秒:",2)*1000  // 毫秒
//导入语音部件

var array=['我要选读文章','视听学习','每日答题','订阅','分享','发表观点','本地频道','本地频道'];
var arrayfz=[['本地频道','1'],['分享','1'],['发表观点','1'],['视听学习','6'],['我要选读文章','12']];//['订阅','2'],
app.launch("cn.xuexi.android")
sleep(10000)


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

//辅助： 跳开直播
定时=threads.start(function(){    
    while(true){
        sleep(1000)
        log(timeout)
if(!funs.toTime_timeout(timeout)){
    log('时间到了')
    log('结束了====')
    console.hide()
    home()
    exit()
}

    }
});





//1.更新任务信息
获取更新信息()
//点击之按任务名称("积分明细","订阅","80")
   
for(var i=0;i<arrayfz.length;i++){
    log(arrayfz[i])
    开始刷积分(arrayfz[i])
}

function 开始刷积分(arraystr){
    log('刷积分分组...')
    var str=arraystr[0]
    var mun=arraystr[1]
    //2.读取完成次数，并在每一个任务最后再读取任务数据
    var wcmun=mun-读取更新信息(str,'分值')
    log(arraystr[0]+'未完成次数：'+wcmun)
    log(读取更新信息(arraystr[0],'内容'))
    //如未完成，循环进入任务
    while(读取更新信息(arraystr[0],'完成情况')){
        说.说(util.format(arraystr[0]+'%d次未完成，继续',wcmun))
        //先进入主页
        进入主页()
        //再进入学习目录
        进入学习目录()
        if(arraystr[0]=='分享'){ 
            说.说("继续刷"+wcmun+"次")
            点击之按任务名称("积分明细",'分享',60)
            sleep(5000)  
            分享(wcmun)
        }
        if(arraystr[0]=='订阅'){
            说.说("继续刷"+wcmun+"次")
            点击之按任务名称("积分明细",'订阅',60)
            sleep(5000)  
            订阅(wcmun)
        }
        if(arraystr[0]=='视听学习'){
            说.说("继续刷"+wcmun+"次")
            点击之按任务名称("积分明细",'视听学习',60)
            sleep(5000)  
            视听学习(wcmun)
        }
        if(arraystr[0]=='我要选读文章'){
            说.说("继续刷"+wcmun+"次")
            点击之按任务名称("积分明细",'我要选读文章',60)
            sleep(5000)  
            我要选读文章(wcmun)
        }
        if(arraystr[0]=='发表观点'){
            说.说("继续刷"+wcmun+"次")
            点击之按任务名称("积分明细",'发表观点',60)
            sleep(5000)  
            发表观点(wcmun)
        }
        if(arraystr[0]=='本地频道'){
            说.说("继续刷"+wcmun+"次")
            点击之按任务名称("积分明细",'本地频道',60)
            sleep(5000)  
            本地频道(wcmun)
        }   
        //每次刷完任务，重新获取任务完成进度          
        获取更新信息()        
    };
    //如果任务完成，提示已完成
    if(!读取更新信息(arraystr[0],'完成情况')){
        说.说(arraystr[0]+' 已经完成了')
    }
};

function 分享(wcmun){ 
    // click('要闻')
    // sleep(4000)
 var gesturesAry=[[[0,51,[572,1833],[572,1833]]],[[0,101,[328,276],[328,276],[328,276]]],[[0,101,[594,497],[594,497],[594,497]]],[[0,51,[991,1846],[991,1846]]],[[0,51,[122,1075],[122,1075]]],[[0,101,[394,893],[394,893],[394,893]]],[[0,101,[869,1274],[869,1274],[869,1274]]],[[0,51,[96,161],[96,161]]],[[0,251,[702,1375],[702,1375],[696,1297],[698,1105],[751,839],[805,659]]],[[0,301,[708,1377],[708,1377],[701,1216],[712,1048],[745,870],[778,723],[818,609]]],[[0,251,[691,1341],[691,1341],[681,1221],[698,1010],[742,832],[808,686]]],[[0,51,[745,774],[745,774]]],[[0,101,[999,1844],[999,1844],[999,1844]]],[[0,101,[118,1091],[118,1091],[118,1091]]],[[0,51,[615,889],[615,889]]],[[0,101,[861,1275],[861,1275],[861,1275]]],[[0,101,[90,148],[90,148],[90,148]]]]
 for(let i=0;i<gesturesAry.length;i++){
       if(i==0){sleep(500);};
            if(i==1){sleep(2*1000);};
            if(i==2){sleep(3*1000);};
            if(i==3){sleep(7*1000);};
            if(i==4){sleep(5*1000);};
            if(i==5){sleep(2*1000);};
            if(i==6){sleep(3*1000);};
            if(i==7){sleep(3*1000);};
            if(i==8){sleep(2*1000);};
            if(i==9){sleep(0*1000);};
            if(i==10){sleep(1*1000);};
            if(i==11){sleep(1*1000);};
            if(i==12){sleep(3*1000);};
            if(i==13){sleep(2*1000);};
            if(i==14){sleep(2*1000);};
            if(i==15){sleep(1*1000);};
            if(i==16){sleep(2*1000);};
 
 gestures.apply(null, gesturesAry[i]);
 };
};
function 订阅(wcmun){
    说.说("开始订阅")
    sleep(3000)
    while(!desc('订阅').exists()){
        var gesturesAry=[
            [[0,601,[516,1454],[516,1454],[527,1446],[570,1337],[616,1222],[659,1037],[656,801],[651,681],[643,629],[621,473],[616,411],[616,395],[616,394]]],
            [[0,651,[500,1469],[500,1469],[517,1446],[591,1340],[654,1182],[683,1003],[697,837],[715,718],[690,607],[680,568],[664,532],[652,506],[647,495],[645,492]]]]
        for(let i=0;i<gesturesAry.length;i++){
            if(i==0){sleep(500);};
            if(i==1){sleep(700);};
 
            gestures.apply(null, gesturesAry[i]);
        };
    };
    
    
    
    for(var i=0;i<2;i++){
        sleep(2000)
        desc('订阅').find().get(0).parent().click()          
    }
};
function 我要选读文章(wcmun){
    点击之按任务名称("我的",'要闻',0)
    click('要闻')
    sleep(4000)

    var mun1=text('加列表').find().size()
    toast('发现节目：'+mun1)
    if(wcmun<6){//循环滑动
        var gesturesAry=[[[0,851,[530,1683],[530,1683],[552,1563],[569,1474],[603,1143],[620,1031],[645,884],[656,753],[659,671],[639,575],[635,552],[602,460],[567,394],[554,370],[545,354],[545,354],[545,354],[545,354]]],[[0,851,[552,1664],[547,1665],[575,1540],[576,1455],[621,1167],[643,1022],[668,817],[658,723],[650,665],[643,636],[622,557],[613,534],[574,448],[552,418],[551,415],[548,400],[548,398],[548,398]]]];
        for(let i=0;i<gesturesAry.length;i++){
           gestures.apply(null, gesturesAry[i]);
           sleep(400);
        };
    }
    if(wcmun<6){//循环滑动
        var gesturesAry=[[[0,851,[530,1683],[530,1683],[552,1563],[569,1474],[603,1143],[620,1031],[645,884],[656,753],[659,671],[639,575],[635,552],[602,460],[567,394],[554,370],[545,354],[545,354],[545,354],[545,354]]],[[0,851,[552,1664],[547,1665],[575,1540],[576,1455],[621,1167],[643,1022],[668,817],[658,723],[650,665],[643,636],[622,557],[613,534],[574,448],[552,418],[551,415],[548,400],[548,398],[548,398]]]];
        for(let i=0;i<gesturesAry.length;i++){
           gestures.apply(null, gesturesAry[i]);
           sleep(400);
        };
    }
    click('加列表')      
    sleep(4000)
    // click('加列表')
    if(text('关闭').exists()){
        djmun=10
        click('关闭')
    }else{djmun=wcmun}

    var gesturesAry=[[[0,51,[308,1841]]]];
    for(let i=0;i<gesturesAry.length;i++){
    gestures.apply(null, gesturesAry[i]);
    sleep(400);
    };



    var gesturesAry=[
        [[0,101,[50,1509]]],
        [[0,101,[296,1502]]],
        [[0,151,[545,1744]]]
    ];
    for(var i=0;i<djmun;i++){
        gesturesAry.push([[0,101,[765,1751]]])
    }
    for(let i=0;i<gesturesAry.length;i++){
        if(i==0){toastLog('动作'+i+'：点击播放器');sleep(4000);}
        if(i==1){toastLog('动作'+i+'：进入播放器');sleep(2000);}
        if(i==2){toastLog('动作'+i+'：播放');sleep(4000);}
        if(i>2){toastLog('动作'+i+'：下一节目');sleep(1000*80);}
    gestures.apply(null, gesturesAry[i]);
    };
    sleep(5000)
    点击之按任务名称("我的",'要闻',0)
}
function 发表观点(wcmun){
    var gesturesAry=[[[0,51,[548,1844],[548,1844]]],[[0,101,[271,280],[271,280],[271,280]]],[[0,251,[607,1541],[619,1466],[639,1376],[650,1122],[650,1001],[670,735]]],[[0,301,[591,1638],[594,1597],[609,1533],[604,1442],[604,1163],[609,1013],[609,961]]],[[0,351,[591,1475],[591,1475],[555,1282],[545,1163],[525,895],[552,684],[566,574],[600,390]]],[[0,351,[579,1520],[593,1469],[615,1286],[612,1103],[614,955],[653,695],[656,636],[677,543]]],[[0,101,[496,1509],[496,1509],[496,1509]]],[[0,101,[425,1857],[425,1857],[425,1857]]]]
    for(let i=0;i<gesturesAry.length;i++){
        if(i==0){sleep(500);};
        if(i==1){sleep(2*1000);};
        if(i==2){sleep(2*1000);};
        if(i==3){sleep(0*1000);};
        if(i==4){sleep(1*1000);};
        if(i==5){sleep(1*1000);};
        if(i==6){sleep(1*1000);};
        if(i==7){sleep(3*1000);};

        gestures.apply(null, gesturesAry[i]);
    };

    
    sleep(2000)
    log('好观点将会被优先展示---开始评论'+发表内容())
    // 好观点将会被优先展示
    text('好观点将会被优先展示').findOnce().setText(发表内容())
    sleep(2000)
    text('发布').click()
};
function 视听学习(wcmun){
    var gesturesAry=[[[0,51,[367,1835],[367,1835]]],
    [[0,101,[622,631],[622,631],[622,631]]],
    [[0,151,[627,1337],[621,1311],[616,1141],[663,845]]],
    [[0,201,[601,1303],[599,1287],[615,1072],[637,917],[689,648]]],
    [[0,201,[596,1458],[596,1458],[579,1412],[591,1204],[716,784]]],
    [[0,151,[557,1370],[545,1312],[570,1078],[681,664]]],
    [[0,151,[627,1337],[621,1311],[616,1141],[663,845]]],

    [[0,201,[601,1303],[599,1287],[615,1072],[637,917],[689,648]]],
    [[0,201,[596,1458],[596,1458],[579,1412],[591,1204],[716,784]]],
    [[0,151,[557,1370],[545,1312],[570,1078],[681,664]]],
    [[0,151,[627,1337],[621,1311],[616,1141],[663,845]]],
    [[0,201,[601,1303],[599,1287],[615,1072],[637,917],[689,648]]]


    ]
    for(let i=0;i<gesturesAry.length;i++){
        log('强国刷视频，视听：'+i)
        if(i==0){sleep(500);};
        if(i==1){sleep(2*1000);};
        
        if(i==2){sleep(80*1000);};
        if(i==3){sleep(80*1000);};
        if(i==4){sleep(80*1000);};
        if(i==5){sleep(80*1000);};
        if(i==6){sleep(80*1000);};
        if(i==7){sleep(80*1000);};
        if(i==8){sleep(80*1000);};
        if(i==9){sleep(80*1000);};
        if(i==10){sleep(80*1000);};
        if(i==11){sleep(80*1000);};

        gestures.apply(null, gesturesAry[i]);
    };   
}; 
function 本地频道(wcmun){
    var gesturesAry=[[[0,51,[536,1852],[536,1852]]],[[0,101,[806,151],[806,151],[806,151]]],[[0,401,[570,1536],[566,1523],[568,1410],[575,1305],[638,1030],[664,904],[704,738],[733,681],[742,662]]],[[0,301,[582,1629],[595,1549],[633,1317],[685,1058],[728,801],[722,668],[738,418]]],[[0,301,[509,1577],[509,1577],[528,1400],[554,1233],[579,818],[586,613],[592,455]]],[[0,151,[928,1444],[928,1444],[928,1444],[928,1444]]],[[0,101,[145,616],[145,616],[145,616]]],[[0,351,[382,1065],[379,1051],[361,943],[341,823],[333,728],[333,680],[348,595],[355,576]]],[[0,451,[389,1385],[385,1334],[387,1220],[396,1098],[404,1050],[410,851],[419,780],[428,692],[428,643],[433,576]]],[[0,101,[441,1572],[439,1572],[436,1572]]],[[0,101,[849,1868],[849,1868],[849,1868]]],[[0,101,[987,1850],[987,1850],[987,1850]]],[[0,101,[134,1079],[134,1079],[134,1079]]],[[0,101,[404,923],[404,923],[404,923]]],[[0,151,[831,1252],[831,1252],[831,1252],[831,1252]]],[[0,101,[79,153],[79,153],[79,153]]],[[0,101,[77,146],[77,146],[77,146]]]]
    for(let i=0;i<gesturesAry.length;i++){
        if(i==0){sleep(500);};
        if(i==1){sleep(2*1000);};
        if(i==2){sleep(4*1000);};
        if(i==3){sleep(1*1000);};
        if(i==4){sleep(1*1000);};
        if(i==5){sleep(1*1000);};
        if(i==6){sleep(6*1000);};
        if(i==7){sleep(2*1000);};
        if(i==8){sleep(1*1000);};
        if(i==9){sleep(1*1000);};
        if(i==10){sleep(8*1000);};
        if(i==11){sleep(2*1000);};
        if(i==12){sleep(2*1000);};
        if(i==13){sleep(1*1000);};
        if(i==14){sleep(3*1000);};
        if(i==15){sleep(6*1000);};
        if(i==16){sleep(2*1000);};

        gestures.apply(null, gesturesAry[i]);
    };
};

// 说.说('测试成功')
//任务列表
function 更新任务量(){
    进入主页()
    进入学习目录()
    textContains('学习积分').waitFor()
    获取更新信息() 
    进入主页()
};
/**
 * @param {*} str '我要选读文章','视听学习','每日答题','每周答题','专项答题','挑战答题','争上游答题','双人对战','订阅','分享','发表观点','本地频道','本地频道','强国运动'
 * @param {*} munstr '完成情况'|'分值'|'内容'
 */
function 读取更新信息(str,munstr){    
    var xxqgStorage = storages.create("hsy1986621@163.com");//创建本地存储
    var strs = xxqgStorage.get(str);
    // log(strs)
    // 说.说(strs.split("|")[1])
    // 说.说(strs.split("|")[2])
    if(munstr=='完成情况'){
        if(strs.split("|")[1]==strs.split("|")[2]){
            return false
        }else{
            return true            
        }
    }
    if(munstr=='分值'){
        // log(strs.split("|")[1])
        return strs.split("|")[1]
    }
    if(munstr=='内容'){
        // log(strs.split("|")[0])
        return strs.split("|")[0]
    }

};
function 获取更新信息(){
    
// var array=['我要选读文章','视听学习','每日答题','每周答题','专项答题','挑战答题','争上游答题','双人对战','订阅','分享','发表观点','本地频道','本地频道','强国运动'];
// var arrayfz=[['本地频道','1'],['分享','1'],['订阅','2'],['发表观点','1'],['视听学习','6'],['我要选读文章','12']];

    log("获取更新信息");
    进入主页()    
    进入学习目录()
    for(var i=0;i<array.length;i++){
        text(array[i]).waitFor()
        log(array[i])
         //说.说(array[i])
        var target=text(array[i]).find().get(0)
        var 查看我要选读文章=target.parent().parent().child(2).text()
        // log(查看我要选读文章)
        var reg = /\已获.+?\分/g
        var r = 查看我要选读文章.match(reg)
        var 获得的分值=r[0].replace('已获','').replace('分','')
        var reg = /\上限.+?\分/g
        var rr = 查看我要选读文章.match(reg)
        var 每日上限分值=rr[0].replace('上限','').replace('分','')
        log(查看我要选读文章)

        //说.说(查看我要选读文章)
        var xxqgStorage = storages.create("hsy1986621@163.com");//创建本地存储
        // log(array[i], array[i]+查看我要选读文章+"|"+获得的分值+"|"+每日上限分值);
        xxqgStorage.put(array[i], array[i]+查看我要选读文章+"|"+获得的分值+"|"+每日上限分值);
      
    }  
}


 
//根据任务名称定为坐标，并进行点击
/**
 * 
 * @param {*} strx ：text控件定为x
 * @param {*} stry ：text控件定为x
 * @param {*} 偏移值y 
 */
function 点击之按任务名称(strx,stry,偏移值y){
    
    
    text(strx).waitFor();
    var 消息Viewx = text(strx).findOnce();
    //alert(stry)
    var djx=消息Viewx.bounds().centerX();
    while(text(stry).findOne().bounds().bottom==device.height||text('订阅').findOne().bounds().bottom>device.height){
    划.划("上","0.05")
   
}
    var 消息Viewy = text(stry).findOnce();
    //log(消息View)
    //log(消息Viewy.bounds()+device.height)
    var 消息Viewyy=消息Viewy.bounds().centerY()
    //说.说(消息Viewyy)
    //说.说(device.height)
    //说.说(消息Viewyy>device.height)
    
    var djy=消息Viewyy+parseInt(偏移值y);
    
    
    click(djx,djy);
    // funs.点击(djx,djy);
};
function 下滑(){
    var gesturesAry=[
            [[0,601,[516,1454],[516,1454],[527,1446],[570,1337],[616,1222],[659,1037],[656,801],[651,681],[643,629],[621,473],[616,411],[616,395],[616,394]]],
            [[0,651,[500,1469],[500,1469],[517,1446],[591,1340],[654,1182],[683,1003],[697,837],[715,718],[690,607],[680,568],[664,532],[652,506],[647,495],[645,492]]]]
        for(let i=0;i<gesturesAry.length;i++){
            if(i==0){sleep(500);};
            if(i==1){sleep(700);};
 
            gestures.apply(null, gesturesAry[i]);
        };
}
function 进入主页(){
    var i=0
    var target=text('推荐').exists()
    while(!target){
        i++
        back()
        sleep(1000)
        log('没到主页')
        var target=text('推荐').exists()
        if(target){
            break;
        }
    }
    log('跳出循环，进入主页')
};

function 进入学习目录(){
    var gesturesAry=[[[0,101,[797,140],[797,140],[797,140]]]];
    for(let i=0;i<gesturesAry.length;i++){
       gestures.apply(null, gesturesAry[i]);
       sleep(400);
    };
    
};
    
function 发表内容(){
    var arrbh=["积极","坚定","保持","促进","深入","明确","确立","全面","确实"]
    var arrsjnr=["好好学习，领会精神，努力奋斗。"
    ,"加强学习，增化自身。"
    ,"不忘初心，更好的为人民服务。"
    ,"签到，签到。"]
    // 调用句子('积极')
    var strhz=new Array

    for(var i=0;i<arrbh.length;i++){
        if(!调用句子(arrbh[i])=="" ){
            if(调用句子(arrbh[i]).indexOf(arrbh[i])==0){
            // log('是开头：'+调用句子(arrbh[i])+调用句子(arrbh[i]).indexOf(arrbh[i]))
            strhz.push(调用句子(arrbh[i]))
            }
        }
    }
    // log(strhz)
    var srt=""
    log(strhz.length)
    log('有：'+调用句子(arrbh[i])+'随机取一个内容')
    if(strhz.length==0){return arrsjnr[random(0,arrsjnr.length-1)]}
    for(var i=0;i<strhz.length;i++){
        if(i==strhz.length-1){
            var srt=srt +strhz[i]+"。"
        }else{
            var srt=srt +strhz[i]+","}
    }
    // log(srt)
    return strhz[random(0,strhz.length-1)]
}

function 调用句子(strbh){
    // var strbh="积极"
    // log(strbh)
    // log(textContains(strbh).exists())
    if(textContains(strbh).exists()){
        var str=textContains(strbh).findOnce().text()
        var array=str.split("。") 
        for(var i=0;i<array.length;i++){
            if(array[i].indexOf(strbh)>0){
                // log(array[i])
                var array1=array[i].split("，") 
        
                for(var i=0;i<array1.length;i++){            
                    if(array1[i].indexOf(strbh)>=0){
                    //    log(array1[i]) 
                       return array1[i]
                    }
                } 
            }
        } 
    }else{
        return ""
    }

}
// 说.说('测试完成')
exit()