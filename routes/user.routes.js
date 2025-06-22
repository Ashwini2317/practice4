const { getRole, addRole, updateRole, deleteRole } = require("../controller/user.controller")

const router = require("express").Router()
router
    .get("/", getRole)
    .post("/add", addRole)
    .put("/update/:id", updateRole)
    .delete("/delete/:id", deleteRole)

module.exports = router