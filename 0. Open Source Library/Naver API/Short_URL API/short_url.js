

//반드시 Readme.md 파일을 읽고 사용해 주세요! 제에에발 ㅠㅠ


const scriptName = "shorturl";
var start = 1;
Utils.APItest = function(url){
    try{
        var data = org.jsoup.Jsoup.connect("https://openapi.naver.com/v1/util/shorturl")
        .header("X-Naver-Client-Id", "6O64RXVXr04F311bXhBU")
        .header("X-Naver-Client-Secret", "izy9h3IUGN")
        .data("url", url)
        .ignoreContentType(true)
        .get()
        .text();
        data = JSON.parse(data);
        return data["result"]["url"];
    } catch(e) {
        return null;
    }
}
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    var msgs = msg.split("/")[0];
    var url = msg.split("/")[1];
    if(msgs == "!url") {
        var result = Utils.APItest(url);
        if(result == null) replier.reply("url을 다시 확인하세요. 줄이기 실패.");
        else replier.reply(result);
    }
}