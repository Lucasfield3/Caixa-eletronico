document.querySelector('.tamanho').addEventListener('click', e=>{
    var lineVetor = document.querySelector('.col-vetor')
    var deuses = document.getElementById('seu-array').value
    var separar = deuses.split(',')
    if(!deuses){
        lineVetor.innerHTML = lineVetor.innerHTML + 'Tamanho do array é: ' + separar.length - 1
        //document.querySelector('.ex14').style = 'height:fit-content'
    }else{
        //document.querySelector('.ex14').style = 'height:20vh'
        lineVetor.innerHTML = 'Tamanho do array: '+ deuses + " é: " + separar.length
        lineVetor.style.display = (lineVetor.style.display == "block")? lineVetor.style.display = null : "block"
    }
    
    console.log(deuses.length)
})