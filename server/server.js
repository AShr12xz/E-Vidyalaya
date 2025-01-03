const mongoose = require('mongoose');
const app = require('./app');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);
mongoose.connect(
    DB
).then(() => console.log('DB connection successful!'));
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})