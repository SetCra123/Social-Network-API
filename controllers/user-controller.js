const { User } = require('../models/User');

module.exports = {
 // Get all users
    async getUsers(req, res) {
      try {
        const userData = await User.find().select("-__v");
        res.json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // Get a single user
    async getSingleUser(req, res) {
      try {
        const userData = await User.findOne({ _id: req.params.userId })
          .select('-__v')
          .populate('friends')
          .populate('thoughts');
  
        if (!userData) {
          return res.status(404).json({ message: 'No user with that ID' });
        }
  
        res.json(userData);
      } catch (err) {
        res.status(500).json(err);
      }
    },

    // create a new user
  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  
  // Add a new friend to a user's friend list
  async addFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userID },
        { $addToSet: { friends: req.params.friendID } }, // Add to set ensures no duplicates
        { new: true }
      )
      .populate('friends');

      if (!userData) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeFriend(req, res) {
    try {
      const userData = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } }, // Pull removes the friend from the array
        { new: true }
      ).populate('friends');

      if (!userData) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
  },



};
