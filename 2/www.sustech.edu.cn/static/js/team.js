$(function(){
    $(".searchlogo").click(function(event){
        event.stopPropagation();
        $('.searchBox').slideToggle('fast');
    });
    resizeWin();
    function resizeWin(){
        ww = $(window).width();
        h = $(window).height();
        v = $('.wap_bar').height();
        j = $('.site-header').height();
        console.log(j)


        $('.scroll_img').css('height', h-v);

        $('.s-home').css('height', h);
        $('#s-about1').css('height', $('#about').height()+'px');
    }
    $(window).resize(function(){
        resizeWin();
    });

    $('#menu-main-menu li a').click(function(event){
        event.stopPropagation();
    })
    $('#menu_toggle').click(function(e){
        $('html').addClass('js-overlay');
        $('html').removeClass('js-overlay1');
        e.stopPropagation();
    })
    $('.m_close').click(function(e){
        $('html').addClass('js-overlay1');
        $('html').removeClass('js-overlay');
        e.stopPropagation();
    });
    var modal = document.querySelector('.js');
    modal.addEventListener('click',outsiteClick);
    function outsiteClick(e){
        if(e.target == modal){
            $('html').addClass('js-overlay1');
            $('html').removeClass('js-overlay');
        }
    };
    $('#menu-main-menu>li').hover(function(){
        $(this).addClass("prosahover");
        $(this).find(".sub_menu1").removeClass('hide');
    },function(){
        if($(this).hasClass("prosahover")){
            $(this).removeClass("prosahover");
        }
        $(this).find(".sub_menu1").addClass('hide');
    });


    if ((screen.width < 768)) {
        /*回退机制*/
        $(".new-h a").click(function () {

            $('html').removeClass('js-overlay');

        });
        $("#dianji").click(function () {

            $('html').removeClass('js-overlay');

        });

        $(".sub_menu1 li a").click(function () {
            $('html').removeClass('js-overlay');


        });

        $(".vc_icon_element-icon").click(function () {

            $('html').removeClass('js-overlay');
          
        });
    }
 /*回退机制*/

    //底部微信
    $(".tc_wx").hover(function(){
        $(this).find(".wx_hide").show();
    },function(){
        $(this).find(".wx_hide").hide();
    });

    /* 滑动菜单 */
    $("#example-one").append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");

    $magicLine
        .width($(".secNav .cur").width())
        .css("left", $(".secNav .cur a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());

    $("#example-one li").find("a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();

        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });
    });


    $('#content-list a').click(function(){
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.content').find('.hot-main').eq(index).show().siblings().hide();
    })


});