let registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', () => {
    doRegister();
});

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
        console.log(res);
        if (res.status === 200) {
            let main = document.getElementsByTagName('main');

            main.innerHTML = `
                    <div class="response-container">
                      <h1>UMA MENSAGEM FOI ENVIADA AO SEU EMAIL!!!</h1>
                    </div>`;
        }
    });
}
