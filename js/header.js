$(function(){
    //导航栏定位功能
    // $(document).ready(function() {
    //     let navOffset=$("#header").offset().top;
    //     $(window).scroll(function(){
    //         let scrollPos=$(window).scrollTop();
    //         if(scrollPos >navOffset){
    //             $("#header").addClass("location");
    //         }else{
    //             $("#header").removeClass("location");
    //         }
    //     });

    // });




    //    缩屏后点击箭头下拉功能
    $("#jiantou").click(function () {
        $('.list_item').fadeToggle();
    });


//    二级菜单下拉功能
    $("#second_li").click(
        function(){
            $(".second").toggleClass("second_show");
        }
    );
})
