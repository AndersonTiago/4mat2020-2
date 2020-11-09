var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


const db = require('./config/database');
//db(mongodb+srv://atbcosta:<password>@cluster0.hmiue.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority);
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.hmiue.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`);

var app = express();

const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Criação de uma nova rota
const teste = require('./routes/teste');
app.use('/teste', teste);

// Rota para curso
const curso = require('./routes/curso')
app.use('/curso', curso)

// Rota para professor
const professor = require('./routes/professor')
app.use('/professor', professor)

// Rota para Sala de Aula
const sala_aula = require('./routes/sala_aula')
app.use('/sala-aula', sala_aula)

// Rota para Turma
const turma = require('./routes/turma')
app.use('/turma', turma)

// TRABALHO

// Rota para Cliente
const cliente = require('./routes/cliente')
app.use('/cliente', cliente)

// Rota para Fornecedor
const fornecedor = require('./routes/fornecedor')
app.use('/fornecedor', fornecedor)

// Rota para Funcionario
const funcionario = require('./routes/funcionario')
app.use('/funcionario', funcionario)

// Rota para Produto
const produto = require('./routes/produto')
app.use('/produto', produto)

// Rota para Venda
const venda = require('./routes/venda')
app.use('/venda', venda)

module.exports = app;
