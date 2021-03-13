/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/
//REFAZER!!

const juroSimples = (capInicial, tJuros, tempoAp) => { 
    const rendimentoMes = capInicial * tJuros
    const rendimentoFinal = rendimentoMes * tempoAp

    return `R$ ${(rendimentoFinal + capInicial).toFixed(2).replace('.', ',')}`
}

const juroComposto = (capInicial, tJuros, tempoAp) => {
    let i = 0
    let rendimentoFinal = capInicial
    let rendimentoMes = rendimentoFinal * tJuros
    

    while(i <= tempoAp){
        rendimentoFinal += rendimentoMes
        rendimentoMes = rendimentoFinal * tJuros
        i++
    }

    return `R$ ${rendimentoFinal.toFixed(2).replace('.', ',')}`
}

console.log(juroSimples(100, 0.2, 2))
console.log(juroComposto(100, 0.2, 5))