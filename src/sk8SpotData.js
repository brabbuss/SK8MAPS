export const skateSpots = [
  {
    id: 1,
    title: "Old church",
    description: 'some description,some fine cracks, small pebbles can kill,stairs front of school good lan',
    location: {
      lat: 39.82597138963928, 
      lng: -105.08527641669075
    },
    features: [
      {curbs: {has: true, condition: 5, description: 'some wax, recently poured'}},
      {flats: {has: true, condition: 3, description: 'some fine cracks, small pebbles can kill'}},
      {rails: {has: true, condition: 3, description: 'about 10ft long'}},
      {stairs: {has: true, condition: 5, description: '10 stairs front of school good landing'}},
      {security: {has: true, condition: 1, description: 'guards were chill'}},
      {hazards: ['none']},
      {public: false}
    ]
  },
  {
    id: 2,
    title: "Secrest Park",
    description: 'some description,some fine cracks, small pebbles can kill,stairs front of school good lan',
    location: {
      lat: 39.8155,
      lng: -105.0726,
    },
    features: [
      {curbs: {has: true, condition: 2, description: 'getting old and chunky'}},
      {flats: {has: true, condition: 5, description: 'a whole skating rink'}},
      {rails: {has: false, condition: null, description: null}},
      {stairs: {has: false, condition: null, description: null}},
      {security: {has: false, condition: null, description: null}},
      {hazards: ['small pebbles or chunks of pucks in the rink']},
      {public: false}
    ]
  },
  {
    id: 3,
    title: "Big stair drop",    
    description: '15 stair drop with good landing',
    location: {
      lat: 39.816,
      lng: -105.065,
    },
    features: [
      {curbs: {has: false, condition: null, description: null}},
      {flats: {has: false, condition: null, description: null}},
      {rails: {has: false, condition: null, description: null}},
      {stairs: {has: true, condition: 4, description: "big 15 stairs with good runway"}},
      {security: {has: false, condition: null, description: null}},
      {hazards: ['landing runs right into a busy street']},
      {public: true}
    ]
  },
  {
    id: 4,
    title: "Arvada SkatePark",
    description: "Colorado's best fakkin skatepark",
    location: {
      lat: 39.82663239233444,
      lng: -105.14309411715244,
    },
    features: [
      {curbs: {has: true, condition: 5, description: "it's all glorious"}},
      {flats: {has: true, condition: 5, description: "it's all glorious"}},
      {rails: {has: true, condition: 5, description: "it's all glorious"}},
      {stairs: {has: true, condition: 4, description: "small drops all over"}},
      {security: {has: false, condition: null, description: null}},
      {hazards: ['scooter kids']},
      {public: true}
    ]
  },
];
