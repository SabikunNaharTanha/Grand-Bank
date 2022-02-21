document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if (userEmail == 'tanha@gmail.com' && userPassword == 'tanha123') {
        window.location.href = 'homepage.html';
    }
    else {
        console.log('Invalid User')
    }
})

