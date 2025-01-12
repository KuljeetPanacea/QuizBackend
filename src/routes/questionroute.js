const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Get all users
router.get("/", async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/questions/total', async (req, res) => {
  try {
    const totalQuestions = await prisma.question.count();
 
    res.json({ totalQuestions });
  } catch (error) {
    console.error("Error fetching total questions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Get a single user by ID
// Get questions by category ID
router.get("/:categoryId", async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log(categoryId);

    const questions = await prisma.question.findMany({
      where: { categoryId },
      select: { text: true, id: true },
    });

    if (questions.length === 0) {
      return res
        .status(404)
        .json({ error: "No questions found for this category" });
    }

    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new user
router.post("/", async (req, res) => {
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

router.post("/save-answers", async (req, res) => {
  try {
    console.log(req.body);
    const { answers } = req.body;

    if (!answers || !Array.isArray(answers)) {
      return res
        .status(400)
        .json({ error: "Invalid input: answers must be an array" });
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
      skipDuplicates: true, 
    });

    res
      .status(201)
      .json({ message: "Answers saved successfully", savedAnswers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.delete('/delete', async (req, res) => {
  console.log("delete called")
  try {
    // Delete all answers using Prisma's deleteMany method
    const deletedAnswers = await prisma.answer.deleteMany();
    // Check if any answers were deleted
    if (deletedAnswers.count > 0) {
      res.json({
        message: `${deletedAnswers.count} answers were deleted successfully.`,
      });
    } else {
      res.status(404).json({ message: 'No answers found to delete.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete answers' });
  }
});


module.exports = router;
