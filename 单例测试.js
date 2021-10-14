
var path =engines.myEngine().cwd();
log(path)
var h=device.height*0.2
var zt='展开';



var 学习强国 = floaty.window(
    <frame  w="85" h="120" >
    <button id="学习强国" text="学习强国" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 答题 = floaty.window(
    <frame>
    <button id="答题" text="答题" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 学习 = floaty.window(
    <frame>
    <button id="学习" text="学习" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 停止脚本 = floaty.window(
    <frame>
    <button id="停止脚本" text="停止脚本" w="85" h="40"  bg="#77ffffff"/>
    </frame>
);
var 退出 = floaty.window(
    <frame>
    <button id="退出" text="退出" w="85" h="40"  bg="#77ffffff"/>
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
        
        学习强国.setPosition(0,h+0*50)
        答题.setPosition(0,h+1*150)
        学习.setPosition(0,h+2*150)
        停止脚本.setPosition(0,h+3*150)
        退出.setPosition(0,h+4*150)
        隐藏.setPosition(0,h+5*150)
        隐藏.隐藏.setText('隐藏')
    }else{
        学习强国.setPosition(0,h+1*150)
        答题.setPosition(0,h+1*150)
        学习.setPosition(0,h+1*150)
        停止脚本.setPosition(0,h+1*150)
        退出.setPosition(0,h+1*150)
        隐藏.setPosition(0,h+1*150)
        隐藏.隐藏.setText('展开')
    }

}

kjzb('展开');
var execution = null; //清空执行语句


学习强国.学习强国.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick学习强国();
            return true;
    }
    return true;
});
答题.答题.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick答题();
            return true;
    }
    return true;
});
学习.学习.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick学习();
            return true;
    }
    return true;
});
停止脚本.停止脚本.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick停止脚本();
            return true;
    }
    return true;
});
退出.退出.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick退出();
            return true;
    }
    return true;
});
隐藏.隐藏.setOnTouchListener(function(view, event){
    switch(event.getAction()){
        case event.ACTION_UP:
            onClick隐藏();
            return true;
    }
    return true;
});


function onClick学习强国(){
    var appName='学习强国'
    // app.launchApp(appName);
    学习强国.学习强国.setEnabled(false) 
    kjzb("隐藏") ;  
}
function onClick答题(){
    停止脚本.停止脚本.setEnabled(true) 
    // execution = engines.execScriptFile(学习强国选择题path);
    答题.答题.setEnabled(false)
    学习.学习.setEnabled(false)
    kjzb("隐藏") ;
}
function onClick学习(){
    停止脚本.停止脚本.setEnabled(true)  
    // execution = engines.execScriptFile(学习强国path); 
    答题.答题.setEnabled(false)
    学习.学习.setEnabled(false)
    kjzb("隐藏") ;
}    
function onClick停止脚本(){    
    停止脚本.停止脚本.setEnabled(false)  
    答题.答题.setEnabled(true)
    学习.学习.setEnabled(true)           
    if(execution){
        execution.getEngine().forceStop();
        答题.答题.setEnabled(true)
        学习.学习.setEnabled(true)
    } 
    kjzb("可以退出") ;
}
function onClick退出(){
    exit();

}
function onClick隐藏(){
    if(隐藏.隐藏.getText()=='隐藏'){
        kjzb('隐藏') ;
    }else{
        隐藏.隐藏.setText('展开') 
        kjzb('展开') ;
    }
    

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
