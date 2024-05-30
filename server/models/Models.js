const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://designcoast501:Moshimoro7877@cluster0.jbbfxwt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'diary',
})
.then(() => console.log('Connected to Mongo DB'))
.catch((err) => console.log(err));