let registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', async () => {
    let nome = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let url = 'http://localhost:3000/api/cadastro';

    let options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ nome, email })
    };

    const response = await fetch(url, options);

    if (response.status === 200) {
        alert('Uma mensagem foi enviada a seu Email!');

        sendMail(email);
    } else alert('Falha ao enviar mensagem a seu Email!');
});

async function sendMail(email) {
    let url = 'http://localhost:3000/api/send';

    let options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ email })
    };

    const response = await fetch(url, options);

    if (response.status === 200) alert('Email enviado');
    else alert('Falha ao enviar email');
}
