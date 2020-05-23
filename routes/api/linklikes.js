const router = require("express").Router();
const linklikesController = require("../../controllers/linklikesController");

router.route("/")
  .get(linklikesController.findAll)
  .get(linklikesController.findByUser)
  .post(linklikesController.create);

router
  .route("/:id")
  .get(linklikesController.findById)
  .put(linklikesController.update)
  .delete(linklikesController.remove);


module.exports = router;