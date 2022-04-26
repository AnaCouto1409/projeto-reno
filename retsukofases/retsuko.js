// Fase 1 - Retsuko

function retsuko1(){

    while(true){
        var opcao
    opcao = prompt ("1- Decide ir a metaleira para extravasar e se distrair. \n 2- ensata decide cair fora!!!");

    if (opcao == 1){
        location.assign ('f2.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/go.html')

        alert("A metaleira falou mais alto literalmente!!!!!!")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

// Fase 2 - Retsuko

function Retsuko2(){

    while(true){
        var opcao
    opcao = prompt ("1-Na humildade escolhe fazer o que faz de melhor e canta  \n 2-Resiste e deseja fugir dos zumbis o mais rapido possível!");

    if (opcao == 1){
        location.assign ('vitoria.html')
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/go.html')

        alert("Sem heavy metal não tem graça!!!!!!!!")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

// Fase 3 - Retsuko

function Retsuko3(){

    while(true){
        var opcao
    opcao = prompt ("1-Na humildade escolhe fazer o que faz de melhor e canta  \n 2-Resiste e deseja fugir dos zumbis o mais rapido possível! ");

    if (opcao == 1){
        location.assign ('vitoria.html')

        alert("A metaleira que aguente a Retsuko o resto da vida!!!!")
        break;
    }
    else if (opcao == 2){
        location.assign ('../gameover/go.html')

        alert("O TEMPO NO METAL EXCEDEU E OS ZUMBIS TE PEGARAM!")
        break;
    }
        alert ("Por favor, responda com 1 ou 2.")
    }
}

