
// VALIDATE FORM================================================================================
// $(".form-data").validate({
//     rules: {
//         name: {
//             required: true,
//             minlength:5
//         },
//         phone: {
//             required: true,
//             maxlength:10
//         },
//         email: {
//             required: true,
//         },
//         description: {
//             required: true,
//         },
//     },
//     messages:{
//         name: {
//             required: 'Vui lòng nhập đủ họ tên',
//             minlength: 5
//         },
//         phone: {
//             required:'Vui lòng đúng định dạng sdt',
//             minlength:1
//         },
//         email: {
//             required: 'Vui lòng nhập đúng định dạng email',
//         },
//         description: {
//             required: 'Vui lòng nhập dưới 200 kí tự',
//         },
//     }
// });
// END VALIDATE FORM================================================================================




// -------------------------------------------------------------------------------------------


// LOADING DEFAULT================================================================================
$('.is_loading').css('opacity','1')

$(document).ready(function () {

    // AMINATION===========================================================================
    // AOS.init();

    // SLIDER===========================================================================

    // HEADER CLICK AND SCROLL===========================================================================
    $('header .menu li a').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    })

    function goToByScroll(echo) {
        $('html,body').animate({
            scrollTop: $("." + echo).offset().top - 84
        }, 'slow');
    }


    $("header .menu li a").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr('link'));
    });


    // click to footer
    $(".btn-register-2").click(function (e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll($(this).attr('link'));
    });
});

// SCROLL TO SECTION===========================================================================
$(window).on('scroll', function () {
    var scrollDistance = $(window).scrollTop();

    $('header .menu').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
            $('li.active').removeClass('active');
            $('li').eq(i).addClass('active');
        }
    });
}).scroll();

var sections = $('.section')
    , nav = $('.timeline')
    , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

// TOGGLE MOBILE ICON===========================================================================
$('.navbar-toggler').click(function (e) {
    e.stopPropagation();
    if ($(this).closest('.taisun').find('header .menu').hasClass('active')) {
        $(this).closest('.taisun').find('header .menu').removeClass('active')
    }
    else {
        $(this).closest('.taisun').find('header .menu').addClass('active')
    }
})

// CLICK BODY AND REMOVE ACTIVE HEADER===========================================================================
$('body').click(function(e){
    $('.taisun .menu').removeClass('active')
})


$('.list-client .tab .title').click(function(){
    $('.list-client .tab').removeClass('show')
    $(this).closest('.tab').toggleClass('show')
})

// function readURL(input) {

//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
  
//       reader.onload = function(e) {
//         $('#blah').attr('src', e.target.result);
//         // $('#blah').css('max-width','170px')
//       }
  
//       reader.readAsDataURL(input.files[0]);
//     }
// }


// // $('#blah').hide() ;
// $('#imageFile').on("change", function(){ 
//     if(this){
//         readURL(this);
//     }
    
//  });

