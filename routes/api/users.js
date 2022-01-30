const router = require('express').Router();
const {
  createUser,
  createSecondUser,
  createThirdUser,
  findAllUsers,
  findUserbyID,
  updateUser,
  deleteUser,
} = require('../../controllers/userController.js');

// /api/courses
router.route('/').get(getUsers).post(createUser);

// /api/courses/:courseId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;