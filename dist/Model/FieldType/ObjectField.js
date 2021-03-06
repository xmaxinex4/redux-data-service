"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_js_1 = require("validate.js");
exports.ObjectField = {
    serialize: true,
    defaultValidationRules: { type: "object" },
    defaultValue: null,
    isValidType: function (value) { return value == null || validate_js_1.isObject(value); },
    normalize: function (value) { return value; },
};
