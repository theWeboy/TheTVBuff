/**
 * Created by devdeepak on 25/7/17.
 */

$(function() {
    var x = [{"username":"sampleuser","tvid":[]}];
    localStorage.setItem('users', JSON.stringify(x));



    $('#submit').click(function(){
        var us = document.getElementById("username").value;
        console.log(us);

        var obj = {
            "username": us,
            "tvid"  :    []
        };
        var oldusers = JSON.parse(localStorage.getItem('users'));
        oldusers.unshift(obj);
        localStorage.setItem('users',JSON.stringify(oldusers));
        console.log("local storage after submit");
        console.log(localStorage);
        $.get({url: 'users/get',success: function(data){
            console.log(data);
        }});

        $.post( "users/post", {username:$('#username').val() ,email: $('#email').val(), password: $('#password').val()},function(data){
            console.log(data);

        })


    })

});