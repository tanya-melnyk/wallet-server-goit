const fs = require('fs');

const costsPath = './src/db/costs/all-costs.json';

const getCostsById = (req, res) => {
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

    res.status(200).json(response);
  });
};

module.exports = getCostsById;
