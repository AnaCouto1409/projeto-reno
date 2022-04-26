function btn() {
    var resposta = prompt("Qual a opção vc deseja?")
   
    function fase1 (resposta){
        if(resposta == 2 ){
            alert (`Você perdeu! Medusa não vai poder praticar seu poderes misticos!`)
        }else if (resposta == 1 ){
            alert ("Parabens, você passou para a proxima fase!")
            location.replace("f2.html")
        }else{
            alert ("Opção invalida")
        }
    }
 fase1(resposta)
}