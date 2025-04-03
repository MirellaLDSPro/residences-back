import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    res.json({
      keyExists: !!process.env.TESTE_KEY,
      firstChars: process.env.TESTE_KEY?.replaceAll("|||", '\\n')
    });
  }
);

export default router;