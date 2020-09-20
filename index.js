$(function() {
    var Index = {
        init() {
            this.navHover();
            this.handelSilder();
            this.domPin();
            this.carouselText();
        },
        domPin() {
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
        },
        carouselText() {
            function pub(val) {
                var text = $("#" + val + " .carousel-inner .active img")[0].dataset;
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
        },
        navHover() {

            function throttle(handler, wait) {
                var lastTime = 0;
                return function() {
                    var nowTime = new Date().getTime();
                    if (nowTime - lastTime > wait) {
                        handler.apply(this, arguments);
                        lastTime = nowTime;
                    }
                }
            }

            function liMouseOve(e) {
                var id = $(this).attr('data-id');
                $('#navTabContent > div').removeClass('show active');
                if (id && $(`#${id}`) && $(`#${id}`).length) $(`#${id}`).addClass('show active');
                else $('#nav-con1').addClass('show active');
            }
            $('#navTab >  li').on('mousemove', throttle(liMouseOve, 300))

            function mouseOut(e) {
                var el = $(e)[0].toElement;
                var flag = $(el).hasClass('hover-downlist') || $(el).closest('#navTabContent').length;
                // 离开的时候如果 目标元素 不为子集菜单，则隐藏显示搜索
                if (!flag) {
                    $('#navTabContent > div').removeClass('show active');
                    $('#nav-con1').addClass('show active');
                    return
                }
                // 如果离开时目标元素 为子集菜单，则监控全局判断
                function mouse(e) {
                    var el = $(e)[0].toElement;
                    var flag = $(el).hasClass('hover-downlist') || $(el).closest('#navTabContent').length;
                    var conFlag = $(el).closest('.navbar-expand-lg').length;
                    if(conFlag) {
                        $(document).off('mousemove', mouse);
                        return;
                    }
                    // 如果鼠标位置不为子集菜单，则隐藏，且显示搜索
                    if (!flag) {
                        $('#navTabContent > div').removeClass('show active');
                        $('#nav-con1').addClass('show active');
                        $(document).off('mousemove', mouse);
                    }
                }
                $(document).on('mousemove', throttle(mouse, 100));
            }
            $('#navTab >  li').on('mouseout', throttle(mouseOut, 300));
        },
        navHover1() {
            $('#navTab >  li').mousemove(function(e) {
                var id = $(this).attr('data-id')
                $('#navTabContent > div').removeClass('show active');
                $(`#${id}`).addClass('show active');
            })
            $('#navTab >  li').mouseout(function(e) {
                var el = $(e)[0].toElement;
                var flag = $(el).hasClass('hover-downlist')
                if (!flag) {
                    $('#navTabContent > div').removeClass('show active');
                    return
                }

                function throttle(handler, wait) {
                    var lastTime = 0;
                    return function() {
                        var nowTime = new Date().getTime();
                        if (nowTime - lastTime > wait) {
                            handler.apply(this, arguments);
                            lastTime = nowTime;
                        }
                    }
                }

                function mouse(e) {
                    var el = $(e)[0].toElement;
                    var flag = $(el).hasClass('hover-downlist') || $(el).closest('#navTabContent').length;
                    if (!flag) {
                        $('#navTabContent > div').removeClass('show active');
                        $(document).off('mousemove', mouse);
                    }
                }
                $(document).on('mousemove', throttle(mouse, 500));
            })
        }
    };
    Index.init();
});