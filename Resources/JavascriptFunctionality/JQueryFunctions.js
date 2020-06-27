$(document).ready(function(){
    $("#input").on("keyup",function(){
        var inputValue = $(this).val().toLowerCase();
        $("#poemLists li a").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)
        });
    });
});