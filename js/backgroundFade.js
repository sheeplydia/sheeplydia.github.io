// $(window).scroll(function() {
//     var scrollTop = $(this).scrollTop();

//     $('#whiteBackground').css({
//         opacity: function() {
//         var elementHeight = $(this).height(),
//             opacity = ((.7 - (elementHeight - scrollTop) / elementHeight) * 1.7) + 0.07;
            
//         return $('#whiteBackground').css('background-color', 'rgba(255, 255, 255, ' + opacity + ')');
//         }
//     });
// });


$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if(window.screen.height < 900) {
        $('#whiteBackground').css({
            opacity: function() {
            var elementHeight = $(this).height(),
                opacity = ((.7 - (elementHeight - scrollTop) / elementHeight) * 2) + 0.1;
                
            return $('#whiteBackground').css('background-color', 'rgba(255, 255, 255, ' + opacity + ')');
            }
        });
    }
    else {
        $('#whiteBackground').css({
            opacity: function() {
            var elementHeight = $(this).height(),
                opacity = ((.7 - (elementHeight - scrollTop) / elementHeight) * 1.7) + 0.07;
                
            return $('#whiteBackground').css('background-color', 'rgba(255, 255, 255, ' + opacity + ')');
            }
        });
    }
});