const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./users");
const likeRoutes = require("./likes");
const messageRoutes = require("./messages");
// const loginRoutes = require("./login")

router.use("/posts", postRoutes);
router.use("/users", userRoutes);
router.use("/likes", likeRoutes);
router.use("/messages", messageRoutes);
// router.use("/login", loginRoutes);
// router.use("/logout", logoutRoutes);
// router.use("/", )
module.exports = router;
