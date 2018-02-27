var visibleText = "Show Less";
var visibeText = "Show More";

$(document).ready(function(){
    //alert("jQuery ready");
    
    $(".info-box button").click(function(){
        $(this).toggleClass("visible");
        
        if($(this).hasClass("visible")){
            $(this).html(visibleText);
            
        }else{
            $(this).html(visibleText);
        }
       
        $(this).next().toggleClass("visible");
    });
});


