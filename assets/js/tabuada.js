document.querySelector('.exibir').addEventListener('click', e=> {
    var tabuadas = document.getElementById('tabuada');
    var num = document.getElementById('numero').value;
    e.stopPropagation();
    tabuadas.style.color = "#171583"
    for(var i = 1; i < 11;i++){

        if(!num) {
            tabuadas.style.color = "red";
            tabuadas.innerHTML = tabuadas.innerHTML + "Insira um numero";
            break
        }
        var multi = num * i;
        tabuadas.innerHTML = tabuadas.innerHTML + num + " X " + i + " = " + multi + '</br>'
    }
    tabuadas.style.display = (tabuadas.style.display == "block") ?  tabuadas.innerHTML = null : 'block';
}, true);
 /*for (var j = 1; j < 11; j++){

            var multi = i * j

            tabuadas.innerHTML = tabuadas.innerHTML + i + " X " + j + " = " + multi + '</br>';
        }*/
        //if((i % 2) == 0) repet.innerHTML = repet.innerHTML + i + ": repetição!" + '</br>';