window.addEventListener('load', function() {
    document.querySelector('.loaded').addEventListener('click', e=> {
        var msg = document.getElementById('load');
        msg.innerHTML = "Fucionou!!";
        msg.style.display = (msg.style.display == 'block') ? 'none' : 'block';
    }, true);
  }, true);

 
    /*document.querySelector('.repetir').addEventListener('click', e=> {
        var repet = document.getElementById('repeat');
        for(var i = 0; i < 20;i++){

            repet.innerHTML = repet.innerHTML + ("Repetição" + "<br/>");
  
        }
        repet.style.display = (repet.style.display == "block") ? repet.innerHTML = null : 'block';

    }, true);*/

    /*document.querySelector('.repetir').addEventListener('click', e=> {

        var repet = document.getElementById('repeat');
        var i = [repet, repet, repet, repet, repet];
        i.length = 5;
        i.length.forEach((repet, index)=>{
            repet.innerHTML = repet.innerHTML + index + ':' + "Repetição" + "<br/>";
        });
        console.log(i);

        repet.style.display = (repet.style.display == "block") ? repet.innerHTML = null : 'block';

    }, true);*/
    /*document.querySelector('.repetir').addEventListener('click', e=> {
        var repet = document.getElementById('repeat');
        var i = 0;
        while(i <= 4){

            repet.innerHTML = repet.innerHTML + ("Repetição" + "<br/>");

            i++;
        }

        repet.style.display = (repet.style.display == "block") ? repet.innerHTML = null : 'block';

    }, true);*/
    document.querySelector('.repetir').addEventListener('click', e=> {
        var repet = document.getElementById('repeat');
        e.stopPropagation();
        for(var i = 0; i < 21;i++){
            if((i % 2) == 0) repet.innerHTML = repet.innerHTML + i + ": repetição!" + '</br>';
        }
        repet.style.display = (repet.style.display == "block") ?  repet.innerHTML = null : 'block';
    }, true);