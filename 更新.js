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

log(root)
log('服务器有最新版本，我要更新了')
github下载的脚本=获取下载的脚本()
log('github下载的脚本:',github下载的脚本)
log('下载完成')
sleep(2000)
// 移动(github下载的脚本)
解压zip文件(files.join(root,"zip文件专用dome/test.zip"))
移动(root)
sleep(2000)
var a=root+"/main.js"
// log(a)
engines.execScriptFile(a);
sleep(8000)
exit()

function moveList(dowdDir) {
  var arr = files.listDir(dowdDir)
  for (var i = 0; i < arr.length; i++) {
      var sonList =files.listDir(dowdDir+"/"+arr[i])
      if (sonList.length == 0) {
        log('当前目录：',dowdDir+"/"+arr[i])
        // log(arr[i])
        log(dowdDir)
        dirs=dowdDir+'/'+arr[i]
        todirs=dowdDir.replace('/zip文件专用dome/test/Autojs-master','')+'/'+arr[i]
        if(1==1){
          log('dirs',dirs)
          log('todirs',todirs)

        }
        log(files.move(dirs,todirs))
      } else {
        moveList(dowdDir+"/"+arr[i]);
      }
  }
  return arr;
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
 


   exit()