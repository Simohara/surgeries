var body = $response.body
body = JSON.parse(body)
body['result'] = []
$pathbanner = "banner_list";
$pathrecmd = "recmd_topic";
if ($request.url.indexOf($pathbanner) != -1) {
    body['result'] = [{
        "id": 0,
        "tid": 33156975,
        "title": "艾泽拉斯国家地理",
        "bit": 2,
        "image": "https://img.nga.178.com/attachments/mon_202210/28/biQ185-cjo6K11T1kSfe-8o.jpg",
        "target_data": ""
    }]

}

body = JSON.stringify(body)
$done({ body })