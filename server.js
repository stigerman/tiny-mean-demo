var express		 = require('express')
 app 				= express(),
bodyParser = require('body-parser'),
 mongoose = require('mongoose'),
  meetupsController = require('./server/controllers/meetupController.js')

mongoose.connect('mongodb://localhost:27017/mean-demo');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));





app.get('/', function (req, res){
	res.sendFile(__dirname + '/client/views/index.html');

});

app.use('/js/', express.static(__dirname + '/client/js'));

app.get('/api/meetups', meetupsController.list);

app.post('/api/meetups', meetupsController.create);



app.listen(3000,function(){
	console.log('Im listening.....');
})
