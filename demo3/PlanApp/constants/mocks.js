const category = [
  {
    id: 'plants',
    name: 'Plants',
    tags: ['product', 'inspirations'],
    count: 147,
    image: require('../assets/images/plants.png'),
  },
  {
    id: 'seeds',
    name: 'seeds',
    tags: ['product', 'shop'],
    count: 16,
    image: require('../assets/images/seeds.png'),
  },
  {
    id: 'flower',
    name: 'Flower',
    tags: ['product', 'inspirations'],
    count: 68,
    image: require('../assets/images/flower.png'),
  },
  {
    id: 'sprayers',
    name: 'Sprayers',
    tags: ['product', 'shop'],
    count: 17,
    image: require('../assets/images/sprayers.png'),
  },
  {
    id: 'pots',
    name: 'Pots',
    tags: ['product', 'shop'],
    count: 147,
    image: require('../assets/images/pots.png'),
  },
  {
    id: 'fertilizers',
    name: 'Fertilizers',
    tags: ['product', 'shop'],
    count: 147,
    image: require('../assets/images/fertilizers.png'),
  },
];

const products = [
  {
    id: 1,
    name: '16 best plants ....',
    descriptions:
      'React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using npx, which ships with Node.js. With npx react-native <command>, the current stable version of the CLI will be downloaded and executed at the time the command is run.',
    tags: ['Interior', '27m²', 'Ideas'],
    gallery: [
      require('../assets/images/explore_1.png'),
      require('../assets/images/explore_2.png'),
      require('../assets/images/explore_3.png'),
      //
      require('../assets/images/explore_1.png'),
      require('../assets/images/explore_2.png'),
      require('../assets/images/explore_3.png'),
    ],
  },
];

const explore = [
  //image
  require('../assets/images/explore_1.png'),
  require('../assets/images/explore_2.png'),
  require('../assets/images/explore_3.png'),
  require('../assets/images/explore_4.png'),
  require('../assets/images/explore_5.png'),
  require('../assets/images/explore_6.png'),
];

const profile = {
  username: 'react-ui-kit',
  location: 'Europe',
  email: 'contact@react-ui-kit.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

export {category, explore, products, profile};
