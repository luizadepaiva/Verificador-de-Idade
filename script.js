function verificar(){

    //Muda foto
    var imag = window.document.getElementById('imagem')
    
    // Declara resultado
    var resultado = window.document.getElementById('resultado')

    //Ano atual
    var data = new Date()
    var anoatual = data.getFullYear()
    
    // Calcula idade
    var ano = document.getElementById('ano')
    var idade = anoatual - Number(ano.value)

    // Verifica ano entrada
    if (ano.value.length == 0 || ano.value > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { 
    
        // Verifica gênero e idade 
    var genero = document.getElementsByName('genero')
    var gen = ''

    if (genero[0].checked) {
        gen = 'Mulher'
        if(idade >= 0 && idade < 10){
            imag.src= 'imagens/bu.jpg'
        } else if (idade < 21){
            imag.src='imagens/violeta.jpg'
        } else if (idade < 50) {
           imag.src='imagens/mulher.png'
        } else if (idade < 100) {
            imag.src='imagens/idosa.jpeg'
        } else {
            imag.src='imagens/vampira.jpg'            
        }
    } else if (genero[1].checked){
        gen = 'Homem'
        if(idade >= 0 && idade < 10){
            imag.src='imagens/menino.jpg'
        } else if (idade < 21){
            imag.src='imagens/trunks.jpeg'
        } else if (idade < 60) {
            imag.src='imagens/homem.jpg'
        } else if (idade < 100) {
            imag.src='imagens/homemidoso.jpg'
        } else {
            imag.src='imagens/vampiro.png'
        }
    }
        resultado.style.textAlign='center'
        resultado.innerHTML = (`${gen} com ${idade} anos de idade.`)

    }


}