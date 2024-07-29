let saldoVitorias = 100
let saldoDerrotas = 27
let rank = ''

function Rankeada(saldoVitorias, saldoDerrotas) {
    
    let nivel = (saldoVitorias - saldoDerrotas)

    if(nivel <= 10){
        rank = 'Ferro'
    }
    else if(nivel <= 20){
        rank = 'Bronze'
    }
    else if(nivel <= 50){
        rank = 'Prata'
    }
    else if(nivel <= 80){
        rank = 'Ouro'
    }
    else if(nivel <= 90){
        rank = 'Diamante'
    }
    else if(nivel <= 100){
        rank = 'Lendário'
    }
    else{
        rank = 'Imortal'
    }

    console.log('O herói conta com ' + saldoVitorias + ' vitórias, ' + saldoDerrotas + ' derrotas, e encontra-se no Rank ' + rank)

}

Rankeada(saldoVitorias, saldoDerrotas)