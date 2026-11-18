$(function () {
    // 메뉴
    $("nav>ul>li").mouseenter(function () {
        $(".sub, .menubg").stop().fadeIn()
    })

    $("nav>ul>li").mouseleave(function () {
        $(".sub, .menubg").stop().fadeOut()
    })

    // 메뉴 키보드이벤트
    $("nav>ul>li").focusin(function () {
        $(".sub, .menubg").stop().fadeIn()
        $(this).addClass("on")
    })

    $("nav li li:last-child").focusout(function () {
        $("nav>ul>li").removeClass("on")
    })

    $("nav li:last-child li:last-child").focusout(function () {
        $(".sub, .menubg").stop().fadeOut()
    })

    // 슬라이드
    var i = 0;

    function slide() {
        if (i < 2) { i++ } else { i = 0 }
        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(i).fadeIn()
    }

    setInterval(slide, 2000)

    // 탭메뉴
    $(".tabmenu>li").click(function () {
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        a = $(this).index()

        $(".tabcon").hide()
        $(".tabcon").eq(a).show()

        return false
    })

    // 팝업
    $(".pp").click(function () {
        $(".popup").show()
    })

    $(".button").click(function () {
        $(".popup").hide()
    })
})