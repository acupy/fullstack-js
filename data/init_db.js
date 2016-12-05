var mongoose = require('mongoose');
var assert = require('assert');
const Planet = require('../server/models').Planet;
const mongoUri = process.env.MONGOURI || 'localhost';
mongoose.connect(mongoUri + '/test');

data =  [
    {
      "name": "Mercury",
      "youtube": "https://www.youtube.com/watch?v=6KY-oB2i9lo",
      "createdAt": new Date()
    },
    {
      "name": "Venus",
      "youtube": "https://www.youtube.com/watch?v=TR-IWhZZDJY",
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
