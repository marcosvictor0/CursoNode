//fazer um crud com as 5 operaçõs (adicionar, listar todos, listar um, apagar e atualizar.)
//
const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) =>{
    res.json({ mensagem: "Voce esta na aba principal"})
})

app.get('/:id', function(req, res) {
    const animesRef = db.collection('animes').doc('1');
    const doc = animesRef.get();
    if (!doc.exists()) {
        console.log("Não existe esse documento!");
    }
    else {
        console.log("Document data", doc.data())
    }
})

app.listen(8081, function () {
    const port = 8081;
    console.log(`O servidor está rodando na porta ${port}`)
})