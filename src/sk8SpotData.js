export const mockAPISkateSpots = [
  {
    id: 1,
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
        description: "guards were chill",
      },
      hazards: "some big cracks",
      public: false,
    },
    images: ["https://3.bp.blogspot.com/-6wKDdxzO8AI/WBjzlwaP6dI/AAAAAAAABnY/Vh3Y4pTrQE0jh7WFpTpIjdULQhljrp9ywCEw/s1600/04%2BJoe.PNG"]
  },
  {
    id: 2,
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
        description: null,
      },
      hazards: "small pebbles or chunks of pucks in the rink",
      public: true,
    },
    images: ["https://3.bp.blogspot.com/-6wKDdxzO8AI/WBjzlwaP6dI/AAAAAAAABnY/Vh3Y4pTrQE0jh7WFpTpIjdULQhljrp9ywCEw/s1600/04%2BJoe.PNG"]
  },
  {
    id: 3,
    title: "Big stair drop",
    description: "15 stair drop with good landing",
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
        has: false,
        description: null,
      },
      hazards: "landing runs right into a busy street",
      public: true,
    },
    images: ["https://3.bp.blogspot.com/-6wKDdxzO8AI/WBjzlwaP6dI/AAAAAAAABnY/Vh3Y4pTrQE0jh7WFpTpIjdULQhljrp9ywCEw/s1600/04%2BJoe.PNG"]
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
        description: null,
      },
      hazards: "scooter kids",
      public: true,
    },
    images: ["https://3.bp.blogspot.com/-6wKDdxzO8AI/WBjzlwaP6dI/AAAAAAAABnY/Vh3Y4pTrQE0jh7WFpTpIjdULQhljrp9ywCEw/s1600/04%2BJoe.PNG"]
  },
];
