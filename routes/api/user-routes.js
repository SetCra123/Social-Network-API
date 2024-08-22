const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// /api/users
router.route('/')
 .get(getUsers)
 .post(createUser);

// /api/users/:userId
router.route('/:userId')
 .get(getSingleUser);


router.route('/users/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;