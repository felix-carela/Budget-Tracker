const express = require("express");
const router = express.Router();
const budgetsCtrl = require("../controllers/budgets");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", budgetsCtrl.index);
router.get("/new", ensureLoggedIn, budgetsCtrl.new);
router.get("/:id", ensureLoggedIn, budgetsCtrl.show);
router.delete("/:id", ensureLoggedIn, budgetsCtrl.delete);
router.post("/", ensureLoggedIn, budgetsCtrl.create);
router.put("/:id", ensureLoggedIn, budgetsCtrl.update);
router.get("/:id/edit", ensureLoggedIn, budgetsCtrl.edit);

module.exports = router;
