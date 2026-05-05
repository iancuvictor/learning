function doAll(str, letter){
    let newStr = [];
    newStr = str.split('-').map((item) => {
        return item = item[0].toUpperCase() + item.slice(1);
    }).filter((item) => item[0] === letter);
    alert(newStr);
}

doAll('forensic-science-application', 'S');