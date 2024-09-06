import { Router } from "express";

import { criarPostagem} from "../Controllers/postagemController.js";

const router = Router()
router.post("/postagens", criarPostagem)


export default router;