import { response } from 'express';

let registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', () => {
    doRegister();
});

function doRegister() {
    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let url = 'http://localhost:3000/api/cadastro';

    let options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json;charset=UTF-8' },
        body: JSON.stringify({ name, email })
    };

    fetch(url, options).then(res => {
        if (res.status(200)) {
        }
    });
}
