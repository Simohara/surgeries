var body = $response.body;
var url = $request.url;

// const path1 = '/pgc/player/api/playurl';
// const path2 = "/x/v2/account/myinfo?";
// const path3 = "/x/v2/account/mine\?";
const pattern = "mix_extra"

function replaceParamVal(oUrl, paramName, replaceWith) {
    var re = eval('/(' + paramName + '=)([^&]*)/gi');
    var nUrl = oUrl.replace(re, paramName + '=' + replaceWith);
    return nUrl;
}
if (url.indexOf(pattern) != -1) {
    url = replaceParamVal(url, "mix_extra", "0");
};
$done({ url });




// if (url.indexOf(path2) != -1){
//   let obj = JSON.parse(body);
//     obj["data"]["vip"]["type"] = 2;
//     obj["data"]["vip"]["status"] = 1;
//     obj["data"]["vip"]["vip_pay_type"] = 1;
//     obj["data"]["vip"]["due_date"] = 1796054400000;

//    body=JSON.stringify(obj);
//  };

// if (url.indexOf(path3) != -1){
//   let obj = JSON.parse(body);
//      obj["data"]["vip_type"] = 2;
//      obj["data"]["vip"]["type"] = 2;
//      obj["data"]["vip"]["status"] = 1;
//      obj["data"]["vip"]["vip_pay_type"] = 1;
//      obj["data"]["vip"]["due_date"] = 1796054400000;
//    body=JSON.stringify(obj);
// };

// $done({ body });

//  /* by Huson
// QX:
// ^https:\/\/api\.zhihu\.com\/answers\/.*\/comments\/featured-comment url reject-img
// ^https:\/\/api\.zhihu\.com\/appview\/api\/v4\/answers\/.*\/recommendations url reject-img
// ^https:\/\/api\.zhihu\.com\/(moments\?(action|feed_type)|topstory\/recommend|v\d\/questions|market\/header|people\/) url script-response-body https://raw.githubusercontent.com/0x01-0xff/ProxyConf/master/js/ZhiHu_All.js
// [MITM]
// hostname = api.zhihu.com
// */

// let body = $response.body;
// let url = $request.url;
// body = JSON.parse(body);

// if (url.indexOf('moments') != -1 || url.indexOf('recommend') != -1) {
// 	// feed recommend
// 	body['data'].forEach((element, index)=> {
// 		if (element.hasOwnProperty('ad') || element['card_type'] == 'slot_event_card') {
// 			body['data'].splice(index,1);
// 		}
// 	});
// }

// if (url.indexOf('questions') != -1) {
// 	// answer
// 	delete body['ad_info'];
// 	body['data'].forEach((element, index)=> {
// 		if (element['author']['name'] == "盐选推荐") {
// 			body['data'].splice(index,1);
// 		}
// 	});
// }
// if (url.indexOf('people') != -1) {
// 	// people
// 	delete body['mcn_user_info'];
// }

// if (url.indexOf('market') != -1) {
// 	// market
// 	body['sub_webs'].splice(0,1);
// 	body['sub_webs'].splice(1,1);
// }

// body = JSON.stringify(body);
// $done({body});