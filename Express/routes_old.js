const fs = require('fs');

function requestHandler(req, res) {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input><button action="submit" name="acSub" value="true">Submit</button></form></body>');
        res.write('</html>');
        return res.end();

    }
    if (url === '/hello') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello world</h1>');
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', content => {
            console.log(content);
            body.push(content);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const parsedMessageQuery = parsedBody.split('&')[0];
            const parsedMessage = parsedMessageQuery.split('=')[1];
            console.log(parsedMessage);
            fs.writeFile('message.txt', parsedMessage, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = requestHandler;