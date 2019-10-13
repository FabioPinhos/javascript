// let e const
//let escopo de bloco

{
    var a =2
    let b = 3
    console.log(b)
}

console.log(a)

//Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

//Destructuring
const[l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, y] = [1, 2, 3, 4]
console.log(x, y)

const [i, , , o] = [1, 2, 3, 4]
console.log(i, o)

const {idade:u, nome} = {nome:'Ana', idade:9}
console.log(u, nome)

const {idade, nome} = {nome:'Ana', idade:9}
console.log(idade, nome)