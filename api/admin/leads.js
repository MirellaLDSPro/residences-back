import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { adminDb } from '../../firebaseAdmin.js';

const router = express.Router();

// Middleware de autenticação
// const authenticateAdmin = async (req, res, next) => {
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
//   res.setHeader(
//     'Access-Control-Allow-Headers', 
//     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, authorization')

//   const authHeader = req.headers.authorization;
//   // Modo desenvolvimento: bypass de autenticação
//   // if (process.env.NODE_ENV === 'development') {
//   //   console.warn('⚠️  Modo desenvolvimento - autenticação desativada');
//   //   return next();
//   // }
//   // console.log("token:", authHeader);
//   if (!authHeader?.startsWith('Bearer ')) {
//     return res.status(401).json({ error: 'Token não fornecido' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const { uid } = await adminAuth.verifyIdToken(token);
//     const snapshot = await adminDb.collection('admins').get();
//     const users = snapshot.docs.map(doc => ({
//       id: doc.id,
//       ...doc.data()
//     }));
    
//     const user = users.find(user => user.id === uid);
//     if (!user) {
//       return res.status(403).json({ error: 'Acesso negado' });
//     }
//     console.log(user);

//     next();
//   } catch (error) {
//     console.log("🚨 Erro ao verificar token find user:", error);
//     console.log("🚨 Erro ao verificar token find user:", authHeader);
//     res.status(401).json({ error: 'Token inválido' });
//   }
// };

// TODO: Provis
// router.get('/auth', async (req, res) => {
//   try {
//     const userId = process.env.ADMIN_USER_ID;

//     const token = await adminAuth.createCustomToken(userId);
//     res.json({ token });

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

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
    console.log("🚨 Erro ao verificar token rota:", error);
    res.status(500).json({ error: 'Erro ao buscar leads' });
  }
});

// async function fetchData() {
//   try {
//     const snapshot = await adminDb.collection("leads").get();
//     snapshot.forEach((doc) => {
//       console.log(`${doc.id} =>`, doc.data());
//     });
//   } catch (error) {
//     console.error("Erro ao buscar dados:", error);
//   }
// }

// fetchData();

export default router;