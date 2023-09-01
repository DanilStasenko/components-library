"use strict";
'use client';
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
require("../css/MyButton.css");
const MyButton = (_a) => {
    var { children, size, onClick, extraClass = '' } = _a, props = __rest(_a, ["children", "size", "onClick", "extraClass"]);
    const className = (0, clsx_1.default)('my-button', {
        [`my-button_size_${size}`]: size,
    }, extraClass);
    return (react_1.default.createElement("button", Object.assign({}, props, { className: className, onClick: onClick }), children));
};
exports.default = MyButton;
//# sourceMappingURL=MyButton.js.map