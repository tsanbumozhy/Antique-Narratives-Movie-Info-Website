/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function getCurrentURL(){
    return window.location.href
}

var url = getCurrentURL();
if(url.indexOf("name=") != -1){
    window.location.href = './login/login-main.html';
}else{
    let ind = url.indexOf("name=") + 5;
    var username = url.substr(ind, url.length);
    username = username.replace('%20',' ');
    alert(username);
    document.getElementById("user_name").innerHTML = username;
}