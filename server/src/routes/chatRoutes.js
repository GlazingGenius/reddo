import { Router } from "express";
import { handleChatMessage } from "../controllers/chatController.js";
import { validateChatRequest } from "../middleware/validateChatRequest.js";
import { chatRateLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.post("/chat", chatRateLimiter, validateChatRequest, handleChatMessage);

export default router;
