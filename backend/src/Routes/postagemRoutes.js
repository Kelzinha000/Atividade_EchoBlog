import { Router } from "express";

import { criarPostagem,getTodosPostagens} from "../Controllers/postagemController.js";

const router = Router()
router.post("/postagens", criarPostagem)
router.get("/postagens", getTodosPostagens)


export default router;