var Index = {
    init() {
        this.navHover();
        this.handelSilder();
    },
    handelSilder() {
        // 滚动
        // $('.you').click(function () {
        //     nextscroll();
        // });
        // function nextscroll() {
        //     var vcon = $('.v_cont');
        //     var offset = $('.v_cont li').width() * -1;
        //     vcon.stop().animate({ marginLeft: offset }, 'slow', function () {
        //         var firstItem = $('.v_cont ul li').first();
        //         vcon.find('.flder').append(firstItem);
        //         $(this).css('margin-left', '0px');
        //     });
        // }
        // $('.zuo').click(function () {
        //     var vcon = $('.v_cont');
        //     var offset = $('.v_cont li').width() * -1;
        //     var lastItem = $('.v_cont ul li').last();
        //     vcon.find('.flder').prepend(lastItem);
        //     vcon.css('margin-left', offset);
        //     vcon.animate({ marginLeft: '0px' }, 'slow');
        // });
        //
        var sliderNum = document.body.clientWidth<600 ? 2 : 4
        $("#img").powerSlider({handle:"left",sliderNum});
        // $("#img").powerSlider({handle:"left",sliderNum:$('.sliderbox li').length || 4});
        // $(".img").powerSlider({ handle: "left", sliderNum: 4 });
        //$("#text").powerSlider();
        // $("#img").powerSlider({picNum:4,handle:"hide"});
        // $(".code h3 span").each(function(i) {
        //     $(this).click(function() {
        //         $(this).addClass("active").siblings().removeClass("active");
        //         $(".code pre").eq(i).show().siblings("pre").hide();
        //     })
        // })
    },
    navHover() {
        // tab划过切换--顶部nav
        $('#navTab >  li').mousemove(function() {
            var index = $(this).index();
            if (!$('#navTabContent > div').eq(index).length) return;
            $('#navTabContent > div').removeClass('show active');
            $('#navTabContent > div').eq(index).addClass('show active');
        });
    }
};