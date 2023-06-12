
/* SELECIONAR ELEMENTOS */
// selecionar input com o numero digitado
let valorDigitado = document.querySelector('#valorEmKz')

// selecionar os elementos radios (criar um array deles)
let moedaSelecionada = document.getElementsByName('moedaEstrangeira')

let aviso = document.querySelector('#aviso')

// selecionar os botoes
let btnConverter = document.querySelector('#btnConverter')
let btnLimpar    = document.querySelector('#btnLimpar')

// COTACOES DO DIA 12/06/2023   // 12/06/2023 Banco BAI
let valorDoDolar   = 666.50908	// 666,50908	
let valorDoEuro    = 717.82984  // 717,82984
let valorDaLibra   = 838.26812  // 838,26812
let valorDoRand = 35.60660  // 35,60660
let valorEmKz    = 0

let moedaEstrangeira = ''
let moedaConvertida  = 0.00

// MENSAGEM FORMATADA PARA EXIBIR VALORES MONETARIOS
function mensagemFormatada(moedaConvertida) {
    isNaN(valorEmKz) ? valorEmKz = 0 : ''
    console.log("Moeda Convertida " + moedaConvertida)
    aviso.textContent = "O valor " + (valorEmKz).toLocaleString('pt-pt', { style: 'currency', currency: 'AOA' }) + " convertido em " + moedaEstrangeira + " é " + moedaConvertida
}

/* VERIFICAR SE FOI DIGITADO ALGUM VALOR PARA PODER CONVERTER */
function bloquearBotao() {
    if(valorDigitado.value == 0 || valorDigitado == '' || valorDigitado == null) {
        btnConverter.setAttribute('disabled', 'disabled')
        btnConverter.style.background = '#ccc'
        btnConverter.style.cursor = 'not-allowed'
    }
}

// REATIVAR BOTAO
function ativarBotao() {
    if(valorDigitado.value > 0) {
        btnConverter.removeAttribute('disabled')
        btnConverter.style.background = '#ffc107'
        btnConverter.style.cursor = 'pointer'
    } else {
        console.log('Nao ativou')
    }
}

// VERIFICAR QUAL BOTAO RADIO ESTA MARCADO checked ou checked == true
// vincular a verificacao a um evento, click no botao Converter
btnConverter.addEventListener('click', function() {
    // FAZER o parseFloat dos valores monetarios (converter String para Float)
    valorEmKz = parseFloat(valorDigitado.value)

    console.log('Escolhe a moeda estrangeira')
    for(let i = 0; i < moedaSelecionada.length; i++) {
        if(moedaSelecionada[i].checked) {
            moedaEstrangeira = moedaSelecionada[i].value
            console.log(moedaEstrangeira)
        }
    }

    /*
    Uso da  estrutura escolha caso para escolher
    qual e a moeda estrangeira que foi selecionada
    */

// {moedaConvertida.toLocaleString('pt-pt', { style: 'currency', currency: 'KZ' })
// CONVERSAO DE MOEDAS
// Operacao basica pegar moedaEstrangeira e dividir pelo valorEmKz
    switch(moedaEstrangeira) {
        
        case 'Dólar':
            moedaConvertida = valorEmKz / valorDoDolar
            mensagemFormatada(moedaConvertida.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        break

        case 'Euro':
            moedaConvertida = valorEmKz / valorDoEuro
            mensagemFormatada(moedaConvertida.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }))
        break

        case 'Libra':
            moedaConvertida = valorEmKz / valorDaLibra
            mensagemFormatada(moedaConvertida.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' }))
        break

        case 'Rand':
            moedaConvertida = valorEmKz / valorDoRand
            mensagemFormatada(moedaConvertida.toLocaleString('en-NA', { style: 'currency', currency: 'NAD' }))
        break
    
        default:
            aviso.textContent = 'Escolha uma moeda estrangeira'
    }
    isNaN(moedaConvertida) ? moedaConvertida = 0 : ''
})

btnLimpar.addEventListener('click', function() {
    valorDigitado.focus()
    valorDigitado.value = ''
    aviso.textContent = 'Digite o valor, escolha a moeda e converter'
    moedaSelecionada[0].checked = false
    moedaSelecionada[1].checked = false
    moedaSelecionada[2].checked = false
    moedaSelecionada[3].checked = false
})
