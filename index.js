$(function() {
    var Index = {
        init() {
            this.navHover();
            this.handelSilder();
            var height = window.innerHeight - 70;
            $(".goTop").pin({ padding: { top: height, bottom: 10, right:0 }, containerSelector: "#ping" })
            $(".left-banner").pin({ padding: {  bottom: 10 }, containerSelector: "#ping" })
            // $(".right-banner").pin({ padding: { bottom: 10 }, containerSelector: "#topNav" })
            $(".right-banner").pin({ padding: {bottom: 10 }, containerSelector: "#ping" })
            $('.close').click(function(e){
                $(this).parent().hide()
            })
        },

        handelSilder() {
            // 滚动
            var sliderNum = document.body.clientWidth < 600 ? 2 : 4
            $("#img").powerSlider({ handle: "left", sliderNum });
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
    Index.init();
});