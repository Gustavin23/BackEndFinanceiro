// Importando o modulo mongoose e referenciando na constante mongoose variavel
const mongoose = require("mongoose");

// Criando um esquema de dados que representa os campos que serão cadastrados do usuário
const schema_user = new mongoose.Schema({
    fullname:{type:String, require:true},
    email:{type:String, require:true, unique:true},
    phone:{type:String},
    user:{type:String, require:true, unique:true},
    password:{type:String, require:true}
});

// Exportando o modelo de dados para que se mantenha visivel
module.exports = mongoose.model("Users", schema_user);