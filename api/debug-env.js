import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
      keyExists: !!process.env.FIREBASE_ADMIN_PRIVATE_KEY,
      firstChars: process.env.FIREBASE_ADMIN_PRIVATE_KEY?.slice(0, 1000) + '...'
    });
  }
);

export default router;