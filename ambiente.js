var res = window.document.getElementById('resultado')


function conta(numero){
    res.innerHTML += numero    

    

}

function limpar(){
    res.innerHTML= ''
}

function apagar(){
    res.innerHTML = res.textContent.substring(0, res.textContent.length - 1) //TextContent: pega o conteudo de texto dentro de um elemento html
    //substring, corta o texto de acordo com o indice setado, lembrando que tudo começa com 0 ;
    // exemplo ester(4 letras, 0=E, 1=S, 2=T, 3=E, 4=R ), ester.substring(0, 2) ficaria EST
    
}

function igual(){

    var res = document.getElementById('resultado').innerHTML
    if(res){
        document.getElementById('resultado').innerHTML = eval(res) // eval não é recomendado

    }else{
        window.alert('Digite uma operação')
    }

}
    