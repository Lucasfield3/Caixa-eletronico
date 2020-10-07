document.querySelector('.acao').addEventListener('click', e=>{
    var dataAt = document.getElementById('date')
    var data = new Date();
    dataAt.innerHTML = data.toLocaleDateString('pt-BR')
    dataAt.style.display = (dataAt.style.display == 'block') ?  dataAt.style.display = null : "block"
    console.log(dataAt)

})

//let dia = dataAt.getDate()
////let mes = dataAt.getMonth()
//let ano = dataAt.getFullYear()
//dataAt.innerHTML = (++dia) + '/' + (++mes) + '/' + ano;
/*var day = data.getDate()
    var month = data.getMonth()+1
    var year = data.getFullYear()
    if(day < 10) day = '0'+ day;
    if(month < 10) month = '0'+ month;*/