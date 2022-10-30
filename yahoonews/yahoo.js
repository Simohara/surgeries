$pathadv1 = "/v1/ads";
$pathadv2 = "/v2/ads";
$pathcountry = "/v1/countryCheck";
var body = $response.body
body = JSON.parse(body)

if ($request.url.indexOf($pathadv2) != -1) {
    body = []
    body["ads"] = []
}
if ($request.url.indexOf($pathcountry) != -1) {
    body['feed']['isJapan'] = true
}
body = JSON.stringify(body)
$done({ body })