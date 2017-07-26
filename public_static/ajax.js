/**
 * Created by Deepak on 22-07-2017.
 */
// // let settings = {
// //     "async": true,
// //     "crossDomain": true,
// //     "url": "https://api.themoviedb.org/3/tv/popular?page=1&language=en-US&api_key=0bd765d9b2a4077b0eba6180c5a20b0d",
// //     "method": "GET",
// //     "headers": {},
// //     "data": "{}"
// // };
// // let settings2 = {
// //     "async": true,
// //     "crossDomain": true,
// //     "url": "https://api.themoviedb.org/3/tv/%7Btv_id%7D?language=en-US&api_key=0bd765d9b2a4077b0eba6180c5a20b0d",
// //     "method": "GET",
// //     "headers": {},
// //     "data": "{}"
// // };
// //
// // let settings1 = {
// //     "async": true,
// //     "crossDomain": true,
// //     "url": "https://api.themoviedb.org/3/search/tv?page=1&query=&language=en-US&api_key=0bd765d9b2a4077b0eba6180c5a20b0d",
// //     "method": "GET",
// //     "headers": {},
// //     "data": "{}"
// // };
// $(document).ready(() => {
//     $('#searchForm').on('submit', (e) => {
//         let searchText = $('#searchText').val();
//         gettvs(searchText);
//         e.preventDefault();
//     });
// });
$('#sr').click(function () {
   window.alert("Please Sign Up with new account or login with existing account");
});
// $('#explore').click(function () {
//    window.location = 'explore.html';
// });
$('#signup').click(function () {
   window.location = 'signup_page.html';
});
$('#join').click(function () {
    window.location = 'signup_page.html';
});
// function gettvs(sr) {
//     console.log("sr is "+sr);
//     console.log("gettvs is called");
//     let samplesettings = {};
//     samplesettings = settings1;
//     samplesettings.url = "https://api.themoviedb.org/3/search/tv?page=1&query="+sr+"&language=en-US&api_key=0bd765d9b2a4077b0eba6180c5a20b0d";
//     console.log(samplesettings);
//     $.ajax(samplesettings).done(function (response) {
//         // console.log(response);
//         let movies = response.results;
//         console.log(movies);
//         let sr = 'http://image.tmdb.org/t/p/w185';
//         let output = '';
//         $.each(movies, function(index, movie){
//             if(movie.poster_path !== null){
//             output += `
//           <div class="col-md-3">
//             <div class="well text-center">
//               <img src="${sr + movie.poster_path}">
//               <h5 style="font-family: 'Handlee', cursive;">${movie.name}</h5>
//               <a onclick="movieSelected('${movie.id}','${movie.poster_path}')" class="btn btn-primary" href="#">Details</a>
//             </div>
//           </div>
//         `;}
//     });
//         $('#movies').html(output);
//     });
// }
//
// function movieSelected(id,path){
//     sessionStorage.setItem('movieId', id);
//     sessionStorage.setItem('path',path);
//     window.location = 'tv_single.html';
//     return false;
// }
//
// function getMovie(){
//     let movieId = sessionStorage.getItem('movieId');
//     let path1 = sessionStorage.getItem('path');
//     let samplesettings2 = {};
//     samplesettings2 = settings2;
//     samplesettings2.url = "https://api.themoviedb.org/3/tv/"+ movieId +"?language=en-US&api_key=0bd765d9b2a4077b0eba6180c5a20b0d";
//     $.ajax(settings2).done(function (response) {
//             console.log(response);
//             let movie = response;
//         let sr = 'http://image.tmdb.org/t/p/w185';
//             let output =`
//         <div class="row">
//           <div class="col-md-4">
//             <img src="${sr + path1}" class="thumbnail">
//           </div>
//           <div class="col-md-8">
//             <h2>${movie.name}</h2>
//             <ul class="list-group">
//               <li class="list-group-item"><strong>Genre:</strong> ${movie.genres[0].name}</li>
//               <li class="list-group-item"><strong>Released:</strong> ${movie.first_air_date}</li>
//               <li class="list-group-item"><strong>Rated:</strong> ${movie.vote_average}</li>
//               <li class="list-group-item"><strong>Created by:</strong> ${movie.created_by[0].name}</li>
//               <li class="list-group-item"><strong>No. of seasons:</strong> ${movie.number_of_seasons}</li>
//               <li class="list-group-item"><strong>Overview:</strong> ${movie.overview}</li>
//             </ul>
//           </div>
//         </div>
//         <div class="row">
//           <div class="well">
//             <h3>Plot</h3>
//             ${movie.overview}
//             <hr>
//             <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
//             <a href="search.html" class="btn btn-default">Go Back To Search</a>
//           </div>
//         </div>
//       `;
//
//             $('#movie').html(output);
//
//     });
//
// }

$('#submit').click(function () {
   window.location = 'newhome.html';
});

//
// 0
// :
// "w92"
// 1
// :
// "w154"
// 2
// :
// "w185"
// 3
// :
// "w342"
// 4
// :
// "w500"
// 5
// :
// "w780"
// 6
// :
// "original"
