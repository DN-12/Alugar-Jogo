function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if (imagem.classList.contains("dashboard__item__img--rented")){
        let ok = prompt('tem certeza digite y para sim:')
        if(ok == 'y'){
        imagem.classList.remove("dashboard__item__img--rented")
        botao.classList.remove('dashboard__item__button--return')
        botao.textContent = 'Alugar'
        jogoAlugado--
        }else{alert('ok')}
    }else{
        imagem.classList.add("dashboard__item__img--rented")
        botao.classList.add('dashboard__item__button--return')
        botao.textContent = 'Devolver'
        jogoAlugado++
        alert(`Jogos alugados: ${jogoAlugado}`)
    }
}
let jogoAlugado = 1
