require('dotenv').config();

const GMAIL_EMAIL = process.env.GMAIL_EMAIL;
const GMAIL_PASS = process.env.GMAIL_PASS;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_MONGODB_URI
  : process.env.NODE_ENV === 'development'
    ? process.env.DEV_MONGODB_URI
    : process.env.MONGODB_URI;
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;

module.exports = {
  GMAIL_EMAIL,
  GMAIL_PASS,
  JWT_SECRET,
  MONGODB_URI,
  PORT,
  SECRET
};
