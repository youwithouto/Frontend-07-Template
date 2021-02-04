const http = require('http');

const RESPONSE_BODY = `
<html maaa=a >
<head>
    <style>
#container {
    width: 500px;
    height: 300px;
    display: flex;
}
#container #myid {
    width: 200px;
}
#container .c1 {
    flex:1;
}
    </style>
</head>
<body>
    <div id="container">
        <div id="myid"/>
        <div class="c1"/>
    </div>
</body>
</html>
`;

http.createServer((request, response) => {
    let body = [];
    request.on('error', (err) => {
        console.error(err);
    }).on('data', (chunk) => {
        body.push(Buffer.from(chunk.toString(), 'utf8'));
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log("body:", body);
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(RESPONSE_BODY);
    });
}).listen(8001);

console.log("server started");