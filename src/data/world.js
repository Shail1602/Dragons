export const eras = {
  got: {
    key: 'got',
    title: 'Game of Thrones',
    subtitle: 'Winter is Coming',
    accent: '#8cc7ff',
    video: '/video/one.mp4',
    heroImage: '/images/one.jpg',
    quote: 'When you play the game of thrones, you win or you die.',
    intro: 'A frozen kingdom of honor, betrayal, alliances, war, dragons and destiny across Westeros.',
    navCta: 'Explore Westeros',
    houses: ['Stark','Lannister','Targaryen','Baratheon','Tyrell','Greyjoy','Martell','Arryn'],
    characters: [
      {name:'Jon Snow', house:'Stark / Targaryen', status:'Alive', role:'King in the North', image:'/images/one.jpg', quote:'The shield that guards the realms of men.', tags:['The Wall','Winterfell','Long Night']},
      {name:'Daenerys Targaryen', house:'Targaryen', status:'Dead', role:'Mother of Dragons', image:'/images/two.jpg', quote:'I will take what is mine with fire and blood.', tags:['Dragonstone','Drogon','King\'s Landing']},
      {name:'Tyrion Lannister', house:'Lannister', status:'Alive', role:'Hand of the King', image:'/images/three.png', quote:'I drink and I know things.', tags:['Strategy','King\'s Landing','Dragonstone']},
      {name:'Arya Stark', house:'Stark', status:'Alive', role:'Faceless Assassin', image:'/images/five.jpg', quote:'Not today.', tags:['Braavos','Winterfell','Night King']},
      {name:'Cersei Lannister', house:'Lannister', status:'Dead', role:'Queen of the Seven Kingdoms', image:'/images/six.jpg', quote:'Power is power.', tags:['Red Keep','Lannister','Wildfire']},
      {name:'Sansa Stark', house:'Stark', status:'Alive', role:'Queen in the North', image:'/images/four.webp', quote:'The North remembers.', tags:['Winterfell','Politics','Stark']}
    ],
    timeline: [
      ['Aegon\'s Conquest','The Targaryen dynasty begins after dragons bend Westeros to one throne.'],
      ['Robert\'s Rebellion','A kingdom breaks when Stark, Baratheon and Arryn rise against the crown.'],
      ['Ned Stark Arrives','Honor enters the capital and discovers a secret too dangerous to survive.'],
      ['The Red Wedding','The North is betrayed; the war changes in a single night.'],
      ['Hardhome','The real enemy reveals its scale beyond politics and crowns.'],
      ['Battle of the Bastards','Winterfell is reclaimed in one of the bloodiest battles of the age.'],
      ['The Long Night','The living unite against the Night King and the army of the dead.'],
      ['The Iron Throne','A final firestorm ends one queen\'s dream and reshapes the realm.']
    ],
    mapPoints: [
      {name:'Winterfell', x:38, y:20, type:'Castle', desc:'Seat of House Stark and heart of the North.'},
      {name:'The Wall', x:43, y:8, type:'Frontier', desc:'Ancient ice barrier guarding the realm.'},
      {name:'King\'s Landing', x:56, y:64, type:'Capital', desc:'The crown city and seat of the Iron Throne.'},
      {name:'Dragonstone', x:65, y:59, type:'Island', desc:'Volcanic Targaryen stronghold.'},
      {name:'Casterly Rock', x:31, y:60, type:'Castle', desc:'Home of House Lannister.'},
      {name:'Highgarden', x:42, y:76, type:'Castle', desc:'Seat of House Tyrell.'},
      {name:'Dorne', x:58, y:91, type:'Region', desc:'The desert kingdom of House Martell.'}
    ]
  },
  hotd: {
    key: 'hotd',
    title: 'House of the Dragon',
    subtitle: 'Fire Will Reign',
    accent: '#ff493b',
    video: '/video/hotd.mp4',
    heroImage: '/images/uploads/hotd-ensemble.jpg',
    quote: 'We are one blood. We are dragons.',
    intro: 'A royal succession crisis becomes a civil war of fire, blood, dragons and broken inheritance.',
    navCta: 'Enter Dragonstone',
    houses: ['Targaryen','Hightower','Velaryon','Strong','Cole','Lannister','Baratheon','Arryn'],
    characters: [
      {name:'Rhaenyra Targaryen', house:'Targaryen', status:'Claimant', role:'The Realm\'s Delight', image:'/images/uploads/hotd-ensemble.jpg', quote:'I will not be made to choose between my brother and my throne.', tags:['Syrax','Dragonstone','Black Queen']},
      {name:'Daemon Targaryen', house:'Targaryen', status:'Prince', role:'Rogue Prince', image:'/images/uploads/dragon-sunset.jpg', quote:'Dreams didn\'t make us kings. Dragons did.', tags:['Caraxes','War','Valyrian']},
      {name:'Alicent Hightower', house:'Hightower', status:'Queen', role:'Green Queen', image:'/images/uploads/hotd-poster.jpg', quote:'Where is duty? Where is sacrifice?', tags:['Oldtown','Aegon II','Green Council']},
      {name:'Aemond Targaryen', house:'Targaryen', status:'Prince', role:'Rider of Vhagar', image:'/images/uploads/dragon-flight.jpg', quote:'I may have lost an eye, but I gained a dragon.', tags:['Vhagar','Storm\'s End','God\'s Eye']},
      {name:'Corlys Velaryon', house:'Velaryon', status:'Sea Snake', role:'Lord of the Tides', image:'/images/uploads/hotd-ensemble.jpg', quote:'History does not remember blood. It remembers names.', tags:['Driftmark','Fleet','Legacy']},
      {name:'Rhaenys Targaryen', house:'Targaryen / Velaryon', status:'Queen Who Never Was', role:'Rider of Meleys', image:'/images/uploads/hotd-poster.jpg', quote:'Men would sooner put the realm to the torch than see a woman ascend.', tags:['Meleys','Driftmark','Red Queen']}
    ],
    dragons: [
      {name:'Syrax', rider:'Rhaenyra', image:'/images/uploads/dragon-sunset.jpg'},
      {name:'Caraxes', rider:'Daemon', image:'/images/uploads/hotd-dragon-eye.jpg'},
      {name:'Vhagar', rider:'Aemond', image:'/images/uploads/dragon-flight.jpg'},
      {name:'Meleys', rider:'Rhaenys', image:'/images/uploads/hotd-poster.jpg'},
      {name:'Sunfyre', rider:'Aegon II', image:'/images/uploads/hotd-logo.webp'},
      {name:'Vermithor', rider:'Hugh Hammer', image:'/images/uploads/dragon-sunset.jpg'}
    ],
    timeline: [
      ['Old Valyria','Dragonlords rise in the east before the Doom changes the world.'],
      ['Great Council of 101 AC','The realm chooses Viserys over Rhaenys, setting a dangerous precedent.'],
      ['Rhaenyra Named Heir','Viserys defies tradition and names his daughter heir to the Iron Throne.'],
      ['The Green Council','Aegon II is crowned in secrecy after Viserys dies.'],
      ['Storm\'s End','A dragon chase turns succession into open bloodshed.'],
      ['Blood and Cheese','Revenge enters the war and the realm crosses a line.'],
      ['Rook\'s Rest','Dragons are used openly in battle with devastating cost.'],
      ['Dance of the Dragons','House Targaryen burns itself from within.']
    ],
    mapPoints: [
      {name:'Dragonstone', x:63, y:60, type:'Targaryen Seat', desc:'Rhaenyra\'s volcanic fortress.'},
      {name:'King\'s Landing', x:54, y:61, type:'Capital', desc:'The Iron Throne and the Green Council.'},
      {name:'Driftmark', x:69, y:66, type:'Island', desc:'Home of House Velaryon and the royal fleet.'},
      {name:'Harrenhal', x:50, y:45, type:'Fortress', desc:'A cursed castle central to the war.'},
      {name:'Storm\'s End', x:66, y:76, type:'Castle', desc:'Where a dragon chase changes everything.'},
      {name:'Oldtown', x:35, y:86, type:'City', desc:'Seat of House Hightower.'},
      {name:'The God\'s Eye', x:52, y:49, type:'Lake', desc:'A legendary dragon duel location.'}
    ]
  }
};

export const globalSearch = Object.values(eras).flatMap(era => [
  ...era.characters.map(x => ({...x, category:'Character', era: era.title})),
  ...era.timeline.map(x => ({name:x[0], role:x[1], category:'Timeline', era: era.title})),
  ...era.mapPoints.map(x => ({name:x.name, role:x.desc, category:'Map', era: era.title}))
]);
