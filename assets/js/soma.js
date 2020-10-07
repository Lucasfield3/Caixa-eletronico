
    
    document.getElementById('btn-soma').addEventListener('click', e=>{
        var n1 = parseInt(document.getElementById('soma1').value);
        var n2 = parseInt(document.getElementById('soma2').value);
        var result = document.querySelector('.col-result');

        result.style.display = 'block';
        result.innerHTML = (n1 + n2);

    });
/*function dividir(){

    var n1 = parseInt(document.getElementById('soma1').value);
    var n2 = parseInt(document.getElementById('soma2').value);
    var result = document.querySelector('.col-result');
    result.style.display = 'block';

    if (!n1 && !n2){
        return result.innerHTML = 0;
    }else {
        return result.innerHTML = (n1 % n2);
    }

}*/
/*function impaPar(){

    var n1 = parseInt(document.getElementById('soma1').value);
    var n2 = parseInt(document.getElementById('soma2').value);
    var result = document.querySelector('.col-result');
    result.style.display = 'block';
    result.innerHTML = n1+n2;

    if (n1%n2== 0){
        return result.innerHTML = (`numero par: ${result.innerHTML}`);
    }else {
        return result.innerHTML = (`numero impar: ${result.innerHTML}`);
    }
}*/
/*function multi(){

    var n1 = parseInt(document.getElementById('soma1').value);
    var n2 = parseInt(document.getElementById('soma2').value);
    var result = document.querySelector('.col-result');
    result.style.display = 'block';

    result.innerHTML = n1*n2;
}
*/