const express=require("express");
const trabajoSchema=require("../models/trabajo");

const router=express.Router();

//crear trabajo
router.post('/trabajos', (req,res)=>{
    const trabajo= trabajoSchema(req.body);
    trabajo
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//obtener todos los registros
router.get('/trabajos', (req,res)=>{
    trabajoSchema
    .find()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//obtner un registro
router.get('/trabajos/:id', (req,res)=>{
    const {id}=req.params;
    trabajoSchema
    .findById(id)
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//actualizar trabajo
router.put('/trabajos/:id', (req, res) => {
    const { id } = req.params;

    // Verifica si la solicitud tiene datos para actualizar
    if (!req.body) {
        return res.status(400).json({ message: 'Los datos para actualizar no están presentes.' });
    }

    // Utiliza el método findByIdAndUpdate de Mongoose para actualizar el trabajo
    trabajoSchema.findByIdAndUpdate(id, req.body, { new: true })
        .then(updatedTrabajo => {
            if (!updatedTrabajo) {
                return res.status(404).json({ message: 'Trabajo no encontrado.' });
            }
            res.json(updatedTrabajo);
        })
        .catch(error => res.status(500).json({ message: error.message }));
});

//borrar trabajos
router.delete('/trabajos/:id', (req, res) => {
    const { id } = req.params;
    trabajoSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports=router;