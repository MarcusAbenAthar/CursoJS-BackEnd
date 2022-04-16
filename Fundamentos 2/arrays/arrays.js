let notas = [10, 6.5, 8, 10, 10]
//função PUSH - Adiciona um elemento ao último índice de uma array

//função POP - Elimina o último índice de uma array

function calculoMedia(notas) {
    let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length
    return media
}
console.log('A média é: ', calculoMedia(notas));