const express = require('express')
const app = express()
const port = 3000

class Server {

    constructor() {
        this.app = new express();
        this.port = 5000;
    }

    middleware(middleware = []) {
        middleware.forEach( (m) => {
            this.app.use(m);
        } );
    }

    router(router) {

    }

    routers(routers) {
        
    }

    route(route) {

    }

    routes(routes) {

    }

    serve(port, callBack) {
        this.app.listen(port || this.port, callBack);
    }

}

module.exports = Server;