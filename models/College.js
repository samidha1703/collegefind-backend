const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
  id:          { type: Number, required: true, unique: true },
  name:        { type: String, required: true },
  abbr:        { type: String },
  location:    { type: String },
  state:       { type: String },
  type:        { type: String },
  rating:      { type: String },
  fees:        { type: Number },
  feesDisplay: { type: String },
  exam:        { type: String },
  rank:        { type: String },
  established: { type: String },
  type2:       { type: String },
  affiliation: { type: String },
  about:       { type: String },
  courses:     [String],
  facilities:  [String],
  phone:       { type: String },
  email:       { type: String },
  website:     { type: String }
});

module.exports = mongoose.model('College', collegeSchema);