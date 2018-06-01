"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CopyrightText = (function (_super) {
    __extends(CopyrightText, _super);
    function CopyrightText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CopyrightText.prototype.render = function () {
        return (React.createElement("div", { style: { color: this.props.color } },
            "\u00A92018 ",
            React.createElement("span", null, this.props.legalUnit)));
    };
    return CopyrightText;
}(React.Component));
exports.CopyrightText = CopyrightText;
//# sourceMappingURL=copyright.js.map