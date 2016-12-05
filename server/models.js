const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

/************
:: SCHEMAS ::
************/

const planetSchema = new Schema({
  name: String,
  youtube: String,
  createdAt: Date
});

const Planet = mongoose.model('Planet', planetSchema);

module.exports = {
  'Planet': Planet
};
