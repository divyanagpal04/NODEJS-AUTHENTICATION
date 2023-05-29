const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://dishanagpal6:divya1234@cluster0.mu8lgei.mongodb.net/NODEJSAUTHENTICATION?retryWrites=true&w=majority")
  .then(() => console.log('Connected to Database'))
  .catch(err => console.log('Error connecting to database', err));
