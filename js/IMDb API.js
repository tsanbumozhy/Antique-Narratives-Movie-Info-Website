const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'aa03e68f3bmsh1d72e7a0d2bce93p119714jsn282248146cd4',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

searchBtn.onclick = function(){
    document.querySelector('.imdb .movies').innerHTML = "";
    document.querySelector('.imdb .series').innerHTML = "";
    document.querySelector('.imdb .others').innerHTML = "";

    let query = document.getElementById('query');
    query = query.value;

    let query_format = query.replace(/\s/g, '%20');
    
    let fetchquery = 'https://online-movie-database.p.rapidapi.com/auto-complete?q='.concat(query_format);

    fetch(fetchquery, options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        const list = response.d;

        list.map((item) => {
            const name = item.l;
            const poster = item.i;

            let url = "../../Package/images/dummy_poster.jpg";

            if(poster!= null){
                url = poster.imageUrl;
            }

            let type_;
            if(item.qid == undefined){
                type_ = "others";
            }else{
                type_ = item.qid;
            }

            let type = "others";
            if(type_== "tvSeries"){
                type = "tvSeries";
            }else if(type_ == "movie" || type_ == "tvMovie"){
                type = "movie";
            }

            let year = 'not Known';
            const year_ = item.y;
            if(year_!= null){
                year = item.y;
            }

            const imdb_id = item.id;
            let link = './info.html'.concat('?id=').concat(imdb_id);
            let imdb_link = 'https://www.imdb.com/name/'.concat(imdb_id);

            if(type == "movie"){
                const object = `<a href='${link}' target='_blank'><li><img src="${url}" height="445px"><h2>${name}</h2><p>year: ${year}</p></li></a>`;
                document.querySelector('.imdb .movies').innerHTML += object;
            }else if(type == "tvSeries"){
                const object = `<a href='${link}' target='_blank'><li><img src="${url}" height="445px"><h2>${name}</h2><p>year: ${year}</p></li></a>`;
                document.querySelector('.imdb .series').innerHTML += object;
            }else{
                const object = `<a href='${imdb_link}' target='_blank'><li><img src="${url}" height="445px"><h2>${name}</h2></li></a>`;
                document.querySelector('.imdb .others').innerHTML += object;
            }
             
        });
    
        if(document.querySelector('.imdb .movies').innerHTML == ""){
            document.querySelector('.imdb .movies').innerHTML += `<h3>&emsp;&emsp;--No results found</h3>--`;
        }
        if(document.querySelector('.imdb .series').innerHTML == ""){
            document.querySelector('.imdb .series').innerHTML += `<h3>&emsp;&emsp;--No results found</h3>--`;
        }
        if(document.querySelector('.imdb .others').innerHTML == ""){
            document.querySelector('.imdb .others').innerHTML += `<h3>&emsp;&emsp;--No results found</h3>--`;
        }

    })
    .catch(err => {
        console.error(err);
    }); 

    

}
