const express = require('express');
const {
  listBooks,
  addBook,
  modifyBook,
  removeBook,
} = require('../controllers/bookController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', listBooks);
router.post('/', authMiddleware, addBook);
router.patch('/:id', authMiddleware, modifyBook);
router.delete('/:id', authMiddleware, removeBook);

module.exports = router;
