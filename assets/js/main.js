// ON DOCUMENT READY
// -----------------------------------------------------------------------------
$(document).ready(function () {

    //$('#nav').smoothScroll(800);
    $('.navbar-inner').smoothScroll(800);

    // prettyPhoto Initialization
    $("a[rel^='prettyPhoto']").prettyPhoto();

    // isotope settings
    // cache container
    var $container = $('#gallery-grid');
    if ($container.length>0) {
        //
        // initialize isotope
        $container.isotope({
            // options...
            itemSelector : 'article',
            resizable: false,
            masonry: { columnWidth: $container.width() / 12 }
            //, layoutMode : 'fitRows'
        });
        //
        // update columnWidth on window resize
        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: { columnWidth: $container.width() / 12 }
            });
        });
        // filter items when filter link is clicked
        $('#filtrable a').click(function(){
            var selector = $(this).attr('data-filter');
            $container.isotope({ filter: selector });
            // mark current li
            $(this).parent().parent().find('.current').removeClass('current');
            $(this).parent().addClass('current');
            return false;
        });
        // add more items to portfolio
        $('.load-more-grid').click(function() {
            var count = $(this).attr('data-count');
            var $newEls = $(fakeElement2.getGroup(count));
            $container.isotope('insert', $newEls, function(){
                relocate();
            });
        });
        // //
        function relocate() {
            setTimeout("$('#gallery-grid').isotope('reLayout')",1000);
            $('.prettyPhoto').prettyPhoto();
        }
        $(window).load(function(){
            relocate();
        });
        $(window).resize(function(){
            relocate();
        });
    }

});
