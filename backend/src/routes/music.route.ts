import { Router } from "express";
import MusicController from "../controllers/music.controller.js";

const router = Router();

const musicController = new MusicController();

router.get("/", musicController.getSongs);

router.get("/count", musicController.getSongsCount);

router.get("/:id", musicController.getMusic);

router.post("/", musicController.postMusic);

router.put("/:id", musicController.putMusic);

router.patch("/:id", musicController.patchMusic);

router.delete("/", musicController.deleteSongs);

router.delete("/:id", musicController.deleteMusic);

export default router;
