import espress from 'express';

// Import todas as rotas 

import authRoutes from './auth.routes.js';
import animesRoutes from './animeRoutes.js';
import personagensRoutes from './personagemRoutes.js';
import collectionRoutes from './collectionRoutes.js';
import cardRoutes from './cardRoutes.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = espress.Router();

//Rotas públicas
router.use('/auth', authRoutes);

//Rotas protegidas
router.use(authMiddleware);

router.use('/animes', animesRoutes);

router.use('/personagens', personagensRoutes);

router.use('/collections', collectionRoutes);

router.use('/cards', cardRoutes);

export default router;