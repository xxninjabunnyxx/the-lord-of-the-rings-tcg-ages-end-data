import { promises as fs } from "fs";
import { camelCase } from "lodash";
import yaml from "js-yaml";

import _19P1 from "./data/19P1";
import _19P2 from "./data/19P2";
import _19P3 from "./data/19P3";
import _19P4 from "./data/19P4";
import _19P5 from "./data/19P5";
import _19P6 from "./data/19P6";
import _19P7 from "./data/19P7";
import _19P8 from "./data/19P8";
import _19P9 from "./data/19P9";
import _19P10 from "./data/19P10";
import _19P11 from "./data/19P11";
import _19P12 from "./data/19P12";
import _19P13 from "./data/19P13";
import _19P14 from "./data/19P14";
import _19P15 from "./data/19P15";
import _19P16 from "./data/19P16";
import _19P17 from "./data/19P17";
import _19P18 from "./data/19P18";
import _19P19 from "./data/19P19";
import _19P20 from "./data/19P20";
import _19P21 from "./data/19P21";
import _19P22 from "./data/19P22";
import _19P23 from "./data/19P23";
import _19P24 from "./data/19P24";
import _19P25 from "./data/19P25";
import _19P26 from "./data/19P26";
import _19P27 from "./data/19P27";
import _19P28 from "./data/19P28";
import _19P29 from "./data/19P29";
import _19P30 from "./data/19P30";
import _19P31 from "./data/19P31";
import _19P32 from "./data/19P32";
import _19P33 from "./data/19P33";
import _19P34 from "./data/19P34";
import _19P35 from "./data/19P35";
import _19P36 from "./data/19P36";
import _19P37 from "./data/19P37";
import _19P38 from "./data/19P38";
import _19P39 from "./data/19P39";
import _19P40 from "./data/19P40";

//const characters: Character[] = [
//  Deathscythe,
//  Epyon,
//  Heavyarms,
//  Mercurius,
//  Sandrock,
//  Shenlong,
//  Tallgeese,
//  Vayeate,
//  Wing,
//  WingZero,
//]
//
//const exportJson = async (character: Character): Promise<void> => {
//  try {
//    await fs.writeFile(
//      `./data/json/${camelCase(character.name)}.json`,
//      JSON.stringify(character)
//    )
//  } catch (error) {
//    console.log(error)
//  }
//}
//
//const exportYaml = async (character: Character): Promise<void> => {
//  try {
//    await fs.writeFile(
//      `./data/yaml/${camelCase(character.name)}.yaml`,
//      yaml.dump(character)
//    )
//  } catch (error) {
//    console.log(error)
//  }
//}
//
//const main = async (characters: Character[]): Promise<void> => {
//  characters.map(async (character) => {
//    await exportJson(character)
//    await exportYaml(character)
//  })
//}
//
//main(characters)
