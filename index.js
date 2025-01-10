const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;

app.use(express.json());

app.use(cors());
const corsOptions = {
  origin: 'http://localhost:3001', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

const questionsRoutes = require('./src/routes/questionroute');
const resultRoutes = require("./src/routes/resultRoute")
app.use('/api/category', questionsRoutes);
app.use('/api/results',resultRoutes)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
