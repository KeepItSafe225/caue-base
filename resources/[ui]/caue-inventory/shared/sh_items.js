itemList = {};

/*

  WEAPONS START

*/

// MELEE

itemList['2343591895'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Flashlight',
  price: 1,
  weight: 11,
  nonStack: true,
  craft: [[
    { itemid: 'copper', amount: 500 },
    { itemid: 'rubber', amount: 50 },
  ]],
  model: '',
  image: 'np_flashlight.png',
  weapon: true,
};

itemList['-262696221'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Prison Knife',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'scrapmetal', amount: 1 },
  ]],
  price: 250,
  weight: 3,
  nonStack: true,
  model: '',
  image: 'np_shiv.png',
  weapon: true,
  contraband: true,
};

itemList['1923739240'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Sledgehammer',
  craft: [
    [
      { itemid: 'steel', amount: 75 },
      { itemid: 'scrapmetal', amount: 75 },
    ],
    [
      { itemid: 'refinedsteel', amount: 25 },
      { itemid: 'refinedscrap', amount: 25 },
    ],
  ],
  price: 1,
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_sledgehammer.png',
  information: 'big and bulky.',
  weapon: true,
  contraband: true,
};

itemList['-102323637'] = {
  fullyDegrades: true,
  decayrate: 2.00,
  displayname: 'Broken Bottle',
  craft: [[
    { itemid: 'refinedglass', amount: 10 },
  ]],
  price: 1,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_glass-bottle.png',
  information: 'Looks like a premium bottle of Karlsberg.',
};

itemList['3638508604'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Knuckles',
  craft: [
    [
      { itemid: 'aluminium', amount: 125 },
      { itemid: 'scrapmetal', amount: 10 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 35 },
      { itemid: 'refinedscrap', amount: 3 },
    ]
  ],
  price: 250,
  weight: 2,
  nonStack: true,
  model: '',
  image: 'np_knuckle-dusters.png',
  weapon: true,
  contraband: true,
};

itemList['knuckle_chain'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Limpador de corrente',
  craft: [[
    { itemid: 'refinedscrap', amount: 20 },
    { itemid: 'refinedsteel', amount: 15 },
  ]],
  price: 250,
  weight: 11,
  nonStack: true,
  model: '',
  image: 'np_chain_dusters.png',
  weapon: false,
  contraband: true,
};

itemList['1141786504'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Taco de golfe',
  price: 250,
  weight: 15,
  nonStack: true,
  model: '',
  image: 'np_golfclub.png',
  weapon: true,
};

itemList['1317494643'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Martelo',
  price: 250,
  weight: 8,
  nonStack: true,
  model: '',
  image: 'np_hammer.png',
  weapon: true,
};

itemList['1737195953'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Cacetete',
  price: 1,
  weight: 4,
  nonStack: true,
  model: '',
  image: 'np_nightstick.png',
  information: 'Equipamento emitido pelo governo (PD/EMS/DOC)',
  weapon: true,
};

itemList['2227010557'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Pé de cabra',
  price: 250,
  weight: 15,
  nonStack: true,
  model: '',
  image: 'np_crowbar.png',
  weapon: true,
};

itemList['-1786099057'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Teclado modelo M',
  price: 250,
  weight: 7,
  nonStack: true,
  model: '',
  image: 'np_keyboard.png',
  weapon: true,
};

itemList['-1239161099'] = {
  fullyDegrades: false,
  decayrate: 5.0,
  displayname: 'Katana',
  price: 1,
  craft: [[
    { itemid: 'refinedsteel', amount: 650 },
  ]],
  weight: 7,
  nonStack: true,
  model: '',
  image: 'np_katana.png',
  information: 'Enquanto você se diverte, eu estudo a lâmina.',
  weapon: true,
  contraband: true,
};

itemList['1692590063'] = {
  fullyDegrades: false,
  decayrate: 5.0,
  displayname: 'Katana',
  price: 1,
  craft: [[
    { itemid: 'refinedsteel', amount: 650 },
    { itemid: 'refinedaluminium', amount: 250 },
  ]],
  weight: 7,
  nonStack: true,
  model: '',
  image: 'np_katana.png',
  information: 'Enquanto você se diverte, eu estudo a lâmina.',
  weapon: true,
  contraband: true,
};

itemList['-538741184'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Canivete',
  craft: [[
    { itemid: 'methlabproduct', amount: 25 },
    { itemid: 'ciggy', amount: 100 },
  ]],
  price: 250,
  weight: 3,
  nonStack: true,
  model: '',
  image: 'np_switchblade.png',
  weapon: true,
};

itemList['2460120199'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Adaga',
  craft: [
    [
      { itemid: 'aluminium', amount: 125 },
      { itemid: 'scrapmetal', amount: 10 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 35 },
      { itemid: 'scrapmetal', amount: 10 },
    ]
  ],
  price: 250,
  weight: 5,
  nonStack: true,
  model: '',
  image: 'np_dagger.png',
  weapon: true,
  contraband: true,
};

itemList['600439132'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'Lima',
  craft: [[
    { itemid: 'refinedaluminium', amount: 25 },
    { itemid: 'refinedrubber', amount: 25 },
  ]],
  price: 250,
  weight: 2,
  nonStack: true,
  model: '',
  image: 'np_lime.png',
  weapon: true,
  contraband: true,
};

itemList['-1024456158'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Bastão',
  craft: [[
    { itemid: 'refinedaluminium', amount: 25 },
    { itemid: 'refinedrubber', amount: 25 },
  ]],
  price: 250,
  weight: 14,
  nonStack: true,
  model: '',
  image: 'np_baseball-bat.png',
  weapon: true,
  contraband: true,
};

itemList['-2000187721'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Maleta de segurança',
  price: 250,
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_securitycase.png',
  weapon: true,
  contraband: true,
};

itemList['28811031'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Maleta',
  price: 250,
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_suitcase.png',
  weapon: true,
  contraband: true,
};

itemList['2578778090'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Faca',
  price: 250,
  weight: 7,
  nonStack: true,
  model: '',
  image: 'np_knife.png',
  weapon: true,
};

itemList['3713923289'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Machete',
  craft: [
    [
      { itemid: 'aluminium', amount: 140 },
      { itemid: 'rubber', amount: 40 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 35 },
      { itemid: 'refinedrubber', amount: 10 },
    ]
  ],
  price: 250,
  weight: 15,
  nonStack: true,
  model: '',
  image: 'np_machete.png',
  weapon: true,
  contraband: true,
};

itemList['4191993645'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Machadinha',
  price: 250,
  weight: 17,
  nonStack: true,
  model: '',
  image: 'np_hatchet.png',
  weapon: true,
};

// THROW

