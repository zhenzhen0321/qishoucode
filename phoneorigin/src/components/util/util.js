let getUrlParamValue = function(key){
    let url =location.href;
    if(url == null || url.indexOf("?") == -1){
        return null;
    }
    let params = url.split("?")[1].split("&");
    for(let i=0;i<params.length;i++){
        if(key == params[i].split("=")[0]){
            return params[i].split("=")[1];
        }
    }
};

var host = "http://e-nongyun.com/server/api/YNY/CPRODUCT/";
//    var supervise = getUrlParamValue('supervise');
var supervise="5aa5df2a1b0647bbaa3074d53b379026";
var requestParam = "/INFOLIST?USERTOKEN=ad12a90a255145999a0d96ac10516563&TIMESTAMP=1482904012&LAT=0&LNG=0&LISTDETAIL=[{'AID':'CPRODUCE'},{'AID':'VCBANNER'},{'AID':'CUSERCOMMENT'},{'AID':'CACCOUNT'},{'AID':'VCARTICLE'}]&ORDER=ACTIONTIME DESC&PRODUCTID=";
//    var productId = getUrlParamValue('productid');
//    host=host+supervise+requestParam+"147971187521485160886";
host="http://e-nongyun.com/server/api/YNY/CPRODUCT/5aa5df2a1b0647bbaa3074d53b379026/INFOLIST?" +
    "USERTOKEN=ad12a90a255145999a0d96ac10516563&TIMESTAMP=1482904012&LAT=0&LNG=0&LISTDETAIL=" +
    "[{'AID':'CPRODUCE'},{'AID':'VCBANNER'},{'AID':'CUSERCOMMENT'},{'AID':'CACCOUNT'},{'AID':'VCARTICLE'}]" +
    "&ORDER=ACTIONTIME DESC&PRODUCTID=147971187521485160886";
var dataUrl={};
dataUrl.host=host;
module.exports = exports=dataUrl;