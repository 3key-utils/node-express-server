# Node REST Server
Now write your REST APIs with ease.

## Install 
```
npm i --save node-rest-server
```

## Write first REST API

```
const Server = require('node-rest-server');

const server = new Server();
server.routes([{
    action: 'GET',
    path: '/',
    handler: (req, res, next) => {
        res.send('OK');
    }
}]);
server.start();
```