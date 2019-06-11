///////////////////////////////
// Fix the Home Height
///////////////////////////////
$(function() {
    var setHomeBannerHeight = function(){
        var homeHeight= $(window).height();
        $('#height-fix').height(homeHeight);
    }

    setHomeBannerHeight();
});


/*=================================================================
            Load more
===================================================================*/

$(document).ready(function () {
    $("#loadPortfolio").click(function(event) {
        
        $.get("php/ajax_portfolio.html", function(data){
            $('#morePortfolio').append(data);
        });
        event.preventDefault();
        $(this).hide();
    }) ;
});

$(document).ready(function () {
    $("#loadGallery").click(function(event) {
        
        $.get("php/ajax_gallery.html", function(data){
            $('#moreGallery').append(data);
        });
        event.preventDefault();
        $(this).hide();
    }) ;
});


/* instagram feed */
$(function(){

    var userFeed = new Instafeed({
        get : 'user',
        userId : '12069150689',
        limit : 12,
        resolution : 'standard_resolution',
        accessToken : '',
        sortBy :'',
        template : ''
    });

    userFeed.run();

});