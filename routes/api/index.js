const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
const likeRoutes = require("./likes");
const messageRoutes = require("./messages")

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/likes", likeRoutes);
router.use("/messages", messageRoutes)

module.exports = router;
