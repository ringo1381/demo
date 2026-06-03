
import { Router } from "express";
const router = Router();


router.get('/', (req, res) => res.render('index.ejs',{'title':'Titulo del index web...',x:30}));
router.get('/about', (req, res) => res.render('about.ejs',{'title':'titulo del about'}));
router.get('/contact', (req, res) => res.render('contact.ejs',{'title':'titulo de los contactos...'}));

export default router;