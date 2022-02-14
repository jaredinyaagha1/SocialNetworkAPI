const { timeStamp } = require('console');
const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            max_length: 240,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timeSetter,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reaction],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

function timeSetter(time) {
    let created = new Date(time)
    let formatted = created.toLocaleString("en-US")
    return formatted
}

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length;
    })



const User = model('User', userSchema);

module.exports = User;
