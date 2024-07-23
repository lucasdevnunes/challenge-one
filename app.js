function criptografar() {
    let mensagem = document.getElementById('mensagem').value;
    let mensagemCriptografada = mensagem
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
    document.getElementById('mensagemFinal').value = mensagemCriptografada;
}

function descriptografar() {
    let mensagem = document.getElementById('mensagem').value;
    let mensagemDescriptografada = mensagem
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    document.getElementById('mensagemFinal').value = mensagemDescriptografada;
}

async function copiarMensagem() {
    let mensagemCopiada = document.getElementById('mensagemFinal').value;
    try {
        await navigator.clipboard.writeText(mensagemCopiada);
    } catch (err) {
        console.error('Erro ao copiar o texto: ', err);
    }
}