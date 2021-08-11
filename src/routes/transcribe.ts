import { Router } from "express";
import { transcribe } from "../controllers/transcribe";

const router = Router();

router.post("/transcribe", transcribe);

export default router;
