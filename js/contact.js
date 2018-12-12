$(function(){
    $(document).ready(function() {
        $(".relation_bottom_list>ul>li").hover(function() {
            $(this).addClass("font_h3");
        }, function() {
            $(this).removeClass("font_h3");
        });
    });
});
