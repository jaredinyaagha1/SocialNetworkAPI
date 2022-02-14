const { Schema } = require('mongoose');

const reactionsSchema = new Schema(
    {
        // reactionId: {
        //     type: Schema.Types.ObjectId,
        //     default: () => new Types.ObjectId(),
        // },
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
            default: Date.now().toString(),
            get: formatTime,
        },
    },
    {
        toJSON: {
            getters: true,
        }

    }

);

module.exports = reactionsSchema;