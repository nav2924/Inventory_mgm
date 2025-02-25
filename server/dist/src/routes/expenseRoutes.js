"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expenseController_1 = require("./../controller/expenseController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", expenseController_1.getExpensesByCategory);
exports.default = router;
