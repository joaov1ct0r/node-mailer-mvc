let registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', () => {
    doRegister();
});

function doRegister() {
    let name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    let url = 'http://localhost:3000/api/cadastro';
}
