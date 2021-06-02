//변수들
const scriptName = "test";
const return_log = "log";
const return_errorlog = "error_log";
const admin = "HJ";
var start = 1;

//명령어 리스트
Utils.APItest = function(fromlang, tolang, value){
    try{
        var data = org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/papago/n2mt")
        .header("X-Naver-Client-Id", "6O64RXVXr04F311bXhBU")
        .header("X-Naver-Client-Secret", "izy9h3IUGN")
        .data("source", fromlang)
        .data("target", tolang)
        .data("text", value)
        .ignoreContentType(true) .post() .text();
        data = JSON.parse(data);
        return data["message"]["result"]["translatedText"];
    } catch(e) {
        return null;
    }
}
//메인스크립트
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    var cmd = msg.split("/")[0];
    var data = msg.replace(cmd + "/", "");
    if(cmd == "!번역") {
        replier.reply(data);
        var data2 = data.split("/");
        replier.reply(data2);
        var fromlang = data2[0];
        replier.reply(fromlang);
        var tolang = data2[1];
        replier.reply(tolang);
        var value = data.replace(fromlang + "/" + tolang + "/", "");
        replier.reply(value);
        var result = Utils.APItest(fromlang, tolang, value);
        if(result == null) replier.reply("번역에 실패했습니다.");
        else replier.reply(result)
    }
}
//시작 시 실행하는 스크립트
function onStart(activity) {
}