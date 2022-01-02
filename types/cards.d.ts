const enum CardType {
  theOneRing = "The One Ring",
  companion = "Companion",
  condition = "Condition",
  minion = "Minion",
  event = "Event",
}

const enum Rarity {
  p = "P",
}

const enum typeListItem {
  companion = "Companion",
  dwarf = "Dwarf",
}

const enum Kind {
  freePeople = "Free People",
  shadow = "Shadow",
}

const enum Culture {
  dwarven = "Dwarven",
  elven = "Elven",
  wraith = "Wraith",
  gandalf = "Gandalf",
  urukHai = "Uruk-Hai",
  shire = "Shire",
  rohan = "Rohan",
  sauron = "Sauron",
  orc = "Orc",
  moria = "Moria",
  isengard = "Isengard",
  gondor = "Gondor",
  gollum = "Gollum",
}

type TheOneRing = {
  title: string;
  set: string;
  cardType: CardType;
  gameText: string;
  rarity: Rarity;
  number: string;
};

type Character = {
  title: string;
  set: string;
  typeList: typeListItem[];
  kind: Kind;
  culture: Culture;
  twilight: string;
  strength: string;
  vitality: string;
  resistance: string;
  gameText: string;
  rarity: Rarity;
  number: string;
};
