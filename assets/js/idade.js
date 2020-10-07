document.getElementById('btn-menorMaior').addEventListener('click', e=>{
    var ano = parseInt(document.getElementById('idade').value);
    var menorMaior = document.querySelector('.col-age');
    if (!ano) {
        menorMaior.innerHTML = "Insira um ano"
    }else{
        menorMaior.innerHTML = ((2020 - ano) > 17) ? 'maior de idade' : 'menor de idade';
        menorMaior.style.display = 'block';
    }

});