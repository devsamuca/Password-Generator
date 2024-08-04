var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var num = '0123456789';
var simbols = '/°?}{[]^~>,<+=_-*&%$#@!';
var Senha = '';


function geraSenha(){
    var recebe = document.getElementById('recebe');
    var option = document.getElementsByName('option');
    var Tamanho = document.getElementById('tamanho');
    var tamanhoSenha = parseInt(Tamanho.value);
    var contador = ''
    
    if(option[0].checked){
        Senha += abc
    }

    if(option[1].checked){
        Senha += num
    }

    if(option[2].checked){
        Senha += simbols
    }

    if(Senha == '' || Tamanho.value == ''){
        recebe.value = '[ERRO]';
        recebe.style.textAlign = 'center'
        recebe.style.color = 'red'
        recebe.style.fontWeight = 'bold'
    }
    else{
        while(contador.length < tamanhoSenha){
            var random = Math.floor(Math.random() * Senha.length) 
            contador += Senha[random]
        }
        
        recebe.value = contador
        recebe.style.textAlign = 'center'
        recebe.style.color = '#374af8'
        recebe.style.fontWeight = 'bold'
        
    }

}

