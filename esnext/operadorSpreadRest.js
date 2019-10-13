//operador ... rest(juntar)/spread(espalhar)
//usar rest com parametro de função

//usar spread com objeto
const funcionario = {nome:'Maria', salario:12348.99}
//espalhando dentro de uma rray todos os elementos de um outro Array
const clone = {ativo:true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
//espalhando dentro de uma rray todos os elementos de um outro Array
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)