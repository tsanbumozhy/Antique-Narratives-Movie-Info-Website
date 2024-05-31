const options = {
method: 'GET',
headers: {
'X-RapidAPI-Key': 'aa03e68f3bmsh1d72e7a0d2bce93p119714jsn282248146cd4',
'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
}
};

function getCurrentURL(){
    return window.location.href
};

var url = getCurrentURL();
let ind = url.indexOf("id=") + 3;
var id = url.substr(ind, url.length);
let id_link = 'https://mdblist.p.rapidapi.com/?i='.concat(id);

fetch(id_link, options)
.then(response => response.json())
.then(response => {
        console.log(response);

        const name = response.title;
        const description = response.description;
        const link = response.trailer;
        ind = link.indexOf("v=") + 2;
        id = link.substr(ind, link.length);
        const trailer_link = 'https://www.youtube.com/embed/'.concat(id);
        const release = response.year;

        const poster = response.poster;
        const backdrop = response.backdrop;

        console.log(name);
        console.log(description);
        console.log(trailer_link);
        console.log(release);

        document.
            querySelector('.sec-1').
                innerHTML +=
                    `<h1>${name}</h1>
                     <h5> ${release}</h5>
                     <div class="banner">
                     <img src='${poster}' alt="poster" height="400px" width="300px">
                     <a href='${link}' target='_blank'>
                     <iframe width="700" height="400px" src='${trailer_link}'></iframe>
                     </a>
                     </div>`

    })
.catch(err => console.error(err));


