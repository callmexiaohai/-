// console.show()
//https://github.com/callmexiaohai/Autojs/archive/refs/heads/main.zip
var url="https://github.com/callmexiaohai/Autojs.git"
// var githubUrl=url.replace('.git','')+'/archive/refs/heads/main.zip'
var githubUrl=url.replace('.git','')+'/archive/refs/heads/master.zip'
// log(githubUrl)
var 仓库名字=githubUrl.split('/')[4]
var 作者名字=githubUrl.split('/')[3]
var root =files.cwd()
if(files.cwd()=="/storage/emulated/0/脚本") {
  log('VScode 直接运行，测试辅助定位')
   root=files.join(files.cwd(),"Autojs")
   }
   //对应添加项目文件目录及对应的文件 ： var 快手之直播path=root+"/快手极速版/快手极速版.js"
   var 学习强国path=root+"/学习强国/学习强国.js"
   var 快手直播path=root+"/视频/快手极速版/快手直播.js"
   var 快手悬赏path=root+"/视频/快手极速版/快手福利.js"
   var 快手极速版path=root+"/视频/快手极速版/快手极速版.js"
   var 快手定点path=root+"/视频/快手极速版/快手定点.js"
   var 学习强国自动path=root+"/学习强国/学习强国自动.js"
   var 更新path=root+"/更新.js"
   var funs = require(root+"/库/funs.js");
log(root)





// 获取下载的脚本()


// var path=files.join(files.cwd(),"zip文件专用dome/test/master-master/版本.js")
// r = readFile(path)
// log(r)
// writeFile(path, 'dsfsfdsafasfds')
// r = readFile(path)
// log(r)


// var path1 =files.join(path,"zip文件专用dome/test/Autojs-master")
// log(readFile(files.cwd()))
// var newvesion = readFile(path1).match(/\d+/g).map(Number);
// log(newvesion)   
// var lodvesion = readFile(path).match(/\d+/g).map(Number);
// log(lodvesion)   

// log(lodvesion[0]==newvesion[0])
// log(lodvesion[1]==newvesion[1])
// log(lodvesion[2]==newvesion[2])


log('a.b.c'.split('.')[1])
var h=device.height*0.2
var zt='展开';
var 说 = require(files.join(root,"/库/文本转语音.js"));
// 说.说("测试")
var 版本号=files.read(root+"/版本.js",encoding = "UTF-8");
版本号=版本号.split('"')[1]
log("版本号:",版本号)

