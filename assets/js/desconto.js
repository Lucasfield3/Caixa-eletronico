document.getElementById('btn-descontar').addEventListener('click', e=>{
    var valor = parseInt(document.getElementById('valor').value);
    var desconto = parseInt(document.getElementById('desconto').value);
    var descontado = document.querySelector('.col-desconto');
    descontado.style.display = 'block';
    descontado.innerHTML = valor-( valor*(desconto/100)).toFixed(2);
    descontado.innerText = 'R$' + descontado.innerHTML; 
    console.log(descontado.innerText);

});