let router = require('express').Router();
let TaskModel = require('../models/task');

router.get('/', (req, res) => {
  TaskModel.find({})
    .then(docs => {
      res.send(docs);
      console.log(docs);
    })
    .catch(err => {
      console.error(err);
    })

  // res.send('task responding');
});

router.post('/', (req, res) => {
  console.log(req.body);

  let task = new TaskModel(req.body);

  task.save()
    .then(doc => {
      console.log(doc);
      res.send(doc._id);
    })
    .catch(err => {
      console.error(err);
    });

});

module.exports = router;