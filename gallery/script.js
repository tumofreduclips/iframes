$(document).ready(function(){
    var slides = slidesData.files;
    var ind = 0;
    var slide = slides[ind];
    var path = slidesData.folder+"/"+slide;
    $("#img").css("background-image", 'url("'+path+'")');


    
    $("#rarrow").click(function(){
        ind++;
        slide = slides[ind];
        path = slidesData.folder+"/"+slide;
        $("#img").css("background-image", 'url("'+path+'")');
    });


    $("#larrow").click(function(){
        ind--;
        slide = slides[ind];
        path = slidesData.folder+"/"+slide;
        $("#img").css("background-image", 'url("'+path+'")');
    });

});
