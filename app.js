const { json } = require('body-parser');
const express = require('express')
app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://@@@@.yz7hkqq.mongodb.net/?retryWrites=true&w=majority&appName=teste');


app.use(express.json())

const Funcionarios = mongoose.model('Funcionarios',{
    name:String,
    idade: Number,
    trabalho: String
}
)
//podemos inserir um dado instanciando um objeto ou usando o metodo create.

let funcionario1 = new Funcionarios({
    name:'joão',
    idade: 21,
    trabalho: 'gari'
})
funcionario1.save()
//ou
Funcionarios.create({
    name:'vitor',
    idade: 19,
    trabalho: 'pedreiro'
})

app.get('/', async (req,res) =>{
   
    // procura em mongoDB
    res.send((await Funcionarios.deleteMany({name:'joão'})))   
    



})





app.listen(3000, () => {
    console.log(`ouvindo na porta 3000`)
  })
