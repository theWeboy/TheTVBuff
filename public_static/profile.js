/**
 * Created by devdeepak on 25/7/17.
 */

var x = JSON.parse(localStorage.getItem('users'));
console.log(x);
var arr = x[0].tvid;
console.log(arr);
var usr = x[0].username;
console.log(usr);

let settings4 = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/tv/%7Btv_id%7D?language=en-US&api_key=0bd765d9b2a4077b0eba6180c5a20b0d",
    "method": "GET",
    "headers": {},
    "data": "{}"
};


$('#username').html(usr);

var output = '';

for( var i=0; i< arr.length; i++) {

    getMovie(arr[i]);

}


function getMovie(id){
    let samplesettings2 = {};
    samplesettings2 = settings4;
    samplesettings2.url = "https://api.themoviedb.org/3/tv/"+ id +"?language=en-US&api_key=0bd765d9b2a4077b0eba6180c5a20b0d";
    $.ajax(samplesettings2).done(function (response) {
        console.log(response);
        let movie = response;
        let sr = 'http://image.tmdb.org/t/p/w185';
        let output =`
        <div class="row">
          <div class="col-md-4">
            <img style="width: 100%" src="${sr + movie.poster_path}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2 style="font-family: 'Handlee', cursive;">${movie.name}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.genres[0].name}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.first_air_date}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.vote_average}</li>
              <li class="list-group-item"><strong>Created by:</strong> ${movie.created_by[0].name}</li>
              <li class="list-group-item"><strong>No. of seasons:</strong> ${movie.number_of_seasons}</li>
              <li class="list-group-item"><strong>Overview:</strong> ${movie.overview}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.overview}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="search.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;
        $('<div class="col-md-12" >'+output+'</div>').appendTo($('#favs'));

    });

}