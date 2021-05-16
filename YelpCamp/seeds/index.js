const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: '604e4dae964f902b5b799c03',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ad ipsa totam voluptatum necessitatibus praesentium quos officia voluptatem? Dolorem porro perferendis officiis vero nostrum corrupti beatae tempore maxime odio! Perspiciatis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repudiandae nemo id officiis? Inventore a amet culpa, tempore quidem reprehenderit animi. Tenetur ex sapiente aperiam quos sit, ratione voluptatibus debitis!',
      price,
      geometry: {
        type: 'Point',
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url: 'https://res.cloudinary.com/justprix/image/upload/v1620604486/YelpCamp/xaza2rd8px2ypcmzaoel.jpg',
          filename: 'YelpCamp/xaza2rd8px2ypcmzaoel',
        },
        {
          url: 'https://res.cloudinary.com/justprix/image/upload/v1620604485/YelpCamp/cdyk2kckaza1kbyn3ole.jpg',
          filename: 'YelpCamp/cdyk2kckaza1kbyn3ole',
        },
        {
          url: 'https://res.cloudinary.com/justprix/image/upload/v1620604486/YelpCamp/jakymcbspvhqeqfdsump.jpg',
          filename: 'YelpCamp/jakymcbspvhqeqfdsump',
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
