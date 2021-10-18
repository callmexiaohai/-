var intents={}
// 1、action {string} 意图的Action，指意图要完成的动作



var intent = new Intent();
//系统设置界面
intents.ACTION_SETTINGS = "android.settings.SETTINGS";
// 无障碍设置界面
intents.ACTION_ACCESSIBILITY_SETTINGS = "android.settings.ACCESSIBILITY_SETTINGS";
//添加账户界面
intents.ACTION_ADD_ACCOUNT = "android.settings.ADD_ACCOUNT_SETTINGS";
//更多连接方式设置界面
intents.ACTION_AIRPLANE_MODE_SETTINGS = "android.settings.AIRPLANE_MODE_SETTINGS";
//APN设置界面
intents.ACTION_APN_SETTINGS = "android.settings.APN_SETTINGS";
intents.ACTION_APPLICATION_DETAILS_SETTINGS = "android.settings.APPLICATION_DETAILS_SETTINGS";
// 开发者选项设置
intents.ACTION_APPLICATION_DEVELOPMENT_SETTINGS = "android.settings.APPLICATION_DEVELOPMENT_SETTINGS";
intents.ACTION_APPLICATION_SETTINGS = "android.settings.APPLICATION_SETTINGS";
intents.ACTION_APP_NOTIFICATION_BUBBLE_SETTINGS = "android.settings.APP_NOTIFICATION_BUBBLE_SETTINGS";
intents.ACTION_APP_NOTIFICATION_SETTINGS = "android.settings.APP_NOTIFICATION_SETTINGS";
intents.ACTION_APP_SEARCH_SETTINGS = "android.settings.APP_SEARCH_SETTINGS";
intents.ACTION_APP_USAGE_SETTINGS = "android.settings.action.APP_USAGE_SETTINGS";
// 节电助手界面
intents.ACTION_BATTERY_SAVER_SETTINGS = "android.settings.BATTERY_SAVER_SETTINGS";
intents.ACTION_BIOMETRIC_ENROLL = "android.settings.BIOMETRIC_ENROLL";
// 蓝牙设置
intents.ACTION_BLUETOOTH_SETTINGS = "android.settings.BLUETOOTH_SETTINGS";
// 字幕设置的界面
intents.ACTION_CAPTIONING_SETTINGS = "android.settings.CAPTIONING_SETTINGS";
// 投射设置
intents.ACTION_CAST_SETTINGS = "android.settings.CAST_SETTINGS";
intents.ACTION_CHANNEL_NOTIFICATION_SETTINGS = "android.settings.CHANNEL_NOTIFICATION_SETTINGS";
intents.ACTION_CONDITION_PROVIDER_SETTINGS = "android.settings.ACTION_CONDITION_PROVIDER_SETTINGS";
// 双卡和移动网络设置界面
intents.ACTION_DATA_ROAMING_SETTINGS = "android.settings.DATA_ROAMING_SETTINGS";
intents.ACTION_DATA_USAGE_SETTINGS = "android.settings.DATA_USAGE_SETTINGS";
// 日期时间设置
intents.ACTION_DATE_SETTINGS = "android.settings.DATE_SETTINGS";
// 手机状态信息的界面
intents.ACTION_DEVICE_INFO_SETTINGS = "android.settings.DEVICE_INFO_SETTINGS";
// 显示设置
intents.ACTION_DISPLAY_SETTINGS = "android.settings.DISPLAY_SETTINGS";
// 互动屏保设置的界面
intents.ACTION_DREAM_SETTINGS = "android.settings.DREAM_SETTINGS";

