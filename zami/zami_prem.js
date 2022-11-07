// https:\/\/api\.zaim\.net\/v2\/home\/premium
var body = $response.body
body = JSON.parse(body)

body['status'] = "default"
body['contract'] = {
    "status": "active",
    "end_date": null,
    "is_trial": false,
    "start_date": "2022-11-07",
    "created": "2022-11-07 18:31:05",
    "user_id": 9091769,
    "gateway": "itunes",
    "current_period_end": "2025-12-07 18:30:58",
    "trial_end": null,
    "cycle": "year"
},

    body = JSON.stringify(body)
$done({ body })

// block https://googleads.g.doubleclick.net/mads/
// block https://imasdk.googleapis.com/admob/sdkloader/native_video.html
