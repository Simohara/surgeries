// https?:\/\/boot\.biz\.weibo\.com\/v1\/ad\/realtime
var body = $response.body
body = JSON.parse(body)
if (body['ad'] != null) {
    for (let i = 0; i < body['ad'].length; i++) {
        body['ad'][i]['display_duration'] = 0
        body['ad'][i]['total_display_cnt'] = 0
        body['ad'][i]['daily_display_cnt'] = 0
        body['ad'][i]['end_time'] = 1982728288
        body['ad'][i]['begin_time'] = 1982728287
        console.log(body['ad'][i]['end_time'], i)
    }
}
body = JSON.stringify(body)
$done({ body })

//https://sdkapp.uve.weibo.com/interface/sdk/sdkad.php


{ "needlocation": false, "show_push_splash_ad": false, "code": 200, "background_delay_display_time": 0, "lastAdShow_delay_display_time": 0, "realtime_ad_video_stall_time": 0, "realtime_ad_timeout_duration": 0, "client_ip": "124.87.193.7", "ads": [] }

//https://sdkapp.uve.weibo.com/interface/sdk/sdkad.php

var body = { "needlocation": false, "show_push_splash_ad": false, "code": 200, "background_delay_display_time": 0, "lastAdShow_delay_display_time": 0, "realtime_ad_video_stall_time": 0, "realtime_ad_timeout_duration": 0, "client_ip": "124.87.193.7", "ads": [] }
body = JSON.stringify(body)
$done({ body })

//https?:\/\/wbapp\.uve\.weibo\.com\/wbapplua\/wbpullad

var body = $response.body
body = { "cached_ad": { "delete_days": 7, "ads": [] } }
body = JSON.stringify(body)
console.log(body)
$done({ body })
