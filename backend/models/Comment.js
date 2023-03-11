const mongoose = require('mongoose');
const { Schema } = mongoose;
const CommentsSchema = new Schema({
    comment:{
        type: String
      
    }

});
module.exports = mongoose.model('comment', CommentsSchema);