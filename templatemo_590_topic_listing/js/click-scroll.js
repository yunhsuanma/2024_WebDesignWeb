//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5];
let hasScrolled = false; // 初始化為 false，表示尚未滾動過



$.each(sectionArray, function (index, value) {

    // Scroll 事件監聽      
    $(document).scroll(function () {
        var offsetSection = $('#' + 'section_' + value).offset().top - 75;
        var docScroll = $(document).scrollTop();
        var docScroll1 = docScroll + 1;

   
         // 滾動變化的邏輯
        if (docScroll1 >= offsetSection) {
            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
            $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
            $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
        }

    });
    

    // // 點擊事件監聽
    // $('.click-scroll').eq(index).click(function (e) {
    //     var offsetClick = $('#' + 'section_' + value).offset().top - 75;
    //     e.preventDefault();

    //     // 自加
    //     // 確認目標是否存在
    //     if (target.length) {
    //         var offsetClick = target.offset().top - navbarHeight;

    //         // 修正特殊區域的偏移量
    //         if (value === 4 || value === 5) {
    //             offsetClick -= 30; // 增加額外偏移修正
    //         }
    //         // 自加結束



    //         $('html, body').animate({
    //             'scrollTop': offsetClick
    //         }, 300)
        
    // });
    

});



$(document).ready(function () {
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});





