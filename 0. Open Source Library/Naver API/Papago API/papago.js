

//반드시 Readme.md 파일을 읽고 사용해 주세요! 제에에발 ㅠㅠ


const scriptName = "papago";
var start = 1;
Utils.APItest = function(fromlang, tolang, value){
    try{
        var data = org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/papago/n2mt")
        .header("X-Naver-Client-Id", "본인의 ID")
        .header("X-Naver-Client-Secret", "본인의 코드")
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
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    var cmd = msg.split("/")[0];
    var data = msg.replace(cmd + "/", "");
    if(cmd == "!번역") {
        var data2 = data.split("/");
        var fromlang = data2[0];
        var tolang = data2[1];
        var value = data.replace(fromlang + "/" + tolang + "/", "");
        var result = Utils.APItest(fromlang, tolang, value);
        if(result == null) replier.reply("번역에 실패했습니다.");
        else replier.reply(result)
    }
}