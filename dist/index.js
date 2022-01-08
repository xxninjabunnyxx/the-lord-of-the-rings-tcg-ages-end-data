"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var js_yaml_1 = __importDefault(require("js-yaml"));
var _19P1_1 = __importDefault(require("./cards/19P1"));
var _19P2_1 = __importDefault(require("./cards/19P2"));
var _19P3_1 = __importDefault(require("./cards/19P3"));
var _19P4_1 = __importDefault(require("./cards/19P4"));
var _19P5_1 = __importDefault(require("./cards/19P5"));
var _19P6_1 = __importDefault(require("./cards/19P6"));
var _19P7_1 = __importDefault(require("./cards/19P7"));
var _19P8_1 = __importDefault(require("./cards/19P8"));
var _19P9_1 = __importDefault(require("./cards/19P9"));
var _19P10_1 = __importDefault(require("./cards/19P10"));
var _19P11_1 = __importDefault(require("./cards/19P11"));
var _19P12_1 = __importDefault(require("./cards/19P12"));
var _19P13_1 = __importDefault(require("./cards/19P13"));
var _19P14_1 = __importDefault(require("./cards/19P14"));
var _19P15_1 = __importDefault(require("./cards/19P15"));
var _19P16_1 = __importDefault(require("./cards/19P16"));
var _19P17_1 = __importDefault(require("./cards/19P17"));
var _19P18_1 = __importDefault(require("./cards/19P18"));
var _19P19_1 = __importDefault(require("./cards/19P19"));
var _19P20_1 = __importDefault(require("./cards/19P20"));
var _19P21_1 = __importDefault(require("./cards/19P21"));
var _19P22_1 = __importDefault(require("./cards/19P22"));
var _19P23_1 = __importDefault(require("./cards/19P23"));
var _19P24_1 = __importDefault(require("./cards/19P24"));
var _19P25_1 = __importDefault(require("./cards/19P25"));
var _19P26_1 = __importDefault(require("./cards/19P26"));
var _19P27_1 = __importDefault(require("./cards/19P27"));
var _19P28_1 = __importDefault(require("./cards/19P28"));
var _19P29_1 = __importDefault(require("./cards/19P29"));
var _19P30_1 = __importDefault(require("./cards/19P30"));
var _19P31_1 = __importDefault(require("./cards/19P31"));
var _19P32_1 = __importDefault(require("./cards/19P32"));
var _19P33_1 = __importDefault(require("./cards/19P33"));
var _19P34_1 = __importDefault(require("./cards/19P34"));
var _19P35_1 = __importDefault(require("./cards/19P35"));
var _19P36_1 = __importDefault(require("./cards/19P36"));
var _19P37_1 = __importDefault(require("./cards/19P37"));
var _19P38_1 = __importDefault(require("./cards/19P38"));
var _19P39_1 = __importDefault(require("./cards/19P39"));
var _19P40_1 = __importDefault(require("./cards/19P40"));
var cards = [
  _19P1_1.default,
  _19P2_1.default,
  _19P3_1.default,
  _19P4_1.default,
  _19P5_1.default,
  _19P6_1.default,
  _19P7_1.default,
  _19P8_1.default,
  _19P9_1.default,
  _19P10_1.default,
  _19P11_1.default,
  _19P12_1.default,
  _19P13_1.default,
  _19P14_1.default,
  _19P15_1.default,
  _19P16_1.default,
  _19P17_1.default,
  _19P18_1.default,
  _19P19_1.default,
  _19P20_1.default,
  _19P21_1.default,
  _19P22_1.default,
  _19P23_1.default,
  _19P24_1.default,
  _19P25_1.default,
  _19P26_1.default,
  _19P27_1.default,
  _19P28_1.default,
  _19P29_1.default,
  _19P30_1.default,
  _19P31_1.default,
  _19P32_1.default,
  _19P33_1.default,
  _19P34_1.default,
  _19P35_1.default,
  _19P36_1.default,
  _19P37_1.default,
  _19P38_1.default,
  _19P39_1.default,
  _19P40_1.default,
];
var main = function () {
  cards.map(function (card) {
    fs_1.promises.writeFile(
      "./data/json/".concat(card.number, ".json"),
      JSON.stringify(card, null, 1)
    );
    fs_1.promises.writeFile(
      "./data/yml/".concat(card.number, ".yml"),
      js_yaml_1.default.dump(card)
    );
  });
};
main();
//# sourceMappingURL=index.js.map
