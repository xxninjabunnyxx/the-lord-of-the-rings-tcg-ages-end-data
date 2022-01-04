const enum Sets {
  agesEnd = "Ages End",
}

const enum Kind {
  freePeople = "Free People",
  shadow = "Shadow",
}

const enum Culture {
  dwarven = "Dwarven",
  wraith = "Wraith",
  elven = "Elven",
  gandalf = "Gandalf",
  gollum = "Gollum",
  gondor = "Gondor",
  isengard = "Isengard",
  urukHai = "Uruk-hai",
  shire = "Shire",
  rohan = "Rohan",
  orc = "Orc",
  moria = "Moria",
  sauron = "Sauron",
}

const enum TypeListItem {
  theOneRing = "The One Ring",
  companion = "Companion",
  condition = "Condition",
  dwarf = "Dwarf",
  minion = "Minion",
  nazgul = "Nazgûl",
  event = "Event",
  regroup = "Regroup",
  elf = "Elf",
  wizard = "Wizard",
  man = "Man",
  urukHai = "Uruk-hai",
  hobbit = "Hobbit",
  troll = "Troll",
  balrog = "Balrog",
  creature = "Creature",
  shadow = "Shadow",
}

const enum Rarity {
  p = "P",
}

const enum CardType {
  theOneRing = "The One Ring",
  companion = "Companion",
  minion = "Minion",
  condition = "Condition",
  event = "Event",
}

type TheOneRing = {
  title: string;
  cardType: CardType;
  set: Sets;
  typeList: TypeListItem[];
  gameText: string;
  rarity: Rarity.p;
  number: string;
};

type Companion = {
  title: string;
  cardType: CardType;
  set: Sets;
  kind: Kind;
  culture: Culture;
  twilight: string;
  typeList: TypeListItem[];
  strength: string;
  vitality: string;
  resistance: string;
  gameText: string;
  rarity: Rarity;
  number: string;
};

type Minion = {
  title: string;
  cardType: CardType;
  set: Sets;
  kind: Kind;
  culture: Culture;
  twilight: string;
  typeList: TypeListItem[];
  strength: string;
  vitality: string;
  site: string;
  gameText: string;
  rarity: Rarity;
  number: string;
};

type Condition = {
  title: string;
  cardType: CardType;
  set: Sets;
  kind: Kind;
  culture: Culture;
  twilight: string;
  typeList: TypeListItem[];
  strength: string;
  gameText: string;
  rarity: Rarity;
  number: string;
};

type Event = {
  title: string;
  cardType: CardType;
  set: Sets;
  kind: Kind;
  culture: Culture;
  twilight: string;
  typeList: TypeListItem[];
  gameText: string;
  rarity: Rarity;
  number: string;
};
