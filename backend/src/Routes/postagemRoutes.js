import { Router } from "express";

import { criarPostagem, buscarPostagemPorId} from "../Controllers/postagemController.js";

const router = Router()
router.post("/postagens", criarPostagem)
router.get("/postagens/:id", buscarPostagemPorId)


export default router;