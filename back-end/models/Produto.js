const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{
        type: String,
        required: true //Atributo obrigatório
    },
    estoque:{
        type: Number,
        required: true
    },
    validade:{
        type: Date,
        required: true
    },   
    fornecedor:{type: mongoose.ObjectId, ref:'Fornecedor', required: true}

})
/*
    PARAMETROS DO mongoose.model()
    1º -> Nome do model(Inicial maiúscula, igual ao nome do arquivo)
    2º -> a constante esquema, montada anteriormente
    3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão 
          criados a partir deste model (inicial minúscula, plural do

          nome do model)
*/
module.exports = mongoose.model('Produto', esquema, 'produtos')