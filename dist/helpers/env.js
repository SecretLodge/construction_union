"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const envalid_1 = require("envalid");
const process_1 = require("process");
const path_1 = require("path");
dotenv.config({ path: (0, path_1.resolve)((0, process_1.cwd)(), '.env') });
// eslint-disable-next-line node/no-process-env
exports.default = (0, envalid_1.cleanEnv)(process.env, {
    PORT: (0, envalid_1.num)({ default: 1337 }),
});
//# sourceMappingURL=env.js.map