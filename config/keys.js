// keys based on the environment logic

if (process.env.NODE_ENV === 'production') {
  // production keys
  module.exports = require('./prod');
} else {
  // dev keys
  module.exports = require('./dev');
}
