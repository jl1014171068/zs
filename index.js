$(function() {
    var Index = {
        init() {
            this.navHover();
            this.handelSilder();
            var height = window.innerHeight - 70;
            if (document.body.clientWidth > 600) {
                $(".goTop").pin({ padding: { top: height, bottom: 10 }, containerSelector: "#ping" })
                $(".left-banner").pin({ padding: { bottom: 10 }, containerSelector: "#ping" })
                $(".right-banner").pin({ padding: { bottom: 10 }, containerSelector: "#ping" })
                $('.close').click(function(e) {
                    $(this).parent().hide()
                })
            } else {
                $(".goTop").pin({ padding: { bottom: 10 }, containerSelector: "#ping" })
            }
            this.carouselText();
        },
        carouselText() {
            function pub(val) {
                var text = $("#" + val + " .carousel-inner .active img")[0].dataset;
                console.log($("#" + val + " .carousel-inner .active img")[0])
                $("#" + val + " .text").text(text.text)
            }
            pub('carouselExampleIndicators');
            $("#carouselExampleIndicators").on('slid.bs.carousel', function() {
                pub('carouselExampleIndicators');
            })

            pub('carouselExampleIndicators2');
            $("#carouselExampleIndicators2").on('slid.bs.carousel', function() {
                pub('carouselExampleIndicators2');
            })

        },
        handelSilder() {
            var sliderNum = document.body.clientWidth > 800 ? 6 : document.body.clientWidth < 600 ? 1 : 3
            // 滚动
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: sliderNum,
                spaceBetween: 0,
                slidesPerGroup: sliderNum,
                loop: true,
                // slidesPerGroupSkip: 0,
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            // var sliderNum = document.body.clientWidth < 600 ? 2 : 4
            // $("#img").powerSlider({ handle: "left", sliderNum });
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