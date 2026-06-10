const env = require('./config/env');
const app = require('./app');
const connectDB = require('./config/db');

connectDB();


app.listen(env.port, () => {
  console.log(`Server is running on port ${env.port}`);
});