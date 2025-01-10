const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Get all users
router.get('/', async (req, res) => {
    try {
      const categories = await prisma.category.findMany();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Get a single user by ID
// Get questions by category ID
router.get('/:categoryIds', async (req, res) => {
    try {
      const { categoryId } = req.params;
  
      const questions = await prisma.question.findMany({
        where: { categoryId },
        select: { text: true }, // Select only the `text` field
      });
  
      if (questions.length === 0) {
        return res.status(404).json({ error: 'No questions found for this category' });
      }
  
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = await prisma.user.create({
      data: { name, email },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});







router.post('/save-answers', async (req, res) => {
    try {
      const { answers } = req.body;
  
      if (!answers || !Array.isArray(answers)) {
        return res.status(400).json({ error: 'Invalid input: answers must be an array' });
      }
  
      // Prepare answers for saving
      const answerData = answers.map((answer) => ({
        questionId: answer.questionId,
        option: answer.option,
        score: answer.score, 
      }));
  
      // Save all answers in bulk
      const savedAnswers = await prisma.answer.createMany({
        data: answerData,
        skipDuplicates: true, // Avoid duplicate entries
      });
  
      res.status(201).json({ message: 'Answers saved successfully', savedAnswers });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });







// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;