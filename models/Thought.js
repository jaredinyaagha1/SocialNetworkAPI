const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');

// const reactionsSchema = new Schema(
//     {
//         reactionId: {
//             type: Schema.Types.ObjectId,
//             default: () => new Types.ObjectId(),
//         },
//         reactionBody: {
//             type: String,
//             required: true,
//             maxlength: 50,
//             minlength: 4,
//             default: 'Unnamed reaction',
//         },
//         username: {
//             type: String,
//             required: true,
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now().toString(),
//             get: formatTime,
//         },
//     }

// )
// Schema to create Student model
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 50,
            trim: true
        },
        createdAt: {
            type: String,
            unique: true,
            required: true,
            match: /.+\@.+\..+/,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionsSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

const User = model('User', userSchema);

module.exports = User;