var 停止脚本 = floaty.window(
    <frame>
    <button id="停止脚本" text="停止脚本" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 退出 = floaty.window(
    <frame>
    <button id="退出" text="退出{{版本号}}" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 快手直播 = floaty.window(
    <frame  w="85" h="120" >
    <button id="快手直播" text="快手直播" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 快手悬赏 = floaty.window(
    <frame>
    <button id="快手悬赏" text="快手悬赏" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 快手极速版 = floaty.window(
    <frame>
    <button id="快手极速版" text="快手极速版" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 快手定点 = floaty.window(
    <frame>
    <button id="快手定点" text="快手定点" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);


var 学习强国 = floaty.window(
    <frame>
    <button id="学习强国" text="学习强国" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);

var 学习强国自动 = floaty.window(
    <frame>
    <button id="学习强国自动" text="学习强国自动" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 更新 = floaty.window(
    <frame>
    <button id="更新" text="更新" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 隐藏 = floaty.window(
    <frame>
    <button id="隐藏" text="隐藏" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
setInterval(()=>{}, 1000);



function kjzb(instr){
    zt=instr
    if(zt=='展开'){
        // 说.说('展开 现在的状态是')
        // 说.说(instr)
        // 说.说(zt)
        停止脚本.setPosition(0,h+0*150)
        退出.setPosition(0,h+1*150)
        快手直播.setPosition(0,h+2*150)
        快手悬赏.setPosition(0,h+3*150)
        快手极速版.setPosition(0,h+4*150)
        快手定点.setPosition(0,h+5*150)
        学习强国.setPosition(0,h+6*150)
        学习强国自动.setPosition(0,h+7*150)
        更新.setPosition(0,h+8*150)
        隐藏.setPosition(0,h+9*150)
        隐藏.隐藏.setText('隐藏')
    }else{
        // 说.说('进入左上角 现在的状态是')
        // 说.说(instr)
        // 说.说(zt)1
        停止脚本.setPosition(0,h+1*50)
        退出.setPosition(0,h+1*50)
        快手直播.setPosition(0,h+1*50)
        快手悬赏.setPosition(0,h+1*50)
        快手极速版.setPosition(0,h+1*50)
        快手定点.setPosition(0,h+1*50)
        学习强国.setPosition(0,h+1*50)
        学习强国自动.setPosition(0,h+1*50)
        更新.setPosition(0,h+1*50)
        隐藏.setPosition(0,h+1*50)
        隐藏.隐藏.setText('展开')
    }

}

kjzb('展开');
var execution = null; //清空执行语句


隐藏.隐藏.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick隐藏();
            return true;
    }
    return true;
});
function onClick隐藏(){
    说.说(隐藏.隐藏.getText())
    if(隐藏.隐藏.getText()=='隐藏'){
        kjzb('隐藏') ;
    }else{
        隐藏.隐藏.setText('展开') 
        kjzb('展开') ;
    }
}

停止脚本.停止脚本.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick停止脚本();
            return true;
    }
    return true;
});
function onClick停止脚本(){    
    停止脚本.停止脚本.setEnabled(false)  
    说.说(停止脚本.停止脚本.getText()) 
    快手直播.快手直播.setEnabled(true)
    快手悬赏.快手悬赏.setEnabled(true)
    快手极速版.快手极速版.setEnabled(true)  
    快手定点.快手定点.setEnabled(true)  
    学习强国.学习强国.setEnabled(true)   
    学习强国自动.学习强国自动.setEnabled(true) 
    更新.更新.setEnabled(true)   
    if(execution){
        execution.getEngine().forceStop();
        快手直播.快手直播.setEnabled(true)
        快手悬赏.快手悬赏.setEnabled(true)
        快手极速版.快手极速版.setEnabled(true)  
        快手定点.快手定点.setEnabled(true)  
        学习强国.学习强国.setEnabled(true)   
        学习强国自动.学习强国自动.setEnabled(true)
        更新.更新.setEnabled(true)
        停止脚本.停止脚本.setEnabled(true)       
    } 
    kjzb("可以退出") ;
}

退出.退出.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick退出();
            return true;
    }
    return true;
});
function onClick退出(){
    说.说(退出.退出.getText())
    exit();

}

快手直播.快手直播.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick快手直播();
            return true;
    }
    return true;
});
function onClick快手直播(){
    快手直播.快手直播.setEnabled(true) 
    说.说(快手直播.快手直播.getText())    
    execution = engines.execScriptFile(快手直播path);
    log(快手直播path)
    快手直播.快手直播.setEnabled(false)
    kjzb("隐藏") ;
}

快手悬赏.快手悬赏.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick快手悬赏();
            return true;
    }
    return true;
});
function onClick快手悬赏(){
    快手悬赏.快手悬赏.setEnabled(true) 
    说.说(快手悬赏.快手悬赏.getText())    
    log(快手直播path)
    execution = engines.execScriptFile(快手悬赏path);
    快手悬赏.快手悬赏.setEnabled(false)
    kjzb("隐藏") ;
}  
    
快手极速版.快手极速版.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick快手极速版();
            return true;
    }
    return true;
});
function onClick快手极速版(){
    快手极速版.快手极速版.setEnabled(true) 
    说.说(快手极速版.快手极速版.getText())    
    execution = engines.execScriptFile(快手极速版path);
    快手极速版.快手极速版.setEnabled(false)
    kjzb("隐藏") ;
}  
   
    
快手定点.快手定点.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick快手定点();
            return true;
    }
    return true;
});
function onClick快手定点(){
    快手定点.快手定点.setEnabled(true) 
    说.说(快手定点.快手定点.getText())    
    execution = engines.execScriptFile(快手定点path);
    快手定点.快手定点.setEnabled(false)
    kjzb("隐藏") ;
}  
   
