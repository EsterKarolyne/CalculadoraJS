var res = window.document.getElementById('resultado')


function conta(numero) {
    res.innerHTML += numero



}

function limpar() {
    res.innerHTML = ''
}

function apagar() {
    res.innerHTML = res.textContent.substring(0, res.textContent.length - 1) //TextContent: pega o conteudo de texto dentro de um elemento html
    //substring, corta o texto de acordo com o indice setado, lembrando que tudo começa com 0 ;
    // exemplo ester(4 letras, 0=E, 1=S, 2=T, 3=E, 4=R ), ester.substring(0, 2) ficaria EST

}

function igual() {

    var res = document.getElementById('resultado').innerHTML

    console.log(res);

    var split_soma = res.split('+');
    var split_subitracao = res.split('-');
    var split_divisao = res.split('/');
    var split_multiplicacao = res.split('*');
    var resultado = 0;
    var aux = 0;
    if (split_divisao.length > 1) {
        for(let i = 0; i < split_divisao.length - 1; i++){
            if(aux == 0){
                resultado = parseInt(split_divisao[i]) / parseInt(split_divisao[i+1]);
                aux = resultado;
            }else{
                resultado = aux / parseInt(split_divisao[i+1]);
                aux = resultado;
            }
        }
        
    }
    if (split_multiplicacao.length > 1) {
        for(let i = 0; i < split_multiplicacao.length - 1; i++){
            resultado = parseInt(split_multiplicacao[i]) * parseInt(split_multiplicacao[i+1]);
        }
        
    }
    console.log(split_subitracao);
    // console.log(resultado);

    // console.log(split.length);
    // var resultado = 0;
    // for(let i = 0; i < split.length; i++){
    //     resultado += parseInt(split[i]);
    // }

    // if(resultado){
    document.getElementById('resultado').innerHTML = resultado // eval não é recomendado

    // }else{
    //     window.alert('Digite uma operação')
    // }

}
