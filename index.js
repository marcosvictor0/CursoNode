const express = require('express');
const app = express();

app.use(express.json())

//rotas
app.get("/", function (req, res) {
    const result = {mensagem: 'Testando atualizacao'}
    res.json(result);
})

app.post("/", function (req, res) {
    const dados = req.body
    const nome = dados.nome
    const idade = dados.idade
    res.json({mensagem: `Hello ${nome}`, idade})
})

app.get("/sobre" , function (req, res) {
    const dados = req.body
    const visao = dados.visao
    const missao = dados.missao
    const objetivo = dados.objetivo
    res.json({mensagem: `a visao da empresa é ${visao}`, missao, objetivo})
})

app.get('/:curso', function (req, res) {
    const dados1 = req.body
    const curso = dados1.curso
    res.json({mensagem: `meu curso ${curso}`})
})


//exemplo de uma arrow function "  () => {}   "

app.get("/blog" , function (req, res) {
    res.json({mensagem: `a visao é ${visao}`, missao, objetivo})
})
//Quando se coloca o /: indica que isso é um parametro, ou seja o "nome" é um parametro para o cliente.
app.get("/ola/:nome/:cargo/:cor", function (req, res){
    res.send("Ola " + req.params.nome + 
    " Seu cargo é " + req.params.cargo + 
    " A cor que você escolheu foi: " + req.params.cor);
})


//indica a porta que o servidor vai conectar
app.listen(8081, function(){
    console.log('Servidor Rodando na url http://localhost:8081');
});