const express = require('express');
const corsMiddleware = require('cors');
const costsRouter = require('./src/costs/costsRoutes');
const usersRouter = require('./src/users/usersRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(corsMiddleware());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

// Define Routes
app.get('/', (req, res) => res.send('API Running'));
app.use('/costs', costsRouter);
app.use('/users', usersRouter);

// Error Handling
app.use((req, res, next) => {
  res.status(404).json({ err: '404' });
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ err: '500' });
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log(`Server is running on port ${PORT}`);
});
