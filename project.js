$(document).ready(function () {
    for (var i = 1; i <= 151; i++) {
        var images = "<img class=pokemon-images src=https://pokeapi.co/media/img/"+i+".png>"
        $("#pokemon").append(images);
    }

});