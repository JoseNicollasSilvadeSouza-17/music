import { Router } from "express";
import MusicController from "../controllers/music.controller.js";
import { uploadPoster } from "../middlewares/uploadPoster.js";
import { uploadClip } from "../middlewares/uploadClip.js";
import { uploadAudio } from "../middlewares/uploadAudio.js";

const router = Router();

const musicController = new MusicController();

router.get("/", musicController.getSongs);

router.get("/count", musicController.getSongsCount);

router.get("/:id", musicController.getMusic);

router.post("/", musicController.postMusic);

router.post("/:id/upload/poster", uploadPoster,  musicController.postMusicUploadPoster);

router.post("/:id/upload/audio", uploadAudio,  musicController.postMusicUploadAudio);

router.post("/:id/upload/clip", uploadClip,  musicController.postMusicUploadClip);

router.put("/:id", musicController.putMusic);

router.patch("/:id", musicController.patchMusic);

router.delete("/", musicController.deleteSongs);

router.delete("/:id", musicController.deleteMusic);

export default router;
