const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => console.log("MongoDB connecté"))
	.catch(err => console.log(err));

const forumRoutes = require('./routes/forum');
app.use('/api/forum', forumRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5060;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
