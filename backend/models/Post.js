const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title for your post.']
    },
    caption: {
        type: String,
        required: [true, 'Please add a caption to your post.']
    },
    imgUrl: {
        type: String,
        required: true
    },
    cloudinaryId: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    user: {
        type: String,
        required 
    }
},
    { timestamps: true, }
)

module.exports = mongoose.model('Post', PostSchema)