const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// MongoDB connection
async function main() {
    try {
        await mongoose.connect('mongodb+srv://manojvelu2004:pZemOjEYtU9TWw2o@spice-canvas-react-app.gj4g9.mongodb.net/spice-canvas-react-app?retryWrites=true&w=majority&appName=spice-canvas-react-app');
        console.log("MongoDB connected successfully!");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}

main();

app.get('/', (req, res) => {
    res.send('Spice Canvas server is running!');
});

// Routes
const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoutes");

app.use('/api', ItemRoutes);
app.use('/api', CategoryRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
