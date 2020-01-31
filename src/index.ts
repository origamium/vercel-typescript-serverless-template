import {IncomingMessage, ServerResponse} from "http";
const http = require("http");

http.createServer((req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
}).listen(8080, "127.0.0.1");

