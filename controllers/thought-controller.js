const Thought = require('../models/Thought');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
      try {
        const thoughts = await Thought.find();
        res.json(thoughts);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  
    // Get a single thought by ID
    async getSingleThought(req, res) {
      try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId });
  
        if (!thought) {
          return res.status(404).json({ message: 'No thought with that ID' });
        }
  
        res.json(thought);
      } catch (err) {
        res.status(500).json(err);
      }
    },

// Create a new thought and push the thought ID to the user's thoughts array
async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      const user = await User.findOneAndUpdate(
        { _id: req.body.userId }, // Assuming the userId is passed in the request body
        { $push: { thoughts: thought._id } }, // Push the thought ID to the user's thoughts array
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'Thought created, but no user found with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },



};  