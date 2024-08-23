const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
      },
      username: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        // getter method to format the timestamp (if needed)
      },
    },
    {
      toJSON: {
        getters: true, 
      },
      id: false, 
    }
  );
  

const thoughtSchema = new Schema(
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


thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
    });
      
      // Initialize our thought model
    const Thought = model('Thought', thoughtSchema);
      
      
    
module.exports = Thought;
      