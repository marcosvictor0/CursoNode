const express = require('express');
const app = express();

app.use(express.json())

app.get("/", function (req, res) {
    const result = {mensagem: 'Testando atualizacao'}
    res.json(result);
})

app.post("/", function (req, res) {
    const dados = req.body
    const nome = dados.nome
    const idade = dados.idade
    res.json({mensagem: `Hello ${nome} voce tem ${idade} anos`})
})

app.get("/sobre" , function (req, res) {
    res.send("Voce entrou na aba Sobre.")
})

app.get("/blog" , function (req, res) {
    res.send("Voce entrou na aba do blog.")
})
//Quando se coloca o /: indica que isso é um parametro, ou seja o "nome" é um parametro para o cliente.
app.get("/ola/:nome/:cargo/:cor", function (req, res){
    res.send("Ola " + req.params.nome + 
    " Seu cargo é " + req.params.cargo + 
    " A cor que você escolheu foi: " + req.params.cor);
})

app.listen(8081, function(){
    console.log('Servidor Rodando na url http://localhost:8081');
});