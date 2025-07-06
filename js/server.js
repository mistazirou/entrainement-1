const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques (CSS, JS, images, vidéos, etc.)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route d'accueil (page principale)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

// Routes pour les autres pages
app.get('/abonnement', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'abonnement.html'));
});

app.get('/connexion', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'connexion.html'));
});

app.get('/inscrit', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'inscrit.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'register.html'));
});

// Gestion des routes non trouvées (404)
app.use((req, res) => {
  res.status(404).send('Page non trouvée');
});

// Démarrage du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});