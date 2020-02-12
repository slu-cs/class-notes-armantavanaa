// Query the faculty database

const mongoose = require('mongoose');
const connect = require('./db');
const Professor = require('./schema');

connect(); // To the database

/* What documents are in the collection?
const query = Professor.find();
query.exec(function(error, professors) {
  if (error) console.error(error.stack);
  console.log(professors);
});
*/

const queries = [
  // what are names in alphabetic order?
  Professor.find().sort('name'),

  //who started most recently

  Professor.find().sort('.started').limit(1),

  // who started in 2002
  Professor.find().where('.started').equals(2003),

  //who teaches 362

  Professor.find().where('courses').in(362),

  //what are all the ranks?

  Professor.distinct('rank')


]