学习强国.学习强国.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick学习强国();
            return true;
    }
    return true;
});
function onClick学习强国(){
    学习强国.学习强国.setEnabled(true) 
    说.说(学习强国.学习强国.getText())    
    execution = engines.execScriptFile(学习强国path);
    学习强国.学习强国.setEnabled(false)
    kjzb("隐藏") ; 
}

学习强国自动.学习强国自动.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick学习强国自动();
            return true;
    }
    return true;
});
function onClick学习强国自动(){
    学习强国自动.学习强国自动.setEnabled(true) 
    说.说(学习强国自动.学习强国自动.getText())    
    execution = engines.execScriptFile(学习强国自动path);
    学习强国自动.学习强国自动.setEnabled(false)
    kjzb("隐藏") ; 
} 
更新.更新.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick更新();
            return true;
    }
    return true;
});
function onClick更新(){
    更新.更新.setEnabled(true) 
    说.说(更新.更新.getText())    
    execution = engines.execScriptFile(更新path);
    更新.更新.setEnabled(false)
    kjzb("隐藏") ; 
    exit()
} 
  














/**
 * @param {移动文件} msg 
 */
function 移动文件(项目名称,项目目录,fileName){
    fileNameq=fileName.split('.')[0]
    fileNameh=fileName.split('.')[1]
    if(项目目录==""){

        var oldpath=engines.myEngine().cwd()+"/"+fileNameq+'.js'
        var newpath=engines.myEngine().cwd()+"/"+项目名称+"/"+fileNameq+'.js'
        log(oldpath+'复制到:'+newpath)
        files.copy(oldpath, newpath)
        log('复制成功')
    }else{
            var oldpath=engines.myEngine().cwd()+"/"+fileNameq+'.js'
            var newpath1=engines.myEngine().cwd()+"/"+项目名称+"/"+项目目录+"/"+fileNameq+'.js'
            var newpath2=engines.myEngine().cwd()+"/"+项目目录+"/"+fileNameq+'.js'//av直接测试用
            // log(oldpath+'复制到:'+newpath1)
            // log(oldpath+'复制到:'+newpath2)
            files.copy(oldpath, newpath1)
            files.copy(oldpath, newpath2)
            // log('复制成功')
            //转md文档
            if(fileNameh=='md'){
                files.rename(engines.myEngine().cwd()+'/'+项目名称+'/'+项目目录+"/"+fileNameq+'.js', fileNameq+'.md'); 
                files.rename(engines.myEngine().cwd()+'/'+项目目录+"/"+fileNameq+'.js', fileNameq+'.md'); 
                // log("重命名成功："+engines.myEngine().cwd()+'/'+项目名称+'/'+项目目录+"/"+fileNameq+'.js')
            }
        }
            
    
}





function readFile(path) {
  var tempFile =files.join(path,"/版本.js")
  // log(tempFile)
  // var sh = new Shell(true);
  // sh.exec('cat ' + path + '> ' + tempFile)
  // sh.exitAndWaitFor()
  // log(tempFile)
  // files.read("/sdcard/1.txt",encoding = "UTF-8");    
  return files.read(tempFile,encoding = "UTF-8")
}

function writeFile(path, content) {
  var tempFile = '/sdcard/temp.txt'
  files.createWithDirs(tempFile)
  files.write(tempFile, content)
  var sh = new Shell(true);
  sh.exec('cat ' + tempFile + ' > ' + path)
  sh.exitAndWaitFor()
}




function 获取下载的脚本(){
    log('github地址：',githubUrl)
    try{
      var r=http.get(githubUrl)
      log('code=',r.statusCode)  // code= 200 代表成功
      var zipFile=r.body.bytes()
      if(zipFile){
          log('连接成功，下载中.....')
        var 代码路径=保存zip文件(zipFile)
        return 代码路径
      //   return files.read(代码路径) //文件太大，读取bytes 会报错
      }else{
        console.error('下载github代码失败')
        exit()
      }
    }catch(err){
        log('报错了....')
        console.error(err)
        exit()
          
    }
}
  
