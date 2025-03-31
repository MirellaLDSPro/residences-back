import express from 'express';
import { adminDb } from '../../firebaseAdmin.js';
import { getAuth } from 'firebase-admin/auth';

const router = express.Router();

router.get('/auth', async (req, res) => {
  try {
    // Gera token para um UID específico (configure no Firebase Console)
    const token = await getAuth().createCustomToken('usuario-admin-teste');
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar token' });
  }
});

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
    const { uid } = await admin.auth().verifyIdToken(token);
    const userDoc = await adminDb.collection('admins').doc(uid).get();
    
    if (!userDoc.exists) {
      return res.status(403).json({ error: 'Acesso negado' });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Token inválido' });
  }
};

// Endpoint protegido
router.get('/', authenticateAdmin, async (req, res) => {
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