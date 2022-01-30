const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');

const reactionsSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 50,
            minlength: 4,
            default: 'Unnamed reaction',
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timeStamp).format('MMM Do, YYYY [at] hh:mm a'),
        },
    }

)
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
            virtuals: true,
        }
    }
);

const User = model('User', userSchema);

module.exports = User;
