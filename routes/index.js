const router = require('express').Router();
const apiRoutes = require('./api');

router.use('api', apiRoutes);
// // Routes for users
// router.use('/users', userRoutes);

// // Routes for thoughts (if you have them)
// router.use('/thoughts', thoughtRoutes);

router.use((_req, res) => res.send('Wrong route!'));

module.exports = router;