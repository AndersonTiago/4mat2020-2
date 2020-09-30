const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome:{
        type: String,
        required: true //Atributo obrigatório
    },
    produto:{
        type: String,
        required: true
    }
})
/*
    PARAMETROS DO mongoose.model()
    1º -> Nome do model(Inicial maiúscula, igual ao nome do arquivo)
    2º -> a constante esquema, montada anteriormente
    3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão 
          criados a partir deste model (inicial minúscula, plural do

          nome do model)
*/
module.exports = mongoose.model('Fornecedor', esquema, 'fornecedores')