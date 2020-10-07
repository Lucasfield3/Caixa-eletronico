document.querySelector('.random').addEventListener('click', e=>{
    var campo = parseInt(document.querySelector('.num').value)
    var num = Math.floor(Math.random()*10)
    if(campo == num){
        alert(num + ' Acertooooo' )
    }else if(!campo){
        alert('Digite um numero')
    }else{
        alert(num + ' Erooooooooooo' )
    }

})