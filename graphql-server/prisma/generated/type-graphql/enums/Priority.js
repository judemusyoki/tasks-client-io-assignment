"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Priority = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var Priority;
(function (Priority) {
    Priority["HIGH"] = "HIGH";
    Priority["MEDIUM"] = "MEDIUM";
    Priority["LOW"] = "LOW";
})(Priority = exports.Priority || (exports.Priority = {}));
TypeGraphQL.registerEnumType(Priority, {
    name: "Priority",
    description: undefined,
});