function 保存zip文件(zipFile){
    var path=files.join(files.cwd(),"zip文件专用dome/test.zip")
    files.createWithDirs(path)
    log("path=",path)
    // path= /storage/emulated/0/脚本/zip文件专用/test.zip
    files.writeBytes(path,zipFile)
    var r=解压zip文件(path)
    log(r)
    return r
}
  
  
function 解压zip文件(文件路径){
    //同一目录下的同一文件名
    var 文件夹路径=文件路径.replace(".zip", "")+"/"
    log('解压的文件夹路径=',文件夹路径)
    files.createWithDirs(文件夹路径) //如果文件不存在，创建一个文件，如果存在，返回 false
    com.stardust.io.Zip.unzip(new java.io.File(文件路径), new java.io.File(文件夹路径))
    return 文件夹路径+仓库名字+"-master"+"/master.js"
}
  
  
function 返回路径的父目录(path){
    var r=path.split("/")
    r[r.length-1]=""
    r=r.join('/')
    // 尾部带斜杆
    log("父目录=",r)
}
  





function moveList(dowdDir) {
    var arr = files.listDir(dowdDir)
    for (var i = 0; i < arr.length; i++) {
        var sonList =files.listDir(dowdDir+"/"+arr[i])
        if (sonList.length == 0) {
          log('当前目录：',dowdDir+"/"+arr[i])
          // log(arr[i])
          // log(dowdDir)
          dirs=dowdDir+'/'+arr[i]
          todirs=dowdDir.replace('/zip文件专用dome/test/Autojs-master','/')+arr[i]
          // log('dirs',dirs)
          // log('todirs',todirs)
          log(files.move(dirs,todirs))
        } else {
          moveList(dowdDir+"/"+arr[i]);
        }
    }
    return arr;
  }
  
  
  function 移动(文件路径){//遍历文件夹下所有的文件夹和文件
     //同一目录下的同一文件名
       log('开始移动')
       log(文件路径)
     //   /storage/emulated/0/脚本/辅助小管家/zip文件专用dome/test/AutoWool-main/main.js
     var dowdDir = root.concat('/zip文件专用dome/test/Autojs-master');
     log('文件下载路径'+dowdDir)
     var softDir= root
     log('软件路径softDir：',softDir)
     moveList(dowdDir) 
  }
   
// function 移动(文件路径){//遍历文件夹下所有的文件夹和文件
//     //同一目录下的同一文件名
//       log('开始移动')
//       log(文件路径)
//     //   /storage/emulated/0/脚本/辅助小管家/zip文件专用dome/test/AutoWool-main/main.js
//     var dir = 文件路径.replace('main.js','');
//     log('zip文件专用dome/test/'+仓库名字+'-main/main.js')
//     var softduir= 文件路径.replace('zip文件专用dome/test/'+仓库名字+'-main/main.js','');
//     log('下载路径：',dir)
//     log('软件路径softduir：',softduir+'AutoJs')
//     var arr = files.listDir(dir);


//     log(dir+arr.length)
//     log('文件路径:',文件路径)
//     for(i=0;i<arr.length;i++){
//       log("根目录："+i+'--->'+arr[i]);
//         var arr1 = files.listDir(dir+"/"+arr[i]);
//         if(arr1.length==0){
//           var arro=dir+arr[i] 
//           var arrn=softduir+arr[i]      
//           log('原文件路径：'+arro)      
//           log('需移动文件路径：'+arrn)
//           log(files.move(arro,arrn))
//         }
//         if(arr1.length>0){
//           log(dir+"/"+arr[i]+"有："+arr1.length+"文件")
//           for(ii=0;ii<arr1.length;ii++){
//             log(arr1[i]+"目录："+ii+'--->'+arr1[ii]);
//             var arro=dir+arr[i]+"/"+arr1[ii] 
//             var arrn=softduir+arr[i]+"/"+arr1[ii]
//             log('原文件路径：'+arro)      
//             log('需移动文件路径：'+arrn)
//             log(files.move(arro,arrn))
//           }
//         }
    
//     }
    
// }
  

