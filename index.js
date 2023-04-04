const app = require('./app');
const http = require('http');
const config = require('./utils/config');
const logger = require('./utils/logger');

//the app will be deployed on heroku so using http here will be safe
const server = http.createServer(app);

// use this when you don't want to use ngrok
server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

// use this when you want to use ngrok
// const ngrok = require('ngrok');
// const start = async () => {
//   server.listen(PORT || 3003, () => {
//     logger.info(`Server running on port ${PORT}`);
//   });

//   ngrok.connect({
//     proto : 'http',
//     addr : process.env.PORT,
//   }, (err) => {
//     if (err) {
//       console.error('Error while connecting Ngrok', err);
//       return new Error('Ngrok Failed');
//     }
//   });
// };
// start();
