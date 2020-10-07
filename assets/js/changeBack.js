const vermelho = document.querySelector('.red');
const verde = document.querySelector('.green');
const back = document.querySelector('.ex3');

function mudarCor(cor, seg){

    back.style = cor;
    back.style.transition = seg;

}
vermelho.addEventListener('mouseover', e =>{

    mudarCor('background: red;', '1s');

})
vermelho.addEventListener('mouseout', e =>{

    back.style = "background-color: transparent;";
    back.style.transition = '1s';

})
verde.addEventListener('mouseover', e =>{

    mudarCor('background: green;', '1s');

})
verde.addEventListener('mouseout', e =>{

    back.style = "background-color: transparent;";
    back.style.transition = '1s';

});

