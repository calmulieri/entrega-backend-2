import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../../data/products.json');

const router = Router();

router.get('/', async (req, res) => {
  let products = [];
  try {
    const data = await fs.readFile(DATA_PATH, 'utf-8');
    products = JSON.parse(data);
  } catch (e) {
    // si no existe, dejamos lista vacía
  }
  res.render('home', { title: 'Backend I – Entrega 2 (WIP)', products });
});

export default router;