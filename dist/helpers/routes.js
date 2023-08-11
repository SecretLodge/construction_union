"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const routes = (router) => {
    router.get('/', (ctx) => {
        ctx.body = (0, fs_1.readFileSync)((0, path_1.resolve)(__dirname, '../public/index.html'), 'utf-8');
    });
};
exports.default = routes;
//# sourceMappingURL=routes.js.map