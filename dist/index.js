"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var js_yaml_1 = __importDefault(require("js-yaml"));
var _19P1_1 = __importDefault(require("./cards/19P1"));
var _19P2_1 = __importDefault(require("./cards/19P2"));
//import _19P3 from "./cards/19P3";
//import _19P4 from "./cards/19P4";
//import _19P5 from "./cards/19P5";
//import _19P6 from "./cards/19P6";
//import _19P7 from "./cards/19P7";
//import _19P8 from "./cards/19P8";
//import _19P9 from "./cards/19P9";
//import _19P10 from "./cards/19P10";
//import _19P11 from "./cards/19P11";
//import _19P12 from "./cards/19P12";
//import _19P13 from "./cards/19P13";
//import _19P14 from "./cards/19P14";
//import _19P15 from "./cards/19P15";
//import _19P16 from "./cards/19P16";
//import _19P17 from "./cards/19P17";
//import _19P18 from "./cards/19P18";
//import _19P19 from "./cards/19P19";
//import _19P20 from "./cards/19P20";
//import _19P21 from "./cards/19P21";
//import _19P22 from "./cards/19P22";
//import _19P23 from "./cards/19P23";
//import _19P24 from "./cards/19P24";
//import _19P25 from "./cards/19P25";
//import _19P26 from "./cards/19P26";
//import _19P27 from "./cards/19P27";
//import _19P28 from "./cards/19P28";
//import _19P29 from "./cards/19P29";
//import _19P30 from "./cards/19P30";
//import _19P31 from "./cards/19P31";
//import _19P32 from "./cards/19P32";
//import _19P33 from "./cards/19P33";
//import _19P34 from "./cards/19P34";
//import _19P35 from "./cards/19P35";
//import _19P36 from "./cards/19P36";
//import _19P37 from "./cards/19P37";
//import _19P38 from "./cards/19P38";
//import _19P39 from "./cards/19P39";
//import _19P40 from "./cards/19P40";
var cards = [
    _19P1_1.default,
    _19P2_1.default,
    //_19P3,
    //_19P4,
    //_19P5,
    //_19P6,
    //_19P7,
    //_19P8,
    //_19P9,
    //_19P10,
    //_19P11,
    //_19P12,
    //_19P13,
    //_19P14,
    //_19P15,
    //_19P16,
    //_19P17,
    //_19P18,
    //_19P19,
    //_19P20,
    //_19P21,
    //_19P22,
    //_19P23,
    //_19P24,
    //_19P25,
    //_19P26,
    //_19P27,
    //_19P28,
    //_19P29,
    //_19P30,
    //_19P31,
    //_19P32,
    //_19P33,
    //_19P34,
    //_19P35,
    //_19P36,
    //_19P37,
    //_19P38,
    //_19P39,
    //_19P40,
];
var main = function () {
    cards.map(function (card) {
        fs_1.promises.writeFile("./data/json/".concat(card.number, ".json"), JSON.stringify(card, null, 1));
        fs_1.promises.writeFile("./data/yml/".concat(card.number, ".yml"), js_yaml_1.default.dump(card));
    });
};
main();
//# sourceMappingURL=index.js.map