const router = require('express').Router();
let Queue = require('../models/queue.model');

router.route('/:type').get((req, res) => {
    Queue.findOne({type: req.params.type})
      .then(queue => res.json(queue))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/update/:type').post((req, res) => {
    Queue.findOne({type: req.params.type})
        .then(queue => {
            let newQueue = queue.queue;
            let entry = 
            {
                name: req.body.name,
                topic: req.body.topic,
                link: req.body.link
            }

            newQueue.push(entry);
            queue.queue = newQueue;
            
            queue.save()
                .then(() => res.json("Queue updated"))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;