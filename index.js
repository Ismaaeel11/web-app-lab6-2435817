//create cars api using express
const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000; 
app.use(express.json());
const path = require('path');
app.use(express.static(__dirname));
const cars = require('./cars.json');

//get all cars
app.get('https://ismaaeelscarsLot.azurewebsites.net/cars', (req, res) => {
    res.json(cars);
});

//get car by id
app.get('https://ismaaeelscarsLot.azurewebsites.net/cars/:id', (req, res) => {
    const id = req.params.id;
    const car = cars.find(car => car.id === id);
    res.json(car);
});

//update car
app.put('https://ismaaeelscarsLot.azurewebsites.net/cars/:id', (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const index = cars.findIndex(car => car.id === id);
    cars[index] = updatedCar;
    res.json(updatedCar);
});

//delete car
app.delete('https://ismaaeelscarsLot.azurewebsites.net/cars/:id', (req, res) => {
    const id = req.params.id;
    const index = cars.findIndex(car => car.id === id);
    cars.splice(index, 1);
    res.json({ message: `Car with id ${id} deleted` });
});

//add car
app.post('https://ismaaeelscarsLot.azurewebsites.net/cars', (req, res) => {
    console.log(req);
    const newCar = req.body;
    console.log(newCar);
    cars.push(newCar);
    res.json(newCar);
});

//start app at localhost:3001
app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
});

