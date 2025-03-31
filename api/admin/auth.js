import { getAuth } from 'firebase-admin/auth';

router.post('/admin-token', async (req, res) => {
  try {
    // Gera token para um UID específico (configure no Firebase Console)
    const token = await getAuth().createCustomToken('usuario-admin-teste');
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar token' });
  }
});