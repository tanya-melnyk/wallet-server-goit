const fs = require('fs');

const costsPath = './src/db/costs/all-costs.json';

const getCostsByCategory = (req, res) => {
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
      answerStatus = `no costs in category "${category}"`;
    }

    const response = {
      status: answerStatus,
      costs: costsByCategory,
    };

    res.status(200).json(response);
  });
};

module.exports = getCostsByCategory;
