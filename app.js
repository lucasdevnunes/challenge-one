function criptografar() {
    //let mensagem = document.getElementById('mensagem').value;
    let mensagem = 'ola tudo bem'
    let mensagemCriptografada = '';

    for (let letra of mensagem) {
        if (letra === 'a'){
            letra = 'ai';
            mensagemCriptografada += letra;
        } else if (letra === 'e'){
            letra = 'enter';
            mensagemCriptografada += letra;
        } else if (letra === 'i'){
            letra = 'imes';
            mensagemCriptografada += letra;
        } else if (letra === 'o'){
            letra = 'ober';
            mensagemCriptografada += letra;
        } else if (letra === 'u'){
            letra = 'ufat';
            mensagemCriptografada += letra;
        } else {
            mensagemCriptografada += letra;
        }
    }

    return mensagemCriptografada;
}

function descriptografar() {}

function copiarMensagem() {}

console.log(criptografar());