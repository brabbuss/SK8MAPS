

export const tddMockData = {
  mockNewSk8Map: {
    id: '12345',
    location: {
      lat: 33,
      lng: 33
    }
  },
  mockSpotAllData: {
    id: 1,
    difficulty: 1,
    title: "Mock Spot",
    description:
      "Mock description",
    location: {
      lat: 0,
      lng: 0,
    },
    features: [
      {
        type: "Curbs",
        has: true,
        condition: 5,
        description: "Mock description Curbs",
      },
      {
        type: "Flats",
        has: true,
        condition: 4,
        description: "Mock description Flats",
      },
      {
        type: "Rails",
        has: true,
        condition: 3,
        description: "Mock description Rails",
      },
      {
        type: "Stairs",
        has: true,
        condition: 2,
        description: "Mock description Stairs",
      },
    ],
    safety: {
      security: {
        has: true,
        cheese_level: 1,
        description: "Mock description security",
      },
      hazards: "Mock description hazards",
      public: true,
    },
    images: [
      "https://3.bp.blogspot.com/-6wKDdxzO8AI/WBjzlwaP6dI/AAAAAAAABnY/Vh3Y4pTrQE0jh7WFpTpIjdULQhljrp9ywCEw/s1600/04%2BJoe.PNG",
    ],
  },
  mockSpotMissingData: {
    id: 33,
    difficulty: 1,
    title: "Mock Spot",
    description:
      "Mock description",
    location: {
      lat: 0,
      lng: 0,
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
        condition: 4,
        description: "",
      },
      {
        type: "Rails",
        has: false,
        condition: 3,
        description: "",
      },
      {
        type: "Stairs",
        has: false,
        condition: 2,
        description: "",
      },
    ],
    safety: {
      security: {
        has: false,
        cheese_level: 1,
        description: "",
      },
      hazards: "",
      public: false,
    },
    images: [],
  },
  mockAPIData: [
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
      images: [
        "https://3.bp.blogspot.com/-6wKDdxzO8AI/WBjzlwaP6dI/AAAAAAAABnY/Vh3Y4pTrQE0jh7WFpTpIjdULQhljrp9ywCEw/s1600/04%2BJoe.PNG",
      ],
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
      images: [
        "https://cdn3.sportngin.com/attachments/photo/bd38-135042238/file1-4_copy.jpg",
      ],
    },
    {
      id: 3,
      difficulty: 1,
      title: "Big 25stair drop",
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
      ],
      safety: {
        security: {
          has: true,
          cheese_level: 5,
          description: "these guys will kick you right out",
        },
        hazards: "diligent security",
        public: true,
      },
      images: ["https://i.ytimg.com/vi/4GFIXrybfKg/maxresdefault.jpg"],
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
      images: [
        "https://www.northwestskater.com/arvada7915b8412.jpg",
        "https://lh3.googleusercontent.com/proxy/Sc8-Dwj4mCltRmivJKm2m14rw4Sa7iZEKHeYZ6lg7XQ-vX2RSA_0uZOqc-Y8dJwvpNExg4ZzuKE1Nbkr_UxWUZrpyECGFX9__a09xltGljHnxxYZAXCtEXAETUfJiUvwnAru4KeO7YE",
        "https://i.redd.it/f76cll0aufny.jpg",
      ],
    },
  ],
};

export const tddMockState = {
  selectedSpot: tddMockData.mockSpotAllData,
  storedSpots: tddMockData.mockAPIData,
  userMaps: tddMockData.mockAPIData,
  appView: "add-spot",
  newSk8Map: tddMockData.mockNewSk8Map,
  marker: tddMockData.mockSpotAllData
};