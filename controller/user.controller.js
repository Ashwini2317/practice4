const User = require("../model/User")

const getRole = async (req, res) => {
    const result = await User.find()
    res.json({ message: "get role", result })
}
const addRole = async (req, res) => {
    await User.create(req.body)
    res.json({ message: "add role" })
}
const updateRole = async (req, res) => {
    const { id } = req.params
    await User.findByIdAndUpdate(id, req.body)
    res.json({ message: "update role" })
}
const deleteRole = async (req, res) => {
    const { id } = req.params
    await User.findByIdAndDelete(id)
    res.json({ message: "delete role" })
}
module.exports = { addRole, deleteRole, getRole, updateRole }