itemList['1064738331'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Tijolo',
  craft: [[
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 250,
  weight: 50,
  nonStack: false,
  model: '',
  image: 'np_brick.png',
  weapon: true,
};

itemList['-691061592'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Livro',
  craft: [[
    { itemid: 'rollingpaper', amount: 10 },
  ]],
  price: 250,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_book_w.png',
  weapon: true,
};

itemList['571920712'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Dinheiro',
  price: 100,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_cash.png',
  weapon: true,
};

itemList['-828058162'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Tênis roubado',
  price: 1,
  weight: 3,
  nonStack: true,
  model: '',
  image: 'np_stolenshoes.png',
  information: 'Não cabe no seu pé, bro.',
};

itemList['-1813897027'] = {
  fullyDegrades: false,
  decayrate: 0.01,
  displayname: 'Granada de atordoamento (SWAT)',
  price: 100,
  weight: 5,
  craft: [[
    { itemid: 'aluminium', amount: 350 },
    { itemid: 'scrapmetal', amount: 350 },
    { itemid: 'rubber', amount: 300 },
  ]],
  nonStack: true,
  model: '',
  image: 'np_stungrenade.png',
  information: 'Assim, a polícia pode invadir um prédio sem se sentir um ______! Se você não é certificado pela SWAT, não compre.',
  weapon: true,
  contraband: true,
};

itemList['1233104067'] = {
  fullyDegrades: false,
  decayrate: 0.25,
  displayname: 'Flare',
  price: 100,
  weight: 5,
  craft: [[
    { itemid: 'aluminium', amount: 350 },
    { itemid: 'scrapmetal', amount: 350 },
    { itemid: 'rubber', amount: 300 },
  ]],
  nonStack: true,
  model: '',
  image: 'np_flare.png',
  information: '',
  weapon: true,
  contraband: true,
};

itemList['-1600701090'] = {
  fullyDegrades: false,
  decayrate: 0.2,
  displayname: 'Granada M67',
  price: 100,
  weight: 5,
  craft: [[
    { itemid: 'aluminium', amount: 110 },
    { itemid: 'scrapmetal', amount: 150 },
    { itemid: 'rubber', amount: 100 },
  ], [
    { itemid: 'refinedaluminium', amount: 35 },
    { itemid: 'scrapmetal', amount: 150 },
    { itemid: 'refinedrubber', amount: 35 },
  ]],
  nonStack: true,
  model: '',
  image: 'np_grenade.png',
  information: '',
  weapon: true,
  contraband: true,
};

itemList['-37975472'] = {
  fullyDegrades: false,
  decayrate: 0.25,
  displayname: 'Granada de fumaça',
  price: 100,
  weight: 5,
  craft: [[
    { itemid: 'aluminium', amount: 150 },
    { itemid: 'scrapmetal', amount: 150 },
    { itemid: 'rubber', amount: 150 },
  ], [
    { itemid: 'refinedaluminium', amount: 45 },
    { itemid: 'refinedscrap', amount: 45 },
    { itemid: 'refinedrubber', amount: 45 },
  ]],
  nonStack: true,
  model: '',
  image: 'np_stungrenade.png',
  information: '',
  weapon: true,
  contraband: true,
};

itemList['-1169823560'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Bomba caseira',
  price: 250,
  weight: 7,
  craft: [[
    { itemid: 'aluminium', amount: 350 },
    { itemid: 'scrapmetal', amount: 350 },
    { itemid: 'rubber', amount: 300 },
  ]],
  nonStack: true,
  model: '',
  image: 'np_pipe-bomb.png',
  weapon: true,
  contraband: true,
};

itemList['615608432'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Molotov',
  craft: [
    [
      { itemid: 'aluminium', amount: 75 },
      { itemid: 'whiskey', amount: 3 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 12 },
      { itemid: 'whiskey', amount: 3 },
    ]
  ],
  price: 250,
  weight: 35,
  nonStack: false,
  model: '',
  image: 'np_molotov.png',
  weapon: true,
  contraband: true,
};

itemList['741814745'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Bomba pegajosa',
  price: 250,
  craft: [[
    { itemid: 'aluminium', amount: 1250 },
    { itemid: 'scrapmetal', amount: 1250 },
    { itemid: 'rubber', amount: 1250 },
  ], [
    { itemid: 'refinedaluminium', amount: 415 },
    { itemid: 'scrapmetal', amount: 1250 },
    { itemid: 'refinedrubber', amount: 415 },
  ]],
  weight: 22,
  nonStack: true,
  model: '',
  image: 'np_sticky-bomb.png',
  weapon: true,
  contraband: true,
};

itemList['1748076076'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Arma de pregos',
  price: 10,
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 11,
  nonStack: true,
  model: '',
  image: 'np_nailgun.png',
  weapon: true,
  insertFrom: ['nails'],
};

itemList['-72657034'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Paraquedas',
  price: 250,
  craft: [[
    { itemid: 'aluminium', amount: 100 },
    { itemid: 'plastic', amount: 100 },
    { itemid: 'rubber', amount: 100 },
  ]],
  weight: 30,
  nonStack: true,
  model: '',
  image: 'np_parachute.png',
  weapon: false,
};

itemList['101631238'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Extintor de incêndio',
  price: 250,
  craft: [[
    { itemid: 'aluminium', amount: 100 },
    { itemid: 'scrapmetal', amount: 40 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_fire-extinguisher.png',
  weapon: true,
};

itemList['883325847'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Galão de gasolina',
  price: 250,
  weight: 50,
  nonStack: true,
  model: '',
  image: 'np_petrol-can.png',
  weapon: true,
};

// WEAPONS

itemList['218362403'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Espingarda de borracha',
  price: 10,
  weight: 25,
  craft: [[
    { itemid: 'aluminium', amount: 70 },
    { itemid: 'steel', amount: 70 },
  ]],
  nonStack: true,
  model: '',
  image: 'np_lessthanlethal.png',
  weapon: true,
  information: 'Arma não-letal emitida pela PD e DOC',
  insertFrom: ['rubberslugs'],
};

itemList['148457251'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Browning 9mm',
  price: 250,
  weight: 6,
  craft: [
    [
      { itemid: 'aluminium', amount: 15 },
      { itemid: 'steel', amount: 15 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 5 },
      { itemid: 'refinedsteel', amount: 5 },
    ]
  ],
  nonStack: true,
  model: '',
  image: 'np_browning.png',
  weapon: true,
  insertFrom: ['pistolammo'],
};

itemList['-2012211169'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Diamondback DB9',
  price: 250,
  weight: 6,
  craft: [
    [
      { itemid: 'aluminium', amount: 15 },
      { itemid: 'steel', amount: 15 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 5 },
      { itemid: 'refinedsteel', amount: 5 },
    ]
  ],
  nonStack: true,
  model: '',
  image: 'np_DB9.png',
  weapon: true,
  insertFrom: ['pistolammo'],
};

itemList['-1746263880'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Colt Python',
  price: 250,
  weight: 11,
  craft: [
    [
      { itemid: 'aluminium', amount: 150 },
      { itemid: 'plastic', amount: 150 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 45 },
      { itemid: 'refinedplastic', amount: 45 },
    ],
  ],
  nonStack: true,
  model: '',
  image: 'np_colt.png',
  weapon: true,
  insertFrom: ['pistolammo'],
};

itemList['453432689'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Colt 1911',
  price: 250,
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 6,
  nonStack: true,
  model: '',
  image: 'np_pistol.png',
  weapon: true,
  insertFrom: ['pistolammo'],
};

itemList['-1075685676'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Beretta M9',
  price: 250,
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 5,
  nonStack: true,
  model: '',
  image: 'np_pistol2.png',
  weapon: true,
  insertFrom: ['pistolammo'],
};

itemList['1593441988'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'FN FNX-45',
  price: 250,
  craft: [[
    { itemid: 'steel', amount: 65 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 5,
  nonStack: true,
  blockScrap: true,
  model: '',
  image: 'np_combat-pistol.png',
  weapon: true,
  insertFrom: ['pistolammo'],
};

itemList['-820634585'] = {
  fullyDegrades: false,
  decayrate: 0.5,
  displayname: 'PD Taser',
  price: 1,
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 3,
  nonStack: true,
  model: '',
  image: 'np_stun-gun.png',
  weapon: true,
  information: 'Equipamento emitido pelo governo (PD/EMS/DOC)',
  insertFrom: ['taserammo'],
};

itemList['-120179019'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'Glock 18',
  price: 1,
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 9,
  nonStack: true,
  model: '',
  image: 'np_glock.png',
  weapon: true,
  information: 'Equipamento emitido pelo governo (PD/EMS/DOC)',
  insertFrom: ['pistolammo', 'pistolammoPD'],
};

itemList['-1716589765'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Desert Eagle',
  price: 250,
  craft: [
    [
      { itemid: 'aluminium', amount: 130 },
      { itemid: 'plastic', amount: 130 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 43 },
      { itemid: 'refinedplastic', amount: 43 },
    ],
  ],
  weight: 11,
  nonStack: true,
  model: '',
  image: 'np_pistol-50.png',
  weapon: true,
  insertFrom: ['pistolammo'],
};

itemList['-134995899'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Mac-10',
  price: 250,
  craft: [
    [
      { itemid: 'aluminium', amount: 30 },
      { itemid: 'plastic', amount: 60 },
      { itemid: 'rubber', amount: 30 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 10 },
      { itemid: 'refinedplastic', amount: 20 },
      { itemid: 'refinedrubber', amount: 10 },
    ]
  ],
  weight: 15,
  nonStack: true,
  model: '',
  image: 'np_micro-smg.png',
  weapon: true,
  insertFrom: ['subammo', 'subammoPD'],
};

itemList['584646201'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Glock 18C',
  price: 250,
  craft: [
    [
      { itemid: 'aluminium', amount: 80 },
      { itemid: 'plastic', amount: 70 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 25 },
      { itemid: 'refinedplastic', amount: 25 },
    ],
  ],
  weight: 5,
  nonStack: true,
  model: '',
  image: 'np_glock18c.png',
  weapon: true,
  insertFrom: ['pistolammo', 'pistolammoPD'],
};

itemList['-942620673'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Uzi',
  price: 250,
  craft: [
    [
      { itemid: 'aluminium', amount: 30 },
      { itemid: 'plastic', amount: 60 },
      { itemid: 'rubber', amount: 30 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 10 },
      { itemid: 'refinedplastic', amount: 20 },
      { itemid: 'refinedrubber', amount: 10 },
    ]
  ],
  weight: 15,
  nonStack: true,
  model: '',
  image: 'np_micro-smg2.png',
  weapon: true,
  insertFrom: ['subammo', 'subammoPD'],
};

itemList['736523883'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'MP5',
  price: 250,
  craft: [
    [
      { itemid: 'aluminium', amount: 30 },
      { itemid: 'plastic', amount: 60 },
      { itemid: 'rubber', amount: 30 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 10 },
      { itemid: 'refinedplastic', amount: 20 },
      { itemid: 'refinedrubber', amount: 10 },
    ]
  ],
  weight: 15,
  nonStack: true,
  model: '',
  image: 'np_mp5.png',
  weapon: true,
  insertFrom: ['subammo', 'subammoPD'],
};

itemList['1192676223'] = {
  fullyDegrades: false,
  decayrate: 0.75,
  displayname: 'M4',
  price: 10,
  craft: [[
    { itemid: 'aluminium', amount: 50 },
    { itemid: 'plastic', amount: 10 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_m4.png',
  weapon: true,
  information: 'Equipamento emitido pelo governo (PD/EMS/DOC)',
  insertFrom: ['rifleammo', 'rifleammoPD'],
};

itemList['-1768145561'] = {
  fullyDegrades: false,
  decayrate: 0.75,
  displayname: 'FN SCAR-L',
  price: 10,
  craft: [[
    { itemid: 'aluminium', amount: 50 },
    { itemid: 'plastic', amount: 10 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_scar.png',
  weapon: true,
  information: 'Equipamento emitido pelo governo (PD/EMS/DOC) - Sujeito a alterações',
  insertFrom: ['rifleammo', 'rifleammoPD'],
};

itemList['-1719357158'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'Mk14',
  price: 550,
  craft: [
    [
      { itemid: 'aluminium', amount: 500 },
      { itemid: 'plastic', amount: 500 },
      { itemid: 'rubber', amount: 500 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 150 },
      { itemid: 'refinedplastic', amount: 150 },
      { itemid: 'refinedrubber', amount: 150 },
    ]
  ],
  weight: 43,
  nonStack: true,
  model: '',
  image: 'np_mk14.png',
  information: 'Equipamento emitido pelo governo (PD/EMS/DOC)',
  weapon: true,
  insertFrom: ['sniperammo'],
};

itemList['100416529'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'M24',
  price: 10,
  craft: [[
    { itemid: 'aluminium', amount: 50 },
    { itemid: 'plastic', amount: 10 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_m24.png',
  weapon: true,
  insertFrom: ['sniperammo'],
};

itemList['-1536150836'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'AWM',
  price: 10,
  craft: [[
    { itemid: 'aluminium', amount: 50 },
    { itemid: 'plastic', amount: 10 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_awm.png',
  weapon: true,
  insertFrom: ['sniperammo'],
};

itemList['-90637530'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'Dragunov',
  price: 500,
  craft: [
    [
      { itemid: 'aluminium', amount: 500 },
      { itemid: 'plastic', amount: 500 },
      { itemid: 'rubber', amount: 500 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 150 },
      { itemid: 'refinedplastic', amount: 150 },
      { itemid: 'refinedrubber', amount: 150 },
    ]
  ],
  weight: 43,
  nonStack: true,
  model: '',
  image: 'np_dragunov.png',
  weapon: true,
  insertFrom: ['sniperammo'],
};

itemList['-1074790547'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'AK-47',
  price: 250,
  craft: [
    [
      { itemid: 'aluminium', amount: 500 },
      { itemid: 'plastic', amount: 500 },
      { itemid: 'rubber', amount: 500 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 150 },
      { itemid: 'refinedplastic', amount: 150 },
      { itemid: 'refinedrubber', amount: 150 },
    ]
  ],
  weight: 25,
  nonStack: true,
  model: '',
  image: 'np_assault-rifle.png',
  weapon: true,
  insertFrom: ['rifleammo', 'rifleammoPD'],
};

itemList['497969164'] = {
  fullyDegrades: false,
  decayrate: 3.0,
  displayname: 'M70',
  price: 250,
  craft: [
    [
      { itemid: 'aluminium', amount: 500 },
      { itemid: 'plastic', amount: 500 },
      { itemid: 'rubber', amount: 500 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 150 },
      { itemid: 'refinedplastic', amount: 150 },
      { itemid: 'refinedrubber', amount: 150 },
    ]
  ],
  weight: 20,
  nonStack: true,
  model: '',
  image: 'np_m70.png',
  weapon: true,
  insertFrom: ['rifleammo', 'rifleammoPD'],
};

itemList['-275439685'] = {
  fullyDegrades: false,
  decayrate: 3.0,
  displayname: 'Espingarda Serrada',
  price: 250,
  craft: [[
    { itemid: 'refinedsteel', amount: 50 },
    { itemid: 'refinedcopper', amount: 25 },
    { itemid: 'refinedscrap', amount: 25 },
  ]],
  weight: 14,
  nonStack: true,
  model: '',
  image: 'np_db-shotgun.png',
  weapon: true,
  insertFrom: ['shotgunammo', 'shotgunammoPD'],
};

itemList['487013001'] = {
  fullyDegrades: false,
  decayrate: 3.0,
  displayname: 'IZh-81',
  price: 250,
  craft: [
    [
      { itemid: 'steel', amount: 225 },
      { itemid: 'copper', amount: 150 },
      { itemid: 'scrapmetal', amount: 150 },
    ],
    [
      { itemid: 'refinedsteel', amount: 75 },
      { itemid: 'refinedcopper', amount: 50 },
      { itemid: 'refinedscrap', amount: 50 },
    ]
  ],
  weight: 21,
  nonStack: true,
  model: '',
  image: 'np_izh81.png',
  weapon: true,
  insertFrom: ['shotgunammo', 'shotgunammoPD'],
};

itemList['1432025498'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'Remington 870',
  price: 10,
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 21,
  nonStack: true,
  model: '',
  image: 'np_remington.png',
  weapon: true,
  information: 'Equipamento emitido pelo governo (PD/EMS/DOC)',
  insertFrom: ['shotgunammo', 'shotgunammoPD'],
};

itemList['171789620'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'SIG MPX',
  price: 10,
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  weight: 11,
  nonStack: true,
  model: '',
  image: 'np_mpx.png',
  weapon: true,
  information: 'Equipamento emitido pelo governo (PD/EMS/DOC)',
  insertFrom: ['subammo', 'subammoPD'],
};

itemList['1649403952'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Draco NAK9',
  price: 10,
  craft: [
    [
      { itemid: 'aluminium', amount: 300 },
      { itemid: 'steel', amount: 300 },
      { itemid: 'rubber', amount: 300 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 70 },
      { itemid: 'refinedsteel', amount: 70 },
      { itemid: 'refinedrubber', amount: 70 },
    ]
  ],
  weight: 11,
  nonStack: true,
  model: '',
  image: 'np_draco.png',
  weapon: true,
  insertFrom: ['rifleammo', 'rifleammoPD'],
};

itemList['-1472189665'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'Skorpion',
  price: 10,
  craft: [
    [
      { itemid: 'aluminium', amount: 100 },
      { itemid: 'steel', amount: 100 },
      { itemid: 'rubber', amount: 100 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 20 },
      { itemid: 'refinedsteel', amount: 20 },
      { itemid: 'refinedrubber', amount: 20 },
    ]
  ],
  weight: 7,
  nonStack: true,
  model: '',
  image: 'np_skorpion.png',
  weapon: true,
  insertFrom: ['subammo', 'subammoPD'],
};

itemList['-1312131151'] = {
  fullyDegrades: false,
  decayrate: 4.0,
  displayname: 'Rocket Launcher',
  price: 1500,
  weight: 15,
  craft: [[
    { itemid: 'plastic', amount: 2300 },
    { itemid: 'rubber', amount: 2000 },
    { itemid: 'copper', amount: 2500 },
  ]],
  nonStack: true,
  model: '',
  image: 'np_rocketlauncher.png',
  information: 'Accuracy may vary',
  weapon: true,
  insertFrom: ['rpgammo'],
};

/*

  WEAPONS END

*/

/*

  AMMOS START

*/

itemList['subammo'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Sub Ammo x50 PD',
  craft: [[
    { itemid: 'aluminium', amount: 20 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 100,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_sub-ammo.png',
};

itemList['heavyammo'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Heavy Ammo x50',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 10,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_rifle-ammo.png',
};

itemList['sniperammo'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Sniper Ammo x25',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 10,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_sniper-ammo.png',
};

itemList['shotgunammo'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Shotgun Ammo x50',
  craft: [[
    { itemid: 'refinedsteel', amount: 1 },
    { itemid: 'plastic', amount: 1 },
  ]],
  price: 10,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_shotgun-ammo.png',
};

itemList['pistolammo'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Pistol Ammo x50 PD',
  craft: [
    [
      { itemid: 'aluminium', amount: 1 },
      { itemid: 'plastic', amount: 1 },
      { itemid: 'rubber', amount: 1 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 1 },
    ]
  ],
  price: 10,
  weight: 2,
  blockScrap: true,
  nonStack: false,
  model: '',
  image: 'np_pistol-ammo.png',
};

itemList['rifleammo'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Rifle Ammo x50',
  craft: [[
    { itemid: 'aluminium', amount: 10 },
    { itemid: 'plastic', amount: 10 },
    { itemid: 'rubber', amount: 10 },
  ]],
  price: 1,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_rifle-ammo.png',
  contraband: true,
};

itemList['pistolammoPD'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'PD Pistol Ammo',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 1,
  weight: 2,
  nonStack: false,
  model: '',
  information: 'Government (PD/EMS/DOC) Issued Equipment',
  image: 'np_pistol-ammo.png',
};

itemList['subammoPD'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Sub Ammo',
  craft: [[
    { itemid: 'aluminium', amount: 20 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 10,
  weight: 2,
  nonStack: false,
  model: '',
  information: 'Government (PD/EMS/DOC) Issued Equipment',
  image: 'np_sub-ammo.png',
};

itemList['rifleammoPD'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Rifle ammo',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 10,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_rifle-ammo.png',
  information: 'Government (PD/EMS/DOC) Issued Equipment',
  contraband: true,
};

itemList['shotgunammoPD'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Shotgun Ammo',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 10,
  weight: 2,
  nonStack: false,
  model: '',
  information: 'Government (PD/EMS/DOC) Issued Equipment',
  image: 'np_shotgun-ammo.png',
};

itemList['taserammo'] = {
  fullyDegrades: true,
  decayrate: 0.1,
  displayname: 'Taser Cartridges',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  information: 'Government (PD/EMS/DOC) Issued Equipment',
  image: 'np_taserammo.png',
};

itemList['empammo'] = {
  fullyDegrades: true,
  decayrate: 0.08,
  displayname: 'EMP Cartridge',
  price: 150,
  weight: 20,
  nonStack: false,
  model: '',
  image: 'np_emp_ammo.png',
};

itemList['nails'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Nails',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 10,
  weight: 3,
  nonStack: false,
  model: '',
  image: 'np_nails.png',
};

itemList['paintballs'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Paintballs',
  craft: [[
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 10,
  weight: 3,
  nonStack: false,
  model: '',
  image: 'np_paintball_ammo.png',
};

itemList['rubberslugs'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: '12-Gauge Rubber Slugs',
  craft: [[
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 10,
  weight: 3,
  nonStack: false,
  model: '',
  information: 'Government (PD/EMS/DOC) Issued Equipment',
  image: 'np_rubberslugs.png',
};

itemList['rpgammo'] = {
  fullyDegrades: true,
  decayrate: 4.0,
  displayname: 'RPG',
  craft: [[
    { itemid: 'aluminium', amount: 1500 },
    { itemid: 'plastic', amount: 200 },
    { itemid: 'rubber', amount: 400 },
  ]],
  price: 10,
  weight: 30,
  nonStack: false,
  model: '',
  image: 'np_rpgammo.png',
};

/*

  AMMOS END

*/

/*

  ATTACHMENTS START

*/

itemList['weapon_silencer_pistol'] = {
  fullyDegrades: false,
  decayrate: 0.5,
  displayname: 'Pistol Suppressor',
  price: 1500,
  weight: 15,
  craft: [[
    { itemid: 'copper', amount: 50 },
    { itemid: 'rubber', amount: 50 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_ssilencer.png',
  information: 'A silencer designed for use on some pistols.',
};

itemList['weapon_oil_silencer'] = {
  fullyDegrades: false,
  decayrate: 0.1,
  displayname: 'Oil Filter',
  price: 500,
  weight: 15,
  craft: [
    [
      { itemid: 'aluminium', amount: 20 },
      { itemid: 'steel', amount: 20 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 4 },
      { itemid: 'refinedsteel', amount: 4 },
    ]
  ],
  nonStack: false,
  model: '',
  image: 'np_oil_can_supp.png',
  information: 'Old, used oil filter. Do not seem to last long.',
};

itemList['weapon_silencer_assault'] = {
  fullyDegrades: false,
  decayrate: 0.5,
  displayname: 'Rifle Suppressor',
  price: 1500,
  weight: 15,
  craft: [[
    { itemid: 'copper', amount: 110 },
    { itemid: 'rubber', amount: 110 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_silencerbig.png',
  information: 'Silencer designed for use on some rifles.',
};

itemList['weapon_scope'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'Weapon Optics',
  price: 1500,
  weight: 15,
  craft: [[
    { itemid: 'plastic', amount: 200 },
    { itemid: 'rubber', amount: 200 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_lscope.png',
  information: 'Scope designed for use on some weapons.',
};

itemList['weapon_uzi_extended'] = {
  fullyDegrades: false,
  decayrate: 0.5,
  displayname: 'UZI extended mag',
  price: 1500,
  weight: 15,
  craft: [
    [
      { itemid: 'aluminium', amount: 80 },
      { itemid: 'steel', amount: 80 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 20 },
      { itemid: 'refinedsteel', amount: 20 },
    ]
  ],
  nonStack: false,
  model: '',
  image: 'np_uzi_extended.png',
  information: 'Will only fit on the UZI.',
};

itemList['weapon_uzi_foldstock'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'UZI Stock',
  price: 1500,
  weight: 5,
  craft: [
    [
      { itemid: 'aluminium', amount: 40 },
      { itemid: 'rubber', amount: 40 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 10 },
      { itemid: 'refinedrubber', amount: 10 },
    ]
  ],
  nonStack: false,
  model: '',
  image: 'np_uzi_fold_stock.png',
  information: 'Will only fit on the UZI.',
};

itemList['weapon_uzi_woodstock'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'UZI Wooden Stock',
  price: 1500,
  weight: 5,
  craft: [
    [
      { itemid: 'aluminium', amount: 40 },
      { itemid: 'rubber', amount: 40 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 10 },
      { itemid: 'refinedrubber', amount: 10 },
    ]
  ],
  nonStack: false,
  model: '',
  image: 'np_uzi_wooden_stock.png',
  information: 'Will only fit on the UZI.',
};

/*

  ATTACHMENTS END

*/

/*

  FOODS START

*/

itemList['hamburger'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Hamburger',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_hamburger.png',
  information: 'Sates Hunger',
};

itemList['sandwich'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  displayname: 'Sandwich',
  price: 8,
  weight: 5,
  nonStack: false,
  model: '',
  image: 'np_sandwich.png',
  information: 'Sates Hunger',
};

itemList['donut'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Donut',
  craft: [[{ itemid: 'foodingredient', amount: 2 }]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_donut.png',
  information: 'Speed is the name of the game',
};

itemList['eggsbacon'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Eggs and Bacon',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 50,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_eggs-and-bacon.png',
  information: 'Great start to your morning',
};

itemList['cookie'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Cookie',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 2,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cookie.png',
  information: 'Have a Blissful day!',
};

itemList['muffin'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Muffin',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_muffin.png',
  information: 'Is your muffin buttered?',
};

itemList['taco'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Taco',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 20,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_taco.png',
  information: 'This aint free taco.',
};

itemList['burrito'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Burrito',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 20,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_burrito.png',
  information: 'Burrito',
};

itemList['fishtaco'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Fish Taco',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 50,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fishtaco.png',
  information: 'Make like the fishes.',
};

itemList['fries'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Fries',
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fries.png',
  information: 'Sates Hunger and thickens blood',
};

itemList['jailfood'] = {
  fullyDegrades: true,
  decayrate: 0.001,
  displayname: 'Jail Food',
  price: 0,
  weight: 25,
  nonStack: false,
  model: '',
  image: 'np_jailfood.png',
  information: "Looks as bad as the Sheriff's aim.",
};

itemList['bleederburger'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'The Bleeder',
  price: 20,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_the-bleeder.png',
  information: 'Sates Hunger and reduces stress.',
};

itemList['heartstopper'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'The Heart Stopper',
  price: 20,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_the-heart-stopper.png',
  information: 'Sates Hunger and reduces stress.',
};

itemList['torpedo'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Torpedo',
  price: 20,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_torpedo.png',
  information: 'Sates Hunger and reduces stress.',
};

itemList['meatfree'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Vegetariano',
  price: 20,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_meat-free.png',
  information: 'Sates Hunger and reduces stress.',
};

itemList['moneyshot'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Money Shot',
  price: 20,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_money-shot.png',
  information: 'Sates Hunger and reduces stress.',
};

itemList['churro'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Churro',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 50,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_churro.png',
  information: 'Basically a long donut. Gives a sugar rush when eaten.',
};

itemList['hotdog'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Hot Dog',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 50,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_hotdog.png',
  information: 'Dont ask what is in it',
};

itemList['chocobar'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Chocolate Bar',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 6,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_chocolate-bar.png',
  information: 'Hmm...Meteorite',
};

itemList['icecream'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Icecream',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 50,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_icecream.png',
  information: 'Chilling.',
};

itemList['pizza'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Pizza Slice',
  craft: [[{ itemid: 'foodingredient', amount: 2 }]],
  price: 1,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_pizza-slice.png',
  information: 'Check for pineapple',
};

itemList['pizzabox'] = {
  fullyDegrades: true,
  decayrate: 0.5,
  displayname: 'Pizza Box',
  price: 0,
  weight: 11,
  nonStack: true,
  model: '',
  image: 'np_pizza_box.png',
  information: 'Oven Fresh!',
};

itemList['spaghetti'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Spaghetti',
  price: 150,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_spaghetti.png',
  information: 'Knees weak...',
};

/*

  FOODS END

*/

/*

  DRINKS START

*/

itemList['water'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Water',
  price: 4,
  weight: 1,
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  nonStack: false,
  model: '',
  image: 'np_water.png',
  information: 'Sates Thirst',
};

itemList['cola'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Cola',
  price: 7,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_coke.png',
  information: 'Sates Thirst',
};

itemList['greencow'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Green Cow',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 50,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_green-cow.png',
  information: 'Slightly Increases Stamina and Speed',
};

itemList['slushy'] = {
  fullyDegrades: false,
  illegal: true,
  decayrate: 0.0,
  displayname: 'The best slushy ever.',
  price: 0,
  weight: 15,
  nonStack: false,
  model: '',
  image: 'np_slushy.png',
  information: 'The only thing in Jail that tastes good.',
};

itemList['coffee'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Coffee',
  craft: [[{ itemid: 'foodingredient', amount: 2 }]],
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_coffee.png',
  information: 'Wow, its strong.',
};

itemList['frappuccino'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Frappuccino',
  craft: [[{ itemid: 'foodingredient', amount: 2 }]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_frappuccino.png',
  information: 'Its like I have ESPN or something',
};

itemList['latte'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Latte',
  craft: [[{ itemid: 'foodingredient', amount: 2 }]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_latte.png',
  information: 'Thats so fetch',
};

itemList['softdrink'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Soft Drink',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'softdrink2.png',
  information: 'Sates thirst and gives a sugar rush',
};

itemList['mshake'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Milkshake',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_milkshake.png',
  information: 'Hand-scooped for you.',
};

itemList['bscoffee'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Cheap Coffee',
  price: 15,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_bscoffee.png',
  information: 'Tastes like dirt, but has the caffeine you need',
};

itemList['jaildrink'] = {
  fullyDegrades: true,
  decayrate: 0.001,
  displayname: 'Jail Drink',
  price: 0,
  weight: 10,
  nonStack: false,
  model: '',
  image: 'np_jaildrink.png',
  information: "Looks as bad as the Chief of Police's aim.",
};

itemList['sprunk'] = {
  fullyDegrades: false,
  decayrate: 0.01,
  displayname: 'Sprunk',
  price: 9,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_sprunk.png',
  information: 'The Essence of Life',
};

itemList['fruitslushy'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Fruit Slushy',
  price: 0,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fruit_slushy.png',
  information: 'The fruitiest slushy ever.',
};

/*

  DRINKS END

*/

/*

  ALCOHOLS START

*/

itemList['vodka'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Vodka',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_vodka.png',
  information: 'Sates Thirst',
};

itemList['beer'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Beer',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_beer.png',
  information: 'Sates Thirst',
};

itemList['whiskey'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Whiskey',
  price: 5,
  weight: 5,
  nonStack: false,
  model: '',
  image: 'np_whiskey.png',
  information: 'Sates Thirst',
};

itemList['absinthe'] = {
  fullyDegrades: true,
  illegal: true,
  decayrate: 0.3,
  displayname: 'Absinthe',
  craft: [[
    { itemid: 'glass', amount: 1 },
    { itemid: 'moonshine', amount: 1 },
  ]],
  price: 200,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_absinthe.png',
  information: 'The strongest you can get, 95%.',
};

itemList['drink1'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Orange Lemon',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'orange', amount: 1 },
    { itemid: 'lemon', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_drink1.png',
  information: 'A perfect happy hour choice for vodka drinkers. Sates Thirst',
};

itemList['drink2'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Cherry Berry',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'cherry', amount: 1 },
    { itemid: 'strawberry', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_drink2.png',
  information: ' Berry bliss. Sates Thirst',
};

itemList['drink3'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Banana Peach',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'banana', amount: 1 },
    { itemid: 'peach', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_drink3.png',
  information: 'Tastes just like fruity bubblegum. Sates Thirst',
};

itemList['drink4'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Orange Banana',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'orange', amount: 1 },
    { itemid: 'banana', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_drink4.png',
  information: 'Some sweetness to your summer. Sates Thirst',
};

itemList['drink5'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Cherry Kiwi',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'cherry', amount: 1 },
    { itemid: 'kiwi', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_drink5.png',
  information: 'Fruity and refreshing. Sates Thirst',
};

itemList['drink6'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Berry Watermelon',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'strawberry', amount: 1 },
    { itemid: 'watermelon', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_drink6.png',
  information: 'Cool, Sweet, Colorful. Sates Thirst',
};

itemList['drink7'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Apple Lime',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'lime', amount: 1 },
    { itemid: 'apple', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_polarbear.png',
  information: 'Curbs sweet cravings. Sates Thirst',
};

itemList['drink8'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Cherry Peach',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'cherry', amount: 1 },
    { itemid: 'peach', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_rumcoke.png',
  information: 'Perfect for cooling off on hot days. Sates Thirst',
};

itemList['drink9'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Coconut Lime',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'coconut', amount: 1 },
    { itemid: 'lime', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_straightvodka.png',
  information: 'Blended with an island twist. Sates Thirst',
};

itemList['drink10'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'White Paw',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'grapes', amount: 1 },
    { itemid: 'watermelon', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_whitepaw.png',
  information: 'Enjoy on your porch admiring the stars. Sates Thirst',
};

itemList['shot1'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Orange Lemon',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'orange', amount: 1 },
    { itemid: 'lemon', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot1.png',
  information: 'Sates Thirst',
};

itemList['shot2'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Cherry Berry',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'cherry', amount: 1 },
    { itemid: 'strawberry', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot2.png',
  information: 'Sates Thirst',
};

itemList['shot3'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Banana Peach',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'banana', amount: 1 },
    { itemid: 'peach', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot3.png',
  information: 'Sates Thirst',
};

itemList['shot4'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Orange Banana',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'orange', amount: 1 },
    { itemid: 'banana', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot4.png',
  information: 'Sates Thirst',
};

itemList['shot5'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Cherry Kiwi',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'cherry', amount: 1 },
    { itemid: 'kiwi', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot5.png',
  information: 'Sates Thirst',
};

itemList['shot6'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Berry Watermelon',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'strawberry', amount: 1 },
    { itemid: 'watermelon', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot6.png',
  information: 'Sates Thirst',
};

itemList['shot7'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Lime Apple',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'lime', amount: 1 },
    { itemid: 'apple', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot7.png',
  information: 'Sates Thirst',
};

itemList['shot8'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Cherry Peach',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'cherry', amount: 1 },
    { itemid: 'peach', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot8.png',
  information: 'Sates Thirst',
};

itemList['shot9'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Coconut Lime',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'coconut', amount: 1 },
    { itemid: 'lime', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot9.png',
  information: 'Sates Thirst',
};

itemList['shot10'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Grapes Watermelon',
  price: 150,
  weight: 1,
  craft: [[
    { itemid: 'grapes', amount: 1 },
    { itemid: 'watermelon', amount: 1 },
    { itemid: 'vodka', amount: 1 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_shot10.png',
  information: 'Sates Thirst',
};

itemList['wineglass'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Glass of Wine',
  price: 1,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_glass-wine.png',
  information: 'Quite exquisite',
};

/*

  ALCOHOLS END

*/

/*

  FRUITS START

*/

itemList['apple'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Apple',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_apple.png',
  information: '',
};

itemList['banana'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Banana',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_banana.png',
  information: '',
};

itemList['cherry'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Cherry',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cherry.png',
  information: '',
};

itemList['coconut'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Coconut',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_coconut.png',
  information: '',
};

itemList['grapes'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Grapes',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_grapes.png',
  information: '',
};

itemList['kiwi'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Kiwi',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_kiwi.png',
  information: '',
};

itemList['lemon'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Lemon',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_lemon.png',
  information: '',
};

itemList['lime'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Lime',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_lime.png',
  information: '',
};

itemList['orange'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Orange',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_orange.png',
  information: '',
};

itemList['peach'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Peach',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_peach.png',
  information: '',
};

itemList['potato'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Potato',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_potato.png',
  information: '',
};

itemList['strawberry'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Strawberry',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_strawberry.png',
  information: '',
};

itemList['watermelon'] = {
  fullyDegrades: false,
  illegal: false,
  decayrate: 0.75,
  displayname: 'Watermelon',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_watermelon.png',
  information: '',
};

/*

  FRUITS END

*/

/*

  InGREDIENTS START

*/

itemList['foodingredient'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Food Ingredient',
  price: 10,
  weight: 5,
  nonStack: false,
  model: '',
  image: 'np_ingredients.png',
  information: 'Used to craft food - be aware, food doesnt last forever!',
};

itemList['cheese'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Cheese',
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_ingredients_cheese.png',
  information: 'Used to craft food - be aware, food doesnt last forever!',
};

itemList['lettuce'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Lettuce',
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_ingredients_lettuce.png',
  information: 'Used to craft food - be aware, food doesnt last forever!',
};

itemList['freshmeat'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Fresh Meat',
  craft: [[{ itemid: 'foodingredient', amount: 1 }]],
  price: 10,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_rawmeat.png',
  information: 'Meat, Wow..',
};

itemList['hfcs'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'High-Fructose Syrup',
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_ingredients_hfcs.png',
  information: 'Used to craft food - be aware, food doesnt last forever!',
};

itemList['milk'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Milk',
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_ingredients_milk.png',
  information: 'Used to craft food - be aware, food doesnt last forever!',
};

itemList['icecreamingred'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Ice Cream',
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_ingredients_icecream.png',
  information: 'Used to craft food - be aware, food doesnt last forever!',
};

itemList['tomato'] = {
  fullyDegrades: true,
  decayrate: 0.05,
  displayname: 'Tomato',
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_ingredients_tomato.png',
  information: 'Used to craft food - be aware, food doesnt last forever!',
};

/*

  InGREDIENTS END

*/

/*

  DRUGS START

*/

itemList['weedq'] = {
  fullyDegrades: true,
  illegal: true,
  decayrate: 0.3,
  displayname: 'Weed Q',
  craft: [[{ itemid: 'weedoz', amount: 0.25 }]],
  price: 65,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_weed-oz.png',
  information: 'Lowers Stress',
  contraband: true,
};

itemList['rollingpaper'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Rolling Paper',
  price: 1,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_rolling-paper.png',
  information: 'Required to roll joints!',
};

itemList['joint'] = {
  fullyDegrades: true,
  illegal: true,
  decayrate: 0.2,
  displayname: '3g Joint',
  craft: [[
    { itemid: 'weedq', amount: 0.5 },
    { itemid: 'rollingpaper', amount: 1 },
  ]],
  price: 25,
  weight: 2,
  nonStack: false,
  model: '',
  image: 'np_joint.png',
  information: 'Its a Joint, man. ',
  contraband: true,
};

itemList['codein'] = {
  fullyDegrades: true,
  illegal: true,
  decayrate: 0.3,
  displayname: 'Codeine',
  price: 200,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_codein.png',
  information: 'Be careful not to overdo it.',
  contraband: true,
};

itemList['anfetamina'] = {
  fullyDegrades: true,
  illegal: true,
  decayrate: 0.3,
  displayname: 'Amphetamine',
  price: 200,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'ogs-anfetamina.png',
  information: 'This looks like a chemical.',
  contraband: true,
};

itemList['lean'] = {
  fullyDegrades: true,
  illegal: true,
  decayrate: 0.3,
  displayname: 'Lean',
  price: 200,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_lean.png',
  information: 'It shouldnt be addictive, right??',
  contraband: true,
  craft: [[
    { itemid: 'codein', amount: 1 },
    { itemid: 'sprunk', amount: 1 },
  ]],
};

itemList['1gcocaine'] = {
  fullyDegrades: true,
  illegal: true,
  decayrate: 0.5,
  displayname: '10g cocaine',
  price: 100,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_cocaine-baggy.png',
  information: 'Looks really high quality. ',
  contraband: true,
};

itemList['1gmeta'] = {
  fullyDegrades: true,
  illegal: true,
  decayrate: 0.5,
  displayname: 'Methamphetamine 1g',
  price: 100,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_crack.png',
  information: 'Its bad to try?',
  contraband: true,
  craft: [[
    { itemid: 'anfetamina', amount: 1 },
    { itemid: 'coffee', amount: 1 },
  ]],
};

itemList['maleseed'] = {
  fullyDegrades: true,
  decayrate: 0.75,
  displayname: 'Marijuana Seed',
  price: 100,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_weed-seed.png',
  information: 'Surely I can just plant this, right?',
  contraband: true,
  seed: true,
};

itemList['femaleseed'] = {
  fullyDegrades: true,
  decayrate: 0.75,
  displayname: 'Female Marijuana Seed',
  price: 100,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_weed-seed.png',
  information: 'Surely I can just plant this, right?',
  contraband: true,
  seed: true,
};
/*

  DRUGS END

*/

/*

  POLICE START

*/

itemList['spikes'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'PD Spike Kit',
  price: 69,
  weight: 40,
  nonStack: false,
  model: '',
  image: 'np_spikes.png',
  information: 'Considered Police Equipment',
};

itemList['pdarmor'] = {
  fullyDegrades: true,
  decayrate: 0.25,
  displayname: '(PD) Chest Armor',
  craft: [[
    { itemid: 'aluminium', amount: 1 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 50,
  weight: 37,
  nonStack: false,
  model: '',
  image: 'np_chest-armor.png',
  information: 'Government (PD/EMS/DOC) Issued Equipment',
};

itemList['IFAK'] = {
  fullyDegrades: false,
  decayrate: 0.1,
  displayname: 'IFAK',
  price: 8,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'ifak.png',
  information: 'Government (PD/EMS/DOC) Issued Equipment',
};

itemList['pdbadge'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'PD Badge',
  price: 0,
  weight: 0,
  nonStack: true,
  model: '',
  image: 'np_pd_badge.png',
};

itemList['gatheringkit'] = {
  fullyDegrades: false,
  decayrate: 0.25,
  displayname: 'Detective Kit',
  price: 1500,
  weight: 15,
  craft: [[
    { itemid: 'plastic', amount: 100 },
    { itemid: 'rubber', amount: 100 },
  ]],
  nonStack: false,
  model: '',
  image: 'np_cleaning-goods.png',
  information: 'Used to gather evidence - should be seized by police if suspected of use in crime.',
};

itemList['np_evidence_marker_yellow'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Evidence',
  price: 0,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_evidence_marker_yellow.png',
};

itemList['np_evidence_marker_red'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Evidence',
  price: 0,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_evidence_marker_red.png',
};

itemList['np_evidence_marker_white'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Evidence',
  price: 0,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_evidence_marker_white.png',
};

itemList['np_evidence_marker_orange'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Evidence',
  price: 0,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_evidence_marker_orange.png',
};

itemList['np_evidence_marker_light_blue'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Evidence',
  price: 0,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_evidence_marker_light_blue.png',
};

itemList['np_evidence_marker_purple'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Evidence',
  price: 0,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_evidence_marker_purple.png',
};

itemList['pdevidencebag'] = {
  fullyDegrades: false,
  decayrate: 0,
  displayname: 'Evidence Bag',
  price: 10,
  weight: 10,
  nonStack: true,
  model: '',
  image: 'np_evidence_bag.png',
};

itemList['dnaswab'] = {
  fullyDegrades: false,
  decayrate: 0,
  displayname: 'DNA Swab',
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'ogs_cotonete.png',
};

/*

  POLICE END

*/

/*

  PAWNSHOP END

*/

itemList['stolenrolexwatch'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  isStolen: true,
  displayname: 'Rolex watch',
  price: 50,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_rolex-watch.png',
};

itemList['stolen10ctchain'] = {
  fullyDegrades: false,
  isStolen: true,
  decayrate: 0.0,
  displayname: '10ct Gold Chain (p)',
  price: 2230,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_10ct-gold-chain.png',
};

itemList['stolenring'] = {
  fullyDegrades: false,
  isStolen: true,
  decayrate: 0.0,
  displayname: 'Engagement Ring',
  price: 15,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_wedding-ring.png',
};

itemList['stolenlaptop'] = {
  fullyDegrades: false,
  isStolen: true,
  decayrate: 0.0,
  displayname: 'Notebook',
  price: 15,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_pixellaptop.png',
};

/*

  PAWNSHOP END

*/

/*

  MISC START

*/

itemList['ciggy'] = {
  fullyDegrades: true,
  decayrate: 0.2,
  displayname: 'Ciggy',
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cigarette.png',
};

itemList['cigar'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Cigar',
  price: 30,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_cigar.png',
};

itemList['summonablepet'] = {
  _name: 'summonablepet',
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Pet Animal',
  price: 100,
  weight: 11,
  nonStack: true,
  model: '',
  image: 'np_p_rott.png',
  information: "Summon your pet.",
}; 

itemList['repairkit'] = {
  fullyDegrades: true,
  decayrate: 0.25,
  displayname: 'Repair Kit',
  craft: [[{ itemid: 'electronics', amount: 25 }]],
  price: 100,
  weight: 10,
  nonStack: false,
  model: '',
  image: 'np_basic_repair-kit.png',
};

itemList['repairkitbennys'] = {
  fullyDegrades: true,
  decayrate: 0.25,
  displayname: 'Repair Kit (Bennys)',
  craft: [[{ itemid: 'electronics', amount: 25 }]],
  price: 150,
  weight: 5,
  nonStack: false,
  model: '',
  image: 'np_basic_repair-kit-bennys.png',
};

itemList['wheelchair'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Wheelchair',
  price: 250,
  weight: 50,
  nonStack: false,
  model: '',
  image: 'np_wheelchair.png',
  information: 'For broken legs n stuff',
};

itemList['armor'] = {
  fullyDegrades: true,
  decayrate: 0.75,
  displayname: 'Chest Armor',
  craft: [[
    { itemid: 'aluminium', amount: 5 },
    { itemid: 'plastic', amount: 5 },
    { itemid: 'rubber', amount: 5 },
  ]],
  price: 500,
  weight: 37,
  nonStack: false,
  model: '',
  image: 'np_chest-armor.png',
  information: 'Protects you from bleeding and stumbling on injuries.',
};

itemList['cashroll'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Roll of Cash',
  price: 1,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_cash-roll.png',
  information: 'Whats the count..',
};

itemList['cashstack'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Stack of Cash',
  price: 1,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_cash-stack.png',
  information: 'All nice and sequential.',
};

itemList['band'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Band of Notes',
  price: 1,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_cash-stack.png',
  information: 'Lots of low denominators - Indicates drug sales.',
};


itemList['rollcash'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Roll of Small Notes',
  price: 1,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_cash-roll.png',
  information: 'Lots of low denominators - Indicates drug sales.',
};

itemList['binoculars'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Binoculars',
  craft: [[
    { itemid: 'aluminium', amount: 5 },
    { itemid: 'plastic', amount: 1 },
    { itemid: 'rubber', amount: 1 },
  ]],
  price: 1,
  weight: 10,
  nonStack: false,
  model: '',
  image: 'np_binoculars.png',
};

itemList['blindfold'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Headbag',
  price: 250,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_blindfold.png',
};

itemList['camera'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Nikea NP1000',
  price: 1,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_camera.png',
  information: 'Works 100% of the time 60% of the time.',
};

itemList['hairtie'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Hair Tie',
  price: 5,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_hairtie.png',
  information: 'We all know what this is really for...',
};

itemList['idcard'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Citizen Card',
  price: 500,
  weight: 0,
  nonStack: true,
  model: '',
  image: 'np_citizen-card.png',
};

itemList['phonebox'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Cell Phone Box',
  price: 200,
  weight: 2,
  nonStack: true,
  model: '',
  image: 'phone_box.png',
  information: 'Open to get cell phone',
};

itemList['phoneboxempty'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Empty Cell Phone Case',
  price: 1,
  weight: 2,
  nonStack: true,
  model: '',
  image: 'phone_box_empty.png',
  information: 'This is not worth anything',
};

itemList['lighter'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Lighter',
  price: 100,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_lighter.png',
  information: 'Dont start a fire with this. ',
};


itemList['mobilephone'] = {
  fullyDegrades: false,
  decayrate: 1.0,
  displayname: 'Mobile Phone',
  price: 2000,
  craft: [
    [
      { itemid: 'electronics', amount: 10 },
      { itemid: 'glass', amount: 3 },
      { itemid: 'copper', amount: 5 },
      { itemid: 'scrapmetal', amount: 5 },
    ]
  ],
  weight: 5,
  nonStack: true,
  model: '',
  image: 'np_mobile-phone.png',
};
itemList['lockpick'] = {
  fullyDegrades: false,
  decayrate: 2.0,
  displayname: 'Lockpick Set',
  craft: [
    [
      { itemid: 'aluminium', amount: 5 },
      { itemid: 'plastic', amount: 3 },
      { itemid: 'rubber', amount: 3 },
    ],
    [
      { itemid: 'refinedaluminium', amount: 2 },
    ]
  ],
  price: 250,
  weight: 1,
  nonStack: false,
  model: '',
  information: 'Unlocks things, if you have the skill!',
  image: 'np_lockpick-set.png',
};

itemList['okaylockpick'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Not-Shit Ass Lockpick',
  price: 0,
  craft: [[{ itemid: 'shitlockpick', amount: 100 }]],
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_shitlockpick.png',
  information: 'TBH its still shit, so shit its almost identical... almost.',
};

itemList['shitlockpick'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Ass Lockpick',
  price: 0,
  craft: [[{ itemid: 'jailfood', amount: 1 }]],
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_shitlockpick.png',
  information:
    'Why the fuck is this so heavy? Copium das why.',
}; 

itemList["radio"] = {
  fullyDegrades: true,
  deg: true,
  decayrate: 0.5,
  displayname: "Radio",
  craft: [[
    { itemid: "electronics", amount: 35 },
    { itemid: 'glass', amount: 6 },
    { itemid: 'copper', amount: 10 },
    { itemid: 'scrapmetal', amount: 5 },
    { itemid: 'rubber', amount: 10 },
  ]],
  price: 5000,
  weight: 5,
  nonStack: true,
  model: "",
  image: "np_radio.png",
  information: "Non-encrypted - Used to chat with other people on private radio channels.",
};
itemList['delivery_taco'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Delivery',
  price: 10,
  weight: 5,
  nonStack: false,
  model: '',
  image: 'np_food_bag.png',
};

itemList['delivery_supply'] = {
  fullyDegrades: true,
  decayrate: 0.01,
  displayname: 'Store Supplies',
  price: 20,
  weight: 5,
  nonStack: false,
  model: '',
  image: 'np_box.png',
};

itemList['megaphone'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Megaphone',
  price: 25,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_megaphone.png',
  information: '',
  deg: true
}

itemList['fertilizer'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Fertilizer',
  price: 500,
  weight: 3,
  nonStack: false,
  model: '',
  image: 'np_fertilizer.png',
  information: 'Cool.',
};

itemList['spray'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Spray',
  price: 150,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'ogs_spray.png',
};

itemList['sprayremover'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Spray Remover',
  price: 50,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'ogs_sprayremover.png',
};

itemList['custommiscitem'] = {
  _name: 'custommiscitem',
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Item',
  price: 1,
  weight: 1.0,
  nonStack: false,
  model: '',
  image: 'np_placeholder.png',
  information: '',
  deg: false,
};

itemList['musicwalkman'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Walkman',
  price: 100,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_walkman.png',
  information: '',
  craft: [[
    { itemid: 'genericelectronicpart', amount: 1 },
  ]],
}

itemList['musictape'] = {
  fullyDegrades: true,
  decayrate: 1.0,
  displayname: 'Music Tape',
  price: 1,
  weight: 0,
  nonStack: false,
  model: '',
  image: 'np_cassette.png',
  information: 'Play me!',
};

/*

  MISC END

*/

/*

  CLOTHES START

*/

itemList['mask'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Mask',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_mask.png',
  information: '',
};

itemList['googles'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Glasses',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_oakley-sunglasses.png',
  information: '',
};

itemList['hat'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Hat',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_hat.png',
  information: '',
};

itemList['chain'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Chain',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_5ct-gold-chain.png',
  information: '',
};

itemList['vest'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Vest',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'ogs_vest.png',
  information: '',
};

itemList['jacket'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Jacket',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'ogs_jacket.png',
  information: '',
};

itemList['shirt'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Shirt',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'ogs_shirt.png',
  information: '',
};

itemList['backpack'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Backpack',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'ogs_backpack.png',
  information: '',
};

itemList['pants'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Pants',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'ogs_pants.png',
  information: '',
};

itemList['shoes'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Shoes',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_stolenshoes.png',
  information: '',
};

itemList['watch'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Watch',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'np_casio-watch.png',
  information: '',
};

itemList['braclets'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Bracelets',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'ogs_braclets.png',
  information: '',
};

itemList['earrings'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Earrings',
  craft: [],
  price: 10,
  weight: 1,
  nonStack: true,
  model: '',
  image: 'ogs_earrings.png',
  information: '',
};

/*

  CLOTHES END

*/

/*

  TCG START

*/


itemList['tcggovernmentbooster'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Booster Pack',
  price: 1,
  weight: 1.0,
  nonStack: false,
  model: '',
  image: 'np_tcggovernmentbooster.png',
  information: 'Government set booster pack containing 6 cards.',
  deg: false,
  insertTo: ['tcgbinder'],
};

itemList['tcgcrewsbooster'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Booster Pack',
  price: 1,
  weight: 1.0,
  nonStack: false,
  model: '',
  image: 'np_tcgcrewsbooster.png',
  information: 'Crews set booster pack containing 6 cards.',
  deg: false,
  insertTo: ['tcgbinder'],
};

itemList['tcgcivsbooster'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Booster Pack',
  price: 1,
  weight: 1.0,
  nonStack: false,
  model: '',
  image: 'np_tcgcivsbooster.png',
  information: 'Civs set booster pack containing 6 cards.',
  deg: false,
  insertTo: ['tcgbinder'],
};

itemList['tcgpromobooster'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Booster Pack',
  price: 1,
  weight: 0.0,
  nonStack: false,
  model: '',
  image: 'np_tcgpromobooster.png',
  information: 'Promo set booster pack containing 1 card.',
  deg: false,
  insertTo: ['tcgbinder'],
};

itemList['tcganniversarybooster'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Booster Pack',
  price: 1,
  weight: 1.0,
  nonStack: false,
  model: '',
  image: 'np_tcganniversarybooster.png',
  information: 'Anniversary set booster pack containing 1 cards.',
  deg: false,
  insertTo: ['tcgbinder'],
};

itemList['tcgpromopacks'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Promotional Pack',
  price: 1,
  weight: 3.0,
  nonStack: false,
  model: '',
  image: 'np_tcgpromopacks.png',
  information: '1 Civs Booster. 1 Crews Booster. 1 Government Booster.',
  deg: false,
};

itemList['tcgboosterbox'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Booster Box',
  price: 1,
  weight: 18.0,
  nonStack: false,
  model: '',
  image: 'np_tcgboosterbox.png',
  information: '6 Civs Boosters. 6 Crews Boosters. 6 Government Boosters.',
  deg: false,
};

itemList['tcgcard'] = {
  _name: 'tcgcard',
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Trading Card',
  price: 1,
  weight: 0.0,
  nonStack: true,
  model: '',
  image: 'np_tcgcard.png',
  information: 'A single trading card.',
  deg: false,
  insertTo: ['tcgbinder'],
  insertFrom: ['lighter'],
};

itemList['tcghardcase'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Hard Case',
  price: 1,
  weight: 1.0,
  nonStack: false,
  model: '',
  image: 'np_tcghardcase.png',
  information: 'A protective case for a trading card.',
  deg: false,
  insertTo: ['tcgcard'],
};

itemList['tcgbinder'] = {
  fullyDegrades: false,
  decayrate: 0.0,
  displayname: 'Trading Card Binder',
  price: 1,
  weight: 10.0,
  nonStack: true,
  model: '',
  image: 'np_tcgbinder.png',
  information: 'A binder for all your trading cards.',
  deg: false,
};

// END TCG

/*

  TCG END

*/

/*

  VEHICLES START

*/

//X CLASS REPAIR PARTS

itemList['xfixbrake'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Brake Parts (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_brake_parts_x.png',
  information: 'New brake discs, pads, calipers, hubs & accessories',
};
itemList['xfixaxle'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Axle Parts (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_axle_parts_x.png',
  information: 'New axle components',
};

itemList['xfixradiator'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Radiator Parts (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cooling_parts_x.png',
  information: 'New radiator and cooling parts',
};

itemList['xfixclutch'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Clutch Parts (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_clutch_parts_x.png',
  information: 'New clutch disc and pressure plate',
};

itemList['xfixtransmission'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Transmission Parts (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_transmission_parts_x.png',
  information: 'New gear sets, shafts, converters and clutch packs',
};

itemList['xfixelectronics'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Vehicle Electronics (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_electronic_parts_x.png',
  information: 'Various vehicle electrical components',
};

itemList['xfixinjector'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Fuel Injectors (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fuel_injectors_x.png',
  information: 'New fuel injectors',
};

itemList['xfixtire'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Tire Repair Kit (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_tire_kit_x.png',
  information: 'For swapping and repairing worn or damaged tires',
};

itemList['xfixbody'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Body Panels (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_body_panels_x.png',
  information: 'New vehicle body panels',
};

itemList['xfixengine'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Engine Parts (X)',
  craft: [[
    { itemid: 'xgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_engine_parts_x.png',
  information: 'New engine parts',
};

//S CLASS REPAIR PARTS

itemList['sfixbrake'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Brake Parts (S)',
  craft: [
    [
      { itemid: 'sgenericmechanicpart', amount: 3 },
    ]
  ],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_brake_parts_s.png',
  information: 'New brake discs, pads, calipers, hubs & accessories',
};
itemList['sfixaxle'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'sAxle Parts (S)',
  craft: [
    [
      { itemid: 'sgenericmechanicpart', amount: 3 },
    ]
  ],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_axle_parts_s.png',
  information: 'New axle components',
};

itemList['sfixradiator'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Radiator Parts (S)',
  craft: [[
    { itemid: 'sgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cooling_parts_s.png',
  information: 'New radiator and cooling parts',
};

itemList['sfixclutch'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Clutch Parts (S)',
  craft: [[
    { itemid: 'sgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_clutch_parts_s.png',
  information: 'New clutch disc and pressure plate',
};

itemList['sfixtransmission'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Transmission Parts (S)',
  craft: [[
    { itemid: 'sgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_transmission_parts_s.png',
  information: 'New gear sets, shafts, converters and clutch packs',
};

itemList['sfixelectronics'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Vehicle Electronics (S)',
  craft: [[
    { itemid: 'sgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_electronic_parts_s.png',
  information: 'Various vehicle electrical components',
};

itemList['sfixinjector'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Fuel Injectors (S)',
  craft: [[
    { itemid: 'sgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fuel_injectors_s.png',
  information: 'New fuel injectors',
};

itemList['sfixtire'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Tire Repair Kit (S)',
  craft: [[
    { itemid: 'sgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_tire_kit_s.png',
  information: 'For swapping and repairing worn or damaged tires',
};

itemList['sfixbody'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Body Panels (S)',
  craft: [[
    { itemid: 'sgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_body_panels_s.png',
  information: 'New vehicle body panels',
};

itemList['sfixengine'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Engine Parts (S)',
  craft: [[
    { itemid: 'sgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_engine_parts_s.png',
  information: 'New engine parts',
};

//A CLASS REPAIR PARTS

itemList['afixbrake'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Brake Parts (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_brake_parts_a.png',
  information: 'New brake discs, pads, calipers, hubs & accessories',
};

itemList['afixaxle'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Axle Parts (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_axle_parts_a.png',
  information: 'New axle components',
};

itemList['afixradiator'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Radiator Parts (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cooling_parts_a.png',
  information: 'New radiator and cooling parts',
};

itemList['afixclutch'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Clutch Parts (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_clutch_parts_a.png',
  information: 'New clutch disc and pressure plate',
};

itemList['afixtransmission'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Transmission Parts (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_transmission_parts_a.png',
  information: 'New gear sets, shafts, converters and clutch packs',
};

itemList['afixelectronics'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Vehicle Electronics (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_electronic_parts_a.png',
  information: 'Various vehicle electrical components',
};

itemList['afixinjector'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Fuel Injectors (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fuel_injectors_a.png',
  information: 'New fuel injectors',
};

itemList['afixtire'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Tire Repair Kit (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_tire_kit_a.png',
  information: 'For swapping and repairing worn or damaged tires',
};

itemList['afixbody'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Body Panels (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_body_panels_a.png',
  information: 'New vehicle body panels',
};

itemList['afixengine'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Engine Parts (A)',
  craft: [[
    { itemid: 'agenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_engine_parts_a.png',
  information: 'New engine parts',
};

//B CLASS REPAIR PARTS

itemList['bfixbrake'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Brake Parts (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_brake_parts_b.png',
  information: 'New brake discs, pads, calipers, hubs & accessories',
};

itemList['bfixaxle'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Axle Parts (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_axle_parts_b.png',
  information: 'New axle components',
};

itemList['bfixradiator'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Radiator Parts (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cooling_parts_b.png',
  information: 'New radiator and cooling parts',
};

itemList['bfixclutch'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Clutch Parts (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_clutch_parts_b.png',
  information: 'New clutch disc and pressure plate',
};

itemList['bfixtransmission'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Transmission Parts (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_transmission_parts_b.png',
  information: 'New gear sets, shafts, converters and clutch packs',
};

itemList['bfixelectronics'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Vehicle Electronics (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_electronic_parts_b.png',
  information: 'Various vehicle electrical components',
};

itemList['bfixinjector'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Fuel Injectors (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fuel_injectors_b.png',
  information: 'New fuel injectors',
};

itemList['bfixtire'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Tire Repair Kit (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_tire_kit_b.png',
  information: 'For swapping and repairing worn or damaged tires',
};

itemList['bfixbody'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Body Panels (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_body_panels_b.png',
  information: 'New vehicle body panels',
};

itemList['bfixengine'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Engine Parts (B)',
  craft: [[
    { itemid: 'bgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_engine_parts_b.png',
  information: 'New engine parts',
};

//C CLASS REPAIR PARTS

itemList['cfixbrake'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Brake Parts (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_brake_parts_c.png',
  information: 'New brake discs, pads, calipers, hubs & accessories',
};

itemList['cfixaxle'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Axle Parts (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_axle_parts_c.png',
  information: 'New axle components',
};

itemList['cfixradiator'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Radiator Parts (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cooling_parts_c.png',
  information: 'New radiator and cooling parts',
};

itemList['cfixclutch'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Clutch Parts (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_clutch_parts_c.png',
  information: 'New clutch disc and pressure plate',
};

itemList['cfixtransmission'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Transmission Parts (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_transmission_parts_c.png',
  information: 'New gear sets, shafts, converters and clutch packs',
};

itemList['cfixelectronics'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Vehicle Electronics (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_electronic_parts_c.png',
  information: 'Various vehicle electrical components',
};

itemList['cfixinjector'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Fuel Injectors (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fuel_injectors_c.png',
  information: 'New fuel injectors',
};

itemList['cfixtire'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Tire Repair Kit (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_tire_kit_c.png',
  information: 'For swapping and repairing worn or damaged tires',
};

itemList['cfixbody'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Body Panels (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_body_panels_c.png',
  information: 'New vehicle body panels',
};

itemList['cfixengine'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Engine Parts (C)',
  craft: [[
    { itemid: 'cgenericmechanicpart', amount: 3 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_engine_parts_c.png',
  information: 'New engine parts',
};

//D CLASS REPAIR PARTS
itemList['dfixbrake'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Brake Parts (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_brake_parts_d.png',
  information: 'New brake discs, pads, calipers, hubs & accessories',
};

itemList['dfixaxle'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Axle Parts (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_axle_parts_d.png',
  information: 'New axle components',
};

itemList['dfixradiator'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Radiator Parts (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cooling_parts_d.png',
  information: 'New radiator and cooling parts',
};

itemList['dfixclutch'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Clutch Parts (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_clutch_parts_d.png',
  information: 'New clutch disc and pressure plate',
};

itemList['dfixtransmission'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Transmission Parts (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_transmission_parts_d.png',
  information: 'New gear sets, shafts, converters and clutch packs',
};

itemList['dfixelectronics'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Vehicle Electronics (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_electronic_parts_d.png',
  information: 'Various vehicle electrical components',
};

itemList['dfixinjector'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Fuel Injectors (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fuel_injectors_d.png',
  information: 'New fuel injectors',
};

itemList['dfixtire'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Tire Repair Kit (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_tire_kit_d.png',
  information: 'For swapping and repairing worn or damaged tires',
};

itemList['dfixbody'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Body Panels (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_body_panels_d.png',
  information: 'New vehicle body panels',
};

itemList['dfixengine'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Engine Parts (D)',
  craft: [[
    { itemid: 'dgenericmechanicpart', amount: 2 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_engine_parts_d.png',
  information: 'New engine parts',
};

//M CLASS REPAIR PARTS
itemList['mfixbrake'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Brake Parts (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_brake_parts_m.png',
  information: 'New brake discs, pads, calipers, hubs & accessories',
};

itemList['mfixaxle'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Axle Parts (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_axle_parts_m.png',
  information: 'New axle components',
};

itemList['mfixradiator'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Radiator Parts (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 5 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_cooling_parts_m.png',
  information: 'New radiator and cooling parts',
};

itemList['mfixclutch'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Clutch Parts (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_clutch_parts_m.png',
  information: 'New clutch disc and pressure plate',
};

itemList['mfixtransmission'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Transmission Parts (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_transmission_parts_m.png',
  information: 'New gear sets, shafts, converters and clutch packs',
};

itemList['mfixelectronics'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Vehicle Electronics (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_electronic_parts_m.png',
  information: 'Various vehicle electrical components',
};

itemList['mfixinjector'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Fuel Injectors (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_fuel_injectors_m.png',
  information: 'New fuel injectors',
};

itemList['mfixtire'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Tire Repair Kit (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_tire_kit_m.png',
  information: 'For swapping and repairing worn or damaged tires',
};

itemList['mfixbody'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Body Panels (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_body_panels_m.png',
  information: 'New vehicle body panels',
};

itemList['mfixengine'] = {
  fullyDegrades: true,
  decayrate: 2,
  displayname: 'Engine Parts (M)',
  craft: [[
    { itemid: 'mgenericmechanicpart', amount: 4 },
  ]],
  price: 10,
  weight: 1,
  nonStack: false,
  model: '',
  image: 'np_engine_parts_m.png',
  information: 'New engine parts',
};

/*

  VEHICLES END

*/