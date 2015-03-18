/We export the module, and pass it to the 'Meetup' to be mapped to the database/


var mongoose = require('mongoose');

module.exports = mongoose.model('Meetup',{
	name: String
});
