/*
var body = $response.body
    .replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Hvftk/lztv@main/lztv.css" type="text/css">')
    .replace(/jquerys.js\?v/g, "ddgksf2013.js?v");
$done({ body });
*/
var body = $response.body.replace(/<head>/, '<head><link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/Hvftk/lztv@main/lztv.css" type="text/css">').replace(/'ddjhcvtk'/g, "'112233'");
$done({ body });
