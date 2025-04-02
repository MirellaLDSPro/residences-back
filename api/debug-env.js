import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
    console.log(process.env.TESTE_KEY?.replaceAll("|||", '\\n'));
    res.json({
      keyExists: !!process.env.TESTE_KEY,
      firstChars: process.env.TESTE_KEY?.replaceAll("|||", '\\n')
    });
  }
);

export default router;