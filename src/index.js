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

    health() {
        this.app.get('/health', (req, res, next) => {
            res.status(200)
                .send('OK');
            return next();
        });
    }

    serve(port, callBack) {
        this.health();
        this.server = this.app.listen(port || this.port, callBack);
    }

    kill() {
        this.server.close();
    }

}

module.exports = Server;