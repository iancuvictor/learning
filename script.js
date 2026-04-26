for(let userNum = +prompt('Enter a number', '');;){
    if(userNum < 100){
        alert('try again');
        userNum = +prompt('Enter a number', '')
    } else {
        alert('great'); 
        break;
    }
}