var mongoose = require('mongoose');
var assert = require('assert');
const Planet = require('../server/models').Planet;
const mongoUri = process.env.MONGOURI || 'localhost';
mongoose.connect(mongoUri + '/planet-reactor');

data =  [
    {
      "name": "Mercury",
      "youtube": "https://www.youtube.com/embed/6KY-oB2i9lo",
      "createdAt": new Date()
    },
    {
      "name": "Venus",
      "youtube": "https://www.youtube.com/embed/TR-IWhZZDJY",
      "createdAt": new Date()
    },
    {
      "name": "Earth",
      "youtube": "https://www.youtube.com/embed/856TRQpgKJk",
      "createdAt": new Date()
    },
    {
      "name": "Mars",
      "youtube": "https://www.youtube.com/embed/NHcpKl8loTE",
      "createdAt": new Date()
    },
    {
      "name": "Jupiter",
      "youtube": "https://www.youtube.com/embed/s56pxa9lpvo",
      "createdAt": new Date()
    },
    {
      "name": "Saturn",
      "youtube": "https://www.youtube.com/embed/iy-F09FibuE",
      "createdAt": new Date()
    },
    {
      "name": "Uranus",
      "youtube": "https://www.youtube.com/embed/9pFs5PmIsLg",
      "createdAt": new Date()
    },
    {
      "name": "Neptune",
      "youtube": "https://www.youtube.com/embed/7wm8Uinm5OM",
      "createdAt": new Date()
    }
  ];

// Empty all documents from collection
Planet.remove({}, ()=>{});

// Bulk insert
Planet.collection.insertMany(data, function(err,r) {
    assert.equal(null, err);
    assert.equal(data.length, r.insertedCount);
    process.exit();
});

/*
Terrestrial planets
Mercury, Venus, Earth, Mars

Non-Terrestrial planets
Jupiter, Saturn, Uranus
*/
