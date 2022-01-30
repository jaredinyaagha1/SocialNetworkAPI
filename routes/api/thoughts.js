const router = require('express').Router();
const {
  createThought,
  deleteThought,
} = require('../../controllers/studentController');

// /api/students/:studentId/assignments
router.post('/:userId/reactions', createReactions);

// /api/students/:studentId/assignments/:assignmentId
router.delete('/:userId/reactions', deleteeReactions);

module.exports = router;
