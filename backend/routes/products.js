import express from "express";
const router = express.Router();
import ProductController from "../controllers/ProductController.js";
import * as authMiddlewares from '../middleware/authenticaction.js';
const { authentication } = authMiddlewares;
router.get('/', ProductController.getAll);
router.post('/', ProductController.insert);
router.patch('/:id', authentication, ProductController.update);
router.delete('/:id', ProductController.delete);

export default router;