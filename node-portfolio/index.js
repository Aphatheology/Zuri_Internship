const http = require("http");
const fs = require("fs");

const PORT = 3030;

let server = http.createServer((request, response) => {
    const { url } = request;
    
    switch (url) {
        case "/":
            {
                fs.readFile("./home.html", "utf8", (err, data) => {
                    if (err) return err;
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.end(data);
                });
            }
            break;

        case "/home":
            {
                response.statusCode = 302;
                response.setHeader("Location", "/");
                response.end();
            }
            break;

        case "/about":
            {
                fs.readFile("./about.html", "utf8", (err, data) => {
                    if (err) return err;
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.end(data);
                });
            }
            break;

        case "/contact":
            {
                fs.readFile("./contact.html", "utf8", (err, data) => {
                    if (err) return err;
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.end(data);
                });
            }
            break;

        default: {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("<h1>Not Found</h1>");
        }
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
