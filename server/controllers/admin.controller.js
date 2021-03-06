const User = require('../models/user');

exports.getAllUsers = function(req,res,next){
    console.log("GET ALL USERS INITIATED");

    User.find()
    .then(function(allUsers){
      res.send({payload:allUsers})
    }).catch(function(err){
      res.send("The user profile lookup failed");
    });
  };

exports.removeUser = function(req,res,next){
    console.log("THIS IS THE ADMIN CONTROLLER");
    console.log(req.body.id);
    User.findByIdAndRemove({_id: req.body.id}, function (err, existingUser) {
        if (err) { return next(err) }
        
        // If a Itin with _id does not exist, return an error
        if (!existingUser) {
          return res.status(422).send({ error: 'User was not found in Database.' })
        }
      })
      
}