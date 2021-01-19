export const mockAPISkateSpots = [
  {
    id: 1,
    difficulty: 1,
    title: "Old church",
    description:
      "some description,some fine cracks, small pebbles can kill,stairs front of school good lan",
    location: {
      lat: 39.82597138963928,
      lng: -105.08527641669075,
    },
    features: [
      {
        type: "Curbs",
        has: true,
        condition: 5,
        description: "some wax, recently poured",
      },
      {
        type: "Flats",
        has: true,
        condition: 3,
        description: "some fine cracks, small pebbles can kill",
      },
      {
        type: "Rails",
        has: true,
        condition: 3,
        description: "about 10ft long",
      },
      {
        type: "Stairs",
        has: true,
        condition: 5,
        description: "10 stairs front of school good landing",
      },
      {
        type: "Hills",
        has: false,
        condition: 5,
        description: "",
      },
      {
        type: "Parks",
        has: false,
        condition: 5,
        description: "",
      },
    ],
    safety: {
      security: {
        has: true,
        cheese_level: 1,
        description: "guards were chill",
      },
      hazards: "some big cracks",
      public: false,
    },
    images: ["https://3.bp.blogspot.com/-6wKDdxzO8AI/WBjzlwaP6dI/AAAAAAAABnY/Vh3Y4pTrQE0jh7WFpTpIjdULQhljrp9ywCEw/s1600/04%2BJoe.PNG"]
  },
  {
    id: 2,
    difficulty: 1,
    title: "Secrest Park",
    description:
      "some description,some fine cracks, small pebbles can kill,stairs front of school good lan",
    location: {
      lat: 39.8155,
      lng: -105.0726,
    },
    features: [
      {
        type: "Curbs",
        has: true,
        condition: 2,
        description: "getting old and chunky",
      },
      {
        type: "Flats",
        has: true,
        condition: 5,
        description: "a whole skating rink",
      },
      { type: "Rails", has: false, condition: null, description: null },
      { type: "Stairs", has: false, condition: null, description: null },
      {
        type: "Hills",
        has: false,
        condition: 5,
        description: "",
      },
      {
        type: "Parks",
        has: true,
        condition: 5,
        description: "not a skate park, but a nice park",
      },
    ],
    safety: {
      security: {
        has: false,
        cheese_level: 1,
        description: null,
      },
      hazards: "small pebbles or chunks of pucks in the rink",
      public: true,
    },
    images: ["https://cdn3.sportngin.com/attachments/photo/bd38-135042238/file1-4_copy.jpg"]
  },
  {
    id: 3,
    difficulty: 1,
    title: "Big 25 stair drop",
    description: "25 stair drop with good landing",
    location: {
      lat: 39.816,
      lng: -105.065,
    },
    features: [
      { type: "Curbs", has: false, condition: null, description: null },
      { type: "Flats", has: false, condition: null, description: null },
      { type: "Rails", has: false, condition: null, description: null },
      {
        type: "Stairs",
        has: true,
        condition: 4,
        description: "big 15 stairs with good runway",
      },
      {
        type: "Hills",
        has: false,
        condition: 5,
        description: "",
      },
      {
        type: "Parks",
        has: false,
        condition: 5,
        description: "",
      },
    ],
    safety: {
      security: {
        has: true,
        cheese_level: 5,
        description: 'these guys will kick you right out',
      },
      hazards: "diligent security",
      public: true,
    },
    images: ["https://i.ytimg.com/vi/4GFIXrybfKg/maxresdefault.jpg"]
  },
  {
    id: 4,
    difficulty: 1,
    title: "Arvada SkatePark",
    description: "Colorado's best fakkin skatepark",
    location: {
      lat: 39.82663239233444,
      lng: -105.14309411715244,
    },
    features: [
      {
        type: "Curbs",
        has: true,
        condition: 5,
        description: "it's all glorious",
      },
      {
        type: "Flats",
        has: true,
        condition: 5,
        description: "it's all glorious",
      },
      {
        type: "Rails",
        has: true,
        condition: 5,
        description: "it's all glorious",
      },
      {
        type: "Stairs",
        has: true,
        condition: 4,
        description: "small drops all over",
      },
      {
        type: "Hills",
        has: false,
        condition: 5,
        description: "",
      },
      {
        type: "Parks",
        has: true,
        condition: 5,
        description: "has everything you could want",
      },
    ],
    safety: {
      security: {
        has: false,
        cheese_level: 1,
        description: null,
      },
      hazards: "scooter kids",
      public: true,
    },
    images: ["https://www.northwestskater.com/arvada7915b8412.jpg", "https://lh3.googleusercontent.com/proxy/Sc8-Dwj4mCltRmivJKm2m14rw4Sa7iZEKHeYZ6lg7XQ-vX2RSA_0uZOqc-Y8dJwvpNExg4ZzuKE1Nbkr_UxWUZrpyECGFX9__a09xltGljHnxxYZAXCtEXAETUfJiUvwnAru4KeO7YE", "https://i.redd.it/f76cll0aufny.jpg"]
  },
  {
    id: 423,
    difficulty: 5,
    title: "16th St Hill Bomb",
    description: "Amazing when it's not busy - try during shutdown",
    location: {
      lat: 39.74183386800573, 
      lng: -104.98783430459216,
    },
    features: [
      {
        type: "Curbs",
        has: false,
        condition: 5,
        description: "",
      },
      {
        type: "Flats",
        has: false,
        condition: 5,
        description: "",
      },
      {
        type: "Rails",
        has: false,
        condition: 5,
        description: "DEATH BECKONS",
      },
      {
        type: "Stairs",
        has: false,
        condition: 4,
        description: "",
      },
      {
        type: "Hills",
        has: true,
        condition: 5,
        description: "",
      },
      {
        type: "Parks",
        has: false,
        condition: 5,
        description: "",
      },
    ],
    safety: {
      security: {
        has: false,
        cheese_level: 1,
        description: null,
      },
      hazards: "scooter kids",
      public: true,
    },
    images: ["https://www.northwestskater.com/arvada7915b8412.jpg", "https://lh3.googleusercontent.com/proxy/Sc8-Dwj4mCltRmivJKm2m14rw4Sa7iZEKHeYZ6lg7XQ-vX2RSA_0uZOqc-Y8dJwvpNExg4ZzuKE1Nbkr_UxWUZrpyECGFX9__a09xltGljHnxxYZAXCtEXAETUfJiUvwnAru4KeO7YE", "https://i.redd.it/f76cll0aufny.jpg"]
  },
];
