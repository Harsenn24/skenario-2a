const express = require("express");
const Create = require("../controller/create_todo");
const Read = require("../controller/read_todo");
const ReadById = require("../controller/read_by_id_todo");
const Update = require("../controller/update_todo");
const DeleteData = require("../controller/delete_todo");
const router = express.Router();

router.post("/todo", Create.todo);
router.get("/todo", Read.todo);
router.get("/todo/:id", ReadById.todo );
router.put("/todo/:id", Update.todo);
router.delete("/todo/:id", DeleteData.todo);

module.exports = router;