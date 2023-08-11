"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redirect = (app) => {
    app.use((ctx) => {
        ctx.redirect('/');
    });
};
exports.default = redirect;
//# sourceMappingURL=redirect.js.map