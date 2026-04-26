let userName = prompt('Login name', '');
userName = String(userName);
let password;

if(userName === 'Admin'){
    password = prompt('Enter your password', '');
    if(password === 'TheMaster'){
        alert('Welcome');
    } else if (password == '' || password === null) {
        alert('Canceled');
    } else {
        alert('Wrong Password');
    }

} else if (userName === '' || userName === null) {
    alert('Canceled')
} else {
    alert('I dont know');
}