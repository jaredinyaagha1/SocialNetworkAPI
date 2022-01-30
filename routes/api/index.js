const router = require('express').Router();
const usersRoutes = require('./users');
const thoughtsRoutes = require('./thoughts');
const friendsRoutes = require('./friends');
const reactionsRoutes = require('./reactions');

router.use('/users', usersRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/friends', friendsRoutes);
router.use('/reactions', reactionsRoutes);

module.exports = router;
