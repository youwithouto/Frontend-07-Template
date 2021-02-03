const http = require('http');

const RESPONSE_BODY = `
<html maaa=a >
<head>
    <style>
body div #myid{
    width: 100px;
    background-color: #ff5000;
}
body div img {
    width: 30px;
    background-color: #ff1111;
}
    </style>
</head>
<body>
    <div>
        <img id="myid" />
        <img />
        <img />
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