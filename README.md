# Node REST Server
Now write your REST APIs with ease.

### Installation 
```
npm i --save node-rest-server
```

### Write first REST API

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

### Load Routes from a different file

```
```

### Register middleware

```
```

### Registering a Router

```
```

### Registering Multiple Routers

```
```

## Contribution