$(document).ready(function(){
    var slides = slidesData.files;
    var ind = 0;
    var slide = slides[ind];
    var path = slidesData.folder+"/"+slide;
    $("#img").css("background-image", 'url("'+path+'")');
    $("#number").html(1+"/"+slides.length);


    
    $("#rarrow, #img").click(function(){
        ind++ ;
        if(ind==slides.length){
            ind=0;
        }
        slide = slides[ind];
        path = slidesData.folder+"/"+slide;
        $("#img").css("background-image", 'url("'+path+'")');
        
        $("#number").html((ind+1)+"/"+slides.length);
    });

    $("#larrow").click(function(){
        ind--;
        if(ind==-1){
            ind=slides.length-1;
        }
        slide = slides[ind];
        path = slidesData.folder+"/"+slide;
        $("#img").css("background-image", 'url("'+path+'")');

        $("#number").html((ind+1)+"/"+slides.length);
    });


});
