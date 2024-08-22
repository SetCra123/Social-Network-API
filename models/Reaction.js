const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
      thoughtText:  {
        type: String,
        required: true, 
        unique: true,
        minLength: 1,
        maxLength: 280,
     },
      createdAt: {
        type: Date,
        default: Date.now,
        //getter method for timestamp on query? 
     },
      username: {
        type: String,
        required: true,
     },
      reactions: [reactionSchema],
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
    );


reactionSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
    });
      
      // Initialize our thought model
    const Reaction = model('reaction', reactionSchema);
      
      module.exports = Reaction;