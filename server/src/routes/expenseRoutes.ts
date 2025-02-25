import { getExpensesByCategory } from './../controller/expenseController';
import { Router } from "express";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;
