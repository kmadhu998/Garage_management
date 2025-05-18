const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let vehicles = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020 },
    { id: 2, make: 'Honda', model: 'Civic', year: 2019 }
];

let nextId = vehicles.length + 1;  // This sets nextId to 3

app.get('/api/vehicles', (req, res) => {
    res.json(vehicles);
});

app.post('/api/vehicles', (req, res) => {
    const newVehicle = { id: nextId++, ...req.body };  // Use incrementing ID
    vehicles.push(newVehicle);
    res.status(201).json(newVehicle);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
