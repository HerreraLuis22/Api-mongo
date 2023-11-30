const mongoose=require("mongoose");

const usuarioCSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellidoPaterno: {
        type: String,
        required: true
    },
    apellidoMaterno: {
        type: String,
        required: true
    },
    fechaNacimiento: {
        type: Date,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    municipio: {
        type: String,
        required: true
    },
    curp: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    cv: {
        type: String,
        required: true
    }
    });

const categoriaSchema=mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    nombre:{
        type:String,
        required:true
    }
});

const usuarioPSchema=mongoose.Schema({
    fechaHora:{
        type:Date
    },
    mensajes: [
                {
                    numeroMensaje: {
                        type: Number
                    },
                    mensaje: {
                        type: String
                    },
                    idUsuario: {
                        type: Number
                    },
                    fechaHora: {
                        type: Date
                    }
                }
            ],
    estaFichado:{
        type:Boolean
    }
});

const postulacionesSchema=mongoose.Schema({
    usuarioPostulado:{
        type:usuarioPSchema,
        required:true
    }
});

const trabajoSchema=mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    finalizadoCreador: {
        type: Boolean,
        required: true
    },
    finalizadoTrabajador: {
        type: Boolean,
        required: true
    },
    usuarioCreador: {
        type: usuarioCSchema,
        required: true
    },
    estadoTrabajo: {
        type: Number,
        required: true
    },
    categoria: {
        type: categoriaSchema,
        required: true
    },
    postulaciones: {
        type: postulacionesSchema,
        required: true
    }
});

module.exports=mongoose.model('trabajos', trabajoSchema);