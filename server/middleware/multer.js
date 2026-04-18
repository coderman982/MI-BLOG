import multer from "multer";

// Use memoryStorage — disk storage fails on Vercel (read-only filesystem)
const upload = multer({ storage: multer.memoryStorage() });

export default upload;