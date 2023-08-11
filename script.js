const submit = document.querySelector('.btn');
submit.onclick = (event) => {
    event.preventDefault();

    const psw = document.getElementById('password1').value;
    const confirmPsw = document.getElementById('password2').value;

    const errorMsg = document.getElementById('errormsg');

    if (psw === confirmPsw) {
        document.getElementById('aform').submit();
    } else {
        errorMsg.textContent = '*Passwords do not match';

    }
};