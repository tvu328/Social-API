const router = require('express').Router();


// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiUsers = require('./api/user-routes');
const apiThoughts = require('./api/thought-routes');

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use('/api', apiUsers);
router.use('/api', apiThoughts);


router.use((req, res) => {
  res.status(404).send('<h1>404 Error!</h1>');
});

module.exports = router;