console.log("Click this button.");

document.getElementById('login').addEventListener('click', function () {


    console.log("Click this button.");

    const emailField = document.getElementById('user-email');

    const e = emailField.value;

    const passField = document.getElementById('user-password');

    const password = passField.value;

    console.log(e, password);

    if (e == 't@g.com' && password == 'abcd') {
        window.location.href = 'Bank.html';
    }
    else {
        alert('Please enter correct password');
    }




})