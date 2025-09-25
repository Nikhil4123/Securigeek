const mongoose = require('mongoose');
const Issue = require('./models/Issue');

// MongoDB connection
const MONGODB_URI = 'mongodb+srv://nikhilsarak612w_db_user:43AdtCjOf9VA0xsV@cluster0.58ijtmc.mongodb.net/issue_tracker?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to MongoDB');
  
  // Clear existing data
  await Issue.deleteMany({});
  console.log('Cleared existing issues');
  
  // Sample data
  const sampleIssues = [
    {
      title: 'Fix login authentication bug',
      description: 'Users are unable to login with correct credentials. The authentication service is returning a 401 error.',
      status: 'open',
      priority: 'high',
      assignee: 'John Doe'
    },
    {
      title: 'Improve dashboard performance',
      description: 'Dashboard loading time is too slow. Need to optimize API calls and implement caching.',
      status: 'in-progress',
      priority: 'medium',
      assignee: 'Jane Smith'
    },
    {
      title: 'Update documentation for API endpoints',
      description: 'API documentation is outdated and missing several endpoints. Need to update with latest changes.',
      status: 'open',
      priority: 'low',
      assignee: 'Robert Johnson'
    },
    {
      title: 'Add dark mode to frontend',
      description: 'Users have requested a dark mode option for better viewing experience in low light conditions.',
      status: 'in-progress',
      priority: 'medium',
      assignee: 'Alice Brown'
    },
    {
      title: 'Fix mobile responsiveness issues',
      description: 'Several components are not displaying correctly on mobile devices. Need to adjust CSS media queries.',
      status: 'open',
      priority: 'high',
      assignee: 'Michael Wilson'
    },
    {
      title: 'Implement user password reset functionality',
      description: 'Users should be able to reset their passwords through email verification.',
      status: 'closed',
      priority: 'medium',
      assignee: 'Sarah Davis'
    },
    {
      title: 'Optimize database queries',
      description: 'Some database queries are taking too long to execute. Need to add indexes and optimize queries.',
      status: 'in-progress',
      priority: 'high',
      assignee: 'David Miller'
    },
    {
      title: 'Add unit tests for backend services',
      description: 'Increase code coverage by adding unit tests for all backend services and controllers.',
      status: 'open',
      priority: 'medium',
      assignee: 'Emily Taylor'
    },
    {
      title: 'Improve error handling in frontend',
      description: 'Frontend error messages are not descriptive enough. Need to implement better error handling.',
      status: 'closed',
      priority: 'low',
      assignee: 'James Anderson'
    },
    {
      title: 'Add export functionality for reports',
      description: 'Users should be able to export issue reports in CSV and PDF formats.',
      status: 'open',
      priority: 'medium',
      assignee: 'Patricia Thomas'
    }
  ];
  
  try {
    // Insert sample data
    await Issue.insertMany(sampleIssues);
    console.log('Sample issues inserted successfully');
    
    // Verify data
    const issues = await Issue.find();
    console.log(`Total issues in database: ${issues.length}`);
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting sample data:', error);
    mongoose.connection.close();
  }
});