import express from 'express';
import { adminAuth, adminDb } from '../../firebaseAdmin.js';

const router = express.Router();

// Middleware de autenticação
const authenticateAdmin = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Modo desenvolvimento: bypass de autenticação
  if (process.env.NODE_ENV === 'development') {
    console.warn('⚠️  Modo desenvolvimento - autenticação desativada');
    return next();
  }
  
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  const token = authHeader.split(' ')[1];
  
  try {
    const { uid } = await adminAuth.verifyIdToken(token);
    const userDoc = await adminDb.collection('admins').doc(uid).get();
    
    if (!userDoc.exists) {
      return res.status(403).json({ error: 'Acesso negado' });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

// TODO: Provis
router.get('/auth', async (req, res) => {
  try {
    const userId = process.env.ADMIN_USER_ID;
    
    const token = await adminAuth.createCustomToken(userId);
    res.json({ token });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint protegido
router.get('/', async (req, res) => {
  try {
    const snapshot = await adminDb.collection('leads').get();
    const leads = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar leads' });
  }
});

export default router;