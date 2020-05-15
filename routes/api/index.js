const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
const likeRoutes = require("./likes");

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/likes", likeRoutes);

module.exports = router;
