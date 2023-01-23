const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'Please add your comment.']
    },
    user: {
        type: String,
        required 
    },
    post: {
        type: String,
        required 
    }
},
    { timestamps: true, }
)

module.exports = mongoose.model('Comment', CommentSchema)