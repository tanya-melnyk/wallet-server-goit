const express = require('express');
const app = express();
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// costs

const costsPath = './src/db/costs/all-costs.json';

const cost = {
  // list: function(req, res) {
  //   res.send(costsList);
  // },

  byID: function(req, res) {
    const id = req.params.id;
    let answerStatus = 'success';

    fs.readFile(costsPath, (err, data) => {
      if (err) {
        return console.error(err);
      }

      const costsList = JSON.parse(data.toString());
      const costByID = costsList.find(cost => cost.id === Number(id));

      if (!costByID) {
        answerStatus = 'no cost with id ' + id;
      }

      const response = {
        status: answerStatus,
        costs: [costByID],
      };

      res.send(response);
    });
  },

  byCategory: function(req, res) {
    const category = req.query.category;

    fs.readFile(costsPath, (err, data) => {
      if (err) {
        return console.error(err);
      }

      const costsList = JSON.parse(data.toString());

      if (!category) {
        return res.send(costsList);
      }

      const costsByCategory = costsList.filter(cost =>
        cost.categories.includes(category),
      );

      let answerStatus = 'success';

      if (!costsByCategory.length) {
        answerStatus = 'no costs in category ' + category;
      }

      const response = {
        status: answerStatus,
        costs: costsByCategory,
      };

      res.send(response);
    });
  },
};

// app.get('/costs', cost.list);
app.get('/costs/:id', cost.byID);
app.get('/costs', cost.byCategory);

app.listen(PORT, () => {
  console.log('server is running on ' + PORT);
});
