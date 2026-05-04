function truncate(str, maxlength){
  if(str.length > maxlength){
    let newStr = str.slice(0, maxlength) + '...';
    alert(newStr);
  } else {
    alert(str);
  }
}


truncate("What I'd like to tell on this topic is:", 20);
truncate("Hi everyone!", 20);