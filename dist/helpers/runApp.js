"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");
const serve = require("koa-static");
const amala_1 = require("amala");
const path_1 = require("path");
const env_1 = require("@/helpers/env");
const redirect_1 = require("@/helpers/redirect");
const routes_1 = require("@/helpers/routes");
const app = new Koa();
function default_1() {
    return __awaiter(this, void 0, void 0, function* () {
        const staticPathDir = (0, path_1.resolve)(__dirname, '../public');
        const router = new Router();
        yield (0, amala_1.bootstrapControllers)({
            app,
            router,
            basePath: '/',
            disableVersioning: true,
            controllers: [],
        });
        app.use(serve(staticPathDir));
        app.use(cors({ origin: '*' }));
        app.use(bodyParser());
        app.use(router.routes());
        app.use(router.allowedMethods());
        void (0, redirect_1.default)(app);
        void (0, routes_1.default)(router);
        return new Promise((resolve, reject) => {
            const connection = app
                .listen(env_1.default.PORT, 'localhost')
                .on('listening', () => {
                console.log(`HTTP is listening on ${env_1.default.PORT}`);
                resolve(connection);
            })
                .on('error', reject);
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=runApp.js.map