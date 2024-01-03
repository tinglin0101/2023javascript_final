$(document).ready(function(){
    $(".ham").click(function (e) { 
        //e.preventDefault();
        $('body').stop().toggleClass('show');
        
    });
});
