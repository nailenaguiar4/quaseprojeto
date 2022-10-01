const  express = require("express");
const Clientes = require('../models/Clientes')
const ClientesSchema = require('../models/Clientes');

const router = express.Router();

//create Clientes
router.post("/Clientes", (req, res) => {
    const clientes = ClientesSchema(req.body);
    clientes
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// get all Clientes
router.get("/Clientes", (req, res) => {
    ClientesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a Clientes
router.get("/Clientes/:id", (req, res) => {
    const { id } = req.params;
    ClientesSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a clientes
router.put("/Clientes/:id", (req, res) => {
    const { id } = req.params;
    const { name, cpf, email } = req.body;
    ClientesSchema
    .updateOne({ _id: id }, { $set: {Calificação, Marca, Stock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// delete a Clientes
router.delete("/Clientes/:id", (req, res) => {
    const { id } = req.params;
    ClientesSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

module.exports = router;