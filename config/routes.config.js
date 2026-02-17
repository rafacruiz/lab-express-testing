import { Router } from "express";
import * as movies from "../controllers/movie.controllers.js";

const router = Router();

router.get("/movies", movies.list);
router.post("/movies", movies.create);
router.get("/movies/:id", movies.detail);
router.patch("/movies/:id", movies.update);
router.delete("/movies/:id", movies.remove);

export default router;