intents.ACTION_FINGERPRINT_ENROLL = "android.settings.FINGERPRINT_ENROLL";
intents.ACTION_HARD_KEYBOARD_SETTINGS = "android.settings.HARD_KEYBOARD_SETTINGS";
// 主屏幕设置界面
intents.ACTION_HOME_SETTINGS = "android.settings.HOME_SETTINGS";
intents.ACTION_IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS = "android.settings.IGNORE_BACKGROUND_DATA_RESTRICTIONS_SETTINGS";
intents.ACTION_IGNORE_BATTERY_OPTIMIZATION_SETTINGS = "android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS";
// 语言和输入法设置
intents.ACTION_INPUT_METHOD_SETTINGS = "android.settings.INPUT_METHOD_SETTINGS";
intents.ACTION_INPUT_METHOD_SUBTYPE_SETTINGS = "android.settings.INPUT_METHOD_SUBTYPE_SETTINGS";
// 存储空间设置的界面
intents.ACTION_INTERNAL_STORAGE_SETTINGS = "android.settings.INTERNAL_STORAGE_SETTINGS";
// 语言设置
intents.ACTION_LOCALE_SETTINGS = "android.settings.LOCALE_SETTINGS";
//定位设置界面
intents.ACTION_LOCATION_SOURCE_SETTINGS = "android.settings.LOCATION_SOURCE_SETTINGS";
intents.ACTION_MANAGE_ALL_APPLICATIONS_SETTINGS = "android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS";
intents.ACTION_MANAGE_ALL_FILES_ACCESS_PERMISSION = "android.settings.MANAGE_ALL_FILES_ACCESS_PERMISSION";
intents.ACTION_MANAGE_APPLICATIONS_SETTINGS = "android.settings.MANAGE_APPLICATIONS_SETTINGS";
intents.ACTION_MANAGE_APP_ALL_FILES_ACCESS_PERMISSION = "android.settings.MANAGE_APP_ALL_FILES_ACCESS_PERMISSION";
intents.ACTION_MANAGE_DEFAULT_APPS_SETTINGS = "android.settings.MANAGE_DEFAULT_APPS_SETTINGS";
intents.ACTION_MANAGE_OVERLAY_PERMISSION = "android.settings.action.MANAGE_OVERLAY_PERMISSION";
intents.ACTION_MANAGE_UNKNOWN_APP_SOURCES = "android.settings.MANAGE_UNKNOWN_APP_SOURCES";
intents.ACTION_MANAGE_WRITE_SETTINGS = "android.settings.action.MANAGE_WRITE_SETTINGS";
intents.ACTION_MEMORY_CARD_SETTINGS = "android.settings.MEMORY_CARD_SETTINGS";
// 选取运营商的界面
intents.ACTION_NETWORK_OPERATOR_SETTINGS = "android.settings.NETWORK_OPERATOR_SETTINGS";
intents.ACTION_NFCSHARING_SETTINGS = "android.settings.NFCSHARING_SETTINGS";
intents.ACTION_NFC_PAYMENT_SETTINGS = "android.settings.NFC_PAYMENT_SETTINGS";
intents.ACTION_NFC_SETTINGS = "android.settings.NFC_SETTINGS";
intents.ACTION_NIGHT_DISPLAY_SETTINGS = "android.settings.NIGHT_DISPLAY_SETTINGS";
intents.ACTION_NOTIFICATION_ASSISTANT_SETTINGS = "android.settings.NOTIFICATION_ASSISTANT_SETTINGS";
intents.ACTION_NOTIFICATION_LISTENER_DETAIL_SETTINGS = "android.settings.NOTIFICATION_LISTENER_DETAIL_SETTINGS";
// 通知使用权设置的界面
intents.ACTION_NOTIFICATION_LISTENER_SETTINGS = "android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS";
// 勿扰权限设置的界面
intents.ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS = "android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS";
// 打印设置界面
intents.ACTION_PRINT_SETTINGS = "android.settings.ACTION_PRINT_SETTINGS";
// 备份重置设置界面
intents.ACTION_PRIVACY_SETTINGS = "android.settings.PRIVACY_SETTINGS";
intents.ACTION_PROCESS_WIFI_EASY_CONNECT_URI = "android.settings.PROCESS_WIFI_EASY_CONNECT_URI";
intents.ACTION_QUICK_ACCESS_WALLET_SETTINGS = "android.settings.QUICK_ACCESS_WALLET_SETTINGS";
intents.ACTION_QUICK_LAUNCH_SETTINGS = "android.settings.QUICK_LAUNCH_SETTINGS";
intents.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS = "android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS";
intents.ACTION_REQUEST_SET_AUTOFILL_SERVICE = "android.settings.REQUEST_SET_AUTOFILL_SERVICE";
// 搜索设置界面
intents.ACTION_SEARCH_SETTINGS = "android.search.action.SEARCH_SETTINGS";
// 安全设置界面
intents.ACTION_SECURITY_SETTINGS = "android.settings.SECURITY_SETTINGS";
intents.ACTION_SHOW_REGULATORY_INFO = "android.settings.SHOW_REGULATORY_INFO";
intents.ACTION_SHOW_WORK_POLICY_INFO = "android.settings.SHOW_WORK_POLICY_INFO";
// 声音设置
intents.ACTION_SOUND_SETTINGS = "android.settings.SOUND_SETTINGS";
intents.ACTION_STORAGE_VOLUME_ACCESS_SETTINGS = "android.settings.STORAGE_VOLUME_ACCESS_SETTINGS";
// 同步设置界面
intents.ACTION_SYNC_SETTINGS = "android.settings.SYNC_SETTINGS";
intents.ACTION_USAGE_ACCESS_SETTINGS = "android.settings.USAGE_ACCESS_SETTINGS";
// 个人字典设置界面
intents.ACTION_USER_DICTIONARY_SETTINGS = "android.settings.USER_DICTIONARY_SETTINGS";
intents.ACTION_VOICE_CONTROL_AIRPLANE_MODE = "android.settings.VOICE_CONTROL_AIRPLANE_MODE";
intents.ACTION_VOICE_CONTROL_BATTERY_SAVER_MODE = "android.settings.VOICE_CONTROL_BATTERY_SAVER_MODE";
intents.ACTION_VOICE_CONTROL_DO_NOT_DISTURB_MODE = "android.settings.VOICE_CONTROL_DO_NOT_DISTURB_MODE";
// 辅助应用和语音输入设置
intents.ACTION_VOICE_INPUT_SETTINGS = "android.settings.VOICE_INPUT_SETTINGS";
// VPN设置界面,可能不存在
intents.ACTION_VPN_SETTINGS = "android.settings.VPN_SETTINGS";

intents.ACTION_VR_LISTENER_SETTINGS = "android.settings.VR_LISTENER_SETTINGS";
intents.ACTION_WEBVIEW_SETTINGS = "android.settings.WEBVIEW_SETTINGS";
intents.ACTION_WIFI_ADD_NETWORKS = "android.settings.WIFI_ADD_NETWORKS";
// WIFI的IP设置
intents.ACTION_WIFI_IP_SETTINGS = "android.settings.WIFI_IP_SETTINGS";
// 无线网设置界面
intents.ACTION_WIFI_SETTINGS = "android.settings.WIFI_SETTINGS";

intents.ACTION_WIRELESS_SETTINGS = "android.settings.WIRELESS_SETTINGS";
intents.ACTION_ZEN_MODE_PRIORITY_SETTINGS = "android.settings.ZEN_MODE_PRIORITY_SETTINGS";
intents.ADD_WIFI_RESULT_ADD_OR_UPDATE_FAILED = 1;
intents.ADD_WIFI_RESULT_ALREADY_EXISTS = 2;
intents.ADD_WIFI_RESULT_SUCCESS = 0;
intents.AUTHORITY = "settings";

intents.EXTRA_ACCOUNT_TYPES = "account_types";
intents.EXTRA_AIRPLANE_MODE_ENABLED = "airplane_mode_enabled";
intents.EXTRA_APP_PACKAGE = "android.provider.extra.APP_PACKAGE";
intents.EXTRA_AUTHORITIES = "authorities";
intents.EXTRA_BATTERY_SAVER_MODE_ENABLED = "android.settings.extra.battery_saver_mode_enabled";
intents.EXTRA_BIOMETRIC_AUTHENTICATORS_ALLOWED = "android.provider.extra.BIOMETRIC_AUTHENTICATORS_ALLOWED";
intents.EXTRA_CHANNEL_ID = "android.provider.extra.CHANNEL_ID";
intents.EXTRA_CONVERSATION_ID = "android.provider.extra.CONVERSATION_ID";
intents.EXTRA_DO_NOT_DISTURB_MODE_ENABLED = "android.settings.extra.do_not_disturb_mode_enabled";
intents.EXTRA_DO_NOT_DISTURB_MODE_MINUTES = "android.settings.extra.do_not_disturb_mode_minutes";
intents.EXTRA_EASY_CONNECT_ATTEMPTED_SSID = "android.provider.extra.EASY_CONNECT_ATTEMPTED_SSID";
intents.EXTRA_EASY_CONNECT_BAND_LIST = "android.provider.extra.EASY_CONNECT_BAND_LIST";
intents.EXTRA_EASY_CONNECT_CHANNEL_LIST = "android.provider.extra.EASY_CONNECT_CHANNEL_LIST";
intents.EXTRA_EASY_CONNECT_ERROR_CODE = "android.provider.extra.EASY_CONNECT_ERROR_CODE";
intents.EXTRA_INPUT_METHOD_ID = "input_method_id";
intents.EXTRA_NOTIFICATION_LISTENER_COMPONENT_NAME = "android.provider.extra.NOTIFICATION_LISTENER_COMPONENT_NAME";
intents.EXTRA_SUB_ID = "android.provider.extra.SUB_ID";
intents.EXTRA_WIFI_NETWORK_LIST = "android.provider.extra.WIFI_NETWORK_LIST";
intents.EXTRA_WIFI_NETWORK_RESULT_LIST = "android.provider.extra.WIFI_NETWORK_RESULT_LIST";
intents.INTENT_CATEGORY_USAGE_ACCESS_CONFIG = "android.intent.category.USAGE_ACCESS_CONFIG";
intents.METADATA_USAGE_ACCESS_REASON = "android.settings.metadata.USAGE_ACCESS_REASON";


 
// mFocusedApp=AppWindowToken{b8fc8e2 token=Token{eb5dad ActivityRecord{566ac4 u0 com.android.settings/.SubSettings t195}}}
// mFocusedApp=AppWindowToken{ca93fff token=Token{d7c4359 ActivityRecord{9a1eba0 u0 com.android.settings/.MainSettings t195}}}
// mFocusedApp=AppWindowToken{9a9e4a6 token=Token{d5107e8 ActivityRecord{659bd0b u0 com.android.settings/.SubSettings t195}}}
// mFocusedApp=AppWindowToken{7ff416a token=Token{6d2c355 ActivityRecord{55abe0c u0 com.android.settings/.SubSettings t195}}}
//     com.android.settings/.SubSettings t195
//     com.android.settings/.SubSettings t195

