let router = require('express').Router();
let TaskModel = require('../models/task');

router.get('/', (req, res) => {


  // res.send('task responding');
});

router.post('/', (req, res) => {
  console.log(req.body);

  let task = new TaskModel(req.body);

  task.save()
    .then(doc => {
      console.log(doc)
    })
    .catch(err => {
      console.error(err)
    });

  res.send("Task added");
});

module.exports = router;