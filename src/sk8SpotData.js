export const mockAPISkateSpots = [
  {
    id: 1,
    difficulty: 1,
    title: "Old church",
    description:
      "Old church with lots of skateable things. Just be respectful and don't go on Sundays duh",
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
        description: "some fine cracks, small pebbles can be deathly",
      },
      {
        type: "Rails",
        has: true,
        condition: 3,
        description: "about 10ft long section near entrance ramp",
      },
      {
        type: "Stairs",
        has: true,
        condition: 5,
        description: "10 stairs front of building - short runway but good landing",
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
      "Awesome spot if you need a big open flat area. Open skating rink, basketball court",
    location: {
      lat: 39.8155,
      lng: -105.0726,
    },
    features: [
      {
        type: "Curbs",
        has: true,
        condition: 2,
        description: "Getting old and chunky, but a parking lot full of them",
      },
      {
        type: "Flats",
        has: true,
        condition: 5,
        description: "A whole skating rink and basketball court. Be sure to clean up puck chips or you're going to get floored",
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
        description: "Not a skate park, but a nice park",
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
    description: "Huge 25 stair drop with good landing",
    location: {
      lat: 39.816,
      lng: -105.065,
    },
    features: [
      { type: "Curbs", has: false, condition: null, description: null },
      { type: "Flats", has: false, condition: null, description: null },
      { type: "Rails", has: true, condition: 1, description: "Rails in good condition, but they aren't usable unless you're really good, really stupid, really brave, or any combo of those" },
      {
        type: "Stairs",
        has: true,
        condition: 4,
        description: "Big 25 stair drop with good runway. Security is...diligent",
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
    description: "Colorado's best skatepark. Lots of features. Maybe a little cramped, but geeze it's cool. Big bowls, hills, etc.",
    location: {
      lat: 39.82663239233444,
      lng: -105.14309411715244,
    },
    features: [
      {
        type: "Curbs",
        has: true,
        condition: 5,
        description: "Ledges everywhere for your boardsliding needs",
      },
      {
        type: "Flats",
        has: true,
        condition: 5,
        description: "Lots, and quite clean with no debris",
      },
      {
        type: "Rails",
        has: true,
        condition: 5,
        description: "A couple rails interspersed throughout",
      },
      {
        type: "Stairs",
        has: true,
        condition: 4,
        description: "Small drops all over",
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
    description: "Try on Sundays. Nice and easy. Amazing when it's not busy. Was an incredible ride down a longboard during the COVID shutdown",
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
        description: "",
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
        description: "Awesome. Gentle, long slope. Cops might stop you or they might not. Lots of luck during the shutdowns or non-busy hours. Sundays used to be reliable",
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
    images: ["https://cache-graphicslib.viator.com/graphicslib/page-images/742x525/159210_Viator_Shutterstock_119788.jpg", "https://i.redd.it/f76cll0aufny.jpg"]
  },
  {
    id: 424,
    difficulty: 5,
    title: "Denver Skatepark",
    description: "Boasting 60,000 square feet of skateable, concrete terrain, the park challenges boarders, bladers, and bikers of all levels (bring your own gear - no rentals available.) Pegs are not allowed on bicycles. Admission is free and the park is open seven days a week.",
    location: {
      lat: 39.7596647443845, 
      lng:  -105.00274160515092,
    },
    features: [
      {
        type: "Curbs",
        has: true,
        condition: 5,
        description: "Ledges galore all well maintained",
      },
      {
        type: "Flats",
        has: true,
        condition: 5,
        description: "Plenty of space",
      },
      {
        type: "Rails",
        has: true,
        condition: 5,
        description: "Strategically placed where it makes sense (along stairs into a bowl)",
      },
      {
        type: "Stairs",
        has: true,
        condition: 4,
        description: "Many short flights to practice landing",
      },
      {
        type: "Hills",
        has: true,
        condition: 5,
        description: "Fun hills all over the place",
      },
      {
        type: "Parks",
        has: true,
        condition: 5,
        description: "One of the nation's top 10 skate parks",
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
    images: ["https://img1.10bestmedia.com/Images/Photos/316562/p-maxresdefault_55_660x440.jpg"]
  },
];
