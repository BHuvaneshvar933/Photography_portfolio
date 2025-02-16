// seed.js
require('dotenv').config(); // Load variables from .env
const mongoose = require('mongoose');
const PortfolioItem = require('./models/PortfolioItem');

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log('Connected to MongoDB for seeding');

    // Clear existing data
    await PortfolioItem.deleteMany({});

    // Array of portfolio items
    const items = [
      // First Column
      {
        category: 'Travel',
        imageUrl:
          'https://images.unsplash.com/photo-1667093060577-02f07eb01585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1750&q=80',
        altText: 'a man standing on a beach next to the ocean',
      },
      {
        category: 'Travel',
        imageUrl:
          'https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        altText: 'a person standing in front of a rock formation',
      },
      {
        category: 'Animals',
        imageUrl:
          'https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80',
        altText: 'a cat laying on top of a sidewalk next to the ocean',
      },
      {
        category: 'Nature',
        imageUrl:
          'https://images.unsplash.com/photo-1676978647680-0e60a584c5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        altText: 'a snow covered mountain with trees on the side',
      },
      // Second Column
      {
        category: 'Nature',
        imageUrl:
          'https://images.unsplash.com/photo-1675910568522-c187fd74d5b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        altText: 'a branch of a plant floating in a body of water',
      },
      {
        category: 'Nature',
        imageUrl:
          'https://images.unsplash.com/photo-1675971074488-351394caf6aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        altText: 'a blue sky with a lot of red and orange clouds',
      },
      {
        category: 'Travel',
        imageUrl:
          'https://images.unsplash.com/photo-1655908932015-7650b401e2f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        altText: 'a view of the ocean from the top of a hill',
      },
      {
        category: 'Animals',
        imageUrl:
          'https://images.unsplash.com/photo-1675189729507-b90d7cb6c592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1816&q=80',
        altText: 'a pheasant flying in the sky with its wings spread',
      },
      // Third Column
      {
        category: 'Architecture',
        imageUrl:
          'https://images.unsplash.com/photo-1654018869756-d08407972836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2918&q=80',
        altText: 'a statue of a man next to a statue of a woman',
      },
      {
        category: 'Urban',
        imageUrl:
          'https://images.unsplash.com/photo-1677075610184-57d21d023e5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
        altText: 'a city street with tall buildings in the background',
      },
      {
        category: 'Urban',
        imageUrl:
          'https://images.unsplash.com/photo-1558102400-72da9fdbecae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80',
        altText: '25 de abril bridge spanning over Tagus river',
      },
      {
        category: 'Architecture',
        imageUrl:
          'https://images.unsplash.com/photo-1510673825466-302bc330ab95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        altText: 'a lot of lanterns floating in the air at night',
      },
      // Fourth Column
      {
        category: 'Art',
        imageUrl:
          'https://images.unsplash.com/photo-1642415390616-2ac6727ac550?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        altText: 'a statue of a headless angel',
      },
      {
        category: 'Architecture',
        imageUrl:
          'https://images.unsplash.com/photo-1551346072-8ba2706b0f36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2052&q=80',
        altText: 'Monument to the Discoveries viewed from top to bottom',
      },
      {
        category: 'Architecture',
        imageUrl:
          'https://images.unsplash.com/photo-1624385690664-38a3af477cd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        altText:
          'a group of people walking along the museum of art, architecture and technology of lisbon next to the Tagus river',
      },
      {
        category: 'Urban',
        imageUrl:
          'https://images.pexels.com/photos/242124/pexels-photo-242124.jpeg?auto=compress&cs=tinysrgb&w=600&q=80',
        altText: 'a city street with tall buildings in the background',
      },
    ];

    // Insert the items into the database
    await PortfolioItem.insertMany(items);
    console.log('Database seeded successfully');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Seeding error:', err);
  });
