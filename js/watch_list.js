function getCurrentURL(){
    return window.location.href
};

var url = getCurrentURL();
let ind = url.indexOf("id=") + 3;
var id = url.substr(ind, url.length);


function changeLink() {
        var link = document.getElementById("watch_later");

    window.open(
      link.href,
      '_blank'
    );

    link.setAttribute('href', "watch_later.html");

    return false;
    }
