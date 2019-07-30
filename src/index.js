const corsMiddleware = require('cors');
const express = require('express');
const costsRoutes = require('./costs/costsRoutes');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(corsMiddleware());

app.use('/costs', costsRoutes);

app.listen(PORT, () => {
  console.log('server is running on ' + PORT);
});
