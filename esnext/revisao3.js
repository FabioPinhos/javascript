//ES8: Object.values/Object.entries
const obj = {a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal
const nome = 'Carla'
//Não precisa colocar nome/valor
const pessoa = {
    nome,
    ola: function(){
        return 'Oi 1'
    },
    ola2(){
        return 'Oi 2'
    }
}

console.log(pessoa.nome, pessoa.ola(), pessoa.ola2())

//Class
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())