/**辅助功能 */
intents.安卓_辅助功能=function(){
    intent.setAction("android.settings.ACCESSIBILITY_SETTINGS");   
    app.startActivity(intent); 
}
/**添加账户 */
intents.安卓_添加账户=function(){
    intent.setAction("android.settings.ADD_ACCOUNT_SETTINGS");  
    app.startActivity(intent); 
}
/**系统设置首页 */
intents.安卓_系统设置首页=function(){
    intent.setAction("android.settings.AIRPLANE_MODE_SETTINGS");  
    app.startActivity(intent);  
}
/**APN设置 */
intents.安卓_APN设置=function(){
    intent.setAction("android.settings.APN_SETTINGS");   
    app.startActivity(intent); 
}
/**应用管理 */
intents.安卓_应用管理=function(){
    intent.setAction("android.settings.APPLICATION_SETTINGS");  
    app.startActivity(intent); 
}
/**节电助手 */
intents.安卓_节电助手=function(){
    intent.setAction("android.settings.BATTERY_SAVER_SETTINGS");   
    app.startActivity(intent); 
}
/**蓝牙 */
intents.安卓_蓝牙=function(){
    intent.setAction("android.settings.BLUETOOTH_SETTINGS");   
    app.startActivity(intent); 
}
/**字幕 */
intents.安卓_字幕=function(){
    intent.setAction("android.settings.CAPTIONING_SETTINGS");  
    app.startActivity(intent); 
}
/**无线显示 */
intents.安卓_无线显示=function(){
    intent.setAction("android.settings.CAST_SETTINGS");  
    app.startActivity(intent); 
}
/**移动网络 */
intents.安卓_移动网络=function(){
    intent.setAction("android.settings.DATA_ROAMING_SETTINGS");  
    app.startActivity(intent); 
}
/**日期和时间设置 */
intents.安卓_日期和时间设置=function(){
    intent.setAction("android.settings.DATE_SETTINGS");   
    app.startActivity(intent); 
}
/**关于手机 */
intents.安卓_关于手机=function(){
    intent.setAction("android.settings.DEVICE_INFO_SETTINGS");   
    app.startActivity(intent); 
}
/**显示设置 */
intents.安卓_显示设置=function(){
    intent.setAction("android.settings.DISPLAY_SETTINGS");  
    app.startActivity(intent); 
}
/**互动屏保设置 */
intents.安卓_互动屏保设置=function(){
    intent.setAction("android.settings.DREAM_SETTINGS");  
    app.startActivity(intent);  
}
/**实体键盘 */
intents.安卓_实体键盘=function(){
    intent.setAction("android.settings.HARD_KEYBOARD_SETTINGS");  
    app.startActivity(intent); 
}
/**应用权限,默认应用设置,特殊权限 */
intents.安卓_应用权限=function(){
    intent.setAction("android.settings.HOME_SETTINGS");  
    app.startActivity(intent); 
}
/**忽略电池优化设置 */
intents.安卓_忽略电池优化设置=function(){
    intent.setAction("android.settings.IGNORE_BATTERY_OPTIMIZATION_SETTINGS");  
    app.startActivity(intent); 
}
/**可用虚拟键盘设置 */
intents.安卓_可用虚拟键盘设置=function(){
    intent.setAction("android.settings.INPUT_METHOD_SETTINGS");  
    app.startActivity(intent); 
}
/**安卓键盘语言设置(AOSP) */
intents.安卓_安卓键盘语言设置=function(){
    intent.setAction("android.settings.INPUT_METHOD_SUBTYPE_SETTINGS");  
    app.startActivity(intent);  
}
/**内存和存储 */
intents.安卓_内存和存储=function(){
    intent.setAction("android.settings.INTERNAL_STORAGE_SETTINGS");  
    app.startActivity(intent); 
}
/**语言偏好设置 */
intents.安卓_语言偏好设置=function(){
    intent.setAction("android.settings.LOCALE_SETTINGS");   
    app.startActivity(intent); 
}
/**定位服务设置 */
intents.安卓_定位服务设置=function(){
    intent.setAction("android.settings.LOCATION_SOURCE_SETTINGS");  
    app.startActivity(intent); 
}
/**所有应用 */
intents.安卓_所有应用=function(){
    intent.setAction("android.settings.MANAGE_ALL_APPLICATIONS_SETTINGS");  
    app.startActivity(intent); 
}
/**应用管理 */
intents.安卓_应用管理=function(){
    intent.setAction("android.settings.MANAGE_APPLICATIONS_SETTINGS");   
    app.startActivity(intent); 
}
/**与ACTION_HOME_SETTINGS相同 */
intents.安卓_与ACTION_HOME_SETTINGS相同=function(){
    intent.setAction("android.settings.MANAGE_DEFAULT_APPS_SETTINGS");  
    app.startActivity(intent);  
}
/**在其他应用上层显示,悬浮窗 */
intents.安卓_悬浮窗=function(){
    intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION");  
    app.startActivity(intent);  
}
/**安装未知应用 安卓8.0 */
intents.安卓_安装未知应用=function(){
    intent.setAction("android.settings.MANAGE_UNKNOWN_APP_SOURCES"); 
    app.startActivity(intent); 
}
/**可修改系统设置权限 */
intents.安卓_可修改系统设置权限=function(){
    intent.setAction("android.settings.action.MANAGE_WRITE_SETTINGS");  
    app.startActivity(intent);
}
/**内存与存储 */
intents.安卓_内存与存储=function(){
    intent.setAction("android.settings.MEMORY_CARD_SETTINGS");   
    app.startActivity(intent);
}
/**可用网络选择 */
intents.安卓_可用网络选择=function(){
intent.setAction("android.settings.NETWORK_OPERATOR_SETTINGS");   
app.startActivity(intent);
}
/**NFC设置 */
intents.安卓_NFC设置=function(){
    intent.setAction("android.settings.NFCSHARING_SETTINGS");  
    app.startActivity(intent);
}
/**网络中的更多设置 */
intents.安卓_网络中的更多设置=function(){
    intent.setAction("android.settings.NFC_SETTINGS"); 
    app.startActivity(intent);
}
/**通知权限设置 */
intents.安卓_通知权限设置=function(){
    intent.setAction("android.settings.ACTION_NOTIFICATION_LISTENER_SETTINGS"); 
    app.startActivity(intent);
}
/**勿扰权限设置 */
intents.安卓_勿扰权限设置=function(){
    intent.setAction("android.settings.NOTIFICATION_POLICY_ACCESS_SETTINGS");
    app.startActivity(intent);
}
/**打印服务设置 */
intents.安卓_打印服务设置=function(){
    intent.setAction("android.settings.ACTION_PRINT_SETTINGS");
    app.startActivity(intent); 
}
/**备份和重置 */
intents.安卓_备份和重置=function(){
    intent.setAction("android.settings.PRIVACY_SETTINGS"); 
    app.startActivity(intent);
}
/**安全设置 */
intents.安卓_安全设置=function(){
    intent.setAction("android.settings.SECURITY_SETTINGS");
    app.startActivity(intent);
}
/**监管信息 */
intents.安卓_监管信息=function(){
    intent.setAction("android.settings.SHOW_REGULATORY_INFO"); 
    app.startActivity(intent);
}
/**声音设置 */
intents.安卓_声音设置=function(){
    intent.setAction("android.settings.SOUND_SETTINGS"); 
    app.startActivity(intent);
}
/**添加账户设置 */
intents.安卓_添加账户设置=function(){
    intent.setAction("android.settings.SYNC_SETTINGS"); 
    app.startActivity(intent);
}
/**有权查看使用情况的应用 */
intents.安卓_有权查看使用情况的应用=function(){
    intent.setAction("android.settings.USAGE_ACCESS_SETTINGS"); 
    app.startActivity(intent);
}
/**个人词典 */
intents.安卓_个人词典=function(){
    intent.setAction("android.settings.USER_DICTIONARY_SETTINGS");
    app.startActivity(intent);
}
/**辅助应用和语音输入 */
intents.安卓_辅助应用和语音输入=function(){
    intent.setAction("android.settings.VOICE_INPUT_SETTINGS");
    app.startActivity(intent);
}
/**VPN设置 */
intents.安卓_VPN设置=function(){
    intent.setAction("android.settings.VPN_SETTINGS"); 
    app.startActivity(intent);
}
/**VR助手 */
intents.安卓_VR助手=function(){
    intent.setAction("android.settings.VR_LISTENER_SETTINGS"); 
    app.startActivity(intent);
}
/**选择webview */
intents.安卓_选择webview=function(){
    intent.setAction("android.settings.WEBVIEW_SETTINGS");
    app.startActivity(intent);
}
/**
 * //高级WLAN设置
 */
