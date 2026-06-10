const express = require('express');
const admin = require('firebase-admin');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar análisis de JSON en las solicitudes
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname)));

// Inicializar Firebase Admin SDK con la cuenta de servicio guardada
const serviceAccount = require('./firebase-service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://quiniela-7fd9f-default-rtdb.firebaseio.com"
});

const db = admin.database();

// Obtener datos iniciales (Usuarios y Resultados Oficiales)
app.get('/api/data', async (req, res) => {
    try {
        const usersSnapshot = await db.ref('users').once('value');
        const resultsSnapshot = await db.ref('official_results').once('value');

        const users = usersSnapshot.val() || null;
        const officialResults = resultsSnapshot.val() || null;

        res.json({ users, officialResults });
    } catch (error) {
        console.error("Error al obtener datos de Firebase:", error);
        res.status(500).json({ error: "Error interno del servidor al obtener datos" });
    }
});

// Guardar/Actualizar la lista de usuarios completa
app.post('/api/users', async (req, res) => {
    try {
        const { users } = req.body;
        if (!users) {
            return res.status(400).json({ error: "Faltan los datos de usuarios" });
        }
        await db.ref('users').set(users);
        res.json({ success: true, message: "Usuarios guardados correctamente" });
    } catch (error) {
        console.error("Error al guardar usuarios en Firebase:", error);
        res.status(500).json({ error: "Error al guardar usuarios" });
    }
});

// Guardar/Actualizar resultados oficiales
app.post('/api/results', async (req, res) => {
    try {
        const { officialResults } = req.body;
        if (!officialResults) {
            return res.status(400).json({ error: "Faltan los datos de resultados oficiales" });
        }
        await db.ref('official_results').set(officialResults);
        res.json({ success: true, message: "Resultados oficiales guardados correctamente" });
    } catch (error) {
        console.error("Error al guardar resultados en Firebase:", error);
        res.status(500).json({ error: "Error al guardar resultados" });
    }
});

// Ruta fallback para el SPA (redirigir al index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor de la Quiniela IESA corriendo en http://localhost:${PORT}`);
});
