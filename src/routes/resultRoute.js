const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// Calculate scores for a specific category and total score
router.get('/:categoryId', async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Calculate total score for the given category
    const categoryAnswers = await prisma.answer.findMany({
      where: { question: { categoryId } },
      include: { question: true },
    });

    const categoryScore = categoryAnswers.reduce((sum, answer) => sum + answer.score, 0);

    // Calculate total score for all categories
    const allAnswers = await prisma.answer.findMany({});
    const totalScore = allAnswers.reduce((sum, answer) => sum + answer.score, 0);

    res.json({
      categoryId,
      categoryScore,
      totalScore,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/categories/scores', async (req, res) => {
  try {
    // Fetch all categories with their questions and answers
    const categories = await prisma.category.findMany({
      include: {
        questions: {
          include: {
            answers: true, // Include the answers for each question
          },
        },
      },
    });
 
    // Calculate the total score for each category
    const categoryScores = categories.map(category => {
      const totalScore = category.questions.reduce((acc, question) => {
        // Sum the scores of all answers in the question
        const questionScore = question.answers.reduce((sum, answer) => {
          return sum + answer.score; // Add the score from each answer
        }, 0);
        return acc + questionScore; // Add to the total score for the category
      }, 0);
 
      return {
        categoryId: category.id,
        categoryName: category.name,
        score: totalScore,
      };
    });
 
    // Send the response with the scores
    res.json(categoryScores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch category scores' });
  }
});

router.get('/scores', async (req, res) => {
  try {
    // Fetch all categories with their questions and answers
    const categories = await prisma.category.findMany({
      include: {
        questions: {
          include: {
            answers: true,
          },
        },
      },
    });

    // Calculate scores for each category
    const categoryScores = categories.map((category) => {
      const categoryScore = category.questions.reduce(
        (sum, question) =>
          sum +
          question.answers.reduce((answerSum, answer) => answerSum + answer.score, 0),
        0
      );

      return {
        categoryId: category.id,
        categoryName: category.name,
        categoryScore,
      };
    });

    // Calculate total score across all categories
    const totalScore = categoryScores.reduce((sum, category) => sum + category.categoryScore, 0);

    res.json({
      categories: categoryScores,
      totalScore,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
