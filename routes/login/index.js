const router = require("express").Router();
const loginRoutes = require("./login");

router.use("/login", loginRoutes);
router.use("/logout", loginRoutes);
router.use("/", loginRoutes)
module.exports = router;