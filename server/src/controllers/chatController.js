import { getChatCompletion } from "../services/groqService.js";

export async function handleChatMessage(req, res, next) {
  try {
    const { message, history } = req.body;
    const reply = await getChatCompletion({ message, history });

    res.status(200).json({
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch (err) {
    next(err);
  }
}
