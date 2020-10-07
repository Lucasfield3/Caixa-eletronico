var sentence = document.getElementById('frase').innerText = "Dota é melhor que lol"
var another = document.getElementById('frase2').innerText = "lol é melhor que cs"
var tru = document.getElementById('demo')
var fal = document.getElementById('demo2')
tru.style.color = "green"
fal.style.color = "red"
document.querySelector('.analisar').addEventListener('click', e=>{
    tru.innerText = '(Verdadeiro)'
    fal.innerText  = '(Falso)'
    tru.style.display = (tru.style.display == "block") ? tru.innerHTML = null : 'block'
    fal.style.display = (fal.style.display == "block") ?  fal.innerHTML = null : 'block'
}, true)
/*
   $("#frase:contains(Dota)").html(sentence.innerText + "<p>Verdadeiro</p>");  

    $("#frase2:contains(Lol)").html(another.innerText + ' <p>Falso</p>');  
    $("#frase:contains(Dota)").css('color', 'green');  
    $("#frase2:contains(Lol)").css('color', 'red');
*/
