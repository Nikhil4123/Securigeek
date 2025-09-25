const mongoose = require('mongoose');

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://nikhilsarak612w_db_user:43AdtCjOf9VA0xsV@cluster0.58ijtmc.mongodb.net/issue_tracker?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
  mongoose.connection.close();
});