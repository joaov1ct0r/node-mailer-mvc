let registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', () => {
    doRegister();
});

function sendMail(email) {
    let url = 'http://localhost:3000/api/send';

    let options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ email })
    };
}

function doRegister() {
    let nome = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let url = 'http://localhost:3000/api/cadastro';

    let options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ nome, email })
    };

    fetch(url, options).then(res => {
        if (res.status === 200) {
            let main = document.getElementById('main');

            main.innerHTML = `
                    <div class="response-container">
                      <h1>UMA MENSAGEM FOI ENVIADA AO SEU EMAIL!!!</h1>
                    </div>`;
        } else {
            let main = document.getElementById('main');

            main.innerHTML = `
                    <div class="response-container">
                      <h1>FALHA NO CADASTRAMENTO</h1>
                    </div>`;

            sendMail();
        }
    });
}
