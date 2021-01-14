export const skateSpots = [
  {
    id: 1,
    title: "Old church",
    description: 'some description,some fine cracks, small pebbles can kill,stairs front of school good lan',
    location: {
      lat: 39.82597138963928, 
      lng: -105.08527641669075
    },
    features: {
      curbs: {has: true, description: ['pristine', 'some wax, recently poured']},
      flats: {has: true, description: ['good', 'some fine cracks, small pebbles can kill']},
      rails: {has: true, description: ['good', 'about 10ft long']},
      stairs: {has: true, description: ['pristine', '10 stairs front of school good landing']},
      security: {has: true, description: ['chill', 'guards were chill']},
      public: false,
      hazards: 'low'
    }
  },
  {
    id: 2,
    title: "Secrest Park",
    description: 'some description,some fine cracks, small pebbles can kill,stairs front of school good lan',
    location: {
      lat: 39.8155,
      lng: -105.0726,
    },
    features: {
      curbs: {has: true, description: ['OK', 'getting old and chunky']},
      flats: {has: true, description: ['Pristine', 'a whole skating rink']},
      rails: {has: false, description: []},
      stairs: {has: false, description: []},
      security: {has: false, description: []},
      public: true,
      hazards: 'low'
    }
  },
  {
    id: 3,
    title: "Scott's butt",    
    description: '15 stair drop with good landing',
    location: {
      lat: 39.816,
      lng: -105.065,
    },
    features: {
      curbs: {has: false, description: []},
      flats: {has: false, description: []},
      rails: {has: false, description: []},
      stairs: {has: true, description: ['Good', 'big 15 stairs with good runway and landing in lot']},
      security: {has: false, description: []},
      public: true,
      hazards: 'high'
    }
  },
  {
    id: 4,
    title: "Arvada SkatePark",
    description: "Arvada's incredible skatepark",
    location: {
      lat: 39.82663239233444,
      lng: -105.14309411715244,
    },
    features: {
      curbs: {has: true, description: []},
      flats: {has: true, description: []},
      rails: {has: true, description: []},
      stairs: {has: true, description: []},
      security: {has: true, description: []},
      public: true,
      hazards: 'low'
    }
  },
];
