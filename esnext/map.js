const chavesVariadas = new Map([
    [function(){}, "função"],
    [{}, 'Objeto'],
    [123, 'Numero'],
])

chavesVariadas.forEach((vl, ch) =>{
    console.log(ch, vl)
})