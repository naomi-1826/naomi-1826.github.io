var a
function userName() {
    //get value from input field and save as a
    a = document.getElementById('name').value
    window.alert(userName)
    //create LS key with value of "a" 
    localStorage.setItem('uName', userName);
    //automatically take user to page two.html 
    location.href = "two.html";
}

function getUser() {
    var b = localStorage.getItem('uName');
    document.getElementById('placeholder').innerHTML = "Hello" + b; 
}
