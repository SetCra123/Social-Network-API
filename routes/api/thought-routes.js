const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
  } = require('../controllers/thought-controller');


// Thought routes
router.route('/thoughts')
  .get(getThoughts)
  .post(createThought);

router.route('/thoughts/:thoughtId')
  .get(getSingleThought);



module.exports = router;