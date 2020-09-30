const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    codigo:{
        type: String,
        required: true //Atributo obrigatório
    },
    quantidade:{
        type: Number,
        required: true
    },
    produto:{type: mongoose.ObjectId, ref:'Produto', required: true},
    cliente:{type: mongoose.ObjectId, ref:'Cliente', required: true},
    funcionario:{type: mongoose.ObjectId, ref:'Funcionario', required: true}    
})
/*
    PARAMETROS DO mongoose.model()
    1º -> Nome do model(Inicial maiúscula, igual ao nome do arquivo)
    2º -> a constante esquema, montada anteriormente
    3º -> o nome da COLEÇÃO no BD que irá receber os objetos que serão 
          criados a partir deste model (inicial minúscula, plural do

          nome do model)
*/
module.exports = mongoose.model('Venda', esquema, 'vendas')