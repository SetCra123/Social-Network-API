const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
      reactionId:  {
        type: Schema.Types.ObjectId,
        default: Schema.Types.ObjectId, //new object ID?
     },
      reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280, 
     },
      username: {
        type: String,
        required: true,
     },
      createdAt: {
        type: Date,
        default: Date.now,
        //getter method to format timestamp
     },
      
    },
    // {
    //     toJSON: {
    //       virtuals: true,
    //     },
    //     id: false,
    //   }
    );


// reactionSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
//     });
      
 
// be used as the `reaction` field's subdocument schema in the `Thought` model.

// Initialize our thought model
    const Reaction = model('reaction', reactionSchema);
      
      module.exports = Reaction;