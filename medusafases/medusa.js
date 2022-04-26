//Fase 1 - Medusa

function Medusa1(){

    while(true){
        var opcao
    opcao = prompt ("1- Decide distrair os zumbis da cidade com seus poderes místicos. \n 2- Decide triunfar e cair fora da cidade.");

    if (opcao == 1){
        location.assign ('../gameover/go.html')

        alert ("O tempo passou  rapido demais para provar muitas  coisas")
        break;
    }
    else if (opcao == 2){
        location.assign ('f2.html')
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

//Fase 2 - Medusa

function Medusa2(){
    
    while(true){
        var opcao
    opcao = prompt ("1- Medusa cai fora sem tosquenejar. \n 2- Corre e pega o helicóptero");

    if (opcao == 1){
        location.assign ('vitoria.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/go.html')

        alert ("Os zumbis vencerao....medusa não suporta injustiça, ela não suporta...")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

//Fase 3 - Medusa

function Medusa3(){
    while(true){
        var opcao
    opcao = prompt ("1- Medusa cai fora sem tosquenejar. \n 2- Corre e pega o helicóptero");

    if (opcao == 1){
        location.assign ('vitoria.html')

        alert ("Medusa tem que dar um basta em suas misticidades")
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/go.html')

        alert ("Mesmo assim dá para aproveitar a jornada no meio do caminho")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}