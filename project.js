$(document).ready(function () {

    for (var i = 1; i <= 151; i++) {
        var images = "<img id="+i+" class=pokemon-images src=https://pokeapi.co/media/img/"+i+".png>"
        $("#pokemon").append(images);
    }

    $("img").on("click", function() {
        var id = $(this).attr("id");

        $.get("https://pokeapi.co/api/v2/pokemon/"+id+"/", function (res) {
            console.log(res);
            var name = "";
            name += "<h1>" + res.name + "</h1>";
            $("#pokemon-details").children().hide();
            $("#pokemon-details").append(name);
            $("#pokemon-details").append("<img id="+id+" class=pokedex-images src=https://pokeapi.co/media/img/"+id+".png>");
            var html_str = "";
            html_str += "<h4>Types</h4>";
            html_str += "<ul>"
            for (var i = 0; i < res.types.length; i++) {
                html_str += "<li>" + res.types[i].type.name + "</li>";
            }
            html_str += "</ul>";
            html_str += "<h4>Height<p>" + res.height + "</p></h4>"
            html_str += "<h4>Weight<p>" + res.weight + "</p></h4>"
            $("#pokemon-details").append(html_str);
        }, "json");

    });

});