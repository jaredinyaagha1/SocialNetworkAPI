const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 50,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: /.+\@.+\..+/,
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Friends',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const User = model('User', userSchema);

module.exports = User;