intents.安卓_高级WLAN设置=function(){
    intent.setAction("android.settings.WIFI_IP_SETTINGS");
    app.startActivity(intent);
}
/**选择WIFI,连接WIFI */
intents.安卓_连接WIFI=function(){
    intent.setAction("android.settings.WIFI_SETTINGS");
    app.startActivity(intent);
    
}
/**安卓_锁屏_密码_指纹 */
intents.安卓_锁屏_密码_指纹1=function(){
    intent.setAction("SubSettings");
    app.startActivity(intent);
    
}


intents.安卓_锁屏_密码_指纹 = function(){
    app.startActivity({
        action: "VIEW",//"android.intent.action.VIEW", //此处可为其他值
        packageName: "com.android.settings",
        className: "SubSettings"
        //此处可以加入其他内容，如data、extras
    });
    sleep(200);
    while (!textContains("自动锁屏").exists()) {
        //sleep(50);
        scrollDown();
        sleep(100);
    }
    var zz = textContains("自动锁屏").findOne(5000);
    if (zz) {
        toast('发现  自动锁屏')
        a = click("自动锁屏");
        sleep(5000)
        a = click("15秒");
        toastLog("自动锁屏切换成功：" + a);
        
        sleep(5000)
        back();
        exit()
    }
    }


intents.安卓_指针位置 = function(){
    app.startActivity({
        action: "VIEW",//"android.intent.action.VIEW", //此处可为其他值
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
        toast('发现指针')
        a = click("指针位置");
        toastLog("指针位置切换成功：" + a);
        
        sleep(5000)
        back();
        exit()
    }
    }



intents.ksjsb_Intent=function(str){
    log("进入启动"+str)
    if(str=='启动'){
        var VarAction= "android.intent.action.MAIN"
        var VarPackageName= "com.kuaishou.nebula"
        var VarClassName= "com.yxcorp.gifshow.HomeActivity"
        // category: ["android.intent.category.LAUNCHER"],
        // flags: ["activity_new_task"]


        //  var VarPackageName="android.intent.action.MAIN"
        //  var VarAction='android.intent.action.VIEW'
        //  var VarClassName='com.yxcorp.gifshow.HomeActivity'
    }
    if(str=='游戏中心'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.gamecenter.GameCenterActivity'
    }
    if(str=='快手游戏'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.gamecenter.sogame.home.SoGameListActivity'
    }
    if(str=='地理位置'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.ad.activity.CommercialLocationActivity'
    }
    if(str=='获取物理位置'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.ad.activity.CommercialLocationPreviewActivity'
    }
    if(str=='关注'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.kuaishou.live.core.show.myfollow.LiveMyFollowActivity'
    }
    if(str=='快手聊天室'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.kuaishou.live.core.voiceparty.feed.VoicePartyFeedActivity'
    }
    if(str=='大家都在看'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.kuaishou.live.core.show.liveaggregate.LiveAggregateActivity'
    }
    if(str=='快手音悦台首页'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.detail.musicstation.MusicStationActivity'
    }
    if(str=='我的钱包'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.plugin.payment.activity.MyWalletActivity'
    }
    if(str=='充值快币'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.plugin.payment.activity.RechargeKwaiCoinListActivity'
    }
    if(str=='设置'){
         
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.plugin.setting.activity.SettingsActivity'
    }
    if(str=='通讯录'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.relation.explore.activity.ContactsListActivity'
    }
    if(str=='发现好友'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.relation.explore.activity.ExploreFriendActivity'
    }
    if(str=='个人资料'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.profile.activity.MyProfileActivity'
    }
    if(str=='刷新个人资料'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.profile.activity.UserProfileActivity'
    }
    if(str=='编辑资料'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.profile.activity.UserInfoEditActivity'
    }
    if(str=='账号与安全'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.login.userlogin.activity.AccountSecurityActivity'
    }
    if(str=='共同关注'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.plugin.message.CommonConcernActivity'
    }
    if(str=='管理群资料'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.newgroup.manage.GroupDataEditActivity'
    }
    if(str=='附近的群'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.newgroup.nearby.NearbyGroupsActivity'
    }
    if(str=='大屏模式'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.gifshow.kuaishou.thanos.browsesetting.BrowseSettingsActivity'
    }
    if(str=='消息'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.activity.ReminderActivity'
    }
    if(str=='定位'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.map.local.RoamCityActivity'
    }
    if(str=='大家都在玩'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.plugin.tag.music.creationchallenge.CreationChallengeActivity'
    }
    if(str=='快资讯'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.homepage.local.localarticle.NearbyArticleActivity'
    }
    if(str=='附近的人'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.peoplenearby.PeopleNearbyActivity'
    }
    if(str=='投票'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.v3.editor.sticker.vote.VoteDetailActivity'
    }
    if(str=='进入相机'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.camera.record.CameraActivity'
    }
    if(str=='本地作品集'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.record.album.LocalAlbumActivity'
    }
    if(str=='快手音乐人'){
         var VarPackageName="com.kuaishou.nebula"
         var VarAction='android.intent.action.VIEW'
         var VarClassName='com.yxcorp.gifshow.music.rank.MusicRankActivity'
    }
    if(str=='测试'){
         //var strs="com.kuaishou.nebula/com.yxcorp.plugin.setting.activity.SettingsActivity"
         //var strs="com.jd.jdlite/.MainFrameActivity"
         var strs="cn.xuexi.android/com.alibaba.android.rimet.biz.home.activity.HomeActivity"
         log('进入测试')
         var VarPackageName=strs.split('/')[0]
         var VarAction='android.intent.action.VIEW' //strs.split('/')[1]
         var VarClassName=strs.split('/')[1]
    }
    for(i=1;i>0;i--){sleep(1000);toast(i)}
    app.startActivity({
         action: VarAction,
         packageName:VarPackageName,
         className: VarClassName
         });


}

intents.学习强国_Intent=function(str){
    if(str=='测试'){
        //var strs="com.kuaishou.nebula/com.yxcorp.plugin.setting.activity.SettingsActivity"
        //var strs="com.jd.jdlite/.MainFrameActivity"
        var strs="cn.xuexi.android/com.alibaba.lightapp.runtime.activity.CommonWebViewActivity"
        log('进入测试')
        var VarPackageName=strs.split('/')[0]
        var VarAction=strs.split('/')[1]
        var VarClassName=strs.split('/')[1]
   }
   for(i=1;i>0;i--){sleep(1000);toast(i)}
   app.startActivity({
        action: VarAction,
        packageName:VarPackageName,
        className: VarClassName
        });


}
intents.ksjsb_启动=function(){
    app.startActivity({
        action: "MAIN",//"android.intent.action.MAIN",
        packageName: "com.kuaishou.nebula",
        className: "com.yxcorp.gifshow.HomeActivity",
        category: ["android.intent.category.LAUNCHER"],
        flags: ["activity_new_task"]
    });
}



intents.ksjsb_清除缓存 = function(){
    this.ksjsb_Intent("设置");
    while (!textContains("清除缓存").exists()) {
        //sleep(50);
        scrollDown();
        sleep(100);
    }
    var zz = textContains("清除缓存").findOne(5000);
    if (zz) {
        toast('发现 清除缓存')
        a = click("清除缓存");
        toastLog("清除缓存清除成功：" + a);
        
        sleep(5000)
        back();
    }
}

module.exports=intents;