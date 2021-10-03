enum CardType {
  theOneRing = "The One Ring",
  companion = "Companion",
  condition = "Condition",
  minion = "Minion",
  event = 'Event'
}

enum Rarity {
  p = "P",
}

type TheOneRing = {
  title: string;
  set: string;
  cardType: CardType;
  gameText: string;
  rarity: Rarity;
  number: string;
};

type Companion = {
  title: string;
  set: string;
  cardType: CardType;
  subtype: CompanionSubType;
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

type Condition = {
  title: string;
  set: string;
  kind: Kind;
  culture: Culture;
  twilight: string;
  cardType: CardType;
  strength: string;
  gameText: string;
  rarity: Rarity;
  number: string;
};

type Event = {
  title: string;
  set: string;
  kind: Kind;
  culture: Culture;
  twilight: string;
  cardType: CardType;
  subtype: EventSubtype;
  gameText: string;
  rarity: Rarity;
  number: string;
};

type Minion = {
  title: string;
  set: string;
  kind: Kind;
  cardType: CardType;
  culture: Culture;
  cardType: CardType;
  subtype: MinionSubtype;
  twilight: string;
  strength: string;
  vitality: string;
  site: string;
  gameText: string;
  rarity: Rarity;
  number: string;
};

enum MinionSubtype {
  nazgul = "Nazgul",
  urukHai = "Uruk-Hai",
  troll = "Troll",
  creature = 'Creature',
  balrog = 'Balrog',
  man = 'Man',
  none = 'None'
}

enum EventSubtype {
  regroup = "Regroup",
  shadow = 'Shadow'
}

enum CompanionSubType {
  dwarf = "Dwarf",
  wizard = 'Wizard',
  hobbit = 'Hobbit',
  man = 'Man',
  none = 'None',
  elf = 'Elf',
}

enum Kind {
  freePeople = "Free People",
  shadow = "Shadow",
}

enum Culture {
  dwarven = "Dwarven",
  elven = "Elven",
  wraith = "Wraith",
  gandalf = 'Gandalf',
  urukHai = "Uruk-Hai",
  shire = 'Shire',
  rohan = 'Rohan',
  sauron = "Sauron",
  orc = 'Orc',
  moria = 'Moria',
  isengard = 'Isengard',
  gondor = "Gondor",
  gollum = 'Gollum'
}
