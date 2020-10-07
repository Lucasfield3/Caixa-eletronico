function addInput(){
    var exibir = document.querySelector('.cpf');

exibir.addEventListener('click', e=>{
    var cpf = document.getElementById('cpf').value;
    alert(`Seu cpf: ${cpf}`);

}, true);
}
function addInput2(){
    var exibir = document.querySelector('.bcpf2');
    
    exibir.addEventListener('click', e=>{
        var cpf = document.getElementById('cpf2').value;
        alert(`Seu cpf: ${cpf}`);
    
    }, true);
    }
        
    
