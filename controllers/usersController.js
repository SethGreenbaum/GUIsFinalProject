const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.body)
      .populate(
        {path: "posts", model: db.Post}
        )
      .populate(
        {path: "messages", model: db.Message}
        )
      .populate(
        {path: "linklikes", model: db.Linklike}
        )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .populate(
        {path: "posts", model: db.Post}
        )
      .populate(
        {path: "messages", model: db.Message}
        )
      .populate(
        {path: "linklikes", model: db.LinkLike}
        )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
