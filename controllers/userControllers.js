const User = require('../models/User');
const Thoughts = require('../models/Thought');

module.exports = {
    // Get all users
    getUsers(req, res) {
        Users.find()
            .select('-__v')
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    // Get a user
    getSingleuser(req, res) {
        Users.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('thoughts')
            .populate('friends')
            .then((users) =>
                !users
                    ? res.status(404).json({ message: 'No users with that ID' })
                    : res.json(users)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Create a user
    createUser(req, res) {
        Users.create(req.body)
            .then((userData) => res.json(userData))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // Delete a user
    deleteUser(req, res) {
        Users.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No users with that ID' })
                    : Users.deleteMany({ _id: { $in: users.students } })
            )
            .then(() => res.json({ message: 'User has been deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    // Update a user
    updateUser(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No users with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No users with this id!' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));

    },
